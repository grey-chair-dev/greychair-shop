
export interface TeaRecommendation {
  name: string;
  type: string;
  description: string;
  steepingInstructions: string;
  pairing: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: 'Workshop' | 'Social' | 'Tasting';
}

export interface ShopItem {
  id: number;
  name: string;
  price: string;
  category: string;
  imageUrl: string;
}

export interface RecipeItem {
  id: string;
  title: string;
  description: string;
  time: string;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  productTieInId?: number; // Links to the product ID in ShopPage
}
