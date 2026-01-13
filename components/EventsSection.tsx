
import React from 'react';
import { EventItem } from '../types';

export const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Oolong Tasting',
    date: 'Saturday, Oct 14',
    time: '6:30 PM — 8:00 PM',
    description: 'An intimate, hands-on session exploring high-mountain oolongs and traditional brewing methods.',
    category: 'Tasting'
  },
  {
    id: '2',
    title: 'Artists Spotlight',
    date: 'Friday, Oct 21',
    time: '5:00 PM',
    description: 'Evening tea and conversation while browsing work from local Batavia creators.',
    category: 'Social'
  },
  {
    id: '3',
    title: 'Herbal Workshop',
    date: 'Thursday, Oct 26',
    time: '6:00 PM',
    description: 'Learn to blend your own evening tea using our botanical library.',
    category: 'Workshop'
  }
];

interface EventsSectionProps {
  onEventSelect: (id: string) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ onEventSelect }) => {
  const featured = MOCK_EVENTS[0];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D3436]">Events</h2>
        </div>
        <p className="mt-4 md:mt-0 text-stone-500 font-light max-w-xs md:text-right">
          Regular tastings and workshops to learn more about tea.
        </p>
      </div>

      <div 
        onClick={() => onEventSelect(featured.id)}
        className="bg-white rounded-[48px] overflow-hidden border border-stone-100 group transition-all hover:shadow-xl cursor-pointer"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5 relative overflow-hidden h-64 md:h-auto">
            <img src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1000" alt="Community tea tasting at The Tea Tree" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          </div>
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-[#2D3436]">{featured.date}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{featured.time}</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#5B7B5C]">{featured.category}</span>
            </div>
            <h3 className="text-4xl font-serif text-[#2D3436] mb-4 leading-tight">{featured.title}</h3>
            <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">{featured.description}</p>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#5B7B5C] text-white rounded-2xl font-bold shadow-md hover:bg-[#4a654b] transition-all">
              RSVP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
