import React from "react";
import { MapPin, Users, Building2, User, UserPlus } from "lucide-react";

const VoterStats = () => {
  const areas = [
    "টাঙ্গাইল পৌরসভা",
    "বাঘিল",
    "দাইন্যা",
    "ঘরিন্দা",
    "মাহমুদনগর",
    "পোড়াবাড়ী",
    "করাটিয়া",
    "সিলিমপুর",
    "গালা",
    "হুগড়া",
    "কাকুয়া",
    "কাতুলী",
    "মগড়া",
  ];

  return (
    <div className="bg-gray-50 flex justify-center items-start font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Image Section - spans 2 columns */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 flex flex-col justify-between min-h-112">
          <div
            className="absolute inset-0 z-0 opacity-70"
            style={{
              backgroundImage: 'url("/images/atiya-mosque.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          <div className="relative z-10 p-8">
            <div className="bg-[#005a3c] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="text-white" size={24} />
            </div>

            <h1 className="text-5xl font-bold text-[#333] mb-8">
              আমাদের টাঙ্গাইল - ৫
            </h1>

            <p className="inline-block text-primary mb-4 font-medium bg-white px-4 py-2 rounded-lg opacity-70">
              ইউনিয়ন সমূহ
            </p>

            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 cursor-default"
                >
                  <MapPin size={14} className="text-gray-400" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stat Cards Section - spans 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
          <StatCard
            icon={<Users className="text-white" size={20} />}
            label="মোট ভোটার"
            value="৪,৫৭,১৭৩"
          />
          <StatCard
            icon={<Building2 className="text-white" size={20} />}
            label="মোট ভোট কেন্দ্র"
            value="১৩০"
          />

          <StatCard
            icon={<User className="text-white" size={20} />}
            label="মোট পুরুষ ভোটার"
            value="২,২৭,২০৭"
          />

          <StatCard
            icon={<UserPlus className="text-white" size={20} />}
            label="মোট নারী ভোটার"
            value="২,২৯,৯৬৫"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4 w-full">
    <div className="bg-[#005a3c] w-10 h-10 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-800 tracking-tight">{value}</p>
    </div>
  </div>
);

export default VoterStats;
