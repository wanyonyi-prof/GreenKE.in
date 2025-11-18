'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

// Team data structure
const teamData = [
  {
    name: "Sir Hannington Wanyonyi",
    role: "Founder & CEO",
    image: "/images/team/founder.jpg", // Use consistent path
    description: "Visionary leader with 10+ years in environmental activism"
  },
  // ... other team members can be added here
];

const VideoItem = ({ video, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const videoRef = useRef(null);
  const previewVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play short preview when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && previewVideoRef.current) {
          previewVideoRef.current.play().catch(() => {
            // Auto-play failed, user interaction required
          });
        } else if (previewVideoRef.current) {
          previewVideoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (previewVideoRef.current) {
      observer.observe(previewVideoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    // Ensure video plays when triggered
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    }, 100);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // Resume preview video
    if (previewVideoRef.current) {
      previewVideoRef.current.play().catch(console.error);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-black"
    >
      <div className="relative h-64 w-full">
        {/* Video Thumbnail with Play Button */}
        {!isPlaying ? (
          <div 
            className="relative w-full h-full cursor-pointer bg-gray-900"
            onClick={handlePlay}
          >
            {/* Auto-playing preview video */}
            <video
              ref={previewVideoRef}
              src={video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-70"
              onEnded={() => previewVideoRef.current?.play()} // Loop the preview
            />
            
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 mb-4 mx-auto shadow-lg">
                  <Play className="w-6 h-6 text-emerald-600 ml-1" fill="currentColor" />
                </div>
                <p className="text-white font-semibold text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  Click for full video
                </p>
              </div>
            </div>

            {/* Title and description overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          </div>
        ) : (
          /* Full Video Player */
          <div className="relative w-full h-full bg-black">
            <video
              ref={videoRef}
              src={video}
              controls={false}
              autoPlay
              muted={isMuted}
              className="w-full h-full object-cover"
              onEnded={handleClose}
              playsInline
            />
            {/* Custom Controls */}
            <div className="absolute top-3 right-3 flex space-x-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={handleClose}
                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Video progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
              <div 
                className="h-full bg-emerald-500 transition-all duration-100"
                style={{ 
                  width: videoRef.current ? 
                    `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : '0%' 
                }}
              />
            </div>

            {/* Video info overlay */}
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ImageItem = ({ image, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image || "/images/placeholder.jpg"} // Fallback image
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%239ca3af'%3EImage Loading%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        
        {/* Always visible overlay for mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent md:hidden">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-200 mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const GalleryItem = ({ image, video, title, description, delay }) => {
  if (video) {
    return (
      <VideoItem 
        video={video}
        title={title}
        description={description}
        delay={delay}
      />
    );
  }
  
  return (
    <ImageItem 
      image={image}
      title={title}
      description={description}
      delay={delay}
    />
  );
};

const Gallery = () => {
  // Get the founder's image from team data
  const founder = teamData.find(member => member.role.toLowerCase().includes('founder'));
  const founderImage = founder?.image || '/images/team/placeholder.jpg'; // Fallback path

  const galleryItems = [
    {
      image: '/images/gallery/tree-planting.jpg',
      title: 'Tree Planting Drive',
      description: 'Promoting reforestation and eco-awareness across counties.',
    },
    {
      video: '/videos/tree-planting.mp4', // Fixed extension to lowercase
      title: 'Communal Tree Planting',
      description: 'Coming together to protect our environment, more trees, more rainfall.',
    },
    {
      image: '/images/gallery/community-cleanup.jpg',
      title: 'Community Clean-Up',
      description: 'Mobilizing volunteers to make towns and villages cleaner.',
    },
    {
      image: founderImage,
      title: 'Our Founder',
      description: founder ? `${founder.name} - ${founder.role}` : 'Founder & CEO',
    },
    {
      image: '/images/gallery/mentorship.jpg',
      title: 'Mentorship Activities',
      description: 'Empowering the next generation through mentorship and practical training.',
    },
    {
      video: '/videos/community-action.mp4',
      title: 'Community Action',
      description: 'Youth-led initiatives making real impact in local communities.',
    },
  ];

  return (
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
            Project Highlights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of our impactful environmental initiatives through photos and videos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              image={item.image}
              video={item.video}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Video Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl"
        >
          <p className="text-emerald-700 dark:text-emerald-300 font-medium">
            💡 <strong>Tip:</strong> Videos automatically play previews when visible. Click to watch full videos with sound!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ CRITICAL FIX: Added missing export
export default Gallery;