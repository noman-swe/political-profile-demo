import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Roles from "./components/Roles";
import About from "./components/About";
import Platform from "./components/Platform";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Events from "./components/Events";
import Volunteer from "./components/Volunteer";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-200">
      <Navbar />
      <Hero />
      <Roles />
      <About />
      <Platform />
      <Gallery />
      <News />
      <Events />
      <Volunteer />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
