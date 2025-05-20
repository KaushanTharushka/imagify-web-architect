
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">HOW WE WORK</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">1</div>
              <div className="mt-2 text-sourcing-green font-bold">Consultation</div>
            </div>
            <div className="md:flex-grow md:mt-4">
              <div className="h-1 bg-gray-200 w-full"></div>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">2</div>
              <div className="mt-2 text-sourcing-green font-bold">Strategy Development</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">3</div>
              <div className="mt-2 text-sourcing-green font-bold">Implementation</div>
            </div>
            <div className="md:flex-grow md:mt-4">
              <div className="h-1 bg-gray-200 w-full"></div>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sourcing-green text-white flex items-center justify-center text-2xl font-bold">4</div>
              <div className="mt-2 text-sourcing-green font-bold">Follow-up</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-sourcing-green text-white flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl">Our Methodology</h3>
              </div>
              <p className="text-gray-600">
                We use a data-driven approach combined with industry expertise to identify the most efficient sourcing strategies for your specific business needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-sourcing-orange text-white flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl">Our Commitment</h3>
              </div>
              <p className="text-gray-600">
                Dedicated account managers ensure seamless execution of your sourcing strategy, maintaining open communication throughout the entire process.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="section-heading">OUR MARKET REACH</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl mb-6 text-sourcing-green">Global Network, Local Expertise</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Asia Pacific</h4>
                    <p className="text-sm text-gray-600">Strategic partnerships with suppliers across China, India, Thailand, and Vietnam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Americas</h4>
                    <p className="text-sm text-gray-600">Extensive network across North, Central, and South America</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-sourcing-green rounded-full text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Europe & Africa</h4>
                    <p className="text-sm text-gray-600">Established relationships with key agricultural regions</p>
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
                  <h3 className="font-bold text-xl text-sourcing-green">AGRO BUSINESS</h3>
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
