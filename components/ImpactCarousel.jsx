// components/ImpactCarousel.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const ImpactCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    {
      id: 1,
      image: "/images/carousel/tree-planting.jpg",
      title: "Community Tree Planting",
      description: "Youth volunteers planting trees in urban areas to combat climate change",
      stats: "5,000+ Trees Planted"
    },
    {
      id: 2,
      image: "/images/carousel/youth-training.jpg",
      title: "Youth Empowerment Training",
      description: "Skills development for sustainable agriculture and environmental conservation",
      stats: "300+ Youth Trained"
    },
    {
      id: 3,
      image: "/images/carousel/clean-energy.jpg",
      title: "Clean Energy Projects",
      description: "Implementing solar solutions in rural communities across Kenya",
      stats: "15 Communities Powered"
    },
    {
      id: 4,
      image: "/images/carousel/community-outreach.png",
      title: "Community Outreach",
      description: "Engaging local communities in environmental awareness and action",
      stats: "10,000+ People Reached"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image with Fallback */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              onError={(e) => {
                // If image fails to load, use gradient background
                e.target.style.display = 'none';
              }}
            />
            {/* Fallback Gradient Background */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${
                currentSlide % 2 === 0 
                  ? 'from-emerald-600 to-teal-600' 
                  : 'from-blue-600 to-cyan-600'
              }`}
              style={{ display: 'none' }}
              id={`fallback-${currentSlide}`}
            />
          </div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center text-white p-8">
            <div className="text-center max-w-4xl">
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h3>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30"
              >
                <span className="font-semibold text-lg">
                  {slides[currentSlide].stats}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
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

      {/* Auto-play Indicator */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
          <span className="text-white text-sm">
            {isAutoPlaying ? 'Auto' : 'Paused'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImpactCarousel;