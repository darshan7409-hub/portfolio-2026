'use client';

import { useState, useRef, type FormEvent } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  MessageSquare,
} from 'lucide-react';
import GlassPanel from './GlassPanel';
import MagneticButton from './MagneticButton';
import { ScrollReveal, TypeInEyebrow } from './MotionPrimitives';
import { PROFILE } from '@/data/portfolio';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || '';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

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
    if (!formRef.current || !WEB3FORMS_KEY) return;

    const formData = new FormData(formRef.current);

    if (String(formData.get('website') || '').trim().length > 0) {
      setStatus('success');
      setFeedback('Message received. Thank you for reaching out.');
      formRef.current.reset();
      return;
    }

    formData.append('access_key', WEB3FORMS_KEY);
    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (result.success) {
        setStatus('success');
        setFeedback('Message delivered. I will respond within 24 hours.');
        formRef.current.reset();
      } else {
        setStatus('error');
        setFeedback(result.message || 'Unable to send message right now. Please email directly.');
      }
    } catch {
      setStatus('error');
      setFeedback('Network error while sending. Please reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 safe-x max-w-7xl mx-auto">
      <ScrollReveal>
        <GlassPanel className="p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Editorial CTA */}
            <div className="lg:col-span-5 space-y-6">
              <TypeInEyebrow text="06 // Initiate Collaboration" />
              <h2 className="section-display font-normal text-ink-primary">
                Let’s build something that ships clean.
              </h2>
              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                Looking for a QA specialist to audit a product release, build regression gates, or join your engineering team?
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-accent-muted border border-accent/25 mono-meta text-xs text-accent">
                <Clock size={14} aria-hidden="true" />
                <span>{PROFILE.responseSignal}</span>
              </div>

              <ul className="space-y-3 pt-2 mono-meta text-xs sm:text-sm">
                <li className="flex items-center justify-between gap-2 glass-panel !rounded-[12px] px-3.5 py-2">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="min-h-[44px] inline-flex items-center gap-2.5 text-ink-primary hover:text-accent transition-colors break-all"
                  >
                    <Mail size={16} className="text-accent shrink-0" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', PROFILE.email)}
                    aria-label="Copy email address"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[8px] text-ink-muted hover:text-accent cursor-pointer"
                  >
                    {copiedId === 'email' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                  </button>
                </li>

                <li className="flex items-center justify-between gap-2 glass-panel !rounded-[12px] px-3.5 py-2">
                  <a
                    href={PROFILE.phoneHref}
                    className="min-h-[44px] inline-flex items-center gap-2.5 text-ink-primary hover:text-accent transition-colors"
                  >
                    <Phone size={16} className="text-accent shrink-0" aria-hidden="true" />
                    <span>{PROFILE.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('phone', PROFILE.phone)}
                    aria-label="Copy phone number"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[8px] text-ink-muted hover:text-accent cursor-pointer"
                  >
                    {copiedId === 'phone' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                  </button>
                </li>

                <li className="flex items-center justify-between gap-2 glass-panel !rounded-[12px] px-3.5 py-2">
                  <a
                    href={PROFILE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2.5 text-ink-primary hover:text-accent transition-colors"
                  >
                    <MessageSquare size={16} className="text-accent shrink-0" aria-hidden="true" />
                    <span>WhatsApp Direct</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-ink-muted text-xs pr-2">
                    <MapPin size={13} aria-hidden="true" />
                    Ahmedabad
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Glass Form */}
            <div className="lg:col-span-7 w-full">
              {!WEB3FORMS_KEY ? (
                <div className="glass-panel !rounded-[16px] p-6 sm:p-8 space-y-4">
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
                  <MagneticButton
                    as="a"
                    href={`mailto:${PROFILE.email}`}
                    className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-[12px] bg-accent text-accent-ink mono-meta text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
                  >
                    <Mail size={15} aria-hidden="true" />
                    <span>Email {PROFILE.shortName}</span>
                  </MagneticButton>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="glass-panel !rounded-[16px] p-6 sm:p-8 space-y-5"
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
                  >
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block mono-meta text-xs uppercase tracking-wider text-ink-secondary"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="min-h-[44px] w-full rounded-[10px] bg-surface-1/80 border border-border-strong px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block mono-meta text-xs uppercase tracking-wider text-ink-secondary"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="min-h-[44px] w-full rounded-[10px] bg-surface-1/80 border border-border-strong px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-subject"
                      className="block mono-meta text-xs uppercase tracking-wider text-ink-secondary"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="QA Audit / Full-Time Role / Automation Consultation"
                      className="min-h-[44px] w-full rounded-[10px] bg-surface-1/80 border border-border-strong px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block mono-meta text-xs uppercase tracking-wider text-ink-secondary"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Share project scope, timeline, or role details..."
                      className="min-h-[112px] w-full rounded-[10px] bg-surface-1/80 border border-border-strong px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none resize-y transition-colors"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <MagneticButton
                      as="button"
                      type="submit"
                      disabled={status === 'submitting'}
                      className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-[12px] bg-accent text-accent-ink mono-meta text-xs font-bold uppercase tracking-[0.12em] hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_0_4px_var(--token-accent-muted)] transition-all duration-200 disabled:opacity-60 cursor-pointer"
                    >
                      <Send size={14} aria-hidden="true" />
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    </MagneticButton>

                    {feedback && (
                      <p
                        role="status"
                        className={`inline-flex items-center gap-2 mono-meta text-xs ${
                          status === 'success' ? 'text-success' : 'text-danger'
                        }`}
                      >
                        {status === 'success' ? (
                          <CheckCircle2 size={14} aria-hidden="true" />
                        ) : (
                          <AlertCircle size={14} aria-hidden="true" />
                        )}
                        <span>{feedback}</span>
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </GlassPanel>
      </ScrollReveal>
    </section>
  );
}
