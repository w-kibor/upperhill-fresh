import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { scrollToSection } from '../../utils/scroll';

export function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 min-h-[90vh] flex items-center bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight">
              Upperhill <span className="text-orange-500">Fresh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Freshly squeezed, daily delivered.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Your trusted source for fresh, healthy juices and fruits delivered right to your office in Upper Hill, Nairobi. Taste the natural goodness in every sip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <ShoppingCart className="w-6 h-6 mr-3" />
                Place an Order
              </Button>
              <Button onClick={() => scrollToSection('products')} variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50 text-lg rounded-full px-8 py-6 transition-all hover:-translate-y-1">
                View Menu
              </Button>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right-8 duration-1000 fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-orange-200 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-lg"></div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759478642913-b6acdba16a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwanVpY2UlMjBnbGFzc2VzfGVufDF8fHx8MTc2MDE4NDg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Fresh fruit juices"
                className="w-full h-full object-cover rounded-[2.8rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
