import React, { useState } from "react";
import { footerInfo } from "../data/footerData";
import {
  Facebook,
  MailCheck,
  Mails,
  MapPinHouse,
  MonitorCheck,
  PhoneOutgoing,
  X,
} from "lucide-react";
import ContactCard from "./Cards/ContactCard";
import { unions } from "../data/unions";

const Contact = () => {
  const scriptURL = "https://sheetdb.io/api/v1/xclc6usgwtfwo";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    union: "",
    subject: "", // required
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(""); // message text
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear validation error
  };

  // WhatsApp sending function (toggleable)
  const sendToWhatsApp = (data) => {
    const whatsappNumber = "8801923315623";
    const message = `নাম: ${data.name}%0AWhatsApp: ${data.phone}%0Aইউনিয়ন: ${data.union}%0Aবিষয়: ${data.subject}%0Aমতামত: ${data.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  // show message with auto-hide
  const showStatus = (msg, type = "success") => {
    setStatusMsg(msg);
    setStatusType(type);
    setTimeout(() => {
      setStatusMsg("");
      setStatusType("");
    }, 3000);
  };

  const handleSubmit = async (e) => {  
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
    if (!formData.subject) {
      setError("অনুগ্রহ করে বিষয় নির্বাচন করুন।"); // new required field
      return;
    }
    if (!formData.message.trim()) {
      setError("অনুগ্রহ করে আপনার মতামত লিখুন।");
      return;
    }

    setLoading(true);
    setError("");

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("union", formData.union);
    formPayload.append("subject", formData.subject); // send subject
    formPayload.append("message", formData.message);
    formPayload.append("timestamp", new Date().toLocaleString());

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        showStatus("✅ আপনার তথ্য সফলভাবে পাঠানো হয়েছে!", "success");

        // WhatsApp sending (toggleable)
        sendToWhatsApp(formData);

        setFormData({
          name: "",
          email: "",
          phone: "",
          union: "",
          subject: "",
          message: "",
        });
      } else {
        showStatus(
          "❌ কোনো সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন!",
          "error",
        );
      }
    } catch (_error) {
      showStatus("❌ সার্ভারের সাথে সংযোগ ব্যর্থ হয়েছে।", "error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <h2 className="text-4xl font-bold mb-8 md:hidden block">
          যোগাযোগ ও <span className="text-primary">পরামর্শ</span>
        </h2>

        {/* Contact Info Card */}
        <ContactCard />

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold mb-8 hidden md:block">
            যোগাযোগ ও <span className="text-primary">পরামর্শ</span>
          </h2>

          {/* Status Message */}
          {statusMsg && (
            <div
              className={`flex justify-between items-center px-4 py-2 rounded-md mb-4 ${
                statusType === "success"
                  ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                  : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              <span>{statusMsg}</span>
              <button
                type="button"
                onClick={() => {
                  setStatusMsg("");
                  setStatusType("");
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

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
                placeholder="ফোন নম্বর *"
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

            {/* Subject label */}
            <p className="font-semibold mb-2">বিষয় নির্বাচন করুন *</p>

            {/* Checkboxes acting like radio buttons */}
            <div className="flex gap-6 items-center mb-4">
              {["পরামর্শ", "অভিযোগ"].map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer select-none ${
                    formData.subject === item
                      ? "bg-primary text-white border-primary"
                      : "bg-slate-50 dark:bg-slate-800 border-gray-300 dark:border-gray-700"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="subject"
                    value={item}
                    checked={formData.subject === item}
                    onChange={() => setFormData({ ...formData, subject: item })}
                    className="hidden"
                  />
                  {item}
                </label>
              ))}
            </div>

            <textarea
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-4 py-4 focus:ring-2 focus:ring-primary outline-none"
              placeholder="আপনার পরামর্শ অথবা অভিযোগ লিখুন... *"
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

            <button
              disabled={loading}
              className="bg-secondary text-white w-full md:w-64 px-12 py-4 rounded-md font-bold shadow-lg hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {loading ? "সাবমিট হচ্ছে..." : "সাবমিট করুন"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
