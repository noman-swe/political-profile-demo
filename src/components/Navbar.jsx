import React from "react";
import { navLinks } from "../data/navData";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <a href="#home" className="text-2xl font-bold text-primary">
            ফরহাদ <span className="text-secondary text-[10px]"> ইকবাল </span>
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                className="hover:text-primary transition"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
            যোগাযোগ ও মতামত
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
