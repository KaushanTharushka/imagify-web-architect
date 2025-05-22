
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sourcing-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-2">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM70 75C70 77.8 67.8 80 65 80H35C32.2 80 30 77.8 30 75V35C30 32.2 32.2 30 35 30H55L70 45V75Z" fill="#ffffff"/>
                  <path d="M55 45H65L55 35V45Z" fill="#ffffff"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Revive Agro</h2>
            </div>
            <p className="text-gray-200 mb-4">Empowering Growth Through Strategic Sourcing, Agro Innovation, and Business Excellence</p>
            <p className="text-gray-200 text-sm">© {new Date().getFullYear()} Revive Agro. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-sourcing-green-dark pb-2">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition">Global Sourcing</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Agro Products</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Business Consultancy</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Supply Chain Management</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-sourcing-green-dark pb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-200 hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Team</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Partners</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-sourcing-green-dark pb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-sourcing-footer-dark py-4">
        <div className="container mx-auto px-4 text-center text-gray-300 text-sm">
          <p>This website is designed to provide general information about Revive Agro and our services. The content is subject to change without notice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
