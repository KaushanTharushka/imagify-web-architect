
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-2">
            <img 
              src="/lovable-uploads/91603dcd-d955-45bb-930c-87699f083e9b.png" 
              alt="Revive Agro Logo" 
              className="h-12 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-sourcing-green">Revive Agro</h1>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="h-10 w-10 flex items-center justify-center rounded-md">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#about" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>About</a>
                <a href="#services" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#solutions" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Solutions</a>
                <a href="#process" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Process</a>
                <a href="#contact" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Contact</a>
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
      </div>
    </header>
  );
};

export default Header;
