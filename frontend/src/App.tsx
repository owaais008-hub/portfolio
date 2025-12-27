import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./components/canvas/Stars";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className='relative z-0 bg-primary' style={{ backgroundColor: "#050816", position: "relative", zIndex: 0 }}>
        {/* <StarsCanvas /> */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' style={{ background: "radial-gradient(circle at top right, #1d1836, #050816)" }}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0' style={{ position: "relative", zIndex: 0 }}>
          <Contact />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;