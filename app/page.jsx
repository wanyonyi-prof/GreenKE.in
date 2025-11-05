// app/page.jsx — ULTRA REFINED & PRODUCTION-READY VERSION
'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { MessageCircle, Award, Users, Leaf, Target, Sparkles, ArrowRight } from 'lucide-react';

// Performance-optimized dynamic imports with loading states
const Stats = dynamic(() => import('@/components/Stats'), {
  ssr: false,
  loading: () => <StatsSkeleton />
});

const Gallery = dynamic(() => import('@/components/Gallery'), {
  ssr: false,
  loading: () => <GallerySkeleton />
});

const Leadership = dynamic(() => import('@/components/Leadership'), {
  ssr: false,
  loading: () => <LeadershipSkeleton />
});

// -----------------------------
// Loading Skeletons
// -----------------------------
const StatsSkeleton = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GallerySkeleton = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
        ))}
      </div>
    </div>
  </section>
);

const LeadershipSkeleton = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm animate-pulse">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// -----------------------------
// Enhanced Preloader with Progressive Loading
// -----------------------------
const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 15, 90));
    }, 200);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setProgress(100);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) return null;

  const motionProps = shouldReduceMotion ? {} : {
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div
      {...motionProps}
      aria-live="polite"
      aria-label="Loading Green Kenya Initiative"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-900"
    >
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(45, 212, 191, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0"
        />
      )}

      <motion.div
        initial={shouldReduceMotion ? {} : { scale: 0.9, opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? {} : { duration: 0.7, type: 'spring', stiffness: 90 }}
        className="text-center relative z-10"
      >
        {/* Animated Logo Container */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotateY: [0, 180, 360],
                  scale: [1, 1.06, 1],
                }
          }
          transition={
            shouldReduceMotion
              ? {}
              : {
                  rotateY: { duration: 3, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity },
                }
          }
          className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/25 border border-white/10 relative"
          aria-hidden="true"
        >
          <Leaf className="w-12 h-12 text-white" />
          {!shouldReduceMotion && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-white/30 border-r-white/10"
            />
          )}
        </motion.div>

        {/* Text Content */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { y: 16, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={shouldReduceMotion ? {} : { delay: 0.15, duration: 0.45 }}
          className="text-3xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-200"
        >
          Green Kenya Initiative
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-48 mx-auto mb-2">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
            />
          </div>
          <span className="text-xs text-white/70 font-medium">{progress}%</span>
        </div>

        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={shouldReduceMotion ? {} : { delay: 0.3 }}
          className="text-sm text-white/60 font-medium"
        >
          Loading sustainable futures...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// -----------------------------
// Motion Configuration Presets
// -----------------------------
const createMotionProps = (shouldReduceMotion) => ({
  fadeUp: {
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 24 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 }
  },
  fadeLeft: {
    initial: shouldReduceMotion ? {} : { opacity: 0, x: -32 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.7 }
  },
  fadeRight: {
    initial: shouldReduceMotion ? {} : { opacity: 0, x: 32 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.7 }
  },
  stagger: {
    initial: shouldReduceMotion ? {} : { opacity: 0 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  }
});

// -----------------------------
// Enhanced WelcomeSection with Micro-Interactions
// -----------------------------
const WelcomeSection = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const motionConfig = createMotionProps(shouldReduceMotion);

  const impactStats = [
    { number: '4', label: 'Active Regions', icon: '🗺️', color: 'from-blue-500 to-cyan-500', delay: 0.15 },
    { number: '15+', label: 'Communities', icon: '🏘️', color: 'from-emerald-500 to-green-500', delay: 0.2 },
    { number: '300+', label: 'Volunteers', icon: '👥', color: 'from-purple-500 to-pink-500', delay: 0.25 },
    { number: '10+', label: 'Projects', icon: '🌱', color: 'from-orange-500 to-red-500', delay: 0.3 }
  ];

  const coreFocusAreas = [
    'Environmental Conservation & Tree Planting',
    'Youth Empowerment & Mentorship Programs',
    'Sustainable Agriculture Initiatives',
    'Community Development Projects'
  ];

  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 overflow-hidden"
      role="region"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-12 right-12 w-72 h-72 bg-teal-200/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-emerald-200/8 rounded-full blur-3xl pointer-events-none" />
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/5 rounded-full blur-2xl pointer-events-none"
          style={{ x: '-50%', y: '-50%' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.header {...motionConfig.fadeUp} className="text-center mb-16">
          <h1 id="welcome-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Diversified Youth Empowerment, Kenya Is My Home{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent relative">
              Green Kenya Initiative
              {!shouldReduceMotion && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </motion.span>
              )}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 font-semibold max-w-4xl mx-auto leading-relaxed">
            <span className="block mb-3" aria-label="Our mission: Empowering Youth, Greening Kenya, Building Sustainable Futures">
              Empowering Youth. Greening Kenya. Building Sustainable Futures.
            </span>
            <span 
              className="block text-lg md:text-xl text-emerald-700 dark:text-emerald-300 italic border-l-4 border-emerald-400 pl-4 py-1"
              aria-label="Swahili motto: Vijana ni Nguvu; Imani Yetu, Ngao Yetu - meaning Youth are Power; Our Faith, Our Shield"
            >
              Vijana ni Nguvu; Imani Yetu, Ngao Yetu
            </span>
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
          {/* LEFT: Enhanced Mission & Overview */}
          <article className="space-y-8" aria-labelledby="mission-heading">
            {/* Centered Mission & Vision Header */}
            <motion.div {...motionConfig.fadeLeft} className="text-center lg:text-left">
              <div className="inline-flex flex-col items-center lg:items-start space-y-4 mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl border border-emerald-100 dark:border-emerald-800/30">
                <div className="flex items-center justify-center lg:justify-start space-x-4 w-full">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/25 relative overflow-hidden"
                  >
                    <Target className="w-8 h-8 text-white relative z-10" aria-hidden="true" />
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                      />
                    )}
                  </motion.div>
                  
                  <div className="text-center lg:text-left">
                    <h2 id="mission-heading" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Our Mission & Vision
                    </h2>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">
                      Creating Sustainable Impact Across Kenya
                    </p>
                  </div>
                </div>
                
                {/* Mission & Vision Statements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-4">
                  <div className="text-center p-4 bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/40">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">🎯</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      To empower youth through environmental action and sustainable community development
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800/40">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">🌟</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      A Kenya where youth lead in creating green, sustainable communities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Content */}
            <motion.div {...motionConfig.fadeLeft} className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900 dark:text-white">Green Kenya Initiative (GKI)</strong> is a youth-led movement dedicated to environmental conservation and sustainable community development. We believe in the power of young people to drive meaningful change.
              </p>

              <p>
                Our platform empowers Kenyan youth to actively participate in creating greener, more sustainable communities through hands-on projects and innovative solutions.
              </p>

              {/* Enhanced Core Focus Areas */}
              <motion.aside
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 border-2 border-emerald-200/60 dark:border-emerald-700/30 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm"
                aria-label="Core focus areas"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Our Core Focus Areas
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreFocusAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 4 }}
                      className="flex items-start gap-4 p-4 bg-white/60 dark:bg-gray-800/40 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <span className="text-white font-bold text-sm">
                          {['🌿', '🚀', '🌱', '🏘️'][index]}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{area.split(' & ')[0]}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{area.split(' & ')[1]}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.aside>
            </motion.div>

            {/* Visually Enhanced Impact Stats - FIXED VERSION */}
            <motion.div
              {...motionConfig.stagger}
              className="grid grid-cols-2 gap-6 pt-8"
              aria-label="Organization impact statistics"
            >
              {impactStats.map((stat, idx) => {
                // Safe color extraction with fallbacks
                const getColorValues = (colorString) => {
                  try {
                    // Handle different color string formats safely
                    const colors = colorString.split(' ');
                    const fromColor = colors[1] || 'emerald-500';
                    const toColor = colors[3] || 'teal-500';
                    
                    // Convert to lighter variants for the animation
                    const fromLight = fromColor.replace('500', '200');
                    const toLight = toColor.replace('500', '200');
                    
                    return { fromLight, toLight };
                  } catch (error) {
                    // Fallback colors if parsing fails
                    return { fromLight: 'emerald-200', toLight: 'teal-200' };
                  }
                };

                const { fromLight, toLight } = getColorValues(stat.color);

                return (
                  <motion.div
                    key={stat.label}
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}
                    whileHover={shouldReduceMotion ? {} : { 
                      y: -6, 
                      scale: 1.05,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                    className="relative text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  >
                    {/* Simplified Animated Background */}
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ 
                          opacity: [0.03, 0.06, 0.03]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-2xl"
                      />
                    )}
                    
                    {/* Icon Container */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                          <span className="text-xl text-white">{stat.icon}</span>
                        </div>
                      </div>
                      
                      {/* Number with Counter Animation */}
                      <motion.div 
                        className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                        aria-label={`${stat.number} ${stat.label}`}
                      >
                        {stat.number}
                      </motion.div>
                      
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        {stat.label}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: stat.delay + 0.3 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link
                href="/projects"
                className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 group"
                aria-label="Explore our projects and initiatives"
              >
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-lg">Explore Our Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/about"
                className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 hover:shadow-lg text-lg"
                aria-label="Learn more about Green Kenya Initiative"
              >
                Learn More
              </Link>
            </motion.div>
          </article>

          {/* RIGHT: Enhanced Founder Message */}
          <motion.aside {...motionConfig.fadeRight} className="space-y-8" aria-labelledby="founder-heading">
            <figure className="relative group" aria-hidden="false">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/founder.jpg"
                  alt="Sir Hannington Wanyonyi — Founder & CEO of Green Kenya Initiative, speaking passionately about youth empowerment and environmental conservation"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <figcaption className="sr-only">
                  Hannington Wanyonyi — Founder & CEO of Green Kenya Initiative
                </figcaption>

                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-2 text-sm font-semibold">
                    <Award className="w-4 h-4" aria-hidden="true" />
                    <span>Founder & CEO</span>
                  </div>
                </motion.div>
              </motion.div>
            </figure>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="bg-white/85 dark:bg-gray-800/85 backdrop-blur rounded-3xl p-6 sm:p-8 border border-emerald-200/40 dark:border-emerald-700/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              role="article"
              aria-labelledby="founder-heading"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-md" aria-hidden="true" />
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full"
                />
              )}
              
              <div className="flex items-start gap-4 relative z-10">
                <MessageCircle className="w-8 h-8 text-emerald-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 id="founder-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    A Message From Our Founder
                  </h3>

                  <blockquote className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6 border-l-4 border-emerald-200 dark:border-emerald-700 pl-4">
                    "GKI started with a vision — to empower youth and create a greener Kenya. Through collaboration, innovation, and environmental action, we believe in shaping a future where sustainability is driven by young people across every community."
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow">
                      <span className="text-white font-bold text-sm">HW</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Hannington Wanyonyi</p>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <Link
              href="/join"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 group"
              aria-label="Join our movement and become a volunteer"
            >
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Join Our Movement</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

// -----------------------------
// Main Page Component
// -----------------------------
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="h-12 bg-gray-100 dark:bg-gray-800 animate-pulse" />
        <div className="h-screen bg-gray-50 dark:bg-gray-800 animate-pulse" />
      </main>
    );
  }

  return (
    <>
      {/* Enhanced Skip Link */}
      <a
        href="#welcome"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-200 focus:scale-105"
      >
        Skip to main content
      </a>

      <AnimatePresence mode="wait">
        {isLoading && !shouldReduceMotion && <Preloader />}
      </AnimatePresence>

      <main id="main" className="min-h-screen bg-white dark:bg-gray-900" role="main">
        <Navbar />
        <Hero />
        <WelcomeSection />
        
        {/* Suspense boundaries for better loading states */}
        <Suspense fallback={<StatsSkeleton />}>
          <Stats />
        </Suspense>
        
        <Suspense fallback={<GallerySkeleton />}>
          <Gallery />
        </Suspense>
        
        <Suspense fallback={<LeadershipSkeleton />}>
          <Leadership />
        </Suspense>
        
        <Footer />
      </main>
    </>
  );
}