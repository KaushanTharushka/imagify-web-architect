
import React from 'react';

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">GLOBAL SOURCING SOLUTIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
            <h3 className="font-bold text-xl mb-3 text-sourcing-green">End-to-End Supply Chain</h3>
            <p className="text-gray-600">Comprehensive management from farm to final destination with complete visibility and control.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
            <h3 className="font-bold text-xl mb-3 text-sourcing-green">Quality Control Systems</h3>
            <p className="text-gray-600">Rigorous inspection protocols and certifications ensuring consistent product quality.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
            <h3 className="font-bold text-xl mb-3 text-sourcing-green">Market Intelligence</h3>
            <p className="text-gray-600">Real-time data and insights to navigate market fluctuations and identify opportunities.</p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 md:p-10 rounded-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl mb-4 text-sourcing-green">Key Industries Served</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                  <span>Food Processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                  <span>Beverage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                  <span>Animal Feed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                  <span>Biofuels</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                  <span>Retail</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                  <span>Export</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-around">
              <div className="text-center">
                <div className="inline-block rounded-full p-4 bg-sourcing-green text-white">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="font-bold text-2xl mt-2 text-sourcing-green">6%</p>
                <p className="text-sm text-gray-600">Year Over Year<br />Growth</p>
              </div>
              
              <div className="text-center">
                <div className="inline-block rounded-full p-4 bg-sourcing-orange text-white">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="font-bold text-2xl mt-2 text-sourcing-orange">21%</p>
                <p className="text-sm text-gray-600">Average Cost<br />Reduction</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-8">
              <svg className="w-20 h-20 text-sourcing-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4h-3v5a1 1 0 0 1-2 0V4H7a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1Zm-3 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                <path d="M9 6h6v2H9z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center text-sourcing-green">AGRO BUSINESS</h3>
            <p className="text-center text-lg mb-6">
              Specializing in agricultural commodities sourcing, we offer tailored solutions that optimize your supply chain and maximize profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
