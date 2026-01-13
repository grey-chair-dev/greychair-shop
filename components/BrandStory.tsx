
import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif text-[#2D3436] mb-8 leading-tight">
        A quiet spot to slow down.
      </h2>
      <p className="text-xl text-stone-600 font-light leading-relaxed mb-10">
        We opened on Main Street to create a space where the clock slows down. No rush, no corporate talk—just fresh tea and a place to sit for a while.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <div className="h-px w-12 bg-stone-200"></div>
        <p className="text-serif italic text-stone-400">Founded in Batavia, Ohio</p>
        <div className="h-px w-12 bg-stone-200"></div>
      </div>
    </div>
  );
};

export default BrandStory;
