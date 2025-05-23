
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatSupport from "@/components/ChatSupport";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to hash on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sourcing-green z-[100] origin-left"
        style={{ scaleX }}
      />
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <SolutionsSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatSupport />
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-sourcing-green text-white p-2 rounded-full shadow-lg hover:bg-sourcing-green-dark transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUpCircle className="h-6 w-6" />
      </motion.button>
      
      {/* Decorative elements */}
      <div className="decor-circle w-64 h-64 -top-20 -right-20 hidden lg:block"></div>
      <div className="decor-circle w-96 h-96 -bottom-40 -left-40 hidden lg:block"></div>
    </div>
  );
};

export default Index;
