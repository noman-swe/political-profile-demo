import React from "react";
import { Facebook, Youtube, Instagram, X, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <section className="py-16 text-center max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">
        সংযুক্ত <span className="text-primary">হন</span>
      </h2>
      <p className="mb-8 opacity-70">
        সোশ্যাল মিডিয়ায় ফলো করুন এবং সরাসরি যোগাযোগ করুন
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.facebook.com/adv.FarhadIqbal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <Facebook size={18} /> ফেসবুক
        </a>

        <a
          href="https://www.youtube.com/@adv.FarhadIqbal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0000] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <Youtube size={18} /> ইউটিউব
        </a>

        <a
          href="https://www.instagram.com/adv.farhadiqbal07"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E4405F] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <Instagram size={18} /> ইনস্টাগ্রাম
        </a>

        <a
          href="https://twitter.com/advFarhadIqbal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#000000] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <X size={18} /> এক্স
        </a>

        <a
          href="mailto:ad.farhadiqbal07@gmail.com"
          className="bg-[#4A90E2] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <Mail size={18} /> ইমেইল
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
