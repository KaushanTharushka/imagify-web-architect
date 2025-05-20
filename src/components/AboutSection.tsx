
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">ABOUT US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-sourcing-green">Who We Are</h3>
            <p className="text-gray-600 mb-6">We are Consultancy in:</p>
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Driving operational efficiency and productivity across industries</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Optimizing supply chains for cost reduction and enhanced performance</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Supporting sustainable global sourcing and agro product distribution</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-sourcing-green rounded-full text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Elevating branding for professionals and executives</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-sourcing-green text-white">
                <h3 className="font-bold text-xl">MISSION</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <p>To deliver measurable growth and sustainability through innovative strategies tailored to client needs</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-sourcing-green text-white">
                <h3 className="font-bold text-xl">VISION</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <p>To be the trusted partner for businesses worldwide, excelling in sourcing, consultancy, and personal development</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-sourcing-green">OUR SPECIALTY</h3>
          <div className="stats-container">
            <div className="stat-item">
              <p className="text-gray-600">Expertise from over a decade of leadership in operations and supply chains</p>
            </div>
            <div className="stat-item">
              <p className="text-gray-600">Proven track record of enhancing productivity and revenue growth for global clients</p>
            </div>
            <div className="stat-item">
              <p className="text-gray-600">Commitment to ethical practices and sustainable growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
