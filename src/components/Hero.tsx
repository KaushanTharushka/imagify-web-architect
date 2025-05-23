
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Empowering Growth Through Strategic Sourcing",
    "Agro Innovation",
    "Business Excellence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="hero-content max-w-4xl mx-auto text-center">
          <div className="h-24 md:h-28 lg:h-32 mb-6 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitle}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                {titles[currentTitle]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-lg md:text-xl mb-8"
          >
            Global Sourcing | Agro Products | Business & Supply Chain Consultancy | Branding
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              className="bg-white text-sourcing-green hover:bg-gray-100 transform transition-transform hover:scale-105"
            >
              Learn More
            </Button>
            <Button 
              className="bg-sourcing-orange hover:bg-sourcing-orange-light transform transition-transform hover:scale-105"
            >
              Our Solutions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
