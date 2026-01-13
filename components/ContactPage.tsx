
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-20 text-center md:text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B7B5C] mb-4 block">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] mb-6">Ask a tea expert.</h1>
        <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
          Whether you have a question about a specific blend or you’re interested in hosting a book club at the shop, we’re here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <section className="bg-white p-8 md:p-12 rounded-[48px] border border-stone-100 shadow-sm relative overflow-hidden">
            {isSubmitted && (
              <div className="absolute inset-0 bg-[#5B7B5C] flex flex-col items-center justify-center text-center p-8 z-10 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">Note received!</h3>
                <p className="text-white/80 font-light">Thanks for reaching out. We'll get back to you soon.</p>
              </div>
            )}

            <h2 className="text-2xl font-serif text-[#2D3436] mb-8">Send us a note</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Hello..."
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#5B7B5C]/20 focus:border-[#5B7B5C] transition-all text-stone-700 font-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="you@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#5B7B5C]/20 focus:border-[#5B7B5C] transition-all text-stone-700 font-light"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 ml-1">How can we help?</label>
                <textarea 
                  id="message"
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Share your thoughts or questions here..."
                  className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#5B7B5C]/20 focus:border-[#5B7B5C] transition-all text-stone-700 font-light resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-[#5B7B5C] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-[#4a654b] transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Send Note
              </button>
            </form>
          </section>
        </div>

        {/* Contact Details & Info */}
        <aside className="lg:col-span-5 space-y-12">
          {/* Direct Details */}
          <section className="space-y-8">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">The Direct Line</h2>
              <div className="space-y-4">
                <a href="tel:+16305550123" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#5B7B5C]/5 rounded-full flex items-center justify-center text-[#5B7B5C] group-hover:bg-[#5B7B5C] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xl font-serif text-[#2D3436] group-hover:text-[#5B7B5C] transition-colors">(630) 555-0123</span>
                </a>
                <a href="mailto:hello@theteatree.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#5B7B5C]/5 rounded-full flex items-center justify-center text-[#5B7B5C] group-hover:bg-[#5B7B5C] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-serif text-[#2D3436] group-hover:text-[#5B7B5C] transition-colors">hello@theteatree.com</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">Join the Conversation</h2>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-3 px-6 py-3 bg-[#FDFCF8] border border-stone-200 rounded-2xl hover:border-[#5B7B5C] transition-all group">
                   <svg className="w-5 h-5 text-stone-400 group-hover:text-[#5B7B5C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073" />
                  </svg>
                  <span className="text-sm font-semibold text-stone-600 group-hover:text-[#2D3436]">Instagram</span>
                </a>
              </div>
            </div>
          </section>

          {/* Quick Hours Summary */}
          <section className="bg-stone-50 border border-stone-100 rounded-[40px] p-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D3436] mb-8 pb-4 border-b border-stone-200">Shop Hours</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Tue – Fri</span>
                <span className="text-stone-700 font-serif">10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Sat</span>
                <span className="text-stone-700 font-serif">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Sun</span>
                <span className="text-stone-700 font-serif">11:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between text-sm pt-2">
                <span className="text-stone-300 font-bold uppercase tracking-widest text-[10px]">Mon</span>
                <span className="text-stone-300 font-serif italic text-xs">Closed for rest</span>
              </div>
            </div>
            <p className="mt-8 text-[11px] text-stone-400 italic leading-relaxed">
              *We aim to reply to all digital notes within one shop day.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
