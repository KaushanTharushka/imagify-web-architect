
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="hero-section py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="hero-content max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Growth Through Strategic Sourcing
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            We connect businesses with sustainable agro resources and optimize supply chains to drive profitability and growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-sourcing-green hover:bg-gray-100">
              Learn More
            </Button>
            <Button className="bg-sourcing-orange hover:bg-sourcing-orange-light">
              Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
