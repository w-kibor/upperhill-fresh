import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { scrollToSection } from '../../utils/scroll';
import { products } from '../../data/mockData';

export function MenuSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-green-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Our Fresh Menu
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All our juices are freshly squeezed daily. Choose from our delicious selection or create your own custom blend!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-green-700 font-bold">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                  <Button onClick={() => scrollToSection('contact')} className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 transition-transform hover:scale-105 shadow-md">
                    Order
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
