
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-2">
            <img 
              src="/lovable-uploads/d80175a3-0256-4e4b-b915-a6bdc9357e27.png" 
              alt="Revive Agro Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-sourcing-green">Revive Agro</h1>
            <p className="text-xs text-gray-500 hidden md:block">Global Sourcing | Agro Products | Consultancy | Branding</p>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#F2FCE2]/95">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#about" className="text-sourcing-text hover:text-sourcing-green transition flex items-center" onClick={() => setIsOpen(false)}>
                  <Leaf className="h-4 w-4 mr-2" />
                  About
                </a>
                <a href="#services" className="text-sourcing-text hover:text-sourcing-green transition flex items-center" onClick={() => setIsOpen(false)}>
                  <Leaf className="h-4 w-4 mr-2" />
                  Services
                </a>
                <a href="#solutions" className="text-sourcing-text hover:text-sourcing-green transition flex items-center" onClick={() => setIsOpen(false)}>
                  <Leaf className="h-4 w-4 mr-2" />
                  Solutions
                </a>
                <a href="#process" className="text-sourcing-text hover:text-sourcing-green transition flex items-center" onClick={() => setIsOpen(false)}>
                  <Leaf className="h-4 w-4 mr-2" />
                  Process
                </a>
                <a href="#contact" className="text-sourcing-text hover:text-sourcing-green transition flex items-center" onClick={() => setIsOpen(false)}>
                  <Leaf className="h-4 w-4 mr-2" />
                  Contact
                </a>
                <Button className="w-full bg-sourcing-green hover:bg-sourcing-green-light">Get a Quote</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block flex-grow">
          <ul className="flex flex-wrap justify-center md:justify-end gap-6">
            <li><a href="#about" className="text-sourcing-text hover:text-sourcing-green transition">About</a></li>
            <li><a href="#services" className="text-sourcing-text hover:text-sourcing-green transition">Services</a></li>
            <li><a href="#solutions" className="text-sourcing-text hover:text-sourcing-green transition">Solutions</a></li>
            <li><a href="#process" className="text-sourcing-text hover:text-sourcing-green transition">Process</a></li>
            <li><a href="#contact" className="text-sourcing-text hover:text-sourcing-green transition">Contact</a></li>
          </ul>
        </nav>
        <Button className="hidden md:block ml-6 bg-sourcing-green hover:bg-sourcing-green-light">Get a Quote</Button>
      </div>
    </header>
  );
};

export default Header;
