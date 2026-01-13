
import React from 'react';

interface HeroProps {
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <div className="relative h-[80vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1920" 
          alt="Grey Chair Tea warm shop interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] mb-6 leading-tight">
            Real tea.<br/>Real people.<br/>Main Street.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-light">
            100+ loose-leaf blends and local pottery in downtown Batavia. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('visit-preview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-[#5B7B5C] text-white rounded-full text-center font-bold shadow-lg hover:bg-[#4a654b] transition-all"
            >
              Visit the Shop
            </button>
            <button 
              onClick={onShopClick}
              className="px-10 py-4 bg-white/90 backdrop-blur text-stone-700 border border-stone-200 rounded-full text-center font-bold hover:bg-white transition-all"
            >
              Shop Blends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
