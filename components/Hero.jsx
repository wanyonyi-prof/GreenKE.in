'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from './Button';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: "/images/hero/tree-planting.jpg",
      title: "Community Tree Planting",
      description: "Youth volunteers transforming urban spaces through sustainable greening initiatives",
      cta: "Join Our Next Planting",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 2,
      image: "/images/hero/youth-empowerment.jpg", 
      title: "Youth Empowerment Programs",
      description: "Developing future leaders through environmental education and skills training",
      cta: "Explore Programs",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      image: "/images/hero/clean-energy.jpg",
      title: "Sustainable Energy Solutions",
      description: "Bringing clean energy to rural communities across Kenya",
      cta: "Support Our Mission",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      image: "/images/hero/community-outreach.jpg",
      title: "Community Outreach",
      description: "Working hand-in-hand with local communities for lasting impact",
      cta: "Get Involved",
      color: "from-orange-600 to-red-600"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length, isMounted]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">
      {/* 🌟 CAROUSEL CONTAINER */}
      <div className="absolute inset-0">
        {/* Slide Backgrounds */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}
          >
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Optional: Add placeholder if images don't exist */}
            {!slide.image && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <p className="text-xl">{slide.title}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* 🌿 Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-overlay blur-2xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay blur-2xl"
          />
        </div>
      </div>

      {/* 🎯 CAROUSEL CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center w-full max-w-4xl">
            {/* Slide Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button variant="primary" size="lg">
                  {slides[currentSlide].cta}
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* 📍 Carousel Controls */}
            <div className="flex items-center justify-center gap-6 mt-16">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Slide Indicators */}
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={toggleAutoPlay}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                ) : (
                  <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;