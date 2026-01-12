// app/share-impact/page.jsx - CREATE THIS NEW FILE
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Share2, Heart, Download, Mail, Facebook, Twitter, Instagram, 
  Linkedin, Copy, CheckCircle, MessageCircle, Hash, Globe,
  Users, Target, BarChart3, Camera, Video, FileText, Zap
} from 'lucide-react';

const ShareImpact = () => {
  const [copied, setCopied] = useState(false);
  const [activePlatform, setActivePlatform] = useState('all');
  const [downloadCount, setDownloadCount] = useState(0);

  const shareContent = {
    url: 'https://greenkenya.org/impact',
    hashtags: ['GreenKenya', 'EnvironmentalAction', 'YouthForClimate', 'SustainableKenya'],
    message: "I'm supporting Green Kenya Initiative's amazing work in environmental conservation! Check out their impact and join the movement. 🌱 #GreenKenya",
    emailSubject: "Amazing Environmental Work by Green Kenya Initiative",
    emailBody: `Hi there,

I wanted to share the incredible work being done by Green Kenya Initiative. They're a youth-led environmental organization making real impact across Kenya:

🌳 2,500+ trees planted
👥 300+ youth volunteers engaged
💧 15+ communities transformed
🎯 Multiple successful environmental projects

Check out their work and consider supporting: https://greenkenya.org

Best regards,`
  };

  const shareStats = [
    { label: 'Social Shares', value: '1,250+', change: '+25%', icon: <Share2 className="w-5 h-5" /> },
    { label: 'Website Visits', value: '5,000+', change: '+40%', icon: <Globe className="w-5 h-5" /> },
    { label: 'New Volunteers', value: '150+', change: '+30%', icon: <Users className="w-5 h-5" /> },
    { label: 'Media Features', value: '12+', change: '+3', icon: <Camera className="w-5 h-5" /> }
  ];

  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: <Twitter className="w-5 h-5" />, color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'facebook', name: 'Facebook', icon: <Facebook className="w-5 h-5" />, color: 'bg-blue-700 hover:bg-blue-800' },
    { id: 'instagram', name: 'Instagram', icon: <Instagram className="w-5 h-5" />, color: 'bg-pink-600 hover:bg-pink-700' },
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, color: 'bg-blue-800 hover:bg-blue-900' },
    { id: 'email', name: 'Email', icon: <Mail className="w-5 h-5" />, color: 'bg-gray-600 hover:bg-gray-700' }
  ];

  const shareableContent = [
    {
      type: 'image',
      title: 'Impact Infographic',
      description: 'Share our key achievements in a visual format',
      preview: '/images/impact-infographic.jpg',
      platforms: ['twitter', 'facebook', 'instagram', 'linkedin'],
      downloads: 420
    },
    {
      type: 'video',
      title: 'Project Highlights',
      description: '1-minute video showcasing our projects',
      preview: '/videos/project-highlights.mp4',
      platforms: ['facebook', 'instagram', 'twitter'],
      downloads: 315
    },
    {
      type: 'stats',
      title: 'Impact Statistics',
      description: 'Easy-to-share numbers and facts',
      preview: '/images/impact-stats.jpg',
      platforms: ['linkedin', 'twitter', 'email'],
      downloads: 280
    },
    {
      type: 'story',
      title: 'Success Stories',
      description: 'Real stories from transformed communities',
      preview: '/images/success-stories.jpg',
      platforms: ['facebook', 'instagram', 'email'],
      downloads: 195
    }
  ];

  const testimonials = [
    {
      quote: "Sharing GKI's work helped us connect with 3 major donors!",
      author: "Community Outreach Team",
      role: "Volunteer Group"
    },
    {
      quote: "Our social media shares brought in 50+ new volunteers last month.",
      author: "Digital Team",
      role: "Marketing Department"
    },
    {
      quote: "Partnership inquiries increased by 300% after our impact campaign.",
      author: "Partnerships Team",
      role: "Strategic Relations"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = (content) => {
    setDownloadCount(prev => prev + 1);
    alert(`Downloading ${content.title}...\n\nThank you for helping spread our impact!`);
  };

  const getShareUrl = (platform, content) => {
    const url = encodeURIComponent(shareContent.url);
    const text = encodeURIComponent(shareContent.message);
    const hashtags = encodeURIComponent(shareContent.hashtags.join(','));

    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      case 'email':
        return `mailto:?subject=${encodeURIComponent(shareContent.emailSubject)}&body=${encodeURIComponent(shareContent.emailBody)}`;
      default:
        return '#';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/10">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-emerald-400/5 to-cyan-400/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-700 dark:text-teal-300 mb-6">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Amplify Our Impact</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Share Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600">Impact</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10">
              Help us spread the word about environmental conservation in Kenya. Your shares help us reach more supporters, volunteers, and partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {shareStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-teal-600 dark:text-teal-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                  {stat.change} this month
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Share Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Share Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Share our impact with one click
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Share Message */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Share This Message
                </h3>
                <button
                  onClick={() => copyToClipboard(shareContent.message)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Text
                    </>
                  )}
                </button>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl mb-4">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {shareContent.message}
                </p>
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {shareContent.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-full text-sm"
                  >
                    <Hash className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.id}
                    href={getShareUrl(platform.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} text-white rounded-xl p-3 flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    {platform.icon}
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email Share */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">Share via Email</h3>
                  <p className="text-teal-100">Reach your network directly</p>
                </div>
              </div>
              
              <a
                href={getShareUrl('email')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 rounded-xl font-bold hover:bg-gray-100 transition-all"
              >
                <Mail className="w-5 h-5" />
                Open Email Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shareable Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Shareable Content
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download and share our impact materials
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setActivePlatform('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activePlatform === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Platforms
            </button>
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activePlatform === platform.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {platform.icon}
                <span>{platform.name}</span>
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shareableContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Content Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {content.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {content.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{content.downloads} downloads</span>
                    </div>
                  </div>

                  {/* Platform Badges */}
                  <div className="flex flex-wrap gap-2">
                    {content.platforms.map((platformId) => {
                      const platform = platforms.find(p => p.id === platformId);
                      return platform ? (
                        <span
                          key={platform.id}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                        >
                          {platform.icon}
                          <span>{platform.name}</span>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Content Actions */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleDownload(content)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </button>
                    <button
                      onClick={() => copyToClipboard(shareContent.url)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Copy className="w-5 h-5" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sharing Makes a Difference
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how sharing has amplified our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <MessageCircle className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become an Impact Ambassador
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of ambassadors who regularly share our work and help grow our community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ambassadors@greenkenya.org"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <Users className="w-5 h-5" />
              Join Ambassadors
            </a>
            
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Group
            </a>
          </div>

          <p className="mt-8 text-teal-200 text-sm">
            {downloadCount}+ content pieces downloaded this week. Thank you for spreading our impact!
          </p>
        </div>
      </section>
    </main>
  );
};

export default ShareImpact;