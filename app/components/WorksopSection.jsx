"use client";

import Image from "next/image";
import Link from "next/link";
import workshop from "../components/WorkShopData";

export default function WorkshopSection() {
  const queryParams = new URLSearchParams({
    title: workshop.title,
    tutor: workshop.tutor,
    duration: workshop.duration,
    time: workshop.time,
    perks: workshop.perks.join(","),
  }).toString();

  return (
    <section className="w-full bg-gradient-to-br from-[#0c2e2c] to-[#173824] text-white rounded-3xl px-6 py-10 mt-8 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="inline-block border border-green-400 text-green-400 text-xs px-2 py-0.5 rounded-full font-semibold mb-3">
            📣 Workshop
          </div>
          <h2 className="text-3xl font-bold mb-4">{workshop.title}</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Participate in our exclusive workshop led by {workshop.tutor}. It includes {workshop.duration}, each session of {workshop.time}. {workshop.perks.length > 0 && "Get perks like certificates, study material, and more."}
          </p>
          <Link href={`/workshop/details?${queryParams}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-200">
              Enroll
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/workshop-banner.jpg"
              alt="Workshop"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
