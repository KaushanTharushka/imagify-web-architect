
import React from 'react';

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">GLOBAL SOURCING SOLUTIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-2xl mb-4 text-sourcing-green">What We Offer:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Supplier identification and evaluation tailored to client needs</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Contract negotiation to secure favourable terms and pricing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Integrated logistics management to streamline the procurement process</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Risk assessment and compliance monitoring to meet international standards</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-2xl mb-4 text-sourcing-green">Key Industries Served:</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Retail and consumer goods</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Organic and sustainable food products</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                <span>Fashion and apparel</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 md:p-10 rounded-xl mb-12">
          <h3 className="font-bold text-2xl mb-4 text-sourcing-green">Case Study:</h3>
          <p className="mb-6">For a European retailer, sourced a new supplier network that reduced procurement costs by 20% and improved lead time by 15%.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="inline-block rounded-full p-4 bg-sourcing-green text-white">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="font-bold text-2xl mt-2 text-sourcing-green">20%</p>
              <p className="text-sm text-gray-600">COST REDUCTION</p>
            </div>
            
            <div className="text-center">
              <div className="inline-block rounded-full p-4 bg-sourcing-orange text-white">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="font-bold text-2xl mt-2 text-sourcing-orange">15%</p>
              <p className="text-sm text-gray-600">LEAD TIME IMPROVEMENT</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="section-heading">CLIENT SUCCESS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
              <h3 className="font-bold text-xl mb-3 text-sourcing-green">Global Sourcing</h3>
              <p className="text-gray-600">Efficiently connecting businesses with reliable, cost-effective suppliers worldwide.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
              <h3 className="font-bold text-xl mb-3 text-sourcing-green">Agro Products</h3>
              <p className="text-gray-600">Exporting premium products, such as True Ceylon Cinnamon, through ethical sourcing practices.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
              <h3 className="font-bold text-xl mb-3 text-sourcing-green">Branding</h3>
              <p className="text-gray-600">Empowering businesses and professionals to establish themselves as thought leaders in their industries.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sourcing-green">
              <h3 className="font-bold text-xl mb-3 text-sourcing-green">Business & Supply Chain Consultancy</h3>
              <p className="text-gray-600">Designing and implementing optimized workflows, Agile methodologies, and strategic plans.</p>
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
              Revive Agro, a trusted name in sourcing premium agro products, with a strong emphasis on sustainability and quality.
            </p>
            <p className="text-center font-bold mb-4">Flagship Product:</p>
            <p className="text-center mb-6">
              True Ceylon Cinnamon under the Cinnatera brand. Known for its unmatched aroma, flavor, and medicinal properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
