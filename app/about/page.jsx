// app/about/page.jsx - CREATE THIS NEW FILE
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower youth through mentorships, environmental conservation, innovation, and sustainable development practices.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To empower communities through sustainable agriculture, innovation, and youth employment.'
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'Driving change through hands-on projects that benefit both people and the planet.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Building a network of young environmental champions across Kenya.'
    }
  ];

  const milestones = [
    { 
      year: 'Jan 2024', 
      event: 'Vision Born', 
      description: 'GKI began as a vision for youth-led environmental action combined with solving youth unemployment. The dream was to create a platform where young people could drive social, economic, and environmental transformation.',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500',
      achievements: ['Vision conceptualized', 'Youth empowerment focus established', 'Sustainability goals defined']
    },
    { 
      year: 'Mar 2024', 
      event: 'Inception & Formation', 
      description: 'The vision gained momentum through collaborations with passionate individuals, experts, and stakeholders. GKI evolved from an idea into a structured organization with clear objectives and leadership.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      achievements: ['Organization structure formed', 'Expert collaborations established', 'Strategic partnerships initiated']
    },
    { 
      year: 'Jun 2024', 
      event: 'First Community Projects', 
      description: 'Launched initial environmental projects including tree-planting drives and youth mentorship programs. Began creating tangible impact in local communities while empowering youth.',
      icon: '🌳',
      color: 'from-emerald-500 to-green-500',
      achievements: ['Tree planting initiatives started', 'Youth mentorship programs launched', 'Community engagement began']
    },
    { 
      year: 'Sep 2024', 
      event: 'Innovation Expansion', 
      description: 'Introduced innovative projects including avocado oil production using local techniques and Black Soldier Fly farming for sustainable fertilizer and poultry feed production.',
      icon: '💡',
      color: 'from-purple-500 to-pink-500',
      achievements: ['Avocado oil production started', 'Black Soldier Fly farming initiated', 'Sustainable agriculture expanded']
    },
    { 
      year: 'Dec 2024', 
      event: 'Regional Growth', 
      description: 'Expanded operations across multiple Kenyan regions including Nyanza, Western, Central, and Rift Valley. Grew to hundreds of active members united under one mission.',
      icon: '📈',
      color: 'from-orange-500 to-red-500',
      achievements: ['Multi-regional presence established', '100+ active volunteers', '5 counties reached']
    },
    { 
      year: 'Mar 2025', 
      event: 'National Recognition', 
      description: 'Received awards and recognition for innovation in youth environmental programs. Gained national attention for the unique approach combining environmental conservation with youth economic empowerment.',
      icon: '🏆',
      color: 'from-yellow-500 to-amber-500',
      achievements: ['Award recognition received', 'National media coverage', 'Program innovation acknowledged']
    },
    { 
      year: 'Jun 2025', 
      event: 'Digital Transformation', 
      description: 'Launched comprehensive online platforms and digital tools to reach more youth across Kenya. Enhanced communication, project management, and community engagement through technology.',
      icon: '💻',
      color: 'from-indigo-500 to-blue-500',
      achievements: ['Online platforms launched', 'Digital outreach expanded', 'Tech-enabled operations']
    },
    { 
      year: 'Sep 2025', 
      event: 'National Impact', 
      description: 'Expanded to 15+ communities with 300+ active volunteers. Solidified position as a leading youth-led environmental organization creating both ecological and economic impact.',
      icon: '🌍',
      color: 'from-teal-500 to-cyan-500',
      achievements: ['15+ communities reached', '300+ active volunteers', 'National footprint established']
    },
    { 
      year: '2026+', 
      event: 'Future Vision', 
      description: 'Working towards building a networked generation of young leaders achieving environmental, cultural, and socio-economic sustainability for Kenya and beyond through digital transformation and innovation.',
      icon: '🔮',
      color: 'from-gray-500 to-slate-500',
      achievements: ['Digital innovation expansion', 'Pan-African vision', 'Sustainable development goals']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">GKI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We are a youth-led movement driving innovation, sustainability, and empowerment 
              for a greener Kenya through environmental conservation and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  The <strong>Green Kenya Initiative (GKI)</strong> began in <strong>January 2024</strong> as a simple vision — a youth-led environmental movement designed not only to promote sustainability but also to create solutions to the growing problem of unemployment among young people. The dream was to build a platform where youths could engage in meaningful projects that drive social, economic, and environmental transformation in their communities.
                </p>
                <p>
                  This vision quickly gained momentum after being shared with passionate individuals who believed in the same ideals. Through open discussions and collaboration with experts and stakeholders, the concept evolved into a structured organization — the Green Kenya Initiative. The formation of GKI marked a major step toward turning ideas into action, proving that collective effort can bring real change.
                </p>
                <p>
                  Soon after its formation, GKI launched a series of impactful community-based projects. These included <strong>tree-planting drives, youth mentorship programs, and innovative ventures</strong> such as avocado oil production using local techniques and Black Soldier Fly farming to produce affordable fertilizer and poultry feeds. These projects not only supported environmental sustainability but also created economic opportunities for many young people.
                </p>
                <p>
                  By <strong>2025</strong>, GKI had expanded its presence to several regions across Kenya — including <strong>Nyanza, Western, Central, and Rift Valley</strong> — with hundreds of active members united under one mission: to green lives, grow communities, and transform the nation. The initiative continues to attract youth, community leaders, and innovators who share the passion for a greener and more sustainable Kenya.
                </p>
                <p>
                  Looking ahead, GKI envisions reaching even greater heights through <strong>digital transformation, inclusivity, and innovation</strong>. The goal is to build a networked generation of young leaders working hand-in-hand to achieve environmental, cultural, and socio-economic sustainability for Kenya and beyond.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-story.jpg"
                  alt="GKI Team in action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-500 rounded-2xl rotate-12 z-10"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500 rounded-2xl -rotate-12 z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center group hover:border-teal-200 dark:hover:border-teal-600 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
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
              Our Journey of Growth & Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a simple vision to a national movement - tracing our path in creating sustainable change 
              through youth empowerment and environmental conservation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-green-400 to-blue-400 dark:from-green-600 dark:to-blue-600 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-green-500 z-10 flex items-center justify-center">
                    <span className="text-lg">{milestone.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-green-500"
                    >
                      {/* Year badge */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${milestone.color} mb-4`}>
                        <span className="mr-2">{milestone.icon}</span>
                        {milestone.year}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {milestone.event}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {milestone.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for mobile */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '300+', label: 'Active Volunteers', icon: '👥' },
              { number: '15+', label: 'Communities', icon: '🏘️' },
              { number: '4', label: 'Regions', icon: '🗺️' },
              { number: '10+', label: 'Projects', icon: '🌱' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;