
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("products");
  
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">OUR PRODUCT AND SERVICE PORTFOLIO</h2>
        
        <Tabs defaultValue="products" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="service-card">
                <div className="h-48 bg-gray-300 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/72f8e389-b1da-421c-b3be-52fcc9c8dbdb.png" 
                    alt="Plant-based nut butters" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sourcing-green bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="font-bold text-xl text-white">PLANT-BASED NUT BUTTERS</h3>
                  </div>
                </div>
                <div className="service-card-body">
                  <p className="font-semibold mb-3">VEGAN HIGH-PROTEIN NUT BUTTER</p>
                  <p className="text-sm mb-4">Crafted with premium ingredients like almonds, cashews, pea protein, and chocolate liquor, our nut butter offers 14g of plant protein per 40g serving. It's rich, indulgent, and perfect for health-conscious consumers.</p>
                  <p className="font-semibold mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      High protein, low sugar
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Made with sustainable and ethically sourced ingredients
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Available in unique flavors
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
                    src="/lovable-uploads/d36e6b8d-5a0d-4897-b265-e10812847f0f.png" 
                    alt="True Ceylon Cinnamon" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sourcing-green bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="font-bold text-xl text-white">TRUE CEYLON CINNAMON</h3>
                  </div>
                </div>
                <div className="service-card-body">
                  <p className="font-semibold mb-3">AUTHENTIC TRUE CEYLON CINNAMON</p>
                  <p className="text-sm mb-4">Sourced directly from sustainable farms in Sri Lanka.</p>
                  <p className="font-semibold mb-2">Product Range:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Powdered Cinnamon for culinary and medicinal uses
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Cinnamon sticks for teas, desserts, and aromatics
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Bulk and retail packaging available
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
                    src="/lovable-uploads/f4bd3fd8-3464-4cf8-832b-4aa31b74442c.png" 
                    alt="Animal Feed Solutions" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sourcing-green bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="font-bold text-xl text-white">ANIMAL FEED SOLUTIONS</h3>
                  </div>
                </div>
                <div className="service-card-body">
                  <p className="font-semibold mb-2">NUTRITIONAL FEED PRODUCTS:</p>
                  <p className="text-sm mb-4">We produce high-quality, plant-based animal feed designed to support healthier livestock and sustainable farming practices.</p>
                  <p className="font-semibold mb-2">CUSTOMIZED FEED FORMULATIONS:</p>
                  <p className="text-sm mb-4">Tailored feed solutions for specific livestock needs, focusing on nutritional balance and cost efficiency.</p>
                  <p className="font-semibold mb-2">SUSTAINABILITY COMMITMENT:</p>
                  <p className="text-sm">Utilizing byproducts from our manufacturing processes to minimize waste and create eco-friendly feed options.</p>
                </div>
                <div className="service-card-footer">
                  <Button className="w-full bg-sourcing-orange hover:bg-sourcing-orange-light">Learn More</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="service-card">
                <div className="service-card-header">
                  <h3 className="font-bold text-xl">SUSTAINABLE AGRICULTURE SOLUTIONS</h3>
                </div>
                <div className="service-card-body">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span><strong>Farm Partnerships:</strong> We collaborate with small-scale farmers, providing them with the tools, training, and resources needed to implement sustainable farming practices.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span><strong>Supply Chain Transparency:</strong> Our end-to-end traceability system ensures that every product meets the highest standards of quality and ethics.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span><strong>Eco-Friendly Packaging:</strong> Dedicated to reducing waste, we use biodegradable, recyclable, and reusable packaging across our product lines.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-card-header">
                  <h3 className="font-bold text-xl">CUSTOM FOOD PRODUCT DEVELOPMENT</h3>
                </div>
                <div className="service-card-body">
                  <p className="mb-4">TAILORED SOLUTIONS FOR BUSINESSES SEEKING TO DEVELOP PLANT-BASED OR HEALTH-FOCUSED PRODUCTS UNDER THEIR OWN BRAND. OUR SERVICES INCLUDE:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Ingredient sourcing
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Recipe formulation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Packaging design and branding support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sourcing-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Manufacturing and distribution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <h2 className="section-heading mt-16">SPECIALIST SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Agricultural Consulting</h3>
            <p className="text-gray-600 text-sm">Expertise in sustainable farming practices, crop optimization, and resource management.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Supply Chain Advisory</h3>
            <p className="text-gray-600 text-sm">Helping businesses implement transparent and efficient supply chain solutions.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Sustainability Audits</h3>
            <p className="text-gray-600 text-sm">Assessing and improving the environmental impact of farming and production operations.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Training Programs</h3>
            <p className="text-gray-600 text-sm">Workshops and training sessions for farmers and businesses to enhance productivity and adopt eco-conscious practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
