import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientCarousel from "./components/ClientCarousel";
import Products from "./components/Products";
import Productgallery from "./components/ProductGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/Ui/SplashScreen";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: true, // whether animation should happen only once
      easing: "ease-in-out", // easing effect
    });
  }, []);

  return (
    <>
      <SplashScreen />
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Clients */}
      <section id="clients" data-aos="fade-up">
        <ClientCarousel />
      </section>

      {/* About */}
      <section id="about" data-aos="zoom-in">
        <About />
      </section>

      {/* Products */}
      <section id="products" data-aos="fade-right">
        <Products />
      </section>

      {/* Product Gallery */}
      <section id="product-gallery" data-aos="fade-left">
        <Productgallery />
      </section>

      {/* Contact */}
      <section id="contact" data-aos="flip-up">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
