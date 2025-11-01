import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Award, Users, Calendar } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sir Hannington Wanyonyi',
      role: 'Founder & CEO',
      image: '/images/founder.PNG',
      bio: 'Visionary leader passionate about youth empowerment and environmental conservation.',
      email: 'hanningtonwanyonyi00@gmail.com',
      phone: '+254-717650704',
      location: 'Kilifi, Kenya',
      achievements: ['Founded GKI in 2024', 'Youth Environmental Recognition 2025']
    },
    {
      name: 'Lincent Wesonga',
      role: 'Chairperson',
      image: '/images/chairperson.jpg',
      bio: 'Dedicated to community development and sustainable environmental practices.',
      email: 'onyangolin228@gmail.com',
      phone: '+254-701518506',
      location: 'Kilifi, Kenya',
      achievements: ['Community Leadership Award', '5+ years in conservation']
    },
    {
      name: 'Mr. Samuel Simiyu',
      role: 'Vice Chairperson',
      image: '/images/vice-chair.png',
      bio: 'Passionate about youth unity and innovative environmental solutions.',
      email: 'simiyumasika602@gmail.com',
      phone: '+254-746804788',
      location: 'Bungoma, Kenya',
      achievements: ['Youth Innovation Champion', 'Tech for Good Advocate']
    },
    {
      name: 'Mr. Wilvex Wasai',
      role: 'Secretary',
      image: '/images/secretary.png',
      bio: 'Ensuring smooth operations and effective communication across all projects.',
      email: 'willvexwasai123@gmail.com',
      phone: '+254-742863309',
      location: 'Maseno;Nyanza, Kenya',
      achievements: ['Organizational Excellence', 'Community Mobilizer', 'Event Organizer']
    }
  ];

  const departments = [
    {
      name: 'Environmental Conservation',
      members: 45,
      projects: 12,
      icon: Users
    },
    {
      name: 'Community Outreach',
      members: 32,
      projects: 8,
      icon: Calendar
    },
    {
      name: 'Youth Empowerment',
      members: 28,
      projects: 6,
      icon: Award
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team | Green Kenya Initiative</title>
        <meta name="description" content="Meet the dedicated team behind Green Kenya Initiative - passionate individuals driving environmental change." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Passionate individuals dedicated to creating a greener, more sustainable Kenya through youth empowerment and environmental action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
                className="card-modern p-6 text-center group hover:border-primary-200 dark:hover:border-primary-600"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Achievements</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
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
                className="card-modern p-8 text-center group hover:border-primary-200 dark:hover:border-primary-600"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {dept.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {dept.members}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {dept.projects}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision for a greener Kenya.
            </p>
            <motion.a
              href="/join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Our Team
              <Users className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;