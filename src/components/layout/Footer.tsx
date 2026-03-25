import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Leaf className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="text-xl font-bold">Upperhill Fresh</p>
              <p className="text-green-200">Freshly squeezed, daily delivered</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-green-100">&copy; {new Date().getFullYear()} Upperhill Fresh. All rights reserved.</p>
            <p className="text-green-200 mt-1">Upper Hill, Nairobi | +254 712 345 678</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
