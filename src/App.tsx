import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { MenuSection } from './components/sections/MenuSection';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-green-200 selection:text-green-900 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <MenuSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
