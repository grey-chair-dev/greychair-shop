
import React, { useState } from 'react';
import { ShopItem } from '../types';

type Category = 'All' | 'Tea' | 'Gifts' | 'Ingredients';

const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1544787210-282ce437c093?auto=format&fit=crop&q=80&w=600";

export const PRODUCTS: ShopItem[] = [
  { id: 1, name: 'Main Street Chai', price: '$14.00', category: 'Tea', imageUrl: 'https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Batavia Fog Earl Grey', price: '$12.00', category: 'Tea', imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Raw Batavia Honey', price: '$16.00', category: 'Ingredients', imageUrl: 'https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Hand-Thrown Mug', price: '$32.00', category: 'Gifts', imageUrl: 'https://images.pexels.com/photos/7525713/pexels-photo-7525713.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Meadow Mist Herbal', price: '$14.00', category: 'Tea', imageUrl: 'https://images.pexels.com/photos/11769696/pexels-photo-11769696.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Ceylon Cinnamon Sticks', price: '$9.00', category: 'Ingredients', imageUrl: 'https://images.pexels.com/photos/8450126/pexels-photo-8450126.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

interface ShopPageProps {
  onProductSelect: (id: number) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#2D3436] mb-4">Tea & Gifts</h1>
          <p className="text-stone-500 font-light text-lg max-w-lg">
            Small-batch blends and local wares shipped from downtown Batavia, OH.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {(['All', 'Tea', 'Gifts', 'Ingredients'] as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-[#5B7B5C] text-white shadow-md' : 'bg-stone-50 text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map(product => (
          <div key={product.id} className="group flex flex-col cursor-pointer" onClick={() => onProductSelect(product.id)}>
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-stone-100 mb-6 relative">
              <img 
                src={product.imageUrl || DEFAULT_PLACEHOLDER} 
                alt={product.name} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = DEFAULT_PLACEHOLDER;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <button className="absolute bottom-6 left-6 right-6 bg-white/95 py-4 rounded-2xl text-[#2D3436] text-sm font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl">
                View Product
              </button>
            </div>
            <div>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">{product.category}</p>
              <h3 className="text-2xl font-serif text-[#2D3436] mb-1 group-hover:text-[#5B7B5C] transition-colors">{product.name}</h3>
              <p className="text-stone-600 font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
