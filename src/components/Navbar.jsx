import React, { useState } from "react";
import { navLinks } from "../data/navData";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a href="#home" className="text-2xl font-bold text-primary">
            ফরহাদ <span className="text-secondary text-[10px]"> ইকবাল </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                className="hover:text-primary transition font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 backdrop-blur-md">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                className="hover:text-primary transition font-medium"
                href={link.href}
                onClick={() => setMobileOpen(false)} // close menu on click
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
