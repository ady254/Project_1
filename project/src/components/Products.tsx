import { useState } from 'react';
import { Download, ZoomIn as Zoom, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Products' },
    { id: 'chrome', name: 'Nickel Chrome' },
    { id: 'gold', name: 'Gold Finish' },
    { id: 'silver', name: 'Silver Finish' },
    { id: 'rose-gold', name: 'Rose Gold' },
    { id: 'black', name: 'Black Finish' },
    { id: 'printed', name: 'Printed Labels' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Nickel Chrome Stickers',
      category: 'chrome',
      image: '/chrome-finish.png',
      price: '₹45-85/piece',
      minOrder: '50 Sheets',
      size: 'A3 or A4',
      adhesive: '6010 or 467',
      specs: 'Mirror finish, corrosion resistant, outdoor life 5+ years',
      applications: 'Automotive, Electronics, Appliances'
    },
    {
      id: 2,
      name: 'Luxury Gold Finish Labels',
      category: 'gold',
      image: '/gold-finish.png',
      price: '₹65-120/piece',
      minOrder: '50 Sheets',
      size: 'A3 or A4',
      adhesive: '6010 or 467',
      specs: '24K gold plating, premium finish, scratch resistant',
      applications: 'Luxury goods, Jewelry, Premium appliances'
    },
    {
      id: 3,
      name: 'Rose Gold Premium Stickers',
      category: 'rose-gold',
      image: '/rose-gold.png',
      price: '₹55-95/piece',
      minOrder: '50 Sheets',
      size: 'A3 or A4',
      adhesive: '6010 or 467',
      specs: 'Elegant rose gold finish, fade resistant',
      applications: 'Fashion, Cosmetics, Luxury items'
    },
    {
      id: 4,
      name: 'Stainless Steel Silver Labels',
      category: 'silver',
      image: '/silver-finish.png',
      price: '₹35-70/piece',
      minOrder: '50 Sheets',
      size: 'A3 or A4',
      adhesive: '6010 or 467',
      specs: 'Brushed steel finish, industrial grade',
      applications: 'Industrial equipment, Automotive'
    },
    {
      id: 5,
      name: 'Matte Black Finish Stickers',
      category: 'black',
      image: '/6.png',
      price: '₹40-75/piece',
      minOrder: ' 50 Sheets',
      size: 'Custom sizes',
      adhesive: '6010 or 467',
      specs: 'Premium matte finish, fingerprint resistant',
      applications: 'Electronics, Modern appliances'
    },
    {
      id: 6,
      name: 'Custom Printed Metal Labels',
      category: 'printed',
      image: '/4.png',
      price: '₹50-100/piece',
      minOrder: '50 Sheets',
      size: 'A3 or A4',
      adhesive: '6010 or 467',
      specs: 'Full color printing, UV resistant',
      applications: 'Branding, Product identification'
    },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section id="products" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight">
            Premium{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Product Range
            </span>
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Discover our comprehensive collection of premium metal stickers and labels with advanced finishes and superior quality
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-full font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <button className="bg-white/90 p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors">
                      <Zoom size={16} className="text-gray-700" />
                    </button>
                    <button className="bg-amber-500 p-1.5 sm:p-2 rounded-full hover:bg-amber-600 transition-colors">
                      <Download size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">{product.specs}</p>

                {/* Specifications */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Price Range:</span>
                    <span className="font-semibold text-amber-600">{product.price}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Min Order:</span>
                    <span className="font-semibold">{product.minOrder}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Size:</span>
                    <span className="font-semibold">{product.size}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Adhesive:</span>
                    <span className="font-semibold">{product.adhesive}</span>
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Applications:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    {product.applications}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://wa.me/919311862900?text=Hi%20I%20want%20to%20know%20about%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-500 text-white py-2 px-3 sm:px-4 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-600 transition-all flex items-center justify-center space-x-1 sm:space-x-2"
                  >
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                    <span>Order Now</span>
                  </a>
                  <a
                    href="/catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border-2 border-amber-500 text-amber-600 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all flex items-center justify-center"
                  >
                    <Download size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-2xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Our expert team can create bespoke metal stickers and labels tailored to your specific requirements.
              From design to delivery, we ensure premium quality every step of the way.
            </p>

            {/* Buttons Wrapper */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-600 transition-all"
              >
                Request Custom Quote
              </a>
              <a
                href="/catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-500 text-amber-600 px-5 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all"
              >
                View Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
