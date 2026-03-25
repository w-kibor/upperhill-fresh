import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '../ui/button';
import { scrollToSection } from '../../utils/scroll';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id, () => setIsMenuOpen(false));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll('home')}>
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 font-semibold text-lg">Upperhill Fresh</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleScroll('home')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => handleScroll('about')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              About
            </button>
            <button onClick={() => handleScroll('products')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Menu
            </button>
            <button onClick={() => handleScroll('orders')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Orders
            </button>
            <button onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Contact
            </button>
            <Button onClick={() => handleScroll('contact')} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-shadow">
              Order Now
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <button onClick={() => handleScroll('home')} className="text-gray-700 hover:text-green-600 font-medium transition-colors text-left">
              Home
            </button>
            <button onClick={() => handleScroll('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors text-left">
              About
            </button>
            <button onClick={() => handleScroll('products')} className="text-gray-700 hover:text-green-600 font-medium transition-colors text-left">
              Menu
            </button>
            <button onClick={() => handleScroll('orders')} className="text-gray-700 hover:text-green-600 font-medium transition-colors text-left">
              Orders
            </button>
            <button onClick={() => handleScroll('contact')} className="text-gray-700 hover:text-green-600 font-medium transition-colors text-left">
              Contact
            </button>
            <Button onClick={() => handleScroll('contact')} className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full shadow-md">
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
