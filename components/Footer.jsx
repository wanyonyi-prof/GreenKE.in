import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Users, Leaf } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
    { href: '/join', label: 'Join Us' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Kilifi, Kenya' },
    { icon: Phone, text: '+254-717650704' },
    { icon: Mail, text: 'greenkenyainitiative985@gmail.com' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://web.facebook.com/profile.php?id=61580445633304',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/green-kenya-initiative-b198a2397', 
      label: 'LinkedIn' 
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-emerald-900/30 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Green Kenya
                </h3>
                <p className="text-sm text-emerald-300">Initiative</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-base">
              Green Kenya Initiative (GKI) is a youth-led movement driving innovation, sustainability, 
              and empowerment. We nurture ideas in agriculture, technology, and value addition — turning 
              them into practical solutions that strengthen communities and protect the planet.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-emerald-500 transition-all duration-300 border border-white/10 hover:border-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-all duration-300 group py-2 focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-emerald-400 focus:text-emerald-400"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-base">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-4 text-gray-300 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={18} className="text-white" />
                  </div>
                  <span className="text-base">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Join CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8"
            >
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Users className="w-4 h-4" />
                Join Our Movement
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-emerald-800/30 mt-12 pt-8 text-center"
        >
          <motion.p 
            className="text-lg italic text-emerald-200 mb-6 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            "Empowering youth to innovate, sustain, and transform Kenya for a greener tomorrow."
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400">
            <p className="text-base">
              &copy; 2025 <strong className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">Green Kenya Initiative</strong>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">❤️</span>
              </div>
              <span>for Kenya</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;