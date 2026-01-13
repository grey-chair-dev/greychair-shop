
import React from 'react';

interface FooterProps {
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2D3436] text-white pt-16 pb-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_2fr] gap-12 pb-12 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">Grey Chair Tea</h2>
            <p className="text-stone-400 font-light leading-relaxed max-w-xs mb-8">
              Specialty tea in downtown Batavia, OH.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-6">Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#5B7B5C]">Home</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-[#5B7B5C]">Shop</button></li>
              <li><button onClick={() => onNavigate('recipes')} className="hover:text-[#5B7B5C]">Recipes</button></li>
              <li><button onClick={() => onNavigate('events')} className="hover:text-[#5B7B5C]">Events</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#5B7B5C]">Story</button></li>
              <li><button onClick={() => onNavigate('visit')} className="hover:text-[#5B7B5C]">Visit</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#5B7B5C]">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-6">Updates</h4>
            <p className="text-xs text-stone-500 mb-6">
              Occasional news on new blends and events.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-[#5B7B5C]"
              />
              <button className="bg-[#5B7B5C] px-4 py-2 rounded-xl text-sm font-bold">Join</button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-600">
          <p>© {new Date().getFullYear()} Grey Chair Tea.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
