
import React from 'react';

const VisitPage: React.FC = () => {
  const HOURS = [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday', time: '10:00 AM — 6:00 PM' },
    { days: 'Wednesday', time: '10:00 AM — 6:00 PM' },
    { days: 'Thursday', time: '10:00 AM — 6:00 PM' },
    { days: 'Friday', time: '10:00 AM — 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM — 5:00 PM' },
    { days: 'Sunday', time: '11:00 AM — 4:00 PM' }
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-20 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B7B5C] mb-4 block">Visit the Shop</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] mb-6">Slow down on Main St.</h1>
        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
          The best way to experience our blends is in person. Come smell the sampling wall and find your perfect ritual.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-start">
        {/* Logistics & Visuals */}
        <div className="space-y-16">
          {/* Main Visual */}
          <div className="aspect-video rounded-[48px] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=1200" 
              alt="Grey Chair Tea shop interior and sampling wall" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Practical Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white p-8 rounded-[32px] border border-stone-100 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">Location</h2>
              <address className="not-italic">
                <p className="text-2xl font-serif text-[#2D3436] mb-2">120 Main Street</p>
                <p className="text-stone-500 font-light">Batavia, OH 45103</p>
                <p className="text-stone-400 text-sm mt-1">Historic Village Center</p>
              </address>
              <a 
                href="https://maps.google.com?q=120+Main+St+Batavia+OH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-8 text-[#5B7B5C] font-semibold hover:underline decoration-2 underline-offset-4"
              >
                Open in Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </section>

            <section className="bg-[#5B7B5C]/5 p-8 rounded-[32px] border border-[#5B7B5C]/10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#5B7B5C] mb-6">Parking Tip</h2>
              <p className="text-stone-600 font-light leading-relaxed mb-4">
                Street parking is plentiful right on Main Street in front of our door. 
              </p>
              <p className="text-stone-600 font-light leading-relaxed">
                If the street is full during a village event, the public lot behind the courthouse is just a short, pleasant walk away.
              </p>
            </section>
          </div>

          {/* Neighborhood Context */}
          <section className="p-10 border border-stone-100 rounded-[48px] bg-stone-50/50">
             <h2 className="text-3xl font-serif text-[#2D3436] mb-6">While you're here...</h2>
             <p className="text-lg text-stone-500 font-light mb-8 max-w-xl">
               Make an afternoon of it. Batavia is a hidden gem in the Little Miami River valley.
             </p>
             <div className="grid sm:grid-cols-2 gap-6">
               <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-[#5B7B5C] mt-2 flex-shrink-0"></div>
                 <div>
                   <p className="font-serif text-lg text-stone-800">Little Miami Riverwalk</p>
                   <p className="text-sm text-stone-400">Perfect for a scenic walk through the village with a tea to-go.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-[#5B7B5C] mt-2 flex-shrink-0"></div>
                 <div>
                   <p className="font-serif text-lg text-stone-800">East Fork State Park</p>
                   <p className="text-sm text-stone-400">Just minutes away for a full day in nature.</p>
                 </div>
               </div>
             </div>
          </section>
        </div>

        {/* Sidebar Hours */}
        <aside className="sticky top-32">
          <div className="bg-white border border-stone-100 rounded-[40px] p-10 shadow-xl shadow-[#5B7B5C]/5">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D3436] mb-10 text-center">Open for Gathering</h2>
            <div className="space-y-4">
              {HOURS.map((h, i) => (
                <div key={i} className={`flex justify-between items-center py-4 ${i !== HOURS.length - 1 ? 'border-b border-stone-50' : ''}`}>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${h.time === 'Closed' ? 'text-stone-300' : 'text-stone-400'}`}>
                    {h.days}
                  </span>
                  <span className={`font-serif text-xl ${h.time === 'Closed' ? 'text-stone-300' : 'text-stone-800'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => window.open('https://maps.google.com?q=120+Main+St+Batavia+OH', '_blank')}
              className="w-full mt-12 py-5 bg-[#5B7B5C] text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-[#4a654b] transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Get Directions
            </button>
            <p className="mt-4 text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest">
              Located at 120 Main St
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VisitPage;
