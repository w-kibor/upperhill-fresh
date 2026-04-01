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
    <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[90%] lg:max-w-5xl z-50 glass rounded-full transition-all duration-300">
      <div className="px-4 py-3 md:px-5 border border-white/40 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleScroll('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md shadow-green-600/20 group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-500 group-hover:rotate-12">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-800 font-extrabold text-xl tracking-tight hidden sm:block group-hover:text-green-700 transition-colors">
              Upperhill<span className="text-orange-500 font-light ml-1">Fresh</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-50/50 px-2 py-1 rounded-full border border-slate-200/50 shadow-inner">
            {['Home', 'About', 'Menu', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => handleScroll(item === 'Menu' ? 'products' : item.toLowerCase())} 
                className="text-slate-600 hover:text-green-700 hover:bg-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 shadow-sm opacity-90 hover:opacity-100"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => handleScroll('contact')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-7 py-5 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all text-sm tracking-wide font-bold border border-orange-400/50">
              Order Now
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center bg-white/80 rounded-full text-slate-700 hover:bg-white transition-colors border border-slate-200 shadow-sm">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 bg-white/90 rounded-3xl border border-white shadow-2xl backdrop-blur-xl relative z-40">
            {['Home', 'About', 'Menu', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => handleScroll(item === 'Menu' ? 'products' : item.toLowerCase())} 
                className="text-slate-700 hover:text-green-700 hover:bg-green-50/80 font-semibold transition-all text-left px-5 py-3.5 rounded-2xl active:scale-[0.98]"
              >
                {item}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <Button onClick={() => handleScroll('contact')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-full rounded-2xl py-6 shadow-lg shadow-orange-500/20 text-base font-bold tracking-wide">
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
