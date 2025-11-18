import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Award, Users, Calendar, Leaf } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sir Hannington Wanyonyi', 
      role: 'Founder & CEO',
      image: '/images/team/founder.jpg', // More specific path
      bio: 'Visionary leader passionate about youth empowerment and environmental conservation. 3rd Year Agriculture Student at Pwani University.',
      email: 'hanningtonwanyonyi00@gmail.com',
      phone: '+254-717650704',
      location: 'Kilifi, Kenya',
      achievements: ['Founded GKI in 2024', 'Youth Environmental Recognition 2025', 'Student Leader - Academic Delegate']
    },
    {
      name: 'Lincent Wesonga',
      role: 'Chairperson',
      image: '/images/team/chairperson.jpg',
      bio: 'Dedicated to community development and sustainable environmental practices with extensive field experience.',
      email: 'onyangolin228@gmail.com',
      phone: '+254-701518506',
      location: 'Kilifi, Kenya',
      achievements: ['Community Leadership Award', '5+ years in conservation', 'Project Management Specialist']
    },
    {
      name: 'Mr. Samuel Simiyu',
      role: 'Vice Chairperson',
      image: '/images/team/vice-chair.jpg',
      bio: 'Passionate about youth unity and innovative environmental solutions through technology.',
      email: 'simiyumasika602@gmail.com',
      phone: '+254-746804788',
      location: 'Bungoma, Kenya',
      achievements: ['Youth Innovation Champion', 'Tech for Good Advocate', 'Community Mobilizer']
    },
    {
      name: 'Mr. Wilvex Wasai',
      role: 'Secretary',
      image: '/images/team/secretary.jpg',
      bio: 'Ensuring smooth operations and effective communication across all projects and teams.',
      email: 'willvexwasai123@gmail.com',
      phone: '+254-742863309',
      location: 'Maseno, Nyanza, Kenya',
      achievements: ['Organizational Excellence', 'Community Mobilizer', 'Event Organizer']
    }
  ];

  const departments = [
    {
      name: 'Environmental Conservation',
      members: 45,
      projects: 12,
      icon: Leaf,
      description: 'Tree planting, conservation projects, and environmental protection initiatives'
    },
    {
      name: 'Community Outreach',
      members: 32,
      projects: 8,
      icon: Users,
      description: 'Community engagement, education programs, and local partnerships'
    },
    {
      name: 'Youth Empowerment',
      members: 28,
      projects: 6,
      icon: Award,
      description: 'Skills development, leadership training, and youth mentorship programs'
    }
  ];

  // Fallback avatar component for missing images
  const FallbackAvatar = ({ name, className = "" }) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return (
      <div className={`bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold rounded-2xl ${className}`}>
        {initials}
      </div>
    );
  };

  // Handle image error
  const handleImageError = (e, memberName) => {
    console.warn(`Image failed to load for ${memberName}:`, e.target.src);
    const parent = e.target.parentElement;
    parent.innerHTML = '';
    const fallback = document.createElement('div');
    fallback.className = 'w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold rounded-2xl text-2xl';
    fallback.textContent = memberName.split(' ').map(n => n[0]).join('').toUpperCase();
    parent.appendChild(fallback);
  };

  return (
    <>
      <Head>
        <title>Our Team | Green Kenya Initiative</title>
        <meta name="description" content="Meet the dedicated team behind Green Kenya Initiative - passionate individuals driving environmental change." />
        <meta name="keywords" content="Green Kenya Initiative, Team, Leadership, Environmental Conservation, Kenya" />
      </Head>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate individuals dedicated to creating a greener, more sustainable Kenya through 
              youth empowerment and environmental action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The visionary leaders guiding GKI towards a sustainable future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => handleImageError(e, member.name)}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4 text-center">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    Key Achievements
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Departments Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specialized teams working towards our common goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {dept.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                  {dept.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {dept.members}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                      {dept.projects}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ongoing Projects</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join our growing team of passionate changemakers and help us create a greener, more sustainable Kenya.
            </p>
            <motion.a
              href="/join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-50"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Movement
            </motion.a>
            <p className="text-emerald-200 text-sm mt-4">
              Students, professionals, and volunteers welcome!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;