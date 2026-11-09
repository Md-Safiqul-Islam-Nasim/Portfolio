import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PERSONAL_INFO, SOCIALS } from '../constants';
import SectionHeader, { Accent } from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Magnetic from './ui/Magnetic';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

const Contact: React.FC<{ id: string }> = ({ id }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setStatusMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = (formData.get('firstName') as string) || '';
    const lastName = (formData.get('lastName') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';

    if (!accessKey || accessKey === 'PLACEHOLDER_API_KEY') {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`.trim());
      const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setFormState('sent');
      setStatusMessage('Opened your email client to send the message.');
      return;
    }

    try {
      formData.append('access_key', accessKey);
      formData.append('from_name', `${firstName} ${lastName}`.trim());
      formData.append('subject', `New Portfolio Contact: ${firstName} ${lastName}`.trim());

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setFormState('sent');
        setStatusMessage('Thank you! Your message has been sent.');
        form.reset();
      } else {
        setFormState('error');
        setStatusMessage(data.message || 'Error sending message. Please email directly.');
      }
    } catch {
      setFormState('error');
      setStatusMessage('Network error. Please email directly.');
    }
  };

  return (
    <section id={id} aria-labelledby="contact-title" className="relative overflow-hidden border-t border-white/[0.06] bg-ink-2/40 py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(76,141,255,0.16),rgba(155,107,255,0.1)_45%,transparent_70%)] blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="contact-title"
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s build something <Accent>meaningful together.</Accent>
            </>
          }
          description="Open to Backend / Software Engineer roles, API architecture consulting, and engineering collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Direct channels */}
          <Reveal className="lg:col-span-5">
            <div className="surface flex h-full flex-col justify-between rounded-[28px] p-6 sm:p-9">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-soft">
                  <span className="h-2 w-2 rounded-full bg-mint" />
                  Responding within 24 hours
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-fg">Direct contact</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Prefer direct email or a quick call? Reach out anytime through any of the channels below.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-ink/50 p-4">
                    <a href={SOCIALS.email} className="flex min-w-0 items-center gap-3.5 group">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-electric-soft">
                        <Mail size={17} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Email</div>
                        <div className="truncate text-sm font-medium text-fg group-hover:text-electric-soft">
                          {PERSONAL_INFO.email}
                        </div>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="icon-btn h-9 w-9 shrink-0"
                    >
                      {copied ? <Check size={15} className="text-mint" /> : <Copy size={15} />}
                    </button>
                  </div>

                  <a
                    href={SOCIALS.phone}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-ink/50 p-4 transition-colors hover:border-white/15"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-electric-soft">
                      <Phone size={17} />
                    </span>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Phone</div>
                      <div className="text-sm font-medium text-fg">{PERSONAL_INFO.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-ink/50 p-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-electric-soft">
                      <MapPin size={17} />
                    </span>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Location</div>
                      <div className="text-sm font-medium text-fg">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Profiles</div>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-4 py-2 text-xs"
                  >
                    <GithubIcon size={15} /> GitHub <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-4 py-2 text-xs"
                  >
                    <LinkedinIcon size={14} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="surface rounded-[28px] p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-xs font-medium text-soft">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="John"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-xs font-medium text-soft">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Doe"
                    className="field"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-soft">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="field"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-medium text-soft">
                  Project details or message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the system you're building, timeline, or role..."
                  className="field resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  role="status"
                  className={`mt-5 rounded-2xl border px-4 py-3 text-xs font-medium ${
                    formState === 'sent'
                      ? 'border-mint/30 bg-mint/10 text-mint'
                      : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-faint">
                  Or email directly at{' '}
                  <a href={SOCIALS.email} className="text-soft underline decoration-white/20 underline-offset-4 hover:text-fg">
                    {PERSONAL_INFO.email}
                  </a>
                </p>

                <Magnetic>
                  <button type="submit" disabled={formState === 'sending'} className="btn-primary">
                    {formState === 'idle' && (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                    {formState === 'sending' && 'Sending...'}
                    {formState === 'sent' && 'Message Sent'}
                    {formState === 'error' && (
                      <>
                        Retry Sending <Send size={15} />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
