
import React from 'react';

interface AboutPageProps {
  onVisitClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onVisitClick }) => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-24">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B7B5C] mb-4 block">The Heart of Main St.</span>
        <h1 className="text-5xl md:text-8xl font-serif text-[#2D3436] mb-12 leading-tight max-w-4xl">
          A place to pause, pour, and stay a while.
        </h1>
        <div className="aspect-[21/9] rounded-[48px] overflow-hidden bg-stone-100 shadow-sm relative">
           <img 
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1920" 
            alt="Interior of Grey Chair Tea shop" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Main Content */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">The Beginning</h2>
            <div className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed space-y-8">
              <p>
                Grey Chair Tea didn’t start as a grand vision to change the world. It started with a simple realization that Main Street needed a place to catch its breath.
              </p>
              <p>
                We wanted a corner of Batavia where the clock slowed down. A place where "fast" isn’t the goal, and "more" isn’t the answer. We found that in tea—a drink that demands a few minutes of your time just to exist.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">Our Philosophy</h2>
            <div className="text-lg text-stone-600 font-light leading-relaxed space-y-6">
              <p>
                We aren't a corporate brand. We're your neighbors. When we source a new Oolong or partner with an Ohio valley potter, it's because we actually use these things in our own homes. 
              </p>
              <p>
                We believe in the power of the "Sampling Wall"—a physical experience where you can smell, touch, and learn about tea without pressure. Our experts are here to guide, not to sell.
              </p>
            </div>
          </section>

          <section className="bg-[#5B7B5C]/5 p-12 rounded-[48px] border border-[#5B7B5C]/10">
            <h2 className="text-3xl font-serif text-[#2D3436] mb-6">Who we’re for.</h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="font-serif text-xl mb-3">The Quiet Readers</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">Find a corner, order a pot, and lose yourself in a chapter. We’ll keep the water hot.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">The Curious Tasters</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">New to loose-leaf? Perfect. Let's start with a sample and find your flavor profile together.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">The Busy Neighbors</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">On your way to the river? Grab a fresh brew to-go and carry a moment of calm with you.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">The Artisans</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">Connect with regional makers whose pottery and crafts line our shelves.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-5">
          <div className="sticky top-32 space-y-12">
            <div className="bg-white border border-stone-100 rounded-[40px] p-10 shadow-xl shadow-[#5B7B5C]/5 text-center">
              <div className="w-20 h-20 bg-[#FDFCF8] rounded-full flex items-center justify-center mx-auto mb-6 border border-stone-50">
                 <svg className="w-10 h-10 text-[#5B7B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </div>
              <h3 className="text-3xl font-serif text-[#2D3436] mb-4">Visit Main St.</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-8">
                History is better felt than read. Come see our 100+ blends in person and feel the warmth of our shop.
              </p>
              <button 
                onClick={onVisitClick}
                className="w-full py-5 bg-[#5B7B5C] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-[#4a654b] transition-all transform hover:-translate-y-0.5"
              >
                Plan Your Visit
              </button>
            </div>

            <div className="p-10 border border-stone-100 rounded-[40px] text-center">
               <p className="text-sm text-stone-400 italic font-light leading-relaxed">
                 "A Batavia staple. The kind of place you walk into and immediately feel your shoulders drop an inch."
               </p>
               <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#5B7B5C]">Local Regular</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AboutPage;
