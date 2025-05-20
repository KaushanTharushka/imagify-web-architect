
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-2">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM70 75C70 77.8 67.8 80 65 80H35C32.2 80 30 77.8 30 75V35C30 32.2 32.2 30 35 30H55L70 45V75Z" fill="#1e7e34"/>
              <path d="M55 45H65L55 35V45Z" fill="#1e7e34"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-sourcing-green">Revive Agro</h1>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#about" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>About</a>
                <a href="#services" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#solutions" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Solutions</a>
                <a href="#process" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Process</a>
                <a href="#contact" className="text-sourcing-text hover:text-sourcing-green transition" onClick={() => setIsOpen(false)}>Contact</a>
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
