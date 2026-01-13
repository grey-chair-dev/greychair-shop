
import React, { useState } from 'react';
import { getTeaRecommendation } from '../services/gemini';
import { TeaRecommendation } from '../types';

const TeaFinderAI: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [recommendation, setRecommendation] = useState<TeaRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    try {
      const result = await getTeaRecommendation(prompt);
      setRecommendation(result);
    } catch (error) {
      console.error("Search failed:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Search failed. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-10">
        <h2 className="text-4xl font-serif text-[#2D3436] mb-4">Tea Finder</h2>
        <p className="text-stone-500 font-light text-lg">
          Describe a flavor or mood for a recommendation.
        </p>
      </div>

      <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-12">
        <input 
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. 'Something spicy for a cold morning'..."
          className="w-full px-6 py-5 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#5B7B5C] transition-all text-stone-700"
          disabled={isLoading}
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-[#5B7B5C] text-white rounded-xl font-bold disabled:bg-stone-300"
        >
          {isLoading ? '...' : 'Find it'}
        </button>
      </form>

      {errorMessage && (
        <div className="max-w-xl mx-auto mb-10 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-left">
          <p className="text-sm font-semibold text-red-800 mb-1">Tea Finder error</p>
          <p className="text-sm text-red-700">{errorMessage}</p>
          {errorMessage.toLowerCase().includes("api key") && (
            <p className="text-xs text-red-700 mt-2">
              Add <span className="font-mono">VITE_GEMINI_API_KEY</span> to <span className="font-mono">greychair-shop/.env.local</span> and restart the dev server.
            </p>
          )}
        </div>
      )}

      {recommendation && (
        <div className="bg-[#5B7B5C]/5 p-8 rounded-[40px] text-left border border-[#5B7B5C]/10 animate-in fade-in duration-500">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#5B7B5C] mb-2">We suggest</p>
              <h3 className="text-3xl font-serif text-[#2D3436] mb-1">{recommendation.name}</h3>
              <p className="text-stone-400 text-sm italic mb-6">{recommendation.type}</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Brewing</p>
                  <p className="text-sm text-stone-700">{recommendation.steepingInstructions}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xl font-serif text-stone-700 leading-relaxed mb-8">
                "{recommendation.description}"
              </p>
              <div className="flex gap-4">
                <button className="flex-grow bg-[#5B7B5C] text-white py-4 rounded-full font-bold shadow-md hover:bg-[#4a654b] transition-all">
                  View Tea
                </button>
                <button 
                  onClick={() => setRecommendation(null)}
                  className="px-6 py-4 text-stone-400 hover:text-stone-600 font-bold transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeaFinderAI;