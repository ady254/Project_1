import { ArrowRight, Award, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 px-4 py-2 rounded-full border border-amber-500/30 mx-auto lg:mx-0">
              <Award className="text-amber-400" size={20} aria-hidden="true" />
              <span className="text-amber-300 font-medium text-sm sm:text-base">
                Strong Sticker with Stronger Identity
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Creative &
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Innovative
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Manufacturer
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              World-Class Metal Stickers & Labels with Premium Finishes.
              Specializing in Nickel Chrome, Gold, Silver, Rose Gold, and
              Custom Designs for International Brands.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
              <div className="flex start-center space-x-3">
                <div className=" flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Advanced Electroplating
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">Premium Finishes</p>
                </div>
              </div>

             <div className="flex start-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="text-white" size={20} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Pan-India
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400"> Every corner of India.</p>
                </div>
              </div> 

              <div className="flex start-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Quality Assured
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">ISO Certified</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-amber-600 to-amber-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:from-amber-700 hover:to-amber-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>

              <a
                href="tel:+9193311862900"
                className="border-2 border-amber-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:bg-amber-500 hover:text-gray-900 transition-all flex items-center justify-center space-x-2 text-white"
              >
                <span>Contact Experts</span>
              </a>
            </div>
          </div>

          {/* Right Content - Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Column 1 */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 sm:p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Gold Finish</h3>
                  <p className="text-gray-800 text-xs sm:text-sm">Premium luxury appeal</p>
                </div>

                <div className="bg-gradient-to-br from-gray-300 to-gray-500 p-4 sm:p-6 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Chrome Finish</h3>
                  <p className="text-gray-800 text-xs sm:text-sm">Mirror-like brilliance</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-8">
                <div className="bg-gradient-to-br from-rose-400 to-rose-600 p-4 sm:p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                  <h3 className="font-bold text-white text-sm sm:text-base">Rose Gold</h3>
                  <p className="text-rose-100 text-xs sm:text-sm">Elegant sophistication</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-black p-4 sm:p-6 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform">
                  <h3 className="font-bold text-white text-sm sm:text-base">Black Finish</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Modern minimalism</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
