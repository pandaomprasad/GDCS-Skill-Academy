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
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
          <div className="inline-flex items-center gap-2 border border-white rounded-full px-3 py-1 w-fit mx-auto lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">
              LMS Education
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Developing Thoughts <br className="hidden sm:block" />
            for the Future
          </h1>

          <p className="text-gray-300 mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            sem, luctus turpis in, feugiat convallis diam.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 mb-5">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base w-full max-w-[200px] mx-auto lg:mx-0"
            >
              Let’s Talk Us
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto">
          <RightHeroSection />
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
