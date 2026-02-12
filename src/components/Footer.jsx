import React from "react";
import { footerInfo } from "../data/footerData";

const Footer = () => {
  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 pt-56 pb-10">
      {/* Floating Candidate Image */}
      <div className="absolute -top-24 md:-top-48 right-12 md:right-24 z-20 ">
        <img
          alt="Farhad Iqbal"
          className="w-64 h-80 md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] object-cover"
          src={footerInfo.image}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-6 text-primary">কুইক লিঙ্ক</h4>
            <ul className="space-y-3 opacity-70">
              <li>
                <a className="hover:text-primary" href="#home">
                  হোম
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#about">
                  আমার সম্পর্কে
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#platform">
                  সমস্যা ও প্ল্যাটফর্ম
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">রিসোর্স</h4>
            <ul className="space-y-3 opacity-70">
              <li>
                <a className="hover:text-primary" href="#news">
                  সংবাদ এবং ব্লগ
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#events">
                  ইভেন্ট ক্যালেন্ডার
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#volunteer">
                  স্বেচ্ছাসেবক ফর্ম
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">কন্টাক্ট</h4>
            <ul className="space-y-3 opacity-70">
              <li>
                <a className="hover:text-primary" href="#contact">
                  যোগাযোগ ও মতামত
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#news">
                  প্রেস
                </a>
              </li>
            </ul>
          </div>

          <div>{/* Empty column for spacing */}</div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col items-center gap-2 text-xs opacity-60">
          <p className="text-center">
            © ২০২৪ ফরহাদ ইকবাল - সর্বস্বত্ব সংরক্ষিত
          </p>
          <p className="text-center">
            Developed by{" "}
            <a
              href="https://www.facebook.com/NomanAbdullahr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary"
            >
              Noman Shibly
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
