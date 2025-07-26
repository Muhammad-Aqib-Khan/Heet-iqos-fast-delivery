
'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function page() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
    
      // WhatsApp phone number (without + sign and spaces)
      const whatsappNumber = '+971508016258';
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const validateForm = (): boolean => {
        if (!formData.name.trim()) {
          alert('Please enter your name');
          return false;
        }
        
        if (!formData.email.trim() || !isValidEmail(formData.email)) {
          alert('Please enter a valid email address');
          return false;
        }
        
        if (!formData.phone.trim()) {
          alert('Please enter your phone number');
          return false;
        }
        
        if (!formData.message.trim()) {
          alert('Please enter your message');
          return false;
        }
        
        return true;
      };
    
      const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const createWhatsAppMessage = (): string => {
        return `*New Contact Form Submission*%0A%0A` +
               `*Name:* ${encodeURIComponent(formData.name)}%0A` +
               `*Email:* ${encodeURIComponent(formData.email)}%0A` +
               `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
               `*Message:* ${encodeURIComponent(formData.message)}%0A%0A` +
               `*Sent via Contact Form*`;
      };
    
      const sendToWhatsApp = (message: string) => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
          return;
        }
    
        setIsSubmitting(true);
        
        try {
          // Create WhatsApp message
          const whatsappMessage = createWhatsAppMessage();
          
          // Send to WhatsApp
          sendToWhatsApp(whatsappMessage);
          
          // Show success message
          setShowSuccess(true);
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
    
          // Hide success message after 3 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
          
        } catch (error) {
          console.error('Error sending message:', error);
          alert('Error sending message. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">CONTACT</h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-fit">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              CONTACT US ANY TIME FOR ANY QUESTIONS
            </h2>
            
            {/* Email */}
            <div className="flex items-center mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-400 rounded-full flex items-center justify-center text-white text-xl mr-5 flex-shrink-0">
                📧
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">EMAIL</h3>
                <p className="text-gray-600 text-sm md:text-base">INFO@IQOSHEET-UAE.AE</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-400 rounded-full flex items-center justify-center text-white text-xl mr-5 flex-shrink-0">
                🕐
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">HOURS</h3>
                <p className="text-gray-600 text-sm md:text-base">SUN-SAT 11AM-10PM</p>
              </div>
            </div>

            {/* Delivery */}
            <div className="flex items-center mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-400 rounded-full flex items-center justify-center text-white text-xl mr-5 flex-shrink-0">
                🚚
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">DELIVERY</h3>
                <p className="text-gray-600 text-sm md:text-base">UNITED ARAB EMIRATES</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-400 rounded-full flex items-center justify-center text-white text-xl mr-5 flex-shrink-0">
                📱
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base"></h3>
                <p className="text-gray-600 text-sm md:text-base">+971508016258</p>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">SEND MESSAGE</h2>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 animate-pulse">
                <div className="flex items-center">
                  <span className="mr-2">✅</span>
                  Message sent successfully via WhatsApp!
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors duration-200 text-gray-700 resize-vertical"
                  placeholder="Enter your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white text-lg transition-all duration-300 transform ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    SENDING...
                  </div>
                ) : (
                  'SEND'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 md:h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68211910657!2d54.897621!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1642578965234!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dubai Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  
  )
}
