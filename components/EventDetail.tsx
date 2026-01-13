
import React, { useState } from 'react';
import { MOCK_EVENTS } from './EventsSection';

interface EventDetailProps {
  eventId: string;
  onBack: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId, onBack }) => {
  const [remindMe, setRemindMe] = useState(false);
  const event = MOCK_EVENTS.find(e => e.id === eventId);

  if (!event) return <div className="pt-32 px-8 text-stone-500">Event not found.</div>;

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center text-sm font-medium text-stone-400 hover:text-[#5B7B5C] transition-colors mb-10 group focus:outline-none"
      >
        <svg className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Gatherings
      </button>

      <div className="flex flex-col gap-12">
        {/* Title & Metadata */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#5B7B5C]/10 text-[#5B7B5C] text-[10px] font-bold uppercase tracking-widest rounded-full">
              {event.category}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
              Downtown Batavia
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] leading-tight">
            {event.title}
          </h1>
        </div>

        {/* Hero Imagery */}
        <div className="aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden bg-stone-100 shadow-sm border border-stone-100">
          <img 
            src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1400" 
            alt="Warm community tea gathering" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid md:grid-cols-[1fr_320px] gap-12 lg:gap-20">
          <div className="space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">The Gathering</h2>
              <div className="text-xl text-stone-600 font-light leading-relaxed space-y-6">
                <p>{event.description}</p>
                <p>
                  At The Tea Tree, we believe the best conversations happen over a shared pot. This session is designed to be slow, quiet, and deeply informative.
                </p>
              </div>
            </section>

            {/* What to Expect */}
            <section className="bg-stone-50 border border-stone-100 rounded-[32px] p-8 md:p-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D3436] mb-8">What to Expect</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="text-[#5B7B5C] text-xs font-bold">1</span>
                  </div>
                  <p className="text-stone-600 font-light leading-snug">
                    <strong className="font-medium text-stone-800">Sensory Introduction:</strong> We start by smelling the dry leaves and discussing their origin in the high mountains.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="text-[#5B7B5C] text-xs font-bold">2</span>
                  </div>
                  <p className="text-stone-600 font-light leading-snug">
                    <strong className="font-medium text-stone-800">Guided Steeping:</strong> You’ll have your own set of tools to practice the ritual of multiple short infusions.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="text-[#5B7B5C] text-xs font-bold">3</span>
                  </div>
                  <p className="text-stone-600 font-light leading-snug">
                    <strong className="font-medium text-stone-800">Local Pairings:</strong> Light, seasonal snacks from our neighbors at local Batavia bakeries.
                  </p>
                </li>
              </ul>
            </section>
          </div>

          {/* Booking Card */}
          <aside className="relative">
            <div className="sticky top-32 bg-white border border-stone-100 rounded-[32px] p-8 shadow-xl shadow-[#5B7B5C]/5">
              <div className="space-y-6 mb-8 pb-8 border-b border-stone-50">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">Date & Time</span>
                  <p className="text-xl font-serif text-[#2D3436]">{event.date}</p>
                  <p className="text-sm text-stone-500">{event.time}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">Participation</span>
                  <p className="text-xl font-serif text-[#2D3436]">$25.00</p>
                  <p className="text-xs text-stone-400">Materials and snacks included.</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full py-5 bg-[#5B7B5C] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-[#4a654b] transition-all transform hover:-translate-y-0.5 active:scale-[0.98]">
                  Save My Spot
                </button>
                
                {/* Email Reminder Opt-in */}
                <div className="pt-4 border-t border-stone-50">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input 
                        type="checkbox" 
                        checked={remindMe}
                        onChange={(e) => setRemindMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border rounded-md transition-colors ${remindMe ? 'bg-[#5B7B5C] border-[#5B7B5C]' : 'bg-white border-stone-200'}`}>
                        {remindMe && (
                          <svg className="w-4 h-4 text-white mx-auto mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-stone-500 leading-tight group-hover:text-stone-700 transition-colors">
                      Notify me about future {event.category.toLowerCase()} gatherings
                    </span>
                  </label>
                </div>
              </div>

              <p className="mt-8 text-center text-[10px] text-stone-300 font-bold uppercase tracking-widest">
                8 Spots left of 12
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
