// app/join/page.jsx - UPDATED WITH WORKING EMAIL SUBMISSION
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Heart, Target, Award, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    membership: '',
    interests: [],
    experience: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const interests = [
    'Tree Planting',
    'Community Clean-up',
    'Youth Education',
    'Water Conservation',
    'Sustainable Agriculture',
    'Digital Advocacy',
    'Event Organization',
    'Fundraising'
  ];

  const membershipCategories = [
    {
      value: 'ordinary',
      label: 'Ordinary Membership',
      description: 'For active participants in environmental activities'
    },
    {
      value: 'associate',
      label: 'Associate Membership',
      description: 'For supporters and well-wishers of GKI'
    },
    {
      value: 'honorary',
      label: 'Honorary Membership',
      description: 'Awarded for exceptional contribution to environmental conservation'
    },
    {
      value: 'ambassador',
      label: 'Ambassador Membership',
      description: 'For representatives promoting GKI values regionally/nationally'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate membership category
    if (!formData.membership) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a membership category.'
      });
      return;
    }

    // Validate interests
    if (formData.interests.length === 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select at least one area of interest.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create formatted email content
      const emailSubject = `New Membership Application - ${formData.name}`;
      const emailBody = `
🌱 NEW MEMBERSHIP APPLICATION - GREEN KENYA INITIATIVE

PERSONAL INFORMATION:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}

MEMBERSHIP DETAILS:
------------------
Category: ${membershipCategories.find(cat => cat.value === formData.membership)?.label}
Areas of Interest: ${formData.interests.join(', ')}

EXPERIENCE & MOTIVATION:
-----------------------
Previous Experience: ${formData.experience || 'Not provided'}

Why they want to join:
${formData.message}

APPLICATION DETAILS:
-------------------
Submitted: ${new Date().toLocaleString('en-KE')}
Timestamp: ${new Date().toISOString()}

---
Green Kenya Initiative Membership System
📍 Kilifi, Kenya | 📞 +254 717650704
      `.trim();

      // Open email client with pre-filled content
      const mailtoLink = `mailto:greenkenyainitiative985@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Show success message first
      setSubmitStatus({
        type: 'success',
        message: 'Application prepared! Your email client will open with a pre-filled message. Please click "Send" to complete your application.'
      });

      // Reset form
      setFormData({
        name: '', email: '', phone: '', location: '',
        membership: '', interests: [], experience: '', message: ''
      });

      // Open email client after a short delay
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1500);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to prepare application. Please email us directly at greenkenyainitiative985@gmail.com with your details.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const benefits = [
    {
      icon: Users,
      title: 'Community',
      description: 'Join a network of passionate environmental champions'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Make tangible difference in communities across Kenya'
    },
    {
      icon: Target,
      title: 'Skills',
      description: 'Develop leadership and environmental conservation skills'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get certificates and recognition for your contributions'
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
              Join Our <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Movement</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Become part of Kenya's leading youth environmental initiative and help create a greener, more sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Join GKI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the amazing benefits of being part of our environmental family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center group hover:border-teal-200 dark:hover:border-teal-600 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Membership Application
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Choose your membership category and fill out the form to start your journey with GKI
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="Your city/town"
                  />
                </div>
              </div>

              {/* Membership Category Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Membership Category *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {membershipCategories.map((category) => (
                    <div
                      key={category.value}
                      className={`relative border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                        formData.membership === category.value
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500'
                      }`}
                      onClick={() => setFormData({...formData, membership: category.value})}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          formData.membership === category.value
                            ? 'border-teal-500 bg-teal-500'
                            : 'border-gray-400 dark:border-gray-500'
                        }`}>
                          {formData.membership === category.value && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {category.label}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {!formData.membership && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                    Please select a membership category
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Areas of Interest *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-3 py-2 rounded-xl border transition-all duration-300 text-sm font-medium ${
                        formData.interests.includes(interest)
                          ? 'bg-teal-500 text-white border-teal-500'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-teal-500'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
                {formData.interests.length === 0 && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                    Please select at least one area of interest
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Previous Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell us about any previous volunteer or environmental experience..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why do you want to join GKI? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Share your motivation for joining our movement..."
                />
              </div>

              {/* Submit Button with Loading State */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                className={`w-full text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Preparing Application...
                  </>
                ) : (
                  <>
                    Submit Membership Application
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </motion.button>

              {/* Status Message Display */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl border ${
                    submitStatus.type === 'success' 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300'
                      : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">
                        {submitStatus.type === 'success' ? 'Success!' : 'Oops!'}
                      </p>
                      <p className="text-sm mt-1">{submitStatus.message}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Additional Instructions */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p>
                  💡 Your application will open in your email client. Please click "Send" to complete the submission.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Join;