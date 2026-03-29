import { ShoppingCart, BarChart3, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { mockOrders } from '../../data/mockData';

export function Orders() {
  return (
    <section id="orders" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
              Orders & <span className="text-green-600">Records</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto text-balance">
              Track your daily sales and manage orders efficiently with our intuitive dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <Card className="border border-green-100 shadow-xl shadow-slate-200/50 bg-gradient-to-br from-white to-green-50/50 hover:shadow-2xl transition-all duration-300 rounded-[2rem] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 delay-150 fill-mode-both">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-inner">
                    <ShoppingCart className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold tracking-wide uppercase text-sm mb-1">Today's Orders</p>
                    <p className="text-4xl font-black text-slate-800 tracking-tight">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-orange-100 shadow-xl shadow-slate-200/50 bg-gradient-to-br from-white to-orange-50/50 hover:shadow-2xl transition-all duration-300 rounded-[2rem] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 delay-300 fill-mode-both">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shadow-inner">
                    <BarChart3 className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold tracking-wide uppercase text-sm mb-1">Today's Revenue</p>
                    <p className="text-3xl font-black text-slate-800 tracking-tight">KSh 2,450</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-green-100 shadow-xl shadow-slate-200/50 bg-gradient-to-br from-white to-green-50/50 hover:shadow-2xl transition-all duration-300 rounded-[2rem] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 delay-500 fill-mode-both">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-inner">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold tracking-wide uppercase text-sm mb-1">Total Customers</p>
                    <p className="text-4xl font-black text-slate-800 tracking-tight">156</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden rounded-[2.5rem] relative animate-in zoom-in-95 fade-in duration-700 delay-700 fill-mode-both bg-white">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-orange-400"></div>
            <CardHeader className="bg-slate-50/80 backdrop-blur-sm pt-10 pb-8 px-8 border-b border-slate-100">
              <CardTitle className="text-2xl font-extrabold text-slate-800">Recent Orders</CardTitle>
              <CardDescription className="text-base font-medium text-slate-500 mt-2">View and manage your recent sales</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="py-5 px-8 text-slate-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Customer</th>
                      <th className="py-5 px-8 text-slate-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Office</th>
                      <th className="py-5 px-8 text-slate-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Order</th>
                      <th className="py-5 px-8 text-slate-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Amount</th>
                      <th className="py-5 px-8 text-slate-500 font-bold text-sm uppercase tracking-wider whitespace-nowrap">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group cursor-pointer">
                        <td className="py-6 px-8 font-bold text-slate-800 whitespace-nowrap group-hover:text-green-700 transition-colors">{order.customer}</td>
                        <td className="py-6 px-8 text-slate-600 font-medium whitespace-nowrap">{order.office}</td>
                        <td className="py-6 px-8 text-slate-600 font-medium">{order.item}</td>
                        <td className="py-6 px-8 font-black text-orange-500 whitespace-nowrap">{order.amount}</td>
                        <td className="py-6 px-8 text-slate-400 font-medium whitespace-nowrap">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-slate-50/80 text-center border-t border-slate-100">
                <p className="text-slate-500 font-medium text-sm">This is a preview. Full functionality will be implemented in the production build.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
