const ClientCarousel = () => {
  const clients = [
    { name: 'Studds', logo: '/Studds.png' },
    { name: 'Samsung', logo: '/Samsung.png' },
    { name: 'Cello', logo: '/Cello.png' },
    { name: 'Panasonic', logo: '/Panasonic.png' },
    { name: 'Liebherr', logo: '/Liebherr.png' },
    { name: 'Kelvinator', logo: '/Kelvinator.png' },
    { name: 'GEM', logo: '/GEM.png' },
    { name: 'Voltas', logo: '/Voltas.png' },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Global Brands
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve leading international brands across automotive,
            electronics, appliances, and luxury sectors
          </p>
        </div>

        {/* Scrolling Carousel */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6 sm:space-x-12">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-28 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105 border border-gray-200"
              >
                <div className="text-center p-2 sm:p-4">
                  {/* Logo Image */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform"
                  />
                  {/* Company Name */}
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors block">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Carousel Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Tablet speed */
        @media (max-width: 1024px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }

        /* Mobile speed */
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
