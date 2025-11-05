'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Handle hydration and mount state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle image error - SIMPLIFIED FOR JAVASCRIPT
  const handleImageError = (e) => {
    const target = e.currentTarget;
    target.style.display = 'none';
  };

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-700' 
          : 'bg-white/90 backdrop-blur-sm dark:bg-gray-900/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/gki-logo.png"
                  alt="Green Kenya Initiative Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                  onError={handleImageError}
                />
              </div>
              <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                Green Kenya Initiative
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  pathname === item.href 
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 font-semibold' 
                    : 'text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <Link 
              href="/join" 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="lg:hidden absolute left-4 right-4 top-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
              >
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                          pathname === item.href 
                            ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 font-semibold' 
                            : 'text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <Link 
                      href="/join" 
                      className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join Us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;