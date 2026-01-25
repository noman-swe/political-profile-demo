import React from "react";
import { events } from "../data/eventsData";

const Events = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 section-title">
        আসন্ন <span className="text-primary">কর্মসূচী ও অনুষ্ঠান</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <img
              alt="Event"
              className="w-full h-40 object-cover"
              src={event.image}
            />
            <div className="p-6">
              <div className="flex justify-between text-xs text-secondary font-bold mb-2">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
              <h3 className="font-bold mb-2">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-secondary text-white px-8 py-2 rounded-md font-bold">
          আরো কর্মসূচী দেখুন
        </button>
      </div>
    </section>
  );
};

export default Events;
