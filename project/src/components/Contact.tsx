import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'quote',
    message: '',
    quantity: '',
    specifications: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-9311862900', 'Mon - Sat, 10:00AM - 6:00PM'],
      action: 'Call Now',
      color: 'from-green-500 to-green-600',
      link: "tel:+919311862900"
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['corporatemetalstickers@gmail.com', 'Get a response within 24 hours'],
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600',
      link: "mailto:corporatemetalstickers@gmail.com"
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['11/7 New Anangpur, Sector 37,' ,  'Badarpur, Faridabad, Haryana 121003, India'],
      action: 'Get Directions',
      color: 'from-purple-500 to-purple-600',
      link: "https://www.google.com/maps/dir/?api=1&destination=11/7+New+Anangpur+Sector+37+Badarpur+Faridabad+Haryana"
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+91-9311862900', 'Instant Support Available'],
      action: 'Chat Now',
      color: 'from-green-600 to-green-700',
      link: "https://wa.me/919311862900?text=Hi%20I%20want%20to%20know%20more%20about%20your%20products"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Ready to discuss your metal sticker requirements? Our experts are here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 mb-6 last:mb-0">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm mt-1 inline-block"
                    >
                      {info.action} →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-amber-600" size={20} />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mon - Sat</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Globe className="text-green-500" size={14} />
                    <span className="text-green-600 font-medium text-xs">24/7 WhatsApp Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-5 rounded-2xl shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-orange-600 font-medium py-3 rounded-xl shadow-md hover:bg-orange-100 transition"
                >
                  📑 View Catalogue
                </a>
                <a
                  href="https://wa.me/+91-9311862900?text=Hi%20I%20want%20to%20know%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-medium py-3 rounded-xl shadow-md hover:bg-green-600 transition"
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+91-98765-43210"
                    />
                  </div>
                </div>

                {/* Inquiry Type + Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      <option value="quote">Request Quote</option>
                      <option value="sample">Sample Request</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="custom">Custom Design</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="e.g., 10,000 pieces"
                    />
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Specifications</label>
                  <input
                    type="text"
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Size, finish, adhesive type, etc."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="Please describe your requirements in detail..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-600 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Visit Our Facility</h3>
              <div className="bg-gray-200 rounded-lg h-56 sm:h-64 flex items-center justify-center px-2 text-center">
                <div>
                  <MapPin className="text-gray-400 mx-auto mb-2" size={40} />
                  <p className="text-sm sm:text-base text-gray-600">
                    11/7 New Anangpur, Sector 37, Badarpur, Faridabad, Haryana 121003, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ISO Certified</h4>
              <p className="text-sm text-gray-600">Quality management certified</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Shipping</h4>
              <p className="text-sm text-gray-600">Worldwide delivery with tracking</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Always available</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">Quick turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
