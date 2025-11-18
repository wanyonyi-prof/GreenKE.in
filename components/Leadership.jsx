'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const LeaderCard = ({ image, name, role, message, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay }}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-gray-700"
    >
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Text Section */}
      <div className="p-6 flex flex-col justify-between min-h-[230px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide mb-2 uppercase">
            {role}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4 text-sm">
            {message}
          </p>
        </div>
        <p className="text-primary-600 dark:text-primary-400 font-bold text-sm tracking-wide">
          — {name}
        </p>
      </div>
    </motion.div>
  );
};

const Leadership = () => {
  const leaders = [
    {
      image: '/images/founder.png',
      name: 'Sir  . Hannington Wanyonyi',
      role: 'Founder & CEO',
      message:
        'GKI began as a vision — to empower youth and create a greener Kenya. Through innovation, collaboration, and resilience, we’re shaping a sustainable future powered by young minds.',
    },
    {
      image: '/images/chairperson.jpg',
      name: 'Mr. Lincent Wesonga',
      role: 'Chairperson',
      message:
        'Each tree we plant represents hope. Each mentorship we offer builds tomorrow’s leaders. At GKI, we grow Kenya — sustainably, together.',
    },
    {
      image: '/images/vice-chair.png',
      name: 'Mr. Samuel Simiyu',
      role: 'Vice Chairperson',
      message:
        'Youth unity is our fuel. Together, we transform ideas into impact — driving innovation and sustainability across every corner of Kenya.',
    },
    {
      image: '/images/secretary.png',
      name: 'Mr. Willvex Wasai',
      role: 'Secretary',
      message:
        'We document, connect, and communicate Kenya’s green growth journey — one initiative at a time, with purpose and transparency.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-green-400/30 rounded-full mix-blend-multiply blur-3xl animate-blob"
      />
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-emerald-500/30 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-72 h-72 bg-lime-400/30 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Leadership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Meet the visionaries guiding <span className="text-primary-600 dark:text-primary-400 font-semibold">Green Kenya Initiative</span> — building sustainability, empowerment, and innovation from the ground up.
          </p>
        </motion.div>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} {...leader} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
