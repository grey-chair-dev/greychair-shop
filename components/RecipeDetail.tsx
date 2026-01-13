
import React, { useState } from 'react';
import { MOCK_RECIPES } from './RecipesPage';
import { PRODUCTS } from './ShopPage';

interface RecipeDetailProps {
  recipeId: string;
  onBack: () => void;
  onProductClick: (id: number) => void;
}

const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1544787210-282ce437c093?auto=format&fit=crop&q=80&w=600";

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipeId, onBack, onProductClick }) => {
  const [isSaved, setIsSaved] = useState(false);
  const recipe = MOCK_RECIPES.find(r => r.id === recipeId);
  const tiedProduct = recipe?.productTieInId ? PRODUCTS.find(p => p.id === recipe.productTieInId) : null;

  if (!recipe) return <div className="pt-32 px-8 text-stone-500">Recipe not found.</div>;

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-5xl mx-auto recipe-container">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 no-print gap-4">
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-bold text-stone-400 hover:text-[#5B7B5C] transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Recipes
        </button>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={`px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
              isSaved ? 'bg-[#5B7B5C] border-[#5B7B5C] text-white' : 'border-stone-200 text-stone-500'
            }`}
          >
            {isSaved ? 'Saved' : 'Save'}
          </button>
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 rounded-full border border-stone-200 text-stone-500 text-[10px] font-bold uppercase tracking-widest"
          >
            Print
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-16 lg:gap-20">
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B7B5C]">{recipe.time}</span>
              <span className="text-stone-300">•</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{recipe.difficulty}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#2D3436] mb-6 leading-tight">
              {recipe.title}
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              {recipe.description}
            </p>
          </div>

          <section className="bg-white p-8 rounded-[32px] border border-stone-100 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D3436] mb-8 pb-4 border-b border-stone-100">Ingredients</h2>
            <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm text-stone-700 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B7B5C] mt-1.5 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#2D3436] mb-8 pb-4 border-b border-stone-100">Instructions</h2>
            <ol className="space-y-10">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-6">
                  <span className="text-3xl font-serif text-stone-200 leading-none">0{idx + 1}</span>
                  <p className="text-lg text-stone-600 font-light leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="no-print">
          <div className="sticky top-32 space-y-8">
            {tiedProduct && (
              <div 
                onClick={() => onProductClick(tiedProduct.id)}
                className="bg-white border border-stone-100 rounded-[32px] p-6 shadow-xl cursor-pointer group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-stone-100">
                  <img 
                    src={tiedProduct.imageUrl || DEFAULT_PLACEHOLDER} 
                    alt={tiedProduct.name} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = DEFAULT_PLACEHOLDER;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                </div>
                <h4 className="text-xl font-serif text-[#2D3436] mb-2 text-center">{tiedProduct.name}</h4>
                <p className="text-xs text-stone-500 text-center mb-6">The base for this recipe.</p>
                <button className="w-full py-4 bg-[#5B7B5C] text-white rounded-xl font-bold text-xs uppercase tracking-widest">
                  Shop Tea — {tiedProduct.price}
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RecipeDetail;
