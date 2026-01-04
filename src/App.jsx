import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import TopBar from './components/TopBar';
import Header from './components/header';
import Hero from './components/hero';
import WhyChooseUs from './components/WhyChooseUse';
import { SpotlightInitiatives } from './components/Spotlight';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import AboutCompany from "./components/About";
import ServicesSection from "./components/service";
import BillboardGrid from "./components/BillboardGrid";
import TestimonialCarousel from "./components/Testimonial";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import BlogsPage from "./pages/Blogs";
import SingleBlogPage from "./pages/SingleBlog";

import OfferSection from "./components/offersection";

// Home Component containing existing sections
const Home = () => {
  return (
    <main className="relative w-full min-h-screen bg-[#EBEBEB]">

      <Header />

      {/* Hero Section - Only this one has overlay effect */}
      <Section id="hero">
        <Hero />
      </Section>

      {/* About Section - Normal scroll with solid background */}
      <section id="about" className="relative z-20">
        <AboutCompany />
      </section>

      {/* Offer Section (Billboard Style) */}
      <section id="offers" className="relative z-30">
        <OfferSection />
      </section>

      {/* Spotlight - Normal scroll */}
      <section id="spotlight" className="relative z-40">
        <SpotlightInitiatives />
      </section>

      <section id="testimonials" className="relative z-40">
        <TestimonialCarousel />
      </section>

      {/* Contact - Normal scroll */}
      <section id="contact" className="relative z-40">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

function App() {


  const getAddressFromCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        {
          headers: {
            "User-Agent": "your-app-name", // IMPORTANT
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Reverse geocoding failed:", error);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);

          const locationData = await getAddressFromCoords(latitude, longitude);

          console.log("Full Address:", locationData.display_name);
          console.log("City:", locationData.address.city || locationData.address.town);
          console.log("State:", locationData.address.state);
          console.log("Country:", locationData.address.country);
        },
        (error) => {
          console.error("Location access denied or error:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
      </Routes>
    </Router>
  );
}

// Section component with overlay effect - only used for Hero
function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      className="h-screen w-full sticky top-0 overflow-hidden"
    >
      <div className="h-full w-full relative">
        {children}
      </div>
    </motion.section>
  );
}

export default App;