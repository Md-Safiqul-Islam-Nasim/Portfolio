import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionHeading from './SectionHeading';

const Contact: React.FC<{ id: string }> = ({ id }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setStatusMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!accessKey) {
      // Fallback: Open mailto link if key is not configured yet
      const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`);
      const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      setFormState('sent');
      setStatusMessage('Opened mail client to send message!');
      return;
    }

    try {
      formData.append("access_key", accessKey);
      formData.append("from_name", `${firstName} ${lastName}`);
      formData.append("subject", `New Portfolio Contact: ${firstName} ${lastName}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('sent');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        form.reset();
      } else {
        setFormState('error');
        setStatusMessage(data.message || 'Error sending message. Please try emailing directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setFormState('error');
      setStatusMessage('Network error. Please email directly.');
    }
  };

  return (
    <section id={id} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss your next project or potential collaboration opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12 mt-10 sm:mt-16 bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          <div className="lg:col-span-2 bg-slate-950 p-6 sm:p-8 lg:p-12 text-slate-100 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-6 sm:gap-8">
                {[
                  { icon: <Mail />, label: "Email", value: PERSONAL_INFO.email, link: `mailto:${PERSONAL_INFO.email}` },
                  { icon: <Phone />, label: "Phone", value: PERSONAL_INFO.phone, link: `tel:${PERSONAL_INFO.phone}` },
                  { icon: <MapPin />, label: "Location", value: PERSONAL_INFO.location, link: "#" }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    className="flex items-start sm:items-center gap-4 sm:gap-6 group min-w-0"
                  >
                    <div className="text-sky-500 group-hover:text-sky-400 transition-colors shrink-0 mt-1 sm:mt-0">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 22 })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs sm:text-sm font-medium text-slate-400 block mb-0.5">{item.label}</span>
                      <span className="text-sm sm:text-base md:text-lg font-bold text-slate-200 group-hover:text-white transition-colors break-all break-word-mobile">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100 text-sm sm:text-base"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100 text-sm sm:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100 text-sm sm:text-base"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-300">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100 text-sm sm:text-base resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`p-3 rounded-xl text-xs sm:text-sm font-medium ${
                  formState === 'sent' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}>
                  {statusMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={formState === 'sending'}
                className={`w-full py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all text-sm sm:text-base ${
                  formState === 'sent' 
                    ? 'bg-emerald-500 text-white cursor-default' 
                    : 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20'
                }`}
              >
                {formState === 'idle' && (
                  <>Send Message <Send size={18} /></>
                )}
                {formState === 'sending' && 'Sending...'}
                {formState === 'sent' && 'Message Sent!'}
                {formState === 'error' && (
                  <>Retry Sending <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
