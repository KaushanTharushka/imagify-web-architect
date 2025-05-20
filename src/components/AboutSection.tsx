
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">ABOUT US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Global Network</h3>
                <p className="text-gray-600">Over 20 years of experience connecting businesses with the best agricultural resources across 30+ countries.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality control processes and certifications to ensure only the highest quality agricultural products.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Cost Optimization</h3>
                <p className="text-gray-600">Strategic sourcing practices that typically reduce procurement costs by 15-25% for our clients.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-sourcing-green text-white">
                <h3 className="font-bold text-xl">MISSION</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <p>To revolutionize agricultural supply chains through sustainable sourcing practices and innovative solutions that empower businesses to thrive in a competitive global market.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-sourcing-green text-white">
                <h3 className="font-bold text-xl">VISION</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <p>To be the world's leading agricultural sourcing partner, driving sustainable growth and creating lasting value for our clients, partners, and communities globally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="stats-container">
            <div className="stat-item">
              <h4 className="text-4xl font-bold text-sourcing-green mb-2">30+</h4>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="stat-item">
              <h4 className="text-4xl font-bold text-sourcing-green mb-2">500+</h4>
              <p className="text-gray-600">Suppliers</p>
            </div>
            <div className="stat-item">
              <h4 className="text-4xl font-bold text-sourcing-green mb-2">2000+</h4>
              <p className="text-gray-600">Projects</p>
            </div>
            <div className="stat-item">
              <h4 className="text-4xl font-bold text-sourcing-green mb-2">98%</h4>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
