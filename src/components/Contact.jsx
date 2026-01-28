import React, { useState } from "react";
import { footerInfo } from "../data/footerData";
import {
  Facebook,
  MailCheck,
  Mails,
  MapPinHouse,
  MonitorCheck,
  PhoneOutgoing,
} from "lucide-react";

// Tangail-5 (Tangail Sadar) ইউনিয়নসমূহ
const unions = [
  { name: "বাঘিল ইউনিয়ন", value: "Baghil Union" },
  { name: "দাইন্যা ইউনিয়ন", value: "Dyenna Union" },
  { name: "গালা ইউনিয়ন", value: "Gala Union" },
  { name: "ঘরিন্দা ইউনিয়ন", value: "Gharinda Union" },
  { name: "হুগড়া ইউনিয়ন", value: "Hugra Union" },
  { name: "কাকুয়া ইউনিয়ন", value: "Kakua Union" },
  { name: "করাটিয়া ইউনিয়ন", value: "Karatia Union" },
  { name: "কাতুলী ইউনিয়ন", value: "Katuli Union" },
  { name: "মগড়া ইউনিয়ন", value: "Mogra Union" },
  { name: "মাহমুদনগর ইউনিয়ন", value: "Mahmudnagar Union" },
  { name: "পোড়াবাড়ী ইউনিয়ন", value: "Porabari Union" },
  { name: "সিলিমপুর ইউনিয়ন", value: "Silimpur Union" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    union: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError("অনুগ্রহ করে আপনার নাম লিখুন।");
      return;
    }
    if (!formData.phone.trim()) {
      setError("অনুগ্রহ করে আপনার হোয়াটসঅ্যাপ নম্বর লিখুন।");
      return;
    }
    if (!formData.union) {
      setError("অনুগ্রহ করে আপনার ইউনিয়ন নির্বাচন করুন।");
      return;
    }
    if (!formData.message.trim()) {
      setError("অনুগ্রহ করে আপনার মতামত লিখুন।");
      return;
    }

    // WhatsApp number (replace with yours)
    const whatsappNumber = "8801688126772";

    const message = `নাম: ${formData.name}%0AWhatsApp: ${formData.phone}%0Aইউনিয়ন: ${formData.union}%0Aমতামত: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      union: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <h2 className="text-4xl font-bold mb-8 md:hidden block">
          যোগাযোগ ও <span className="text-primary">মতামত</span>
        </h2>

        {/* Contact Info Card */}
        <div className="bg-primary text-white p-10 rounded-3xl h-full">
          <div className="mb-12">
            <span className="text-2xl font-bold">{footerInfo.brand}</span>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MailCheck />
              <div>
                <p className="font-bold">ইমেইল করুন</p>
                <p className="opacity-80">{footerInfo.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PhoneOutgoing />
              <div>
                <p className="font-bold">হোয়াটসঅ্যাপ নম্বর</p>
                <p className="opacity-80">{footerInfo.phone}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPinHouse />
              <div>
                <p className="font-bold">অফিসের ঠিকানা</p>
                <p className="opacity-80">{footerInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-4 justify-end">
            <a
              href="https://www.facebook.com/adv.FarhadIqbal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <Facebook />
            </a>

            <a
              href="mailto:ad.farhadiqbal07@gmail.com"
              className="hover:text-secondary transition"
            >
              <Mails />
            </a>

            <a
              href="https://forhadikbal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <MonitorCheck />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-8 hidden md:block">
            যোগাযোগ ও <span className="text-primary">মতামত</span>
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="পুরো নাম *"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="ইমেইল"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="হোয়াটসঅ্যাপ নম্বর *"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <select
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4"
                name="union"
                value={formData.union}
                onChange={handleChange}
              >
                <option value="">ইউনিয়ন নির্বাচন করুন</option>
                {unions.map((union, idx) => (
                  <option key={idx} value={union.value}>
                    {union.name}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
              placeholder="আপনার মতামত লিখুন... *"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {error && (
              <p className="text-red-600 font-medium bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-md">
                {error}
              </p>
            )}

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
