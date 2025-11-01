import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Gallery from '../components/Gallery';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import { Sparkles, Globe, Cpu, Zap, Target, Users, Leaf, Play, MessageCircle, Award } from 'lucide-react';

// Preloader Component
const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-teal-900 via-emerald-900 to-gray-900"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity }
          }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center"
        >
          <Leaf className="w-10 h-10 text-white" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Green Kenya Initiative
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

// Safe Particle Component
const Particle = ({ id }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only run in browser
    setPosition({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
    });
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
      initial={{
        x: position.x,
        y: position.y,
      }}
      animate={{
        x: position.x + (Math.random() - 0.5) * 200,
        y: position.y + (Math.random() - 0.5) * 200,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

// Floating Tech Elements
const FloatingElements = () => {
  const elements = [
    { icon: Sparkles, delay: 0, position: 'top-20 left-10' },
    { icon: Globe, delay: 0.5, position: 'top-40 right-20' },
    { icon: Cpu, delay: 1, position: 'bottom-40 left-20' },
    { icon: Zap, delay: 1.5, position: 'bottom-20 right-10' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            y: [0, -100, 0]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className={`absolute ${element.position} text-teal-400/20`}
        >
          <element.icon size={24} />
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Hero with Safe Particle Background
const EnhancedHero = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-teal-900 to-emerald-900 overflow-hidden">
      {/* Safe Particle Background */}
      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <Particle key={i} id={i} />
        ))}
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-400/25"
          >
            <Leaf className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6"
        >
          <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            GREEN
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text text-transparent">
            KENYA
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
            INITIATIVE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Harnessing <span className="text-emerald-300 font-semibold">technology</span> and <span className="text-cyan-300 font-semibold">innovation</span> to drive environmental conservation through youth empowerment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-2xl shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 flex items-center space-x-2"
          >
            <Target className="w-5 h-5" />
            <span>Explore Projects</span>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-300 font-bold rounded-2xl shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:bg-cyan-400/10 transition-all duration-300 flex items-center space-x-2"
          >
            <Users className="w-5 h-5" />
            <span>Join Movement</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-teal-300 text-center"
          >
            <div className="w-6 h-10 border-2 border-teal-300 rounded-full flex justify-center mx-auto mb-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-teal-300 rounded-full mt-2"
              />
            </div>
            <span className="text-sm font-medium">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Stats with Tech Cards
const EnhancedStats = () => {
  const stats = [
    { number: '50+', label: 'Tech-Enabled & Innovative Projects', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
    { number: '2,500+', label: 'Smart Trees Planted', icon: Leaf, color: 'from-emerald-500 to-green-500' },
    { number: '15+', label: 'Digital Communities', icon: Globe, color: 'from-teal-500 to-cyan-500' },
    { number: '300+', label: 'Innovation Volunteers', icon: Users, color: 'from-violet-500 to-purple-500' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px, rgba(16,185,129,0.2)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-500/25"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Digital <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">Impact</span> Metrics
          </h2>
          <p className="text-xl text-teal-200 max-w-2xl mx-auto">
            Real-time tracking of our technology-driven environmental initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-3xl md:text-4xl font-black text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-teal-200 font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Welcome Section with Founder
const WelcomeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image and Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/founder.jpg"
                alt="Sir Hannington Wanyonyi - Founder & CEO of Green Kenya Initiative"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Founder Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Founder & CEO
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-400 rounded-2xl rotate-12 opacity-20 z-0"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400 rounded-2xl -rotate-12 opacity-20 z-0"></div>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Welcome to GKI
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                <strong>Green Kenya Initiative (GKI)</strong> began as a vision to create a platform where young Kenyans could actively participate in environmental conservation and sustainable development programs. Our mission is to empower youth through hands-on projects that create both environmental impact and economic opportunities.
              </p>
              
              <p>
                Through innovative projects like tree planting, youth mentorship, avocado oil production, and Black Soldier Fly farming, we're not just conserving the environment - we're creating sustainable livelihoods and fostering community development across Kenya.
              </p>

              {/* Founder's Quote */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-l-4 border-teal-500 shadow-lg mt-6">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                      "GKI started with a vision — to empower youth and create a greener Kenya. Through collaboration, innovation, and environmental action, we believe in shaping a future where sustainability is driven by young people across every community."
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">HW</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Hannington Wanyonyi</p>
                        <p className="text-sm text-teal-600 dark:text-teal-400">Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { number: '4', label: 'Regions' },
                { number: '15+', label: 'Communities' },
                { number: '200+', label: 'Volunteers' },
                { number: '10+', label: 'Projects' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Green Kenya Initiative | Tech-Driven Environmental Innovation</title>
        <meta 
          name="description" 
          content="Next-gen environmental conservation through AI, IoT, and youth innovation. Green Kenya Initiative leads Kenya's digital sustainability revolution." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content="Green Kenya Initiative | Tech-Driven Environmental Innovation" />
        <meta property="og:description" content="Next-gen environmental conservation through AI, IoT, and youth innovation in Kenya." />
        <meta property="og:image" content="/images/gki-tech-preview.jpg" />
        <meta property="og:url" content="https://greenkenya.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Green Kenya Initiative" />
        
        {/* Enhanced Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Green Kenya Initiative - Digital Environmental Solutions" />
        <meta name="twitter:description" content="Harnessing technology for sustainable development in Kenya" />
        <meta name="twitter:image" content="/images/gki-tech-preview.jpg" />
        <meta name="twitter:creator" content="@greenkenya" />
        
        {/* Additional Meta */}
        <meta name="theme-color" content="#0d9488" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <main className="min-h-screen bg-gray-900">
        <FloatingElements />
        <Navbar />
        <EnhancedHero />
        <WelcomeSection />
        <EnhancedStats />
        <Gallery />
        <Leadership />
        <Footer />
      </main>
    </>
  );
}