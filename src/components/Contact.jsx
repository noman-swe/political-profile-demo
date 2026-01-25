import React from "react";
import { footerInfo } from "../data/footerData";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <div className="bg-primary text-white p-10 rounded-3xl h-full">
          <div className="mb-12">
            <span className="text-2xl font-bold">{footerInfo.brand}</span>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="material-icons">mail</span>
              <div>
                <p className="font-bold">ইমেইল করুন</p>
                <p className="opacity-80">{footerInfo.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-icons">phone</span>
              <div>
                <p className="font-bold">ফোন করুন</p>
                <p className="opacity-80">{footerInfo.phone}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-icons">location_on</span>
              <div>
                <p className="font-bold">অফিসের ঠিকানা</p>
                <p className="opacity-80">{footerInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex gap-4">
            <span className="material-icons cursor-pointer">facebook</span>
            <span className="material-icons cursor-pointer">
              alternate_email
            </span>
            <span className="material-icons cursor-pointer">smart_display</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-8">
            যোগাযোগ ও <span className="text-primary">মতামত</span>
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="পুরো নাম *"
                required
                type="text"
              />
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="ইমেইল"
                type="email"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="মোবাইল নম্বর *"
                required
                type="tel"
              />
              <div className="flex items-center gap-4">
                <select className="w-1/2 bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4">
                  <option>থানা</option>
                </select>
                <select className="w-1/2 bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4">
                  <option>ইউনিয়ন</option>
                </select>
              </div>
            </div>
            <textarea
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
              placeholder="আপনার মতামত লিখুন..."
              rows="5"
            ></textarea>
            <button className="bg-secondary text-white px-12 py-4 rounded-md font-bold shadow-lg hover:bg-opacity-90 transition">
              সাবমিট করুন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
