import React from "react";
import { heroData } from "../data/heroData";

const Hero = () => {
  return (
    <section id="home" className="bg-hero-gradient pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              জনাব আজহারুল ইসলাম <span className="text-secondary">মান্নান</span>
            </h1>
            <p className="text-lg mb-6 opacity-90">"{heroData.slogan}"</p>
            <p className="mb-8 leading-relaxed max-w-lg">
              {heroData.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 shadow-lg">
                স্বেচ্ছাসেবক হন
              </button>
              <button className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-opacity-90 shadow-lg">
                যোগাযোগ করুন
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <img
                alt="Candidate Portrait"
                className="w-full h-auto grayscale-20"
                src={heroData.image}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
