'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import SocialLinks from './SocialLinks';
import { ScrollReveal, TypeInEyebrow } from './MotionPrimitives';
import { PROFILE } from '@/data/portfolio';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || '';
const RATE_STORAGE_KEY = 'dp_contact_tx_v1';
const COOLDOWN_MS = 60_000;
const WINDOW_MS = 3_600_000;
const MAX_PER_HOUR = 3;
const MIN_INTERACTION_MS = 2_500;

function readRecentSubmissions(): number[] {
  try {
    const raw = window.localStorage.getItem(RATE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    const cutoff = Date.now() - WINDOW_MS;
    return parsed.filter((ts): ts is number => typeof ts === 'number' && ts > cutoff);
  } catch {
    return [];
  }
}

function recordSubmission(ts: number): void {
  try {
    const recent = readRecentSubmissions();
    recent.push(ts);
    window.localStorage.setItem(RATE_STORAGE_KEY, JSON.stringify(recent));
  } catch {
    // Ignore storage errors in restricted browsing modes
  }
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const firstInteractionRef = useRef<number | null>(null);
  const lastDigestRef = useRef<string>('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [cooldownSec, setCooldownSec] = useState(0);

  useEffect(() => {
    const syncCooldown = () => {
      const recent = readRecentSubmissions();
      const latest = recent[recent.length - 1];
      if (!latest) {
        setCooldownSec(0);
        return;
      }
      const remaining = Math.ceil((latest + COOLDOWN_MS - Date.now()) / 1000);
      setCooldownSec(remaining > 0 ? remaining : 0);
    };

    syncCooldown();
    const timer = setInterval(syncCooldown, 1000);
    return () => clearInterval(timer);
  }, []);

  const markInteraction = () => {
    if (!firstInteractionRef.current) {
      firstInteractionRef.current = Date.now();
    }
  };

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1800);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || !WEB3FORMS_KEY || status === 'submitting') return;

    const formData = new FormData(formRef.current);

    // 1. Official Web3Forms botcheck honeypot (silent fake success for bots)
    if (formData.get('botcheck') === 'on') {
      setStatus('success');
      setFeedback('Message sent successfully! I will get back to you soon.');
      formRef.current.reset();
      return;
    }

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();

    // 2. Minimum human interaction timing check (blocks instant script auto-fills)
    const elapsed = firstInteractionRef.current ? Date.now() - firstInteractionRef.current : 0;
    if (elapsed < MIN_INTERACTION_MS) {
      setStatus('error');
      setFeedback('Please take a brief moment to complete your message before submitting.');
      return;
    }

    // 3. Cooldown & hourly burst rate limit (stops continuous repeat messaging)
    const recent = readRecentSubmissions();
    const latest = recent[recent.length - 1];
    if (latest && Date.now() - latest < COOLDOWN_MS) {
      const waitSec = Math.ceil((latest + COOLDOWN_MS - Date.now()) / 1000);
      setCooldownSec(waitSec);
      setStatus('error');
      setFeedback(`Please wait ${waitSec}s before sending another message.`);
      return;
    }
    if (recent.length >= MAX_PER_HOUR) {
      setStatus('error');
      setFeedback(`Hourly message limit reached. For urgent inquiries, email ${PROFILE.email} directly.`);
      return;
    }

    // 4. Content sanity & duplicate / URL-flood guard
    if (name.length < 2 || subject.length < 3 || message.length < 10) {
      setStatus('error');
      setFeedback('Please enter a valid name, subject, and a message of at least 10 characters.');
      return;
    }
    const urlCount = (message.match(/https?:\/\/|www\./gi) || []).length;
    if (urlCount >= 3) {
      setStatus('error');
      setFeedback('Too many links in message. Please share details in plain text or email directly.');
      return;
    }
    const digest = `${email.toLowerCase()}|${subject.toLowerCase()}|${message}`;
    if (digest === lastDigestRef.current) {
      setStatus('error');
      setFeedback('This exact message was already sent.');
      return;
    }

    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: `${PROFILE.name} Portfolio`,
          replyto: email,
          name,
          email,
          subject,
          message,
          botcheck: false,
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (result.success) {
        const now = Date.now();
        recordSubmission(now);
        lastDigestRef.current = digest;
        firstInteractionRef.current = null;
        setCooldownSec(Math.ceil(COOLDOWN_MS / 1000));
        setStatus('success');
        setFeedback('Message sent successfully! I will get back to you soon.');
        formRef.current.reset();
      } else {
        setStatus('error');
        setFeedback(result.message || 'Failed to submit. Please try again or email directly.');
      }
    } catch {
      setStatus('error');
      setFeedback('A network error occurred. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="pt-10 pb-16 sm:pt-12 sm:pb-20 safe-x max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column — Exact reference layout lifted cleanly in single view */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <TypeInEyebrow text="Contact" />

            <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight text-ink-primary leading-[1.1]">
              Get in <span className="italic text-accent">Touch</span>
              <br />
              Let’s Build Quality
              <br />
              Digital Experiences
            </h2>

            <p className="text-ink-secondary text-sm sm:text-[15px] leading-relaxed max-w-md">
              Helping businesses deliver reliable, user-friendly, and high-performing web &amp; mobile applications through complete quality assurance and testing solutions.
            </p>

            <ul className="flex flex-col gap-3 pt-1">
              <li className="flex items-center gap-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="min-h-[44px] inline-flex items-center gap-3.5 text-sm sm:text-[15px] font-medium text-ink-primary hover:text-accent transition-colors break-all"
                >
                  <Mail size={18} className="text-accent shrink-0" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('email', PROFILE.email)}
                  aria-label="Copy email address"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[10px] text-ink-muted hover:text-accent cursor-pointer transition-colors"
                >
                  {copiedId === 'email' ? (
                    <Check size={15} aria-hidden="true" />
                  ) : (
                    <Copy size={15} aria-hidden="true" />
                  )}
                </button>
              </li>

              <li className="flex items-center gap-2">
                <a
                  href={PROFILE.phoneHref}
                  className="min-h-[44px] inline-flex items-center gap-3.5 text-sm sm:text-[15px] font-medium text-ink-primary hover:text-accent transition-colors"
                >
                  <Phone size={18} className="text-accent shrink-0" aria-hidden="true" />
                  <span>{PROFILE.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('phone', PROFILE.phone)}
                  aria-label="Copy phone number"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[10px] text-ink-muted hover:text-accent cursor-pointer transition-colors"
                >
                  {copiedId === 'phone' ? (
                    <Check size={15} aria-hidden="true" />
                  ) : (
                    <Copy size={15} aria-hidden="true" />
                  )}
                </button>
              </li>

              <li className="flex items-center gap-3.5 text-sm sm:text-[15px] font-medium text-ink-primary min-h-[44px]">
                <MapPin size={18} className="text-accent shrink-0" aria-hidden="true" />
                <span>Ahmedabad, Gujarat</span>
              </li>
            </ul>

            <SocialLinks
              variant="contact"
              compactIds={['github', 'linkedin', 'whatsapp']}
            />
          </div>

          {/* Right Column — Clean Single-Column Form Card matching reference */}
          <div className="lg:col-span-6 w-full">
            {!WEB3FORMS_KEY ? (
              <div className="glass-panel rounded-2xl p-8 md:p-10 space-y-5">
                <div className="inline-flex items-center gap-2 mono-meta text-xs uppercase tracking-wider text-accent">
                  <AlertCircle size={16} aria-hidden="true" />
                  <span>Direct Contact Mode</span>
                </div>
                <h3 className="font-serif text-2xl text-ink-primary">
                  Contact Form Temporarily Unavailable
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Online form submission is currently unconfigured in this environment. Reach out directly via email and I will respond promptly.
                </p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="min-h-[44px] w-full py-3.5 px-6 rounded-lg bg-accent text-accent-ink font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
                >
                  <Mail size={16} aria-hidden="true" />
                  <span>Email {PROFILE.shortName}</span>
                </a>
              </div>
            ) : status === 'success' ? (
              <div className="glass-panel rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[380px]">
                <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center text-accent">
                  <Send size={28} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-3xl text-ink-primary">Message Sent!</h3>
                <p className="text-sm text-ink-secondary max-w-sm leading-relaxed">
                  Thank you for reaching out. I have received your message and will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="min-h-[44px] px-5 py-2.5 rounded-lg bg-surface-2 border border-border-strong text-xs mono-meta uppercase tracking-wider text-ink-primary hover:text-accent cursor-pointer transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-panel rounded-2xl p-7 sm:p-9 md:p-10 flex flex-col gap-4"
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={80}
                    onFocus={markInteraction}
                    placeholder="Your Name"
                    className="min-h-[48px] w-full rounded-lg bg-surface-1 border border-border-strong px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={120}
                    onFocus={markInteraction}
                    placeholder="Your Email"
                    className="min-h-[48px] w-full rounded-lg bg-surface-1 border border-border-strong px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    maxLength={140}
                    onFocus={markInteraction}
                    placeholder="Subject"
                    className="min-h-[48px] w-full rounded-lg bg-surface-1 border border-border-strong px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={2000}
                    onFocus={markInteraction}
                    placeholder="Message"
                    className="min-h-[132px] w-full rounded-lg bg-surface-1 border border-border-strong px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || cooldownSec > 0}
                  className="mt-1 min-h-[48px] w-full py-3.5 px-6 rounded-lg bg-accent text-accent-ink font-bold text-sm tracking-wide inline-flex items-center justify-center gap-2 hover:bg-accent-hover transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={15} aria-hidden="true" />
                  <span>
                    {status === 'submitting'
                      ? 'Sending...'
                      : cooldownSec > 0
                        ? `Wait ${cooldownSec}s to send again`
                        : 'Submit Message'}
                  </span>
                </button>

                {feedback && status === 'error' && (
                  <p
                    role="status"
                    className="inline-flex items-center justify-center gap-2 text-xs mono-meta text-danger pt-1"
                  >
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{feedback}</span>
                  </p>
                )}

                {status === 'idle' && (
                  <p className="sr-only" aria-live="polite">
                    Ready to send message
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
