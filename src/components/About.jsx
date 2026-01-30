import React from "react";
import { aboutCards, aboutImage } from "../data/aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row gap-16 md:items-stretch">
        {/* Cards Section */}
        <div className="md:w-2/3 flex flex-col">
          <h2 className="text-3xl font-bold mb-12 section-title">
            আমার <span className="text-primary">সম্পর্কে</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            {aboutCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
                >
                  <Icon className="text-primary mb-4 w-8 h-8" />
                  <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex">
          <img
            alt="Full Body Portrait"
            className="w-full h-auto  rounded-2xl shadow-xl"
            style={{ height: "100%" }}
            src={aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
