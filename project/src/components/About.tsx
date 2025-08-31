import { Users, Factory, Award, Target, Globe, Zap } from 'lucide-react';
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Factory, value: '99.9%', label: 'Clients Satisfaction', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '100+', label: 'Clients', color: 'from-purple-500 to-purple-600' },
    { icon: Award, value: '99.9%', label: 'Quality Rate', color: 'from-amber-500 to-amber-600' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision Excellence',
      description: 'Every product meets exact specifications with zero compromise on quality standards.'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Continuously advancing our processes and technologies to stay ahead of industry trends.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We work for your success, building long-term partnerships through exceptional service.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving international markets with local expertise and global quality standards.'
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Metal Stickers India</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the industry in premium metal sticker manufacturing with innovation, quality, and unwavering commitment to excellence
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full">
              <Factory className="text-amber-600" size={20} />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Manufacturing Excellence
            </h3>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Metal Stickers India has been at the forefront of premium metal sticker and label manufacturing. 
              What started as a vision to create world-class products has evolved into a global enterprise serving leading brands 
              across automotive, electronics, appliances, and luxury sectors.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our commitment to innovation and quality has made us the preferred partner for international brands seeking 
              premium metal stickers with advanced finishes. From our state-of-the-art facility, we combine traditional 
              craftsmanship with cutting-edge technology to deliver products that exceed expectations.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 sm:p-6 rounded-xl border-l-4 border-amber-500">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">"We Work for Your Success"</h4>
              <p className="text-gray-700 italic text-sm sm:text-base">
                Our brand philosophy centers on your success. Every product we create, every process we refine, 
                and every service we provide is designed to help our clients achieve their goals and exceed their expectations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src="/01.png" alt="Manufacturing facility" className="rounded-xl shadow-lg w-full object-cover" />
              <img src="/02.png" alt="Advanced equipment" className="rounded-xl shadow-lg w-full object-cover" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center group hover:shadow-2xl transition-all"
            >
              <div
                className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
              >
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Values</h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Meet Our Expert Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Kunal Dhingra</h4>
              <h5 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Director</h5>
              <p className="text-gray-600 text-sm sm:text-base">Our expert engineers with decades of experience in metal processing and electroplating technologies.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm sm:text-base">Dedicated quality professionals ensuring every product meets international standards and specifications.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="text-white" size={28} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Global Support</h4>
              <p className="text-gray-600 text-sm sm:text-base">International sales and support team providing seamless service across all time zones and markets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
