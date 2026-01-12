// app/impact/page.jsx - CREATE THIS NEW FILE
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Target, Users, TreePine, Droplets, Cloud, Award, TrendingUp, 
  MapPin, Calendar, BarChart3, Heart, Globe, Shield, Leaf,
  ChevronRight, Download, Share2, Filter, Zap, Clock
} from 'lucide-react';

const ImpactPage = () => {
  const [activeYear, setActiveYear] = useState('2024');
  const [activeRegion, setActiveRegion] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Years filter
  const years = ['2021', '2022', '2023', '2024'];
  
  // Regions filter
  const regions = [
    { id: 'all', name: 'All Regions', count: 15 },
    { id: 'coastal', name: 'Coastal', count: 5 },
    { id: 'nairobi', name: 'Nairobi', count: 4 },
    { id: 'rift', name: 'Rift Valley', count: 3 },
    { id: 'western', name: 'Western', count: 3 },
  ];

  // Key Metrics Data
  const keyMetrics = [
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Trees Planted",
      value: "2,500+",
      change: "+15%",
      trend: "up",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      description: "Survival rate: 92%",
      detail: "Indigenous species planted"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Volunteers Engaged",
      value: "300+",
      change: "+25%",
      trend: "up",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      description: "Youth participation: 78%",
      detail: "Active monthly volunteers"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Access",
      value: "1,000+ L/day",
      change: "+40%",
      trend: "up",
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      description: "Clean water systems installed",
      detail: "Serving 500+ households"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Communities Reached",
      value: "15+",
      change: "+3",
      trend: "up",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      description: "Direct beneficiaries",
      detail: "Across 4 counties"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "CO₂ Sequestered",
      value: "500+ tons",
      change: "+30%",
      trend: "up",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      description: "Annual carbon capture",
      detail: "Equivalent to 100 cars"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Waste Diverted",
      value: "50+ tons",
      change: "+60%",
      trend: "up",
      color: "from-indigo-500 to-violet-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      description: "From landfills",
      detail: "Recycled or composted"
    }
  ];

  // Impact Stories
  const impactStories = [
    {
      id: 1,
      title: "Kilifi Mangrove Restoration",
      description: "Restored 5 hectares of mangrove forests, creating natural carbon sinks and protecting coastal communities from erosion.",
      image: "/images/mangrove-restoration.jpg",
      region: "Coastal",
      year: "2023",
      metrics: [
        { label: "Mangroves Planted", value: "10,000+" },
        { label: "Jobs Created", value: "45" },
        { label: "Coastline Protected", value: "2km" }
      ],
      testimonial: "This project changed our community. The mangroves protect our homes and provide fishing grounds.",
      author: "Fatima Ali, Community Leader",
      color: "border-teal-200 dark:border-teal-800"
    },
    {
      id: 2,
      title: "Nairobi Youth Green Jobs",
      description: "Trained 120 youth in urban farming and waste management, creating sustainable income opportunities.",
      image: "/images/youth-training.jpg",
      region: "Nairobi",
      year: "2024",
      metrics: [
        { label: "Youth Trained", value: "120" },
        { label: "Businesses Started", value: "15" },
        { label: "Monthly Income", value: "KSh 25k avg" }
      ],
      testimonial: "GKI gave me skills to start my own urban farm. I now earn while contributing to a greener city.",
      author: "John Kimani, Program Graduate",
      color: "border-emerald-200 dark:border-emerald-800"
    },
    {
      id: 3,
      title: "Turkana Water Access Project",
      description: "Installed solar-powered water purification systems, providing clean water to 3,000+ residents.",
      image: "/images/water-project.JPG",
      region: "Rift Valley",
      year: "2023",
      metrics: [
        { label: "Systems Installed", value: "8" },
        { label: "People Served", value: "3,000+" },
        { label: "Waterborne Illness", value: "-70%" }
      ],
      testimonial: "Clean water has transformed our village. Children are healthier and women save hours daily.",
      author: "Sarah Napeyok, Village Elder",
      color: "border-blue-200 dark:border-blue-800"
    }
  ];

  // Year-over-Year Progress
  const yearlyProgress = [
    { year: '2021', trees: 800, volunteers: 120, communities: 5, co2: 150 },
    { year: '2022', trees: 1200, volunteers: 180, communities: 8, co2: 250 },
    { year: '2023', trees: 1800, volunteers: 240, communities: 12, co2: 380 },
    { year: '2024', trees: 2500, volunteers: 300, communities: 15, co2: 500 }
  ];

  // Regional Impact
  const regionalImpact = [
    {
      region: "Coastal",
      projects: 8,
      trees: 1200,
      volunteers: 150,
      highlights: ["Mangrove restoration", "Fisheries protection", "Tourism boost"],
      color: "bg-teal-100 dark:bg-teal-900/30"
    },
    {
      region: "Nairobi",
      projects: 6,
      trees: 800,
      volunteers: 100,
      highlights: ["Urban farming", "Waste management", "Youth employment"],
      color: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      region: "Rift Valley",
      projects: 5,
      trees: 300,
      volunteers: 30,
      highlights: ["Water access", "Soil conservation", "Pastoral support"],
      color: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      region: "Western",
      projects: 4,
      trees: 200,
      volunteers: 20,
      highlights: ["Afforestation", "Energy efficiency", "Climate education"],
      color: "bg-purple-100 dark:bg-purple-900/30"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Loading Impact Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900/10">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5" />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">Measuring Impact Since 2021</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600">Impact</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10">
              Tracking progress, measuring change, and celebrating the tangible difference we're making across Kenya's environment and communities.
            </p>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800/30 shadow-lg"
            >
              {[
                { icon: <TreePine className="w-5 h-5" />, label: "2,500+ Trees" },
                { icon: <Users className="w-5 h-5" />, label: "300+ Volunteers" },
                { icon: <Droplets className="w-5 h-5" />, label: "15 Communities" },
                { icon: <Award className="w-5 h-5" />, label: "4 Years Active" }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="text-emerald-600 dark:text-emerald-400">
                    {stat.icon}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Filter Impact Data
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Year Filter */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                        activeYear === year
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region.id)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                        activeRegion === region.id
                          ? 'bg-teal-600 text-white shadow-md'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {region.name}
                      <span className="text-xs opacity-75">({region.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impact Dashboard
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real-time metrics showing our environmental and social impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`${metric.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color}`}>
                      <div className="text-white">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
                        metric.trend === 'up' 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        <TrendingUp className="w-3 h-3" />
                        {metric.change}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {metric.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {metric.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {metric.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Impact Stories
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Real stories from communities transformed
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors group"
              >
                View All Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {impactStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border ${story.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {story.region}
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                        {story.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {story.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {story.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                            "{story.testimonial}"
                          </p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {story.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Progress Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg mb-20"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Year-over-Year Growth
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Tracking our progress since inception
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Report
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Year</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Trees Planted</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Volunteers</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Communities</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">CO₂ Sequestered (tons)</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyProgress.map((yearData, index) => (
                    <motion.tr
                      key={yearData.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-b border-gray-100 dark:border-gray-700/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors ${
                        yearData.year === activeYear ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            yearData.year === '2024' ? 'bg-emerald-500' :
                            yearData.year === '2023' ? 'bg-teal-500' :
                            yearData.year === '2022' ? 'bg-blue-500' : 'bg-gray-400'
                          }`} />
                          <span className="font-bold text-gray-900 dark:text-white">{yearData.year}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <TreePine className="w-4 h-4 text-emerald-500" />
                          <span className="font-semibold text-gray-900 dark:text-white">{yearData.trees.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-gray-900 dark:text-white">{yearData.volunteers}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span className="font-semibold text-gray-900 dark:text-white">{yearData.communities}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Cloud className="w-4 h-4 text-amber-500" />
                          <span className="font-semibold text-gray-900 dark:text-white">{yearData.co2}+</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          {index > 0 ? `${Math.round(((yearData.trees - yearlyProgress[index-1].trees) / yearlyProgress[index-1].trees) * 100)}%` : '—'}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Regional Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
              Regional Impact Distribution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalImpact.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${region.color} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {region.region}
                    </h3>
                    <div className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-semibold">
                      {region.projects} projects
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Trees Planted</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{region.trees}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full" 
                          style={{ width: `${(region.trees / 1200) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Volunteers</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{region.volunteers}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(region.volunteers / 150) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1">
                      {region.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-white/80" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of Our Impact Story
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join our movement and help us create even greater impact across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Join as Volunteer
              </Link>
              
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all transform hover:scale-105 shadow-lg"
              >
                <Heart className="w-5 h-5" />
                Support Our Work
              </Link>
              
              <Link
                href="/share-impact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105"
              >
                <Share2 className="w-5 h-5" />
                Share Impact
              </Link>
            </div>

            <p className="mt-8 text-emerald-200 text-sm">
              Every action counts. Together, we're building a greener, more sustainable Kenya.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ImpactPage;