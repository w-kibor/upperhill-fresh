import { useState } from 'react';
import { Menu, X, Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ShoppingCart, BarChart3, Users } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const products = [
    {
      name: 'Fresh Mango Juice',
      price: 'KSh 150',
      image: 'https://images.unsplash.com/photo-1697642452436-9c40773cbcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGp1aWNlfGVufDF8fHx8MTc2MDA4NDU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Sweet and refreshing'
    },
    {
      name: 'Watermelon Delight',
      price: 'KSh 120',
      image: 'https://images.unsplash.com/photo-1626110926450-b6af6ca03cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcm1lbG9uJTIwc2xpY2VzfGVufDF8fHx8MTc2MDE4NDg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Cool and hydrating'
    },
    {
      name: 'Passion Juice',
      price: 'KSh 130',
      image: 'https://images.unsplash.com/photo-1604495772376-9657f0035eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzaW9uJTIwZnJ1aXR8ZW58MXx8fHwxNzYwMDgyNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Tropical and tangy'
    },
    {
      name: 'Fresh Fruit Salad',
      price: 'KSh 200',
      image: 'https://images.unsplash.com/photo-1609090802574-612df35aaa04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjAxMzYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Mixed seasonal fruits'
    },
    {
      name: 'Orange Juice',
      price: 'KSh 100',
      image: 'https://images.unsplash.com/photo-1759478642913-b6acdba16a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwanVpY2UlMjBnbGFzc2VzfGVufDF8fHx8MTc2MDE4NDg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Classic citrus freshness'
    },
    {
      name: 'Tropical Mix',
      price: 'KSh 180',
      image: 'https://images.unsplash.com/photo-1731085906182-346c9e8e08ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwYXNzb3J0bWVudHxlbnwxfHx8fDE3NjAxODQ4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Blend of tropical fruits'
    }
  ];

  const mockOrders = [
    { id: 1, customer: 'Jane Doe', office: 'CBA Towers', item: 'Mango Juice x2', amount: 'KSh 300', date: '2025-10-11' },
    { id: 2, customer: 'John Smith', office: 'Britam Centre', item: 'Fruit Salad x1', amount: 'KSh 200', date: '2025-10-11' },
    { id: 3, customer: 'Mary Wanjiru', office: 'Upper Hill Court', item: 'Passion Juice x3', amount: 'KSh 390', date: '2025-10-10' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-600">Upperhill Fresh</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-600 transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection('orders')} className="text-gray-700 hover:text-green-600 transition-colors">
                Orders
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600">
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Menu
              </button>
              <button onClick={() => scrollToSection('orders')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Orders
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 w-full">
                Order Now
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-24 min-h-screen flex items-center bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-green-600">
                Upperhill Fresh
              </h1>
              <p className="text-gray-600">
                Freshly squeezed, daily delivered.
              </p>
              <p className="text-gray-600">
                Your trusted source for fresh, healthy juices and fruits delivered right to your office in Upper Hill, Nairobi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Place an Order
                </Button>
                <Button onClick={() => scrollToSection('products')} variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  View Menu
                </Button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759478642913-b6acdba16a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwanVpY2UlMjBnbGFzc2VzfGVufDF8fHx8MTc2MDE4NDg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Fresh fruit juices"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-600 mb-4">
                About Upperhill Fresh
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Welcome to <span className="text-green-600">Upperhill Fresh</span>, your neighborhood source for freshly squeezed juices and premium quality fruits in the heart of Upper Hill, Nairobi.
                </p>
                <p className="text-gray-700">
                  We started with a simple mission: to bring healthy, delicious refreshment to busy professionals and health-conscious individuals in our community. Every morning, we source the freshest fruits from local markets and prepare our juices with care – no preservatives, no added sugars, just pure natural goodness.
                </p>
                <p className="text-gray-700">
                  Our customers love us for our consistency, quality, and friendly service. Whether you need a quick energy boost, a healthy snack, or daily delivery to your office, we're here to serve you with a smile.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-green-200">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-green-600 mb-1">100% Fresh</h3>
                    <p className="text-gray-600">No preservatives</p>
                  </CardContent>
                </Card>
                
                <Card className="border-orange-200">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShoppingCart className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-orange-500 mb-1">Daily Delivery</h3>
                    <p className="text-gray-600">To your office</p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-green-600 mb-1">Trusted</h3>
                    <p className="text-gray-600">By hundreds</p>
                  </CardContent>
                </Card>
                
                <Card className="border-orange-200">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-orange-500 mb-1">Quick Service</h3>
                    <p className="text-gray-600">Same day orders</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-green-600 mb-4">
              Our Fresh Menu
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our juices are freshly squeezed daily. Choose from our delicious selection or create your own custom blend!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-green-100">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-600">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500">{product.price}</span>
                    <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-green-600 hover:bg-green-700">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Orders & Records Section */}
      <section id="orders" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-600 mb-4">
                Orders & Records
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Track your daily sales and manage orders efficiently
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Today's Orders</p>
                      <p className="text-green-600">12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-gray-600">Today's Revenue</p>
                      <p className="text-orange-500">KSh 2,450</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Total Customers</p>
                      <p className="text-green-600">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Orders Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Recent Orders</CardTitle>
                <CardDescription>View and manage your recent sales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-gray-600">Customer</th>
                        <th className="text-left py-3 px-4 text-gray-600">Office</th>
                        <th className="text-left py-3 px-4 text-gray-600">Order</th>
                        <th className="text-left py-3 px-4 text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 text-gray-600">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-b border-gray-100 hover:bg-green-50">
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">{order.office}</td>
                          <td className="py-3 px-4">{order.item}</td>
                          <td className="py-3 px-4 text-orange-500">{order.amount}</td>
                          <td className="py-3 px-4 text-gray-500">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-500">This is a preview. Full functionality will be implemented in the production build.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-600 mb-4">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Ready to place an order? Fill out the form below or contact us directly
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-green-600">Order Form</CardTitle>
                  <CardDescription>We'll get back to you within minutes!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Jane Doe" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="office">Office Name/Location</Label>
                      <Input id="office" placeholder="CBA Towers, 3rd Floor" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+254 712 345 678" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="order">Order Details</Label>
                      <Textarea 
                        id="order" 
                        placeholder="E.g., 2x Mango Juice, 1x Fruit Salad" 
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Submit Order
                    </Button>
                  </form>

                  <div className="mt-6">
                    <p className="text-center text-gray-600 mb-3">Or order via WhatsApp</p>
                    <a 
                      href="https://wa.me/254712345678?text=Hi%20Upperhill%20Fresh,%20I'd%20like%20to%20place%20an%20order" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        <Phone className="w-5 h-5 mr-2" />
                        Order on WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-600">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">Phone</p>
                        <p className="text-gray-800">+254 712 345 678</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">Email</p>
                        <p className="text-gray-800">hello@upperhillfresh.co.ke</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">Location</p>
                        <p className="text-gray-800">Upper Hill, Nairobi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-100 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monday - Friday</span>
                        <span className="text-gray-800">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Saturday</span>
                        <span className="text-gray-800">8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Sunday</span>
                        <span className="text-gray-800">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-600">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                        <Facebook className="w-6 h-6 text-green-600" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                        <Instagram className="w-6 h-6 text-orange-500" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                        <Twitter className="w-6 h-6 text-green-600" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p>Upperhill Fresh</p>
                <p className="text-green-100">Freshly squeezed, daily delivered</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-green-100">© 2025 Upperhill Fresh. All rights reserved.</p>
              <p className="text-green-100">Upper Hill, Nairobi | +254 712 345 678</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
