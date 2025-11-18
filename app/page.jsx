// app/page.jsx - ENHANCED GREEN KENYA INITIATIVE
'use client';

import React from 'react'; // ✅ ADD THIS IMPORT
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageCircle, Award, Users, Leaf, Target, Sparkles, ArrowRight, MapPin, Clock, TreePine } from 'lucide-react';

// Safe component imports with error boundaries
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false,
  loading: () => (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-emerald-600">Green Kenya Initiative</div>
          <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </nav>
  )
});

const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => (
    <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-20 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-4 bg-emerald-400 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="w-64 h-8 bg-emerald-400 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="w-48 h-4 bg-emerald-400 rounded mx-auto animate-pulse"></div>
      </div>
    </section>
  )
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-32 h-4 bg-gray-700 rounded mx-auto animate-pulse"></div>
      </div>
    </footer>
  )
});

// Enhanced dynamic imports with better error handling
const ImpactCarousel = dynamic(() => import('@/components/ImpactCarousel'), {
  ssr: false,
  loading: () => <CarouselSkeleton />
});

const ProjectGrid = dynamic(() => import('@/components/ProjectGrid'), {
  ssr: false,
  loading: () => <GridSkeleton />
});

const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false,
  loading: () => null
});

// Motion configuration utility
const createMotionProps = (shouldReduceMotion) => ({
  fadeUp: {
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 20 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  },
  fadeLeft: {
    initial: shouldReduceMotion ? {} : { opacity: 0, x: -20 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  },
  fadeRight: {
    initial: shouldReduceMotion ? {} : { opacity: 0, x: 20 },
    whileInView: shouldReduceMotion ? {} : { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  },
  stagger: {
    initial: shouldReduceMotion ? {} : {},
    whileInView: shouldReduceMotion ? {} : {},
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  }
});

// Skeletons for loading states
const CarouselSkeleton = () => (
  <section className="h-96 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 animate-pulse">
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
      </div>
    </div>
  </section>
);

const GridSkeleton = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  </section>
);

// Enhanced WelcomeSection Component
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

  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 overflow-hidden"
      role="region"
    >
      {/* Background Elements */}
      <div className="absolute top-12 right-12 w-72 h-72 bg-teal-200/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-emerald-200/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.header {...motionConfig.fadeUp} className="text-center mb-16">
          <h1 id="welcome-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Diversified Youth Empowerment, Kenya Is My Home{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent relative">
              Green Kenya Initiative
            </span>
          </h1>
        </motion.header>

        {/* IMPACT CAROUSEL SECTION */}
        <section className="mb-20" aria-labelledby="impact-heading">
          <motion.div {...motionConfig.fadeUp} className="text-center mb-12">
            <h2 id="impact-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact in Action
            </h2>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 max-w-3xl mx-auto">
              See how we're transforming communities across Kenya through environmental action
            </p>
          </motion.div>
          
          <Suspense fallback={<CarouselSkeleton />}>
            <ImpactCarousel />
          </Suspense>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
          {/* LEFT: Mission & Overview */}
          <article className="space-y-8" aria-labelledby="mission-heading">
            <motion.div {...motionConfig.fadeLeft}>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 id="mission-heading" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Our Mission & Vision
                    </h2>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      Creating Sustainable Impact Across Kenya
                    </p>
                  </div>
                </div>
                
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Green Kenya Initiative (GKI)</strong> is a youth-led movement dedicated to environmental conservation and sustainable community development.
                  </p>
                  <p>
                    We empower Kenyan youth to actively participate in creating greener, more sustainable communities through hands-on projects and innovative solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              {...motionConfig.stagger}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {impactStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-md`}>
                    <span className="text-2xl text-white">{stat.icon}</span>
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </article>

          {/* RIGHT: Enhanced with PROJECT GRID */}
          <motion.aside {...motionConfig.fadeRight} className="space-y-8">
            {/* PROJECT GRID SECTION */}
            <Suspense fallback={<GridSkeleton />}>
              <ProjectGrid />
            </Suspense>

            {/* Founder Message */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="bg-white/85 dark:bg-gray-800/85 backdrop-blur rounded-3xl p-8 border border-emerald-200/40 dark:border-emerald-700/30 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    A Message From Our Founder
                  </h3>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6 border-l-4 border-emerald-200 dark:border-emerald-700 pl-4">
                    "GKI started with a vision — to empower youth and create a greener Kenya. Through collaboration, innovation, and environmental action, we believe in shaping a sustainable future."
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow">
                      <span className="text-white font-bold text-sm">HW</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Sir. Hannington Wanyonyi</p>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>

      {/* FLOATING CHAT WIDGET */}
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </section>
  );
};

// Main Page Component with Error Boundary
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Loading Green Kenya Initiative...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ErrorBoundary>
        <Suspense fallback={
          <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="w-32 h-6 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </nav>
        }>
          <Navbar />
        </Suspense>
        
        <WelcomeSection />
        
        <Suspense fallback={
          <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-48 h-4 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          </footer>
        }>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

// Simple Error Boundary for Client Components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-8">
            <div className="text-red-600 text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Component Error</h1>
            <p className="text-gray-600 mb-6">There was an issue loading this section.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}