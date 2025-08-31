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
      once: true,     // whether animation should happen only once
      easing: "ease-in-out", // easing effect
    });
  }, []);

  return (
    <>
      <SplashScreen />
      <Header />
      <Hero />
      <div data-aos="fade-up">
        <ClientCarousel />
      </div>
      <div data-aos="zoom-in">
        <About />
      </div>
      <div data-aos="fade-right">
        <Products />
      </div>
      <div data-aos="fade-left">
        <Productgallery />
      </div>
      
      <div data-aos="flip-up">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
