import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { scrollToSection } from '../../utils/scroll';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-[95vh] flex items-center overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-400/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-100 shadow-sm animate-in slide-in-from-bottom-4 fade-in duration-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
              <span className="text-sm font-bold text-green-700 tracking-wide uppercase">100% Organic & Freshly Squeezed</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-slate-800 leading-[1.05] tracking-tight animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150 fill-mode-both">
              Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Nature</span> in<br/>
              Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Single Sip.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-lg text-balance animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300 fill-mode-both">
              Your trusted source for premium, healthy juices and fresh fruits delivered right to your office in Upper Hill, Nairobi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500 fill-mode-both">
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold tracking-wide rounded-full px-8 py-7 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Place an Order
              </Button>
              <Button onClick={() => scrollToSection('products')} variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-300 text-lg font-bold tracking-wide rounded-full px-8 py-7 shadow-sm hover:shadow-md transition-all">
                View Menu
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-700 fill-mode-both">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-50 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-extrabold text-slate-800">500+ Happy Customers</p>
                <p className="text-slate-500 font-medium whitespace-nowrap">in Upper Hill area</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto animate-in zoom-in-95 fade-in duration-1000 delay-300 fill-mode-both mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-300/40 to-orange-300/40 rounded-[3rem] transform rotate-6 scale-105 blur-2xl"></div>
            <div className="absolute -inset-4 bg-white/40 rounded-[3.5rem] transform -rotate-3 backdrop-blur-2xl border border-white/60 shadow-xl"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmcmVzaCUyMGp1aWNlfGVufDF8fHx8MTc2MDE5MjA0MXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Fresh fruit juices"
                className="w-full h-full object-cover rounded-[2.8rem] hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute top-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 animate-[bounce_3s_ease-in-out_infinite]">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Delivered Fresh</p>
                <p className="text-2xl font-black text-green-600 tracking-tight">Every Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
