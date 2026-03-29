import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-slate-900 pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border-b border-white/10 pb-12 mb-8">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/50 group-hover:-rotate-12 transition-transform duration-500">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white tracking-tight">Upperhill <span className="text-orange-400 font-light">Fresh</span></p>
              <p className="text-slate-400 font-medium mt-1">Freshly squeezed, daily delivered.</p>
            </div>
          </div>
          <div className="text-center md:text-right flex flex-col gap-3">
            <div className="inline-flex items-center justify-center md:justify-end gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-white font-semibold tracking-wide text-sm">Accepting Orders</p>
            </div>
            <p className="text-slate-400 font-medium">Upper Hill, Nairobi | <span className="text-white">+254 712 345 678</span></p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Upperhill Fresh. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
