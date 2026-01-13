
import React from 'react';
import { RecipeItem } from '../types';

export const MOCK_RECIPES: RecipeItem[] = [
  {
    id: 'r1',
    title: 'Batavia Fog Tea Latte',
    description: 'Our neighborhood take on a classic London Fog. Velvety, aromatic, and captures the soft morning mist of the Little Miami valley.',
    time: '8 mins',
    difficulty: 'Easy',
    imageUrl: 'https://images.pexels.com/photos/3649498/pexels-photo-3649498.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '2 tsp Batavia Fog Earl Grey',
      '4 oz Filtered water (208°F)',
      '4 oz Steamed oat or whole milk',
      '1 tsp Vanilla syrup (or to taste)',
      'A pinch of dried culinary lavender'
    ],
    instructions: [
      'Steep the Batavia Fog Earl Grey in the hot water for exactly 3 minutes. Do not squeeze the leaves.',
      'While steeping, steam or froth your milk until it reaches a thick, creamy consistency.',
      'Remove tea leaves and stir in the vanilla syrup.',
      'Pour the milk over the tea, holding back the foam with a spoon, then top with the remaining foam.',
      'Garnish with a tiny pinch of lavender for that valley-mist aroma.'
    ],
    productTieInId: 2
  },
  {
    id: 'r2',
    title: 'Iced Main Street Chai',
    description: 'A refreshing, spicy companion for your afternoon walk through the village. Bold spices balanced with crisp ice.',
    time: '15 mins',
    difficulty: 'Easy',
    imageUrl: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 tsp Main Street Chai',
      '6 oz Boiling water',
      '2 oz Condensed milk (or maple syrup for a lighter touch)',
      'Large ice cubes'
    ],
    instructions: [
      'Brew a strong concentrate by steeping the chai for 7 minutes in boiling water.',
      'Stir in your sweetener of choice while the concentrate is still hot.',
      'Allow the mixture to cool to room temperature.',
      'Pour over a tall glass filled with ice cubes and stir briskly.'
    ],
    productTieInId: 1
  },
  {
    id: 'r3',
    title: 'Honey Ginger Soother',
    description: 'A quiet evening ritual for when you need a moment of restorative calm. Perfectly features our local raw honey.',
    time: '10 mins',
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 tsp Meadow Mist Herbal',
      '1 tsp Raw Batavia Honey',
      '1 slice Fresh ginger root',
      'A squeeze of fresh lemon'
    ],
    instructions: [
      'Place the ginger slice and tea in your pot.',
      'Pour hot water (not boiling, around 190°F) and steep for 6 minutes.',
      'Strain into your favorite mug.',
      'Wait for the tea to cool slightly before stirring in the raw honey to preserve its natural enzymes.',
      'Add a squeeze of lemon and sip slowly.'
    ],
    productTieInId: 3
  }
];

interface RecipesPageProps {
  onRecipeSelect: (id: string) => void;
}

const RecipesPage: React.FC<RecipesPageProps> = ({ onRecipeSelect }) => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-20 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B7B5C] mb-4 block">The Kitchen Table</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] mb-6">Simple rituals.</h1>
        <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
          Master the art of the perfect steep with recipes designed for slow mornings and quiet afternoons in Batavia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MOCK_RECIPES.map(recipe => (
          <div 
            key={recipe.id} 
            onClick={() => onRecipeSelect(recipe.id)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-stone-100 mb-8 relative shadow-sm">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B7B5C]">{recipe.time}</span>
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center gap-3 mb-2">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{recipe.difficulty}</span>
              </div>
              <h3 className="text-3xl font-serif text-[#2D3436] mb-4 group-hover:text-[#5B7B5C] transition-colors">{recipe.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed line-clamp-2">
                {recipe.description}
              </p>
              <button className="mt-6 text-[#5B7B5C] font-semibold text-sm underline underline-offset-8 decoration-2 hover:text-[#4a654b] transition-all">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
