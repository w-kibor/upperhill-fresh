import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-green-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Get in Touch
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to place an order? Fill out the form below or contact us directly via WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <Card className="lg:col-span-3 border-none shadow-2xl rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader className="pb-4 pt-8 px-8">
                <CardTitle className="text-3xl text-green-700">Order Form</CardTitle>
                <CardDescription className="text-base mt-2">We'll get back to you within minutes!</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Your Name</Label>
                      <Input id="name" placeholder="Jane Doe" className="h-12 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+254 712 345 678" className="h-12 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office" className="text-gray-700 font-medium">Office Name/Location</Label>
                    <Input id="office" placeholder="CBA Towers, 3rd Floor" className="h-12 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order" className="text-gray-700 font-medium">Order Details</Label>
                    <Textarea 
                      id="order" 
                      placeholder="E.g., 2x Mango Juice, 1x Fruit Salad" 
                      className="resize-none bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                      rows={5}
                    />
                  </div>
                  <Button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    Submit Order
                  </Button>
                </form>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-center text-gray-500 mb-4 text-sm uppercase tracking-wider font-semibold">Or order via WhatsApp</p>
                  <a 
                    href="https://wa.me/254712345678?text=Hi%20Upperhill%20Fresh,%20I'd%20like%20to%20place%20an%20order" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                      <Phone className="w-6 h-6 mr-3 fill-current" />
                      Order on WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-none shadow-xl bg-green-700 text-white rounded-3xl overflow-hidden">
                <CardHeader className="pb-4 pt-8 px-8">
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-green-600/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-100" />
                    </div>
                    <div>
                      <p className="text-green-200 text-sm mb-1 uppercase tracking-wider font-semibold">Phone</p>
                      <p className="text-lg font-medium">+254 712 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-green-600/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-100" />
                    </div>
                    <div>
                      <p className="text-green-200 text-sm mb-1 uppercase tracking-wider font-semibold">Email</p>
                      <p className="text-lg font-medium">hello@upperhillfresh.co.ke</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-green-600/50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-100" />
                    </div>
                    <div>
                      <p className="text-green-200 text-sm mb-1 uppercase tracking-wider font-semibold">Location</p>
                      <p className="text-lg font-medium">Upper Hill, Nairobi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-orange-50 rounded-3xl">
                <CardHeader className="pb-4 pt-6 px-8">
                  <CardTitle className="text-xl text-orange-700">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-orange-100/60 pb-3">
                      <span className="text-gray-600 font-medium">Mon - Fri</span>
                      <span className="text-orange-900 font-bold">7AM - 6PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-orange-100/60 pb-3">
                      <span className="text-gray-600 font-medium">Saturday</span>
                      <span className="text-orange-900 font-bold">8AM - 4PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Sunday</span>
                      <span className="text-orange-900 font-bold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center hover:bg-green-50 hover:-translate-y-1 transition-all text-green-600">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center hover:bg-orange-50 hover:-translate-y-1 transition-all text-orange-500">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center hover:bg-green-50 hover:-translate-y-1 transition-all text-green-600">
                  <Twitter className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
