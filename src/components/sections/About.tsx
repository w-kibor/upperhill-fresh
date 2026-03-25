import { Leaf, ShoppingCart, Users, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-tr-full opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              About Upperhill Fresh
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg">
              <p className="text-gray-700 leading-relaxed">
                Welcome to <span className="text-green-600 font-semibold">Upperhill Fresh</span>, your neighborhood source for freshly squeezed juices and premium quality fruits in the heart of Upper Hill, Nairobi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We started with a simple mission: to bring healthy, delicious refreshment to busy professionals and health-conscious individuals in our community. Every morning, we source the freshest fruits from local markets and prepare our juices with care – no preservatives, no added sugars, just pure natural goodness.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our customers love us for our consistency, quality, and friendly service. Whether you need a quick energy boost, a healthy snack, or daily delivery to your office, we're here to serve you with a smile.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">100% Fresh</h3>
                  <p className="text-gray-600">No preservatives</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 translate-y-6">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                    <ShoppingCart className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Daily Delivery</h3>
                  <p className="text-gray-600">To your office</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Trusted</h3>
                  <p className="text-gray-600">By hundreds</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 translate-y-6">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                    <Phone className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Quick Service</h3>
                  <p className="text-gray-600">Same day orders</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
