
import React from 'react';
import { MOCK_EVENTS } from './EventsSection';

interface EventsPageProps {
  onEventSelect: (id: string) => void;
}

const PAST_EVENTS = [
  { id: 'p1', title: 'Summer Solstice Steep', date: 'June 21', category: 'Social' },
  { id: 'p2', title: 'Iced Tea Mixology', date: 'July 15', category: 'Workshop' },
  { id: 'p3', title: 'Poetry & Pu-erh', date: 'August 02', category: 'Social' }
];

const EventsPage: React.FC<EventsPageProps> = ({ onEventSelect }) => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] mb-6">Batavia Gatherings</h1>
        <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
          From focused workshops to open socials, the shop is a space to learn, share, and slow down together.
        </p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-20">
        {/* Upcoming List */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#5B7B5C] mb-10 pb-4 border-b border-stone-100">Upcoming This Month</h2>
          <div className="space-y-8">
            {MOCK_EVENTS.map(event => {
              const [dayName, datePart] = event.date.split(', ');
              return (
                <div 
                  key={event.id} 
                  onClick={() => onEventSelect(event.id)}
                  className="group flex flex-col sm:flex-row gap-8 p-8 rounded-[32px] bg-white border border-stone-100 hover:border-[#5B7B5C]/20 hover:shadow-xl hover:shadow-[#5B7B5C]/5 transition-all cursor-pointer"
                >
                  <div className="sm:w-24 flex-shrink-0 text-center flex flex-col items-center justify-center p-4 bg-[#5B7B5C]/5 rounded-2xl group-hover:bg-[#5B7B5C] group-hover:text-white transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-1 opacity-60">{dayName.slice(0, 3)}</span>
                    <span className="text-3xl font-serif font-bold">{datePart.split(' ')[1]}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest block mt-1 opacity-60">{datePart.split(' ')[0]}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B7B5C]">{event.category}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{event.time}</span>
                    </div>
                    <h3 className="text-3xl font-serif text-[#2D3436] mb-3 group-hover:text-[#5B7B5C] transition-colors">{event.title}</h3>
                    <p className="text-stone-500 font-light leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex items-center sm:justify-end">
                    <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center text-[#5B7B5C] group-hover:bg-[#5B7B5C] group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Past Archive */}
        <aside>
          <div className="sticky top-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400 mb-10 pb-4 border-b border-stone-100">Past Gatherings</h2>
            <div className="space-y-6">
              {PAST_EVENTS.map(event => (
                <div key={event.id} className="flex items-center justify-between group cursor-default">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-1">{event.date}</p>
                    <h4 className="text-xl font-serif text-stone-500 group-hover:text-stone-800 transition-colors">{event.title}</h4>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-stone-300 px-2 py-1 border border-stone-100 rounded">
                    {event.category}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-stone-50 rounded-[32px] border border-stone-100">
              <h3 className="text-xl font-serif text-[#2D3436] mb-4">Host an Event?</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                Our space is available for local book clubs, art circles, and small team retreats.
              </p>
              <button className="text-sm font-bold text-[#5B7B5C] hover:underline decoration-2 underline-offset-4">
                Inquire about the space
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventsPage;
