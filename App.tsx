
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisitSection from './components/VisitSection';
import EventsSection from './components/EventsSection';
import ShopPreview from './components/ShopPreview';
import TeaFinderAI from './components/TeaFinderAI';
import BrandStory from './components/BrandStory';
import ShopPage from './components/ShopPage';
import ProductDetail from './components/ProductDetail';
import EventsPage from './components/EventsPage';
import EventDetail from './components/EventDetail';
import VisitPage from './components/VisitPage';
import AboutPage from './components/AboutPage';
import RecipesPage from './components/RecipesPage';
import RecipeDetail from './components/RecipeDetail';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'product' | 'events' | 'event-detail' | 'visit' | 'about' | 'recipes' | 'recipe-detail' | 'contact'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      // Show sticky bar on mobile after scrolling 400px
      if (window.innerWidth < 1024) {
        setShowStickyBar(window.scrollY > 400);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView, selectedProductId, selectedEventId, selectedRecipeId]);

  const navigateTo = (view: any, id: any = null) => {
    setCurrentView(view);
    if (view === 'product') setSelectedProductId(id);
    if (view === 'event-detail') setSelectedEventId(id);
    if (view === 'recipe-detail') setSelectedRecipeId(id);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <section id="home">
              <Hero onShopClick={() => navigateTo('shop')} />
            </section>
            
            <section id="visit-preview" className="py-20 px-4 md:px-8 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-100 pb-8">
                  <h2 className="text-4xl md:text-5xl font-serif text-[#2D3436]">Come say hello.</h2>
                  <button 
                    onClick={() => navigateTo('visit')}
                    className="text-[#5B7B5C] font-semibold text-sm underline underline-offset-8 decoration-2 hover:text-[#4a654b] transition-all mt-4 md:mt-0"
                  >
                    View Store Hours & Details
                  </button>
                </div>
                <VisitSection />
              </div>
            </section>

            <section id="brand" className="py-20 px-4 md:px-8 bg-[#FDFCF8]">
              <div className="max-w-4xl mx-auto text-center">
                <BrandStory />
              </div>
            </section>

            <section id="events" className="py-20 px-4 md:px-8 bg-[#F5F1EA]">
              <div className="max-w-6xl mx-auto">
                <EventsSection onEventSelect={(id) => navigateTo('event-detail', id)} />
              </div>
            </section>

            <section id="concierge" className="py-20 px-4 md:px-8 bg-white border-y border-stone-100">
              <div className="max-w-3xl mx-auto">
                <TeaFinderAI />
              </div>
            </section>

            <section id="shop-preview" className="py-20 px-4 md:px-8 bg-[#FDFCF8]">
              <div className="max-w-6xl mx-auto">
                <ShopPreview onShopClick={() => navigateTo('shop')} />
              </div>
            </section>
          </>
        );
      case 'shop':
        return <ShopPage onProductSelect={(id) => navigateTo('product', id)} />;
      case 'product':
        return selectedProductId ? (
          <ProductDetail 
            productId={selectedProductId} 
            onBack={() => navigateTo('shop')} 
          />
        ) : <ShopPage onProductSelect={(id) => navigateTo('product', id)} />;
      case 'events':
        return <EventsPage onEventSelect={(id) => navigateTo('event-detail', id)} />;
      case 'event-detail':
        return selectedEventId ? (
          <EventDetail 
            eventId={selectedEventId} 
            onBack={() => navigateTo('events')} 
          />
        ) : <EventsPage onEventSelect={(id) => navigateTo('event-detail', id)} />;
      case 'visit':
        return <VisitPage />;
      case 'about':
        return <AboutPage onVisitClick={() => navigateTo('visit')} />;
      case 'recipes':
        return <RecipesPage onRecipeSelect={(id) => navigateTo('recipe-detail', id)} />;
      case 'recipe-detail':
        return selectedRecipeId ? (
          <RecipeDetail 
            recipeId={selectedRecipeId} 
            onBack={() => navigateTo('recipes')}
            onProductClick={(id) => navigateTo('product', id)}
          />
        ) : <RecipesPage onRecipeSelect={(id) => navigateTo('recipe-detail', id)} />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView === 'home' ? 'home' : (currentView === 'events' ? 'events' : (currentView === 'visit' ? 'visit' : (currentView === 'about' ? 'about' : (currentView === 'recipes' ? 'recipes' : (currentView === 'contact' ? 'contact' : 'shop')))))} 
        onNavigate={navigateTo} 
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Sticky Mobile CTA Bar - Updated to match screenshot */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50 animate-in slide-in-from-bottom duration-500">
          <div className="bg-[#2D3436] text-white rounded-[20px] p-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5">
            <div className="flex flex-col pl-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B8D6C] font-bold mb-0.5">Visit Us</span>
              <span className="text-sm font-medium text-white/90">Open until 6:00 PM</span>
            </div>
            <button 
              onClick={() => navigateTo('visit')}
              className="bg-[#5B7B5C] text-white px-6 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-lg active:bg-[#4a654b] transition-all"
            >
              Directions
            </button>
          </div>
        </div>
      )}

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
