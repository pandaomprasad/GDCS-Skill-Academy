"use client";

import Image from "next/image";
import Link from "next/link";
import RightHeroSection from "./Hero_Section/right_Hero_section";
import ContactModal from "./ContactModal";
import { useState } from "react";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="pt-24 bg-gradient-to-br text-white rounded-lg shadow-lg overflow-hidden from-[#0f3d30] to-[#1e5128] min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 ">
          <div className="inline-flex items-center gap-2 border border-white rounded-full px-3 py-1 w-fit mx-auto">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-[8px] font-semibold text-white uppercase tracking-wider">
              LMS Education
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Developing Thoughts <br /> for the Future
          </h1>
          <p className="text-gray-300 mt-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit proin leo
            sem, luctus turpis in, feugiat convallis diam.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Let’s Talk Us
            </button>
          </div>
        </div>
        <RightHeroSection/>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-8 text-green-300 text-sm">
        <span className="font-semibold text-white">01</span> <span>02</span> <span>03</span> <span>04</span>
      </div>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
