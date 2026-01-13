
import React from 'react';
import { PRODUCTS } from './ShopPage';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1544787210-282ce437c093?auto=format&fit=crop&q=80&w=800";

const PRODUCT_METADATA: Record<number, any> = {
  1: {
    story: "Bold and warming. A signature chai designed for slow mornings.",
    instructions: { temp: "212°F", time: "5 mins", amount: "1 tsp per 8oz" },
    ingredients: "Organic Assam Black Tea, Cardamom, Ginger, Cinnamon, Clove, Black Peppercorn.",
  },
  2: {
    story: "A delicate twist on a classic. Ceylon infused with organic bergamot and blue cornflower.",
    instructions: { temp: "208°F", time: "3 mins", amount: "1 tsp per 8oz" },
    ingredients: "Ceylon Black Tea, Organic Bergamot Oil, Blue Cornflower Petals.",
  },
  4: {
    story: "Hand-thrown by local artisans. Each piece is unique, featuring a river-stone glaze.",
    instructions: { temp: "Dishwasher Safe", time: "12oz", amount: "Microwave safe" },
    ingredients: "High-fire stoneware, Lead-free food-safe glaze.",
  }
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const product = PRODUCTS.find(p => p.id === productId);
  const meta = PRODUCT_METADATA[productId] || {
    story: "Hand-selected for quality and sourced with care.",
    instructions: { temp: "Variable", time: "As desired", amount: "To taste" },
    ingredients: "Sourced with care from our partners.",
  };

  if (!product) return <div className="pt-32 px-8">Product not found</div>;

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center text-sm font-bold text-stone-400 hover:text-[#5B7B5C] transition-colors mb-12"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Shop
      </button>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="sticky top-32">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-stone-100 shadow-xl">
            <img 
              src={product.imageUrl || DEFAULT_PLACEHOLDER} 
              alt={product.name} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = DEFAULT_PLACEHOLDER;
              }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <p className="text-[10px] text-[#5B7B5C] font-bold uppercase tracking-[0.2em] mb-3">{product.category}</p>
            <h1 className="text-5xl font-serif text-[#2D3436] mb-4 leading-tight">{product.name}</h1>
            <p className="text-2xl text-stone-600 font-light">{product.price}</p>
          </div>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D3436] mb-4">About</h2>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              {meta.story}
            </p>
          </section>

          <section className="bg-stone-50 p-8 rounded-[32px] border border-stone-100">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D3436] mb-6">Brewing</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Temp', val: meta.instructions.temp },
                { label: 'Time', val: meta.instructions.time },
                { label: 'Amount', val: meta.instructions.amount }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl shadow-sm">
                  <span className="block text-[9px] text-stone-400 uppercase font-bold mb-1">{item.label}</span>
                  <span className="text-sm font-bold text-stone-800">{item.val}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D3436] mb-4">Ingredients</h2>
            <p className="text-stone-500 font-light italic">
              {meta.ingredients}
            </p>
          </section>

          <div className="pt-4 space-y-4">
            <button className="w-full py-5 bg-[#5B7B5C] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-[#4a654b] transition-all">
              Add to Cart
            </button>
            <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest font-bold">
              Available for local pickup or shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
