// app/support/page.jsx - FIXED VERSION
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, DollarSign, Handshake, Gift, Building, Users, Target, 
  Award, Shield, TrendingUp, CheckCircle, Lock, Globe,
  Phone, MapPin, Calendar, Star, Zap, ChevronRight, Mail
} from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('donate');
  const [amount, setAmount] = useState(1000);
  const [donationType, setDonationType] = useState('one-time');

  // Don't use JSX in the data array - use component references instead
  const supportOptions = [
    {
      id: 'donate',
      title: 'Make a Donation',
      Icon: Heart,
      description: 'Direct financial support for our projects',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      id: 'partner',
      title: 'Become a Partner',
      Icon: Users,
      description: 'Corporate or organizational partnership',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'sponsor',
      title: 'Sponsor a Project',
      Icon: Target,
      description: 'Fund specific environmental initiatives',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      id: 'in-kind',
      title: 'In-Kind Support',
      Icon: Gift,
      description: 'Material, equipment, or service donations',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const donationAmounts = [
    { amount: 500, label: 'KSh 500', description: 'Plants 5 trees' },
    { amount: 1000, label: 'KSh 1,000', description: 'Trains 1 youth' },
    { amount: 2500, label: 'KSh 2,500', description: 'Provides clean water for 1 family' },
    { amount: 5000, label: 'KSh 5,000', description: 'Supports 1 community workshop' },
    { amount: 10000, label: 'KSh 10,000', description: 'Funds 1 month of conservation work' },
  ];

  const impactOfDonation = [
    { amount: 500, impact: 'Plants 5 indigenous trees', icon: '🌱' },
    { amount: 1000, impact: 'Trains 1 youth in sustainability', icon: '👨‍🎓' },
    { amount: 2500, impact: 'Provides clean water for 1 family', icon: '💧' },
    { amount: 5000, impact: 'Supports community workshops', icon: '🏘️' },
    { amount: 10000, impact: 'Funds conservation activities for 1 month', icon: '🌳' },
  ];

  const partnerBenefits = [
    {
      title: 'Corporate Partnership',
      description: 'Align your brand with environmental sustainability',
      features: ['Brand recognition', 'CSR fulfillment', 'Employee engagement', 'Tax benefits'],
      Icon: Building
    },
    {
      title: 'NGO Collaboration',
      description: 'Join forces for greater environmental impact',
      features: ['Shared resources', 'Joint projects', 'Capacity building', 'Network expansion'],
      Icon: Users
    },
    {
      title: 'Individual Supporter',
      description: 'Make personal contributions to our cause',
      features: ['Regular updates', 'Impact reports', 'Recognition', 'Community membership'],
      Icon: Heart
    }
  ];

  const inKindItems = [
    'Tree seedlings and planting materials',
    'Water purification equipment',
    'Educational materials and books',
    'Office equipment (computers, printers)',
    'Transportation (vehicle use or fuel)',
    'Professional services (legal, marketing, design)',
    'Event venue or meeting spaces',
    'Renewable energy equipment (solar panels)'
  ];

  const whySupportItems = [
    {
      title: 'Proven Impact',
      description: 'Over 2,500 trees planted, 15+ communities transformed, and 300+ youth empowered',
      Icon: Shield
    },
    {
      title: 'Sustainable Approach',
      description: 'Long-term solutions that create lasting change in communities',
      Icon: TrendingUp
    },
    {
      title: 'Local & Global',
      description: 'Community-led initiatives with global environmental significance',
      Icon: Globe
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 via-blue-400/5 to-emerald-400/5" />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-red-500/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 text-red-700 dark:text-red-300 mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Support Sustainable Change</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Support Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-emerald-600">Work</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10">
              Your support fuels our mission to create a greener, more sustainable Kenya. Choose how you'd like to contribute to environmental conservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options Tabs */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ways to Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Multiple paths to making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportOptions.map((option) => {
              const Icon = option.Icon;
              return (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(option.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeTab === option.id
                      ? `border-transparent bg-gradient-to-r ${option.color} text-white shadow-2xl`
                      : `${option.bgColor} border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-xl`
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-3 rounded-xl ${
                      activeTab === option.id
                        ? 'bg-white/20'
                        : `bg-gradient-to-r ${option.color}`
                    }`}>
                      <div className={activeTab === option.id ? 'text-white' : 'text-white'}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                    <p className="text-sm opacity-90">{option.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-12">
            {activeTab === 'donate' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Donation Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Make a Donation
                  </h3>
                  
                  {/* Donation Type */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Donation Type
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'one-time', label: 'One-time', Icon: Star },
                        { id: 'monthly', label: 'Monthly', Icon: Calendar }
                      ].map((type) => {
                        const TypeIcon = type.Icon;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setDonationType(type.id)}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              donationType === type.id
                                ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                            }`}
                          >
                            <div className="flex items-center justify-center gap-2">
                              <TypeIcon className="w-4 h-4" />
                              <span className="font-semibold">{type.label}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Select Amount
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {donationAmounts.map((item) => (
                        <button
                          key={item.amount}
                          onClick={() => setAmount(item.amount)}
                          className={`p-3 rounded-xl border transition-all ${
                            amount === item.amount
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                              : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                          }`}
                        >
                          <div className="font-bold text-lg">{item.label}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </button>
                      ))}
                      <div className="p-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Custom Amount
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            KSh
                          </span>
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full pl-12 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                            placeholder="Enter amount"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Payment Methods
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {['M-Pesa', 'PayPal', 'Credit Card', 'Bank Transfer'].map((method) => (
                          <div key={method} className="text-center p-2 bg-white dark:bg-gray-700 rounded-lg">
                            <span className="text-sm font-medium">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                      <Lock className="w-5 h-5" />
                      Donate Securely
                    </button>
                  </div>
                </div>

                {/* Impact Preview */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Your Impact
                  </h3>
                  
                  <div className="space-y-6">
                    {impactOfDonation.map((item) => (
                      <motion.div
                        key={item.amount}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: amount >= item.amount ? 1 : 0.3,
                          x: 0 
                        }}
                        className={`p-6 rounded-2xl border-2 ${
                          amount >= item.amount
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                            : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {item.impact}
                            </h4>
                            <p className={`text-sm mt-1 ${
                              amount >= item.amount
                                ? 'text-emerald-700 dark:text-emerald-300'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              Donation: KSh {item.amount.toLocaleString()}
                            </p>
                          </div>
                          {amount >= item.amount && (
                            <CheckCircle className="w-6 h-6 text-emerald-500 ml-auto" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Donation Stats */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white">
                    <h4 className="text-lg font-bold mb-4">Transparency Promise</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">90%</div>
                        <div className="text-sm opacity-90">Direct to Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">10%</div>
                        <div className="text-sm opacity-90">Administrative Costs</div>
                      </div>
                    </div>
                    <p className="text-sm mt-4 opacity-90">
                      We maintain strict financial transparency and provide regular impact reports.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'partner' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Partnership Opportunities
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Join forces with us to amplify our environmental impact. Choose the partnership model that aligns with your goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {partnerBenefits.map((partner, index) => {
                    const PartnerIcon = partner.Icon;
                    return (
                      <motion.div
                        key={partner.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                          <div className="text-white">
                            <PartnerIcon className="w-8 h-8" />
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {partner.title}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {partner.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {partner.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                          Explore Partnership
                        </button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Partnership Contact */}
                <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white">
                  <div className="text-center">
                    <Handshake className="w-16 h-16 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
                    <p className="text-xl mb-6 max-w-2xl mx-auto">
                      Contact our partnerships team to discuss collaboration opportunities
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="mailto:greenkenyainitiative985@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                      >
                        <Mail className="w-5 h-5" />
                        Email Partnerships
                      </a>
                      <a
                        href="tel:+254717650704"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-xl font-semibold hover:bg-blue-900 transition-all"
                      >
                        <Phone className="w-5 h-5" />
                        Call +254 717 650 704
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'sponsor' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-8 text-white mb-8">
                  <Target className="w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Project Sponsorship</h3>
                  <p className="text-xl mb-6 max-w-3xl mx-auto">
                    Sponsor specific environmental projects and see exactly how your contribution makes a difference
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold hover:bg-gray-100 transition-all"
                  >
                    Browse Projects
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  Contact us to discuss sponsoring specific projects from our portfolio
                </p>
              </motion.div>
            )}

            {activeTab === 'in-kind' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-8">
                  <Gift className="w-16 h-16 mx-auto mb-6 text-purple-600" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    In-Kind Support
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Contribute materials, equipment, or services to support our work
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Items We Need
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {inKindItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl text-white">
                    <h5 className="text-xl font-bold mb-4">How to Donate Items</h5>
                    <ol className="space-y-3 mb-6">
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold">1</span>
                        <span>Contact us with details of items you wish to donate</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold">2</span>
                        <span>We'll arrange pickup or discuss delivery options</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold">3</span>
                        <span>Receive acknowledgement and impact report</span>
                      </li>
                    </ol>
                    
                    <a
                      href="mailto:greenkenyainitiative985@gmail.com"
                      className="w-full block text-center py-3 bg-white text-purple-700 rounded-xl font-bold hover:bg-gray-100 transition-all"
                    >
                      Contact About In-Kind Donation
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Support Green Kenya Initiative?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whySupportItems.map((item, index) => {
              const ItemIcon = item.Icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white">
                      <ItemIcon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;