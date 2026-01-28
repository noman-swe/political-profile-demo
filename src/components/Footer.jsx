import React from "react";
import { footerInfo } from "../data/footerData";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <a className="hover:text-primary" href="#press">
                  প্রেস
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-end items-center">
            <img
              alt="Farhad Iqbal"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              src={footerInfo.image} // Farhad Iqbal's image
            />
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col items-center gap-2 text-xs opacity-60">
          <p className="text-center">
            © ২০২৪ ফরহাদ ইকবাল - সর্বস্বত্ব সংরক্ষিত
          </p>
          <p className="text-center">
            Developed by{" "}
            <a
              href="https://www.facebook.com/NomanAbdullahr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary"
            >
              Noman Shibly
            </a>
          </p>
          {/* <div className="flex gap-6 mt-2">
            <a href="#">টার্মস অফ কন্ডিশন</a>
            <a href="#">প্রাইভেসি পলিসি</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
