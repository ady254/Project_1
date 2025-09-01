import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false); // close mobile menu after clicking
  };

  return (
    <header className="bg-gradient-to-r from-white-200 via-white-900 to-gray-900 text-black shadow-2xl sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-600 to-white-500 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-3">
          {/* Left side - Phone + Email */}
          <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 text-white text-center sm:text-left break-words">
            <a
              href="tel:+91-9311862900"
              className="flex items-center space-x-2 hover:text-amber-100 transition-colors"
            >
              <Phone size={14} />
              <span className="truncate">+91-9311862900</span>
            </a>
            <a
              href="mailto:info@metalstickers.com"
              className="flex items-center space-x-2 hover:text-amber-100 transition-colors"
            >
              <Mail size={14} />
              <span className="break-all text-center sm:text-left">
                corporatemetalstickers@gmail.com
              </span>
            </a>
          </div>

          {/* Right-side - WhatsApp & Instagram */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 gap-2">
            <a
              href="https://wa.me/919311862900?text=Hi%20I%20want%20to%20know%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-600 px-3 py-1 rounded-full hover:bg-green-700 transition-colors text-white w-max"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/metalstickersfaridabadfactory/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-1 rounded-full hover:opacity-90 transition text-white w-max"
            >
              <Instagram size={14} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/LOGO.png"
              alt="Metal Stickers India"
              className="h-10 w-auto sm:h-12"
            />
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Metal Stickers India
              </h1>
              <p className="text-xs sm:text-sm text-black-300">
                Strong Sticker with stronger Identity
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-amber-400 transition-colors font-medium">Home</a>
            <a href="#about" className="hover:text-amber-400 transition-colors font-medium">About</a>
            <a href="#products" className="hover:text-amber-400 transition-colors font-medium">Products</a>
            <a href="#productgallery" className="hover:text-amber-400 transition-colors font-medium">Product Gallery</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-2 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Request Quote
            </a>
            <a
              href="tel:+919311862900"
              className="border-2 border-amber-500 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-gray-900 transition-all"
            >
              Contact Experts
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" onClick={handleNavClick} className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#about" onClick={handleNavClick} className="hover:text-amber-400 transition-colors">About</a>
              <a href="#products" onClick={handleNavClick} className="hover:text-amber-400 transition-colors">Products</a>
              <a href="#productgallery" onClick={handleNavClick} className="hover:text-amber-400 transition-colors">Product Gallery</a>
              <a href="#contact" onClick={handleNavClick} className="hover:text-amber-400 transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-2 rounded-lg font-semibold"
                >
                  Request Quote
                </a>
                <a
                  href="tel:+919311862900"
                  onClick={handleNavClick}
                  className="border-2 border-amber-500 px-6 py-2 rounded-lg font-semibold"
                >
                  Contact Experts
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
