
import React from 'react';

interface ShopPreviewProps {
  onShopClick: () => void;
}

const COLLECTIONS = [
  { 
    name: 'Tea Blends', 
    count: '45 Varieties', 
    img: 'https://images.pexels.com/photos/165228/pexels-photo-165228.jpeg?auto=compress&cs=tinysrgb&w=800' 
  },
  { 
    name: 'Herbal Steeps', 
    count: '12 Blends', 
    img: 'https://images.pexels.com/photos/11769696/pexels-photo-11769696.jpeg?auto=compress&cs=tinysrgb&w=800' 
  },
  { 
    name: 'Local Pottery', 
    count: 'Ohio River Valley Makers', 
    img: 'https://images.pexels.com/photos/7525713/pexels-photo-7525713.jpeg?auto=compress&cs=tinysrgb&w=800' 
  }
];

const ShopPreview: React.FC<ShopPreviewProps> = ({ onShopClick }) => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#2D3436] mb-4">Tea for home.</h2>
        <p className="text-stone-600 font-light max-w-2xl mx-auto text-lg">
          Loose-leaf blends and handcrafted wares shipped from downtown Batavia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {COLLECTIONS.map((col, idx) => (
          <div key={idx} onClick={onShopClick} className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-stone-100 mb-6 relative">
              <img 
                src={col.img} 
                alt={col.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">{col.count}</p>
                <h3 className="text-3xl font-serif text-white">{col.name}</h3>
              </div>
            </div>
            <button className="text-[#5B7B5C] font-bold text-sm hover:underline underline-offset-4">
              Browse
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={onShopClick}
          className="px-12 py-4 bg-[#5B7B5C] text-white font-bold rounded-full shadow-lg hover:bg-[#4a654b] transition-all"
        >
          Shop All
        </button>
      </div>
    </div>
  );
};

export default ShopPreview;
