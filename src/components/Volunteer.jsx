import React from "react";

const Volunteer = () => {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <img
            alt="Candidate Raising Hands"
            className="rounded-3xl shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQWAPZM17CeJD2jakU9N2n7OqZuWdd-pg14g_X8OBi6VrDvanBpPUNfAerUaWC_Jyg_TVY-RARrp8rr4y4KGcdrNeX3ms0fQKrmF3c7sz0UeSRcBFizN4UxzyUZfuFP228l62rZs2KAKEZqfwbKYOQ6i3r9SN16q-skEUzqOq4LD4SaISeycYfuz9LY-TPaiNzn8Te-8vcQ0RqW0ak8iLG3m1Gw05PWZaoq__dFhcL0E3H9qknfYyrU51qzXIcEuJBKnew8HjaPYf4"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            স্বেচ্ছাসেবক <span className="text-primary">হন</span>
          </h2>
          <p className="mb-8 opacity-70">
            আমাদের সাথে যুক্ত হয়ে সমাজ পরিবর্তনে অংশীদার হন।
          </p>
          <form className="space-y-4 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
            <input
              className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              placeholder="পুরো নাম"
              type="text"
            />
            <input
              className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              placeholder="ইমেইল"
              type="email"
            />
            <input
              className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              placeholder="মোবাইল নম্বর"
              type="tel"
            />
            <div className="grid grid-cols-2 gap-4">
              <select className="bg-slate-50 dark:bg-slate-700 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary">
                <option>থানা নির্বাচন করুন</option>
              </select>
              <select className="bg-slate-50 dark:bg-slate-700 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary">
                <option>ইউনিয়ন নির্বাচন করুন</option>
              </select>
            </div>
            <button className="w-full bg-secondary text-white py-3 rounded-md font-bold hover:bg-opacity-90 transition">
              সাবমিট করুন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
