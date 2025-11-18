// components/ProjectGrid.jsx
'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ProjectGrid = () => {
  return (
    <div className="space-y-8">
      {/* Main Project Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Large Left Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Current Major Project
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Urban Greening Initiative: Transforming Nairobi's public spaces through community-led tree planting and sustainable landscaping.
              </p>
              <div className="flex items-center gap-2 text-emerald-100">
                <MapPin className="w-5 h-5" />
                <span>Nairobi County & Surrounding Areas</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                View Project Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Container - Where to Find Us */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Where to Find Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're active in multiple counties across Kenya. Find our projects and volunteer opportunities near you.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>Nairobi Headquarters</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>Coastal Region Projects</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>Rift Valley Initiatives</span>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300 mt-6"
          >
            <MapPin className="w-5 h-5" />
            WHERE TO FIND US
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGrid;