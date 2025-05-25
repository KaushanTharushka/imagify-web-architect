
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Sprout, Globe, Award, BarChart3, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

        {/* Redesigned CLIENT SUCCESS section with more user-friendly approach */}
        <div className="mb-12">
          <h2 className="section-heading">CLIENT SUCCESS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <motion.div 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-3 bg-sourcing-green"></div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Globe className="h-14 w-14 text-sourcing-green group-hover:text-sourcing-orange transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-sourcing-green">Global Sourcing</h3>
                <p className="text-gray-600 text-center">Efficiently connecting businesses with reliable, cost-effective suppliers worldwide.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-3 bg-sourcing-green"></div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Sprout className="h-14 w-14 text-sourcing-green group-hover:text-sourcing-orange transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-sourcing-green">Agro Products</h3>
                <p className="text-gray-600 text-center">Exporting premium products, such as True Ceylon Cinnamon, through ethical sourcing practices.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-3 bg-sourcing-green"></div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-14 w-14 text-sourcing-green group-hover:text-sourcing-orange transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-sourcing-green">Branding</h3>
                <p className="text-gray-600 text-center">Empowering businesses and professionals to establish themselves as thought leaders in their industries.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-3 bg-sourcing-green"></div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-14 w-14 text-sourcing-green group-hover:text-sourcing-orange transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-sourcing-green">Business & Supply Chain Consultancy</h3>
                <p className="text-gray-600 text-center">Designing and implementing optimized workflows, Agile methodologies, and strategic plans.</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Redesigned AGRO BUSINESS section with attractive animations and the uploaded image */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="max-w-5xl w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
                <div className="p-8 md:p-12 relative z-20">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center mb-6">
                          <img 
                            src="/lovable-uploads/91603dcd-d955-45bb-930c-87699f083e9b.png" 
                            alt="Revive Agro Logo" 
                            className="h-12 w-auto mr-4"
                          />
                          <h2 className="text-4xl font-bold text-gold">AGRO BUSINESS</h2>
                        </div>
                        <p className="text-white text-lg mb-6">
                          Revive Agro, a trusted name in sourcing premium agro products, with a strong emphasis on sustainability and quality.
                        </p>
                        <div className="mb-6">
                          <h3 className="text-gold text-2xl font-semibold mb-4">Flagship Product:</h3>
                          <p className="text-white">
                            True Ceylon Cinnamon under the Cinnatera brand. Known for its unmatched aroma, flavor, and medicinal properties.
                          </p>
                        </div>
                        <motion.button 
                          className="px-6 py-3 bg-sourcing-orange text-white rounded-full font-medium hover:bg-sourcing-orange-light transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore Our Products
                        </motion.button>
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <motion.div 
                          animate={{ 
                            y: [0, -10, 0], 
                            rotate: [0, 2, 0] 
                          }}
                          transition={{ 
                            duration: 6, 
                            ease: "easeInOut", 
                            repeat: Infinity 
                          }}
                        >
                          <img 
                            src="/lovable-uploads/5c445bed-2dcc-4189-ba9e-d5290a94ef5e.png" 
                            alt="Cinnatera Cinnamon Products" 
                            className="max-h-[400px] object-contain"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-r from-sourcing-orange to-yellow-400 blur-xl opacity-40"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-sourcing-footer-dark p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gold text-xl font-semibold mb-4">Product Range:</h4>
                    <ul className="space-y-3">
                      <motion.li 
                        className="flex items-center text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                        <span>True Ceylon Cinnamon (sticks, powder, oil)</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                        <span>Organic spices: black pepper, turmeric, cloves</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                        <span>Coconut products: organic virgin coconut oil, desiccated coconut</span>
                      </motion.li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gold text-xl font-semibold mb-4">Value Proposition:</h4>
                    <ul className="space-y-3">
                      <motion.li 
                        className="flex items-center text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                        <span>Guaranteed purity with traceable supply chains</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                        <span>Ethical partnerships with Sri Lankan farmers and producers</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center text-white"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sourcing-orange mr-2"></div>
                        <span>Competitive pricing for high-demand global markets</span>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
