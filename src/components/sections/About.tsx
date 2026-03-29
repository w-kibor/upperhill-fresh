import { Leaf, ShoppingCart, Users, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[80px] opacity-70 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[80px] opacity-70 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
              About <span className="text-green-600">Upperhill Fresh</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 text-lg animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
              <p className="text-slate-600 leading-relaxed text-balance">
                Welcome to <span className="text-green-600 font-bold">Upperhill Fresh</span>, your neighborhood source for freshly squeezed juices and premium quality fruits in the heart of Upper Hill, Nairobi.
              </p>
              <p className="text-slate-600 leading-relaxed text-balance">
                We started with a simple mission: to bring healthy, delicious refreshment to busy professionals and health-conscious individuals in our community. Every morning, we source the freshest fruits from local markets and prepare our juices with care – no preservatives, no added sugars, just pure natural goodness.
              </p>
              <p className="text-slate-600 leading-relaxed text-balance">
                Our customers love us for our consistency, quality, and friendly service. Whether you need a quick energy boost, a healthy snack, or daily delivery to your office, we're here to serve you with a smile.
              </p>
              
              <div className="pt-6">
                <div className="flex items-center gap-4 p-4 bg-green-50/50 rounded-2xl border border-green-100/50 shadow-sm w-max">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-xl">100% Natural</p>
                    <p className="text-slate-500 text-sm font-medium">No artificial additives</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <div className="space-y-4 sm:space-y-6 mt-8">
                <Card className="border border-white/60 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-2">Farm Fresh</h3>
                    <p className="text-slate-500 font-medium text-sm">Locally Sourced</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-white/60 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-2">Quick Service</h3>
                    <p className="text-slate-500 font-medium text-sm">Same Day Calls</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <Card className="border border-white/60 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-2">Daily Delivery</h3>
                    <p className="text-slate-500 font-medium text-sm">To your office</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-white/60 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-2">Trusted</h3>
                    <p className="text-slate-500 font-medium text-sm">By hundreds</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
