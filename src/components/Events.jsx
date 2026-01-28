import React, { useState } from "react";
import { events } from "../data/eventsData";

const Events = () => {
  const [showAll, setShowAll] = useState(false);

  // প্রথমে ৪টি দেখাবে, showAll true হলে সব
  const visibleEvents = showAll ? events : events.slice(0, 3);

  const toggleShow = () => setShowAll((prev) => !prev);

  return (
    <section
      id="events"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold mb-12 section-title">
        কর্মসূচী <span className="text-primary"> ও অনুষ্ঠান</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleEvents.map((event, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700"
          >
            {event.image && (
              <img
                alt="Event"
                className="w-full h-40 object-cover"
                src={event.image}
              />
            )}
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
        <button
          onClick={toggleShow}
          className="bg-secondary text-white px-8 py-2 rounded-md font-bold cursor-pointer hover:bg-secondary/90 transition"
        >
          {showAll ? <a href="#events">কমিয়ে দেখুন</a> : "আরও কর্মসূচী দেখুন"}
        </button>
      </div>
    </section>
  );
};

export default Events;
