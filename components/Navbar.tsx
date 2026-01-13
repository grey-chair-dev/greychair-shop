
import React, { useState } from 'react';

interface NavbarProps {
  currentView: 'home' | 'shop' | 'events' | 'visit' | 'about' | 'recipes' | 'contact';
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: any) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const navLinks: { label: string; view: typeof currentView }[] = [
    { label: 'Our Story', view: 'about' },
    { label: 'Recipes', view: 'recipes' },
    { label: 'Shop', view: 'shop' },
    { label: 'Events', view: 'events' },
    { label: 'Visit', view: 'visit' },
  ];

  return (
    <nav className="fixed w-full z-[60] bg-[#FDFCF8] border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative z-50">
        <button 
          onClick={() => handleNav('home')} 
          className="flex flex-col text-left focus:outline-none group"
        >
          <span className="text-2xl font-serif font-semibold tracking-tight text-[#2D3436] group-hover:text-[#5B7B5C] transition-colors">Grey Chair Tea</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 -mt-1 font-bold">Batavia, Ohio</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10 text-sm font-medium text-stone-500">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNav(link.view)}
              className={`relative py-2 transition-colors hover:text-[#5B7B5C] ${
                currentView === link.view ? 'text-[#5B7B5C]' : ''
              }`}
            >
              {link.label}
              {currentView === link.view && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5B7B5C] rounded-full"></span>
              )}
            </button>
          ))}
          <div className="h-6 w-px bg-stone-200 mx-2"></div>
          <button 
            onClick={() => handleNav('visit')}
            className="bg-[#5B7B5C] text-white px-6 py-2.5 rounded-full hover:bg-[#4a654b] transition-all shadow-md text-xs font-bold uppercase tracking-widest"
          >
            Get Directions
          </button>
        </div>

        {/* Mobile Header Icons */}
        <div className="flex lg:hidden items-center gap-1">
          <button 
            onClick={() => handleNav('shop')}
            className="p-3 text-[#2D3436] hover:bg-stone-50 rounded-full transition-colors"
            aria-label="Shop"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button 
            className="p-3 text-[#2D3436] focus:outline-none hover:bg-stone-50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-[#FDFCF8] z-40 overflow-y-auto animate-in fade-in duration-200">
          <div className="px-6 py-6 flex flex-col min-h-[calc(100vh-80px)]">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button 
                  key={link.view}
                  onClick={() => handleNav(link.view)} 
                  className="group flex justify-between items-center py-6 border-b border-stone-100 text-left"
                >
                  <span className="text-3xl font-serif text-[#2D3436] group-active:text-[#5B7B5C] transition-colors">
                    {link.label}
                  </span>
                  <svg className="w-5 h-5 text-stone-300 group-active:text-[#5B7B5C] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={() => handleNav('contact')} 
                className="text-lg font-medium text-[#5B7B5C] hover:text-[#4a654b] transition-colors"
              >
                Contact Us
              </button>
            </div>

            <div className="mt-auto pt-10 pb-8">
              <button 
                onClick={() => handleNav('visit')} 
                className="w-full bg-[#5B7B5C] text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#4a654b] transition-all active:scale-[0.98]"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
