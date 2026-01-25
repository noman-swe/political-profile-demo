import React from "react";
import { galleryImages } from "../data/galleryData";

const Gallery = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4 section-title">
        ফটো <span className="text-primary">গ্যালারি</span>
      </h2>
      <p className="mb-12 opacity-70">আমাদের কার্যক্রমের কিছু স্থিরচিত্র</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            alt={`Gallery ${idx + 1}`}
            className="rounded-lg w-full h-48 object-cover hover:opacity-90 cursor-pointer"
            src={src}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-secondary text-white px-8 py-2 rounded-md font-bold">
          আরো ছবি দেখুন
        </button>
      </div>
    </section>
  );
};

export default Gallery;
