import React from "react";
import { footerInfo } from "../../data/footerData";
import {
  MailCheck,
  PhoneOutgoing,
  MapPinHouse,
  Facebook,
  Mails,
  MonitorCheck,
  MapPinPlus,
} from "lucide-react";

const ContactCard = () => {
  return (
    <div className="bg-primary text-white p-10 rounded-3xl h-full">
      {/* Brand / Name */}
      <div className="mb-10">
        <span className="text-2xl font-bold block">{footerInfo.brand}</span>
        {/* <span className="text-sm opacity-80">
          {footerInfo.profession} | {footerInfo.qualification}
        </span> */}
      </div>

      {/* Contact & Info */}
      <div className="space-y-8">
        <div className="flex gap-4">
          <MailCheck />
          <div>
            <p className="font-bold">ইমেইল</p>
            <p className="opacity-80">{footerInfo.email}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <PhoneOutgoing />
          <div>
            <p className="font-bold">মোবাইল </p>
            <p className="opacity-80">{footerInfo.phone}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPinPlus />
          <div>
            <p className="font-bold">অফিসের ঠিকানা</p>
            <p className="opacity-80">{footerInfo.office}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <MapPinHouse />
          <div>
            <p className="font-bold">বাসার ঠিকানা</p>
            <p className="opacity-80">{footerInfo.address}</p>
          </div>
        </div>

        {/* Extra Profile Info */}
        {/* <div className="pt-4 border-t border-white/20 space-y-1 text-sm">
          <p>
            <span className="font-semibold">জন্ম তারিখ:</span>{" "}
            <span className="opacity-80">{footerInfo.dateOfBirth}</span>
          </p>
          <p>
            <span className="font-semibold">বয়স:</span>{" "}
            <span className="opacity-80">{footerInfo.age}</span>
          </p>
          <p>
            <span className="font-semibold">জাতীয় পরিচয়পত্র:</span>{" "}
            <span className="opacity-80">{footerInfo.nationalId}</span>
          </p>
        </div> */}
      </div>

      {/* Social / Links */}
      <div className="mt-12 flex gap-4 justify-end">
        <a
          href="https://www.facebook.com/adv.FarhadIqbal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition"
        >
          <Facebook />
        </a>

        <a
          href={`mailto:${footerInfo.email}`}
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
  );
};

export default ContactCard;
