
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Globe, Shield, DollarSign, Users, Target, Eye, Sparkles, TrendingUp, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Operations",
      description: "Driving operational efficiency and productivity across industries worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Supply Chain Excellence", 
      description: "Optimizing supply chains for cost reduction and enhanced performance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Sourcing",
      description: "Supporting sustainable global sourcing and agro product distribution",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Award,
      title: "Professional Branding",
      description: "Elevating branding for professionals and executives",
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-sourcing-green/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-sourcing-green/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-sourcing-green mr-2" />
            <span className="text-sourcing-green font-medium">Discover Our Story</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through innovative consultancy solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sourcing-green to-sourcing-orange bg-clip-text text-transparent">
                Who We Are
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are specialists in transformative consultancy, delivering excellence across:
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-sourcing-green transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-sourcing-green to-sourcing-green-dark">
                <CardHeader className="bg-transparent text-white pb-4">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 mr-3" />
                    <h3 className="font-bold text-2xl">MISSION</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-white/90 pt-0 pb-8">
                  <p className="text-lg leading-relaxed">
                    To deliver measurable growth and sustainability through innovative strategies tailored to client needs, 
                    fostering long-term partnerships built on trust and excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-sourcing-orange to-yellow-500">
                <CardHeader className="bg-transparent text-white pb-4">
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 mr-3" />
                    <h3 className="font-bold text-2xl">VISION</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-white/90 pt-0 pb-8">
                  <p className="text-lg leading-relaxed">
                    To be the trusted partner for businesses worldwide, excelling in sourcing, consultancy, 
                    and personal development while pioneering sustainable business practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-gray-100 to-gray-50 p-8 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-sourcing-green to-sourcing-orange rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Our Impact</h4>
                <p className="text-gray-600">Trusted by businesses across 5 continents</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sourcing-green via-sourcing-green-light to-sourcing-green p-12 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">OUR EXPERTISE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-white/90 mb-4">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg">Years of Excellence</div>
              </div>
              <p className="text-white/80 text-sm">
                Expertise from over a decade of leadership in operations and supply chains
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-white/90 mb-4">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Client Satisfaction</div>
              </div>
              <p className="text-white/80 text-sm">
                Proven track record of enhancing productivity and revenue growth for global clients
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-white/90 mb-4">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Ethical Practices</div>
              </div>
              <p className="text-white/80 text-sm">
                Commitment to ethical practices and sustainable growth
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
