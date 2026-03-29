import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { scrollToSection } from '../../utils/scroll';
import { products } from '../../data/mockData';

export function MenuSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Our Fresh <span className="text-orange-500">Menu</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium text-balance">
            All our juices are freshly squeezed daily. Choose from our delicious selection or create your own custom blend!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-slate-200 bg-white rounded-[2rem] hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both flex flex-col" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="h-64 sm:h-72 overflow-hidden relative m-2 rounded-[1.5rem]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity z-10 duration-500"></div>
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-green-700 font-bold text-sm tracking-wide">Popular</span>
                </div>
              </div>
              <CardHeader className="pt-6 pb-2 px-6 lg:px-8">
                <CardTitle className="text-2xl text-slate-800 font-extrabold tracking-tight group-hover:text-green-700 transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-base text-slate-500 font-medium mt-2 leading-relaxed h-12">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 pb-8 px-6 lg:px-8 mt-auto border-t border-slate-50 mx-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Per glass</span>
                    <span className="text-3xl font-black text-orange-500">{product.price}</span>
                  </div>
                  <Button onClick={() => scrollToSection('contact')} className="bg-slate-900 hover:bg-green-600 text-white rounded-full px-7 py-6 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 font-bold tracking-wide">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
