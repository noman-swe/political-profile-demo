import React from "react";

const SocialLinks = () => {
  return (
    <section className="py-16 text-center max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">
        সংযুক্ত <span className="text-primary">হন</span>
      </h2>
      <p className="mb-8 opacity-70">
        সোশ্যাল মিডিয়ায় ফলো করুন আমাদের আপডেট পেতে
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-[#1877F2] text-white px-6 py-2 rounded-md flex items-center gap-2">
          <span className="material-icons text-sm">facebook</span> ফেসবুক
          প্রোফাইল
        </button>
        <button className="bg-[#FF0000] text-white px-6 py-2 rounded-md flex items-center gap-2">
          ইউটিউব চ্যানেল
        </button>
        <button className="bg-[#E4405F] text-white px-6 py-2 rounded-md flex items-center gap-2">
          ইনস্টাগ্রাম
        </button>
        <button className="bg-[#000000] text-white px-6 py-2 rounded-md flex items-center gap-2">
          এক্স (টুইটার)
        </button>
      </div>
    </section>
  );
};

export default SocialLinks;
