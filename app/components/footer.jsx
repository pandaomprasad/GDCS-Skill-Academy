"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Boxes } from "@/components/ui/background-boxes"; // Adjust path if needed

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white py-10 px-6">
      {/* 🔁 Background Boxes */}
      <div className="absolute inset-0 z-0">
        <Boxes />
        <div className="absolute inset-0 bg-slate-900/80 [mask-image:radial-gradient(transparent,black)] z-10"></div>
      </div>

      {/* 🧩 Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* 🔵 Left: Logo & Socials */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-green-400 mb-2">EduVen</h2>
          <p className="text-sm mb-4 text-gray-300">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="flex gap-4 text-green-300 text-lg">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* 🟢 Right: Contact Info */}
        {/* 🟢 Right: Contact Info - stacked on mobile */}
<div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl">
  {[
    {
      icon: <FaPhone />,
      title: "Our Phone",
      info: "(123) 654 - 5643 88",
    },
    {
      icon: <FaEnvelope />,
      title: "Our Email",
      info: "example@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Address",
      info: "Q44HP+QP New York, USA",
    },
  ].map(({ icon, title, info }, idx) => (
    <div key={idx} className="flex flex-col sm:flex-row items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-white group transition shrink-0">
        <div className="text-white group-hover:text-green-600 transition">
          {icon}
        </div>
      </div>
      <div className="text-sm">
        <p className="font-semibold text-white">{title}</p>
        <p className="text-gray-300 break-words">{info}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </footer>
  );
}
