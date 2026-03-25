import { ShoppingCart, BarChart3, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { mockOrders } from '../../data/mockData';

export function Orders() {
  return (
    <section id="orders" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Orders & Records
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600">
              Track your daily sales and manage orders efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <Card className="border-none shadow-md bg-green-50/50 hover:shadow-lg transition-shadow rounded-2xl">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-lg">Today's Orders</p>
                    <p className="text-4xl font-bold text-green-700">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-orange-50/50 hover:shadow-lg transition-shadow rounded-2xl">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-lg">Today's Revenue</p>
                    <p className="text-3xl font-bold text-orange-600">KSh 2,450</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-green-50/50 hover:shadow-lg transition-shadow rounded-2xl">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-lg">Total Customers</p>
                    <p className="text-4xl font-bold text-green-700">156</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-xl overflow-hidden rounded-3xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-orange-400"></div>
            <CardHeader className="bg-gray-50/50 pt-8 pb-6 border-b border-gray-100">
              <CardTitle className="text-2xl text-green-700">Recent Orders</CardTitle>
              <CardDescription className="text-base mt-2">View and manage your recent sales</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="py-4 px-6 text-gray-500 font-medium whitespace-nowrap">Customer</th>
                      <th className="py-4 px-6 text-gray-500 font-medium whitespace-nowrap">Office</th>
                      <th className="py-4 px-6 text-gray-500 font-medium whitespace-nowrap">Order</th>
                      <th className="py-4 px-6 text-gray-500 font-medium whitespace-nowrap">Amount</th>
                      <th className="py-4 px-6 text-gray-500 font-medium whitespace-nowrap">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-50 hover:bg-green-50/30 transition-colors">
                        <td className="py-5 px-6 font-medium text-gray-800 whitespace-nowrap">{order.customer}</td>
                        <td className="py-5 px-6 text-gray-600 whitespace-nowrap">{order.office}</td>
                        <td className="py-5 px-6 text-gray-600">{order.item}</td>
                        <td className="py-5 px-6 font-bold text-orange-500 whitespace-nowrap">{order.amount}</td>
                        <td className="py-5 px-6 text-gray-500 whitespace-nowrap">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-gray-50/30 text-center border-t border-gray-100">
                <p className="text-gray-500">This is a preview. Full functionality will be implemented in the production build.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
