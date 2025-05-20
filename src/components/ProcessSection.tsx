
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">BUSINESS & SUPPLY CHAIN CONSULTANCY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Audit</h3>
            <p className="text-gray-600 text-sm">Conduct in-depth operational assessments to identify inefficiencies</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Optimize</h3>
            <p className="text-gray-600 text-sm">Apply process re-engineering and technological solutions to streamline workflows</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Implement</h3>
            <p className="text-gray-600 text-sm">Roll out tailored strategies for sustainable growth</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="rounded-full bg-sourcing-green p-4 inline-flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Train</h3>
            <p className="text-gray-600 text-sm">Provide tools and training to empower teams for long-term success</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-2xl mb-6 text-sourcing-green">Key Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Supply chain strategy and design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Agile project management and transformation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Demand planning and sales forecasting</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>ERP system selection and integration</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Reduced lead times by 25% for an organic product exporter</p>
                <div className="h-2 w-2 rounded-full bg-sourcing-green"></div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Improved manufacturing productivity by 30% for a fashion brand</p>
                <div className="h-2 w-2 rounded-full bg-sourcing-green"></div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="section-heading">WHY CHOOSE REVIVE AGRO?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-3 text-sourcing-green">Commitment to Sustainability</h3>
            <p className="text-sm text-gray-600">Every product we offer is designed with environmental impact in mind, from sourcing to packaging.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-3 text-sourcing-green">Uncompromising Quality</h3>
            <p className="text-sm text-gray-600">We use only the finest natural ingredients, ensuring our customers enjoy premium products that align with their health goals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-3 text-sourcing-green">Innovation</h3>
            <p className="text-sm text-gray-600">By continuously developing new products and flavors, we stay ahead of market trends to meet consumer demand.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-3 text-sourcing-green">Transparency</h3>
            <p className="text-sm text-gray-600">Our traceability systems and ethical practices build trust with consumers and partners alike.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-3 text-sourcing-green">Holistic Approach</h3>
            <p className="text-sm text-gray-600">We don't just sell products—we inspire lifestyle changes through education, community support, and sustainable practices.</p>
          </div>
        </div>

        <h2 className="section-heading">HOW WE WORK</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">1</div>
              <div className="mt-2 text-sourcing-green font-bold">Consultation</div>
              <p className="text-sm text-gray-600">Understanding client challenges and goals</p>
            </div>
            <div className="md:flex-grow md:mt-4">
              <div className="h-1 bg-gray-200 w-full"></div>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">2</div>
              <div className="mt-2 text-sourcing-green font-bold">Strategy Development</div>
              <p className="text-sm text-gray-600">Creating tailored solutions</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">3</div>
              <div className="mt-2 text-sourcing-green font-bold">Implementation</div>
              <p className="text-sm text-gray-600">Rolling out changes with full support</p>
            </div>
            <div className="md:flex-grow md:mt-4">
              <div className="h-1 bg-gray-200 w-full"></div>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">4</div>
              <div className="mt-2 text-sourcing-green font-bold">Follow-up</div>
              <p className="text-sm text-gray-600">Monitoring and refining strategies for sustained success</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="section-heading">OUR MARKET REACH</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl mb-6 text-sourcing-green">Global Distribution Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Direct-to-Consumer (DTC)</h4>
                    <p className="text-sm text-gray-600">Through our e-commerce platform, we deliver directly to customers worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Retail</h4>
                    <p className="text-sm text-gray-600">Available at health-focused grocery stores, specialty vegan shops, and online marketplaces.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Wholesale and B2B</h4>
                    <p className="text-sm text-gray-600">Collaborating with distributors, cafés, gyms, and subscription box services to bring our products to a larger audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">International Markets</h4>
                    <p className="text-sm text-gray-600">Expanding into Europe, North America, and Asia-Pacific regions, where plant-based products are in high demand.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="p-6">
                <svg className="w-32 h-32 text-sourcing-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4h-3v5a1 1 0 0 1-2 0V4H7a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1Zm-3 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                  <path d="M9 6h6v2H9z"/>
                </svg>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-xl text-sourcing-green">REVIVE AGRO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
