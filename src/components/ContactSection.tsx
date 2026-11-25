'use client';

import { useState, useRef, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { PROFILE } from '@/data/portfolio';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || '';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || !WEB3FORMS_KEY) return;

    const formData = new FormData(formRef.current);

    // Honeypot check: silently ignore automated bot fills
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
        setFeedback('Message delivered. I will respond within one business day.');
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
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="bento-glass rounded-3xl p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start scroll-reveal">
        {/* Left CTA copy */}
        <div className="lg:col-span-5 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            03 // Initiate Collaboration
          </p>
          <h2 className="section-display font-bold uppercase text-ink-primary">
            Ship With Confidence.
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
            Looking for a dedicated QA specialist to audit a product release, stabilize regression suites, or join an engineering team? Let’s connect.
          </p>

          <ul className="space-y-4 pt-2 font-mono text-xs sm:text-sm">
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-3 text-ink-primary hover:text-accent transition-colors break-all"
              >
                <Mail size={16} className="text-accent shrink-0" aria-hidden="true" />
                <span>{PROFILE.email}</span>
              </a>
            </li>
            <li>
              <a
                href={PROFILE.phoneHref}
                className="inline-flex items-center gap-3 text-ink-primary hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent shrink-0" aria-hidden="true" />
                <span>{PROFILE.phone}</span>
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-ink-secondary">
              <MapPin size={16} className="text-secondary shrink-0" aria-hidden="true" />
              <span>{PROFILE.location}</span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 w-full">
          {!WEB3FORMS_KEY ? (
            <div className="rounded-2xl bg-surface-2/85 border border-border-strong p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-secondary">
                <AlertCircle size={16} aria-hidden="true" />
                <span>Direct Contact Mode</span>
              </div>
              <h3 className="text-xl font-bold text-ink-primary">
                Contact Form Temporarily Unavailable
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Online form submission is currently unconfigured in this environment. Reach out directly via email and I will respond promptly.
              </p>
              <MagneticButton
                as="a"
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-ink font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-hover transition-colors"
              >
                <Mail size={15} aria-hidden="true" />
                <span>Email {PROFILE.shortName}</span>
              </MagneticButton>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl bg-surface-2/85 border border-border p-6 sm:p-8 space-y-5"
            >
              {/* Visually hidden honeypot field */}
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
                    className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-canvas/80 border border-border-strong px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl bg-canvas/80 border border-border-strong px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="QA Audit / Full-Time Role / Automation Consultation"
                  className="w-full rounded-xl bg-canvas/80 border border-border-strong px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-wider text-ink-secondary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Share project scope, timeline, or role details..."
                  className="w-full rounded-xl bg-canvas/80 border border-border-strong px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent focus:outline-none resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-accent-ink font-mono text-xs font-semibold uppercase tracking-[0.14em] hover:bg-accent-hover transition-colors disabled:opacity-60 cursor-pointer"
                >
                  <Send size={14} aria-hidden="true" />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </MagneticButton>

                {feedback && (
                  <p
                    role="status"
                    className={`inline-flex items-center gap-2 font-mono text-xs ${
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
    </section>
  );
}

