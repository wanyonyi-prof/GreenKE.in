// components/ChatWidget.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'sending', 'success', 'error'

  // ✅ EmailJS Configuration - UPDATE THESE WITH YOUR ACTUAL IDs
  const EMAILJS_CONFIG = {
    serviceId: 'service_4fbdics', // From EmailJS → Email Services
    templateId: 'template_qbv4dou', // From EmailJS → Email Templates → Contact Us
    publicKey: 'Green Kenya Initiative', // From EmailJS → Account → Personal Settings
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email: 'greenkenyainitiative985@gmail.com',
          from_name: 'Website Visitor',
          message: message,
          reply_to: 'visitor@greenkenyainitiative.org',
          subject: 'New Message from Green Kenya Initiative Website',
          timestamp: new Date().toLocaleString('en-KE', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
        },
        EMAILJS_CONFIG.publicKey
      );

      // Success
      setSubmitStatus('success');
      setMessage('');
      
      // Auto-close after success
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('EmailJS failed:', error);
      setSubmitStatus('error');
      
      // Fallback: Open email client directly
      setTimeout(() => {
        const subject = 'Message from Green Kenya Initiative Website';
        const body = `Message: ${message}\n\nSent via Website Chat Widget`;
        window.open(`mailto:greenkenyainitiative985@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        setSubmitStatus('fallback');
        setMessage('');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Notification dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
        />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 backdrop-blur-sm"
            />
            
            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-20 right-6 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WE ARE HERE</h4>
                      <p className="text-sm opacity-90">LET'S TALK</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-white/20 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-4 max-h-96 overflow-y-auto">
                {/* Status Messages */}
                {submitStatus === 'sending' && (
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-700 dark:text-blue-300 text-sm text-center">
                      📨 Sending your message...
                    </p>
                  </div>
                )}

                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-green-700 dark:text-green-300 text-sm text-center">
                      ✅ Message sent successfully! We'll reply soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-red-700 dark:text-red-300 text-sm text-center">
                      ❌ Sending failed. Opening email client...
                    </p>
                  </div>
                )}

                {submitStatus === 'fallback' && (
                  <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm text-center">
                      📧 Please send your message via the opened email client.
                    </p>
                  </div>
                )}

                {/* Welcome Message */}
                {!submitStatus && (
                  <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
                    <p className="text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-1">
                      💬 Quick Response Team
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Hi! How can we help you today? Ask about our projects, volunteering, or partnerships.
                    </p>
                  </div>
                )}
                
                {/* Message Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your inquiry, project idea, or how you'd like to help..."
                      className="w-full h-24 p-3 border border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      required
                      disabled={isSubmitting || submitStatus === 'success'}
                    />
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim() || submitStatus === 'success'}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {/* Contact Information */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      <span>greenkenyainitiative985@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      <span>+254 717650704</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>Kilifi, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;