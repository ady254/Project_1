import { Phone, Mail, MapPin, MessageCircle, Instagram, Download, ExternalLink, View } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Product Gallery', href: '#productgallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Nickel Chrome Stickers',
    'Gold Finish Labels',
    'Silver Metal Stickers',
    'Rose Gold Labels',
    'Black Finish Stickers',
    'Custom Printed Labels',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/LOGO.png" alt="Metal Stickers India" className="h-10 w-auto" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Metal Stickers India
                </h3>
                <p className="text-sm text-gray-400">Strong Sticker With Stronger Identity</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Leading manufacturer and exporter of premium metal stickers and labels with advanced finishes. 
              Serving global brands with quality, innovation, and excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400" size={16} />
                <span className="break-words">+91-9311862900, +91-9999865558</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400" size={16} />
                <span className="break-all">corporatemetalstickers@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1" size={16} />
                <span className="text-sm leading-relaxed">
                  11/7 New Anangpur, Sector 37<br />
                  Badarpur, Faridabad, Haryana 121003, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Resources */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-amber-400">Resources</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="/catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2"
                  >
                    <View size={14} />
                    <span>Product Catalogue</span>
                  </a>
                </li>
               {/*<li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2">
                    <Download size={14} />
                    <span>Technical Specifications</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2">
                    <ExternalLink size={14} />
                    <span>Quality Certificates</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Our Products</h4>
            <ul className="space-y-3 text-sm">
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#products" className="text-gray-300 hover:text-amber-400 transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-5 sm:p-6">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="text-white" size={20} />
                <span className="font-semibold">WhatsApp Support</span>
              </div>
              <p className="text-sm text-green-100 mb-3">
                Get instant quotes and technical support
              </p>
              <a 
                href="https://wa.me/919311862900?text=Hi%20I%20want%20to%20know%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors inline-block"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          
            <div className="text-sm text-gray-400 text-center">
              © 2025 Metal Stickers India. All rights reserved. | GST NO. 06ABZFM3928P1Z7
            </div>

           {/* <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Quality Policy</a>
            </div> */}
          </div> 

          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Specializing in Nickel Chrome, Gold, Silver, Rose Gold, Black, and Custom Printed Metal Stickers & Labels. <br />
              Serving Automotive, Electronics, Appliances & Luxury Sectors Worldwide.
            </p>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
