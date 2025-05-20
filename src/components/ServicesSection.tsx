
import React from 'react';
import { Button } from '@/components/ui/button';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">OUR PRODUCT AND SERVICE PORTFOLIO</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="service-card">
            <div className="h-48 bg-gray-300 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Grains and cereals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sourcing-green bg-opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold text-xl text-white">GRAINS & CEREALS</h3>
              </div>
            </div>
            <div className="service-card-body">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Wheat, Corn, Rice
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Barley, Oats, Rye
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Quality Certifications
                </li>
              </ul>
            </div>
            <div className="service-card-footer">
              <Button className="w-full bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="h-48 bg-gray-300 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563289142-b991771c76b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Fruits and vegetables" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sourcing-green bg-opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold text-xl text-white">FRUITS & VEGETABLES</h3>
              </div>
            </div>
            <div className="service-card-body">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Fresh & Processed
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Organic Options
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Year-round Supply
                </li>
              </ul>
            </div>
            <div className="service-card-footer">
              <Button className="w-full bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="h-48 bg-gray-300 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Nuts and seeds" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sourcing-green bg-opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold text-xl text-white">NUTS & SEEDS</h3>
              </div>
            </div>
            <div className="service-card-body">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Premium Quality
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Various Processing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Bulk Packaging
                </li>
              </ul>
            </div>
            <div className="service-card-footer">
              <Button className="w-full bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
            </div>
          </div>
        </div>
        
        <h2 className="section-heading mt-16">BUSINESS & SUPPLY CHAIN CONSULTANCY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Audit</h3>
            <p className="text-gray-600 text-sm">Supply chain performance evaluation and gap analysis</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Optimize</h3>
            <p className="text-gray-600 text-sm">Strategic reconfiguration of sourcing and distribution networks</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Implement</h3>
            <p className="text-gray-600 text-sm">End-to-end deployment of optimized supply chain solutions</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Track</h3>
            <p className="text-gray-600 text-sm">Continuous monitoring and performance evaluation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sourcing-orange">
            <h3 className="font-bold text-xl mb-4 text-sourcing-orange">Market Entry Strategy</h3>
            <p className="mb-4 text-gray-600">Comprehensive analysis and planning for successful entry into new agricultural markets.</p>
            <Button className="bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sourcing-orange">
            <h3 className="font-bold text-xl mb-4 text-sourcing-orange">Supplier Development</h3>
            <p className="mb-4 text-gray-600">Building and nurturing a network of reliable suppliers that meet quality standards.</p>
            <Button className="bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sourcing-orange">
            <h3 className="font-bold text-xl mb-4 text-sourcing-orange">Logistics Optimization</h3>
            <p className="mb-4 text-gray-600">Streamlining transportation and warehousing to reduce costs and improve efficiency.</p>
            <Button className="bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
