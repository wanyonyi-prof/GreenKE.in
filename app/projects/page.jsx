// app/projects/page.jsx - CREATE THIS NEW FILE
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, MapPin, Target, CheckCircle, Play, X, Volume2, VolumeX, Filter } from 'lucide-react';

const VideoPlayer = ({ video, title, onClose }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-teal-300 transition-colors z-10"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
        
        <div className="relative aspect-w-16 aspect-h-9 bg-black rounded-2xl overflow-hidden">
          {videoError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <X size={24} />
                </div>
                <p className="text-lg font-semibold">Video Not Available</p>
                <p className="text-gray-400 mt-2">The video file could not be loaded.</p>
              </div>
            </div>
          ) : (
            <>
              <video
                src={video}
                controls
                autoPlay
                muted={isMuted}
                className="w-full h-full object-contain"
                onError={handleVideoError}
              />
              
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, onVideoPlay }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'ongoing': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'ongoing': return '🔄';
      case 'planned': return '📅';
      default: return '📋';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Media Section */}
      <div className="relative h-64 overflow-hidden">
        {project.video ? (
          // Video Thumbnail
          <div 
            className="relative w-full h-full cursor-pointer bg-gradient-to-br from-teal-900/20 to-emerald-900/20"
            onClick={() => onVideoPlay(project.video, project.title)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onVideoPlay(project.video, project.title)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 mb-4 mx-auto shadow-lg">
                  <Play className="w-6 h-6 text-teal-600 ml-1" fill="currentColor" />
                </div>
                <p className="text-white font-semibold text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  Watch Project Video
                </p>
              </div>
            </div>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        ) : (
          // Image Only
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${getStatusColor(project.status)} flex items-center space-x-1 backdrop-blur-sm`}>
            <span>{getStatusIcon(project.status)}</span>
            <span>{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
          </span>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-gray-600 dark:text-gray-400">
              {project.volunteers} {project.volunteers === 1 ? 'volunteer' : 'volunteers'}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-gray-600 dark:text-gray-400">
              {new Date(project.startDate).toLocaleDateString('en-US', { 
                month: 'short', 
                year: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Locations */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <span className="truncate">{project.locations.join(', ')}</span>
        </div>

        {/* Impact */}
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
            {project.impact}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Updated projects data with fallback for missing videos
  const projects = [
    {
      title: 'Community Tree Planting',
      description: 'Large-scale reforestation initiative across multiple counties to combat deforestation and promote biodiversity through indigenous tree species.',
      image: '/images/tree-planting.jpg',
      video: '/videos/tree-planting.MP4', // Make sure this file exists in public/videos/
      status: 'ongoing',
      volunteers: 150,
      locations: ['Kilifi', 'Mombasa', 'Kwale'],
      startDate: '2023-01-15',
      impact: '2,500+ trees planted'
    },
    {
      title: 'Youth Environmental Education',
      description: 'Interactive educational programs in schools teaching children about environmental conservation, climate change, and sustainable practices.',
      image: '/images/education-project.jpg',
      video: '/videos/education-program.MP4', // Make sure this file exists
      status: 'completed',
      volunteers: 80,
      locations: ['Nairobi', 'Kisumu'],
      startDate: '2023-03-01',
      impact: '5,000+ students reached'
    },
    {
      title: 'Clean Water Access',
      description: 'Installing sustainable water purification systems and promoting water conservation practices in underserved rural communities.',
      image: '/images/water-project.JPG',
      // No video for this project
      status: 'ongoing',
      volunteers: 45,
      locations: ['Turkana', 'Marsabit'],
      startDate: '2023-06-10',
      impact: '1000+ liters purified daily'
    },
    {
      title: 'Sustainable Agriculture',
      description: 'Training youth in modern, environmentally friendly farming techniques that are both economically viable and sustainable.',
      image: '/images/agriculture-project.jpg',
      video: '/videos/agriculture-training.MP4', // Make sure this file exists
      status: 'planned',
      volunteers: 0,
      locations: ['Coastal Kenya'],
      startDate: '2024-02-01',
      impact: 'Training 200+ youth farmers'
    },
    {
      title: 'Community Clean-Up',
      description: 'Organizing regular community clean-up events to promote waste management and environmental cleanliness in urban areas.',
      image: '/images/community-cleanup.JPG',
      // No video for this project
      status: 'ongoing',
      volunteers: 120,
      locations: ['Nairobi', 'Mombasa', 'Kisumu'],
      startDate: '2023-05-20',
      impact: '50+ tons of waste collected'
    },
    {
      title: 'Green Innovation Hub',
      description: 'Establishing innovation centers where youth can develop and implement green technology solutions for environmental challenges.',
      image: '/images/innovation-hub.jpg',
      video: '/videos/innovation-hub.MP4', // Make sure this file exists
      status: 'ongoing',
      volunteers: 43,
      locations: ['Kilifi'],
      startDate: '2025-09-11',
      impact: 'Supporting 12+ innovators'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'ongoing', label: 'Ongoing', count: projects.filter(p => p.status === 'ongoing').length },
    { key: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
    { key: 'planned', label: 'Planned', count: projects.filter(p => p.status === 'planned').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeFilter);

  const stats = [
    { number: '50+', label: 'Projects Completed', color: 'text-emerald-600 dark:text-emerald-400' },
    { number: '2,500+', label: 'Trees Planted', color: 'text-teal-600 dark:text-teal-400' },
    { number: '15+', label: 'Communities Reached', color: 'text-blue-600 dark:text-blue-400' },
    { number: '300+', label: 'Active Volunteers', color: 'text-amber-600 dark:text-amber-400' }
  ];

  return (
    <>
      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo.video} 
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Discover the impactful environmental initiatives we're implementing across Kenya to create sustainable change and empower communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/25'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Initiatives
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From tree planting to youth education, each project brings us closer to a greener, more sustainable Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                onVideoPlay={(video, title) => setSelectedVideo({ video, title })}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-600 text-lg">
                No projects found for the selected filter.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Measuring our progress towards a sustainable future for all Kenyans
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;