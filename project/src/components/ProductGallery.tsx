import { useState } from "react";
import { ArrowRight, ArrowDown, X } from "lucide-react";

const productImages = [
  "/12.png",
  "/11.png",
  "/13.png",
  "/14.png",
  "/silver-finish.png", 
  "/rose-gold.png", 
  "/4.png", 
  "/gold-finish.png", 
];

const testimonials = [
  {
    name: "Rahul • Auto Parts Co.",
    quote:
      "Outstanding quality! The metal stickers gave our products a premium look.",
  },
  {
    name: "Priya • Packaging Ltd.",
    quote:
      "Reliable supplier—on-time delivery with consistent finish every batch.",
  },
  {
    name: "Ankit • Electronics Brand",
    quote:
      "Perfect color-matched logo plates. Great support from design to dispatch!",
  },
];

const processes = [
  { step: "01", title: "Design Consultation", description: "Understanding your requirements and design specifications" },
  { step: "02", title: "Material Selection", description: "Choosing the optimal substrate and finish for your application" },
  { step: "03", title: "Prototype Development", description: "Creating samples for approval and testing" },
  { step: "04", title: "Production Planning", description: "Optimizing manufacturing processes for efficiency and quality" },
  { step: "05", title: "Quality Control", description: "Rigorous testing and inspection at every stage" },
  { step: "06", title: "Packaging & Delivery", description: "Secure packaging and timely delivery worldwide" },
];

const gradientCards = [
  "from-amber-500 to-pink-500",
  "from-indigo-600 to-cyan-500",
  "from-violet-600 to-fuchsia-500",
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="productgallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Product{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            From concept to delivery, we provide end-to-end solutions for premium metal stickers and labels with unmatched expertise and quality.
          </p>
        </div>

        {/* 🔁 Product Gallery with Modal */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productImages.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg group cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={i * 80}
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Metal sticker product ${i + 1}`}
                  loading="lazy"
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔍 Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()} // ✅ prevent closing on image click
            >
              <img
                src={selectedImage}
                alt="Selected product"
                className="max-h-[80vh] mx-auto rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-2 right-6 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Manufacturing Process */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Our Manufacturing Process
              
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="120">
              A systematic approach ensuring precision, quality, and timely delivery at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((p, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg bg-gray-200 text-gray-800 border border-gray-400">
                      {p.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{p.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{p.description}</p>
                  </div>
                </div>

                {/* Connector Arrows */}
                {index < processes.length - 1 && (
                  <>
                    <ArrowRight className="hidden lg:block text-gray-400 w-6 h-6 animate-bounce mt-4" />
                    <ArrowDown className="block lg:hidden text-gray-400 w-6 h-6 mx-auto animate-bounce mt-4" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 🌈 Colorful Testimonials */}
        <section className="py-20 mt-20 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600"></div>
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-gray text-center mb-12" data-aos="fade-up">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl text-white shadow-2xl bg-gradient-to-br ${gradientCards[i % gradientCards.length]} ring-1 ring-white/30 transform hover:scale-105 transition-transform`}
                data-aos="flip-up"
                data-aos-delay={i * 120}
              >
                <p className="text-base md:text-lg italic leading-relaxed">“{t.quote}”</p>
                <div className="mt-6 text-right font-semibold">— {t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-white" data-aos="zoom-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-base md:text-lg mb-8 text-amber-100 max-w-2xl mx-auto">
              Let our experts help you create the perfect metal stickers and labels for your brand.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/corporatemetalstickers/30min"
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Schedule Consultation
              </a>
              <a
                href="#contact"
                
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all"
              >
                Request Technical Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
