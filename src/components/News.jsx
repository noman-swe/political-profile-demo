import React from "react";
import { news } from "../data/newsData";

const News = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 section-title">
          সংবাদ এবং <span className="text-primary">ব্লগ</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="flex bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img alt="News" className="w-1/3 object-cover" src={item.image} />
              <div className="p-6 w-2/3">
                <span className="text-secondary text-sm font-bold">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm opacity-70 line-clamp-2">
                  {item.excerpt}
                </p>
                <a
                  className="inline-block mt-4 text-primary font-bold hover:underline"
                  href="#"
                >
                  আরো পড়ুন →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-secondary text-white px-8 py-2 rounded-md font-bold">
            সকল খবর দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
