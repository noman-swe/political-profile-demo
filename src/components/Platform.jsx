import React from "react";
import { platforms } from "../data/platformData";

const Platform = () => {
  return (
    <section id="platform" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">
          সমস্যা এবং <span className="text-primary">প্ল্যাটফর্ম</span>
        </h2>
        <p className="mb-12 opacity-70">
          বিএনপি-র ৩১-দফা সংস্কার এজেন্ডার সাথে সামঞ্জস্যপূর্ণ আমাদের মূল
          অবস্থান:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((item, idx) => {
            const Icon = item.icon;
            return (
            <div
              key={idx}
              className="bg-primary text-white p-6 rounded-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-white mb-4 w-8 h-8" />
                <h3 className="font-bold">{item.title}</h3>
              </div>
              <ul className="text-sm space-y-2 opacity-90 list-disc pl-5">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Platform;
