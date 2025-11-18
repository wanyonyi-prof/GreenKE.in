'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Simple fallback components
const SimpleNavbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-sm h-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">GKI</span>
        </div>
        <span className="text-xl font-bold text-emerald-700">Green Kenya Initiative</span>
      </div>
    </div>
  </nav>
);

const SimpleFooter = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; 2025 Green Kenya Initiative. All rights reserved.</p>
    </div>
  </footer>
);

// Lazy-load Navbar and Footer (fallback on failure)
const Navbar = dynamic(() => import('@/components/Navbar').catch(() => SimpleNavbar), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer').catch(() => SimpleFooter), { ssr: false });

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <SimpleNavbar />
        <main className="flex-1 pt-20 animate-pulse bg-gray-100 dark:bg-gray-800" />
        <SimpleFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-1 pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
