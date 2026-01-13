
import React from 'react';

const VisitSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=800" 
            alt="Grey Chair Tea sampling wall in Batavia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-serif text-[#2D3436]">120 Main St, Batavia, OH</p>
            </div>
            <a 
              href="https://maps.google.com?q=120+Main+St+Batavia+OH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#5B7B5C] text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-[#4a654b] transition-all"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <h2 className="text-4xl font-serif text-[#2D3436] mb-6">Visit us on Main St.</h2>
        <p className="text-lg text-stone-600 mb-10 leading-relaxed font-light">
          A stop on your downtown walk. Smell the collection, find a blend, and take a moment to rest.
        </p>
        
        <div className="space-y-4 mb-12">
          {[
            { days: 'Tue – Fri', time: '10 AM – 6 PM' },
            { days: 'Saturday', time: '9 AM – 5 PM' },
            { days: 'Sunday', time: '11 AM – 4 PM' }
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-stone-100">
              <span className="font-bold text-stone-400 uppercase text-[10px] tracking-widest">{row.days}</span>
              <span className="text-stone-800 font-serif text-xl">{row.time}</span>
            </div>
          ))}
        </div>

        <div className="p-6 bg-stone-50 rounded-3xl border border-stone-100">
          <h3 className="text-sm font-bold text-[#5B7B5C] uppercase tracking-widest mb-2">Parking</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Street parking is available right on Main Street, or use the nearby public lots in the historic village center.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitSection;
