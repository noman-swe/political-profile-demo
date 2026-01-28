import React, { useState } from "react";
import { news } from "../data/newsData";

const News = () => {
  const [showAll, setShowAll] = useState(false);

  // কতগুলো news দেখাবো
  const visibleNews = showAll ? news : news.slice(0, 4);

  const toggleShow = () => setShowAll((prev) => !prev);

  return (
    <section id="news" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 section-title">
          সংবাদ এবং <span className="text-primary">ব্লগ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[...visibleNews].reverse().map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {item.image && (
                <img
                  alt="News"
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                  src={item.image}
                />
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-secondary text-sm font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm opacity-70 line-clamp-2">{item.excerpt}</p>
                </div>
                {item.link && (
                  <a
                    className="inline-block mt-4 text-primary font-bold hover:underline"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    আরো পড়ুন →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={toggleShow}
            className="bg-secondary text-white px-8 py-2 rounded-md font-bold cursor-pointer hover:bg-secondary/90 transition"
          >
            
            {showAll ? <a href="#news">কমিয়ে দেখুন  </a> : "সকল খবর দেখুন"}
           
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
