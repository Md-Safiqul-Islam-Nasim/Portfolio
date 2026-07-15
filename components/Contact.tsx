import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionHeading from './SectionHeading';

const Contact: React.FC<{ id: string }> = ({ id }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <section id={id} className="py-24 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss your next project or potential collaboration opportunities."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-16 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          <div className="lg:col-span-2 bg-slate-950 p-12 text-slate-100 flex flex-col justify-between border-r border-slate-800">
            <div>
              <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
              <p className="text-slate-200 text-lg leading-relaxed mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-8">
                {[
                  { icon: <Mail />, label: "Email", value: PERSONAL_INFO.email, link: `mailto:${PERSONAL_INFO.email}` },
                  { icon: <Phone />, label: "Phone", value: PERSONAL_INFO.phone, link: `tel:${PERSONAL_INFO.phone}` },
                  { icon: <MapPin />, label: "Location", value: PERSONAL_INFO.location, link: "#" }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    className="flex items-center gap-6 group"
                  >
                    <div className="text-sky-500 group-hover:text-sky-400 transition-colors">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-300 block mb-1">{item.label}</span>
                      <span className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-slate-100 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors ${
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
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
