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

function App() {
  return (
    <>
   
      
      {/* Header remains fixed */}
      <Header />

      {/* Main scrolling container */}
      <main className="relative w-full min-h-screen bg-[#EBEBEB]">
        {/* Hero Section - Only this one has overlay effect */}
        <Section id="hero">
          <Hero />
        </Section>

        {/* About Section - Normal scroll with solid background */}
        <section id="about" className="relative z-20">
          <AboutCompany/>
        </section>
       
        {/* </section> */}

      {/* <section id="why-choose" className="relative z-30">
          <WhyChooseUs />
        </section> */}
{/* 
  <section id="why-choose" className="relative z-30">
          <ServicesSection />
        </section> */}
           {/* <section id="why-choose" className="relative z-30">
<BillboardGrid/>
        </section> */}
        {/* Why Choose Us - Normal scroll */}
        {/* <section id="why-choose" className="relative z-30">
          <WhyChooseUs />
        </section> */}

        {/* Spotlight - Normal scroll */}
        <section id="spotlight" className="relative z-40">
          <SpotlightInitiatives />
        </section>
         <section id="spotlight" className="relative z-40">
          <TestimonialCarousel />
        </section>

        {/* Contact - Normal scroll */}
        <section id="contact" className="relative z-40">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
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