import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import LocationModal from "./components/LocationModal";
import { trackVisitorLocation } from "./data/analytics";
import { HelmetProvider } from 'react-helmet-async';

import SEO from "./components/SEO";

// Home Component containing existing sections
const Home = () => {
  return (
    <main className="relative w-full min-h-screen bg-[#EBEBEB]">
      <SEO
        title="Home"
        description="Welcome to Billford Advertising. We provide premium billboards, digital marketing, and creative advertising solutions."
        keywords="advertising agency, billboard advertising, digital marketing, outdoor advertising, creative ads, branding"
        ogType="website"
      />
      <Header />

      {/* Hero Section - Only this one has overlay effect */}
      <Section id="hero">
        <Hero />
      </Section>

      {/* About Section - Normal scroll with solid background */}
      <section id="about" className="relative z-20">
        <AboutCompany />
      </section>

      {/* Offer Section (Billboard Style)
      <section id="offers" className="relative z-30">
        <OfferSection />
      </section> */}

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

import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminOffers from "./pages/admin/AdminOffers";
import AdminContacts from "./pages/admin/AdminContacts";
import Login from "./pages/admin/Login";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [showLocationModal, setShowLocationModal] = useState(() => {
    return localStorage.getItem("locationPermission") === null;
  });

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

  const handleFetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const locationData = await getAddressFromCoords(latitude, longitude);

          if (locationData) {
            // Track in backend
            try {
              await trackVisitorLocation({
                city: locationData.address.state_district || locationData.address.city || locationData.address.town
              });
              console.log("Location tracked successfully in backend");
            } catch (err) {
              console.error("Failed to track location in backend:", err);
            }
          }

          localStorage.setItem("locationPermission", "granted");
        },
        (error) => {
          console.error("Location access denied or error:", error);
          localStorage.setItem("locationPermission", "denied");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const onAcceptLocation = () => {
    setShowLocationModal(false);
    handleFetchLocation();
  };

  const onCancelLocation = () => {
    setShowLocationModal(false);
    localStorage.setItem("locationPermission", "denied");
  };

  useEffect(() => {
    const permission = localStorage.getItem("locationPermission");
    if (permission === "granted") {
      handleFetchLocation();
    }
  }, []);

  return (
    <HelmetProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blog/:id" element={<SingleBlogPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Admin Login */}
              <Route path="/admin/login" element={<Login />} />

              {/* Protected Admin Routes */}
              <Route path="/admin" element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="blogs" element={<AdminBlogs />} />
                  <Route path="offers" element={<AdminOffers />} />
                  <Route path="contacts" element={<AdminContacts />} />
                </Route>
              </Route>
            </Routes>
            <WhatsAppButton />
            <LocationModal
              isOpen={showLocationModal}
              onAccept={onAcceptLocation}
              onCancel={onCancelLocation}
            />
          </Router>
        </DataProvider>
      </AuthProvider>
    </HelmetProvider>
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