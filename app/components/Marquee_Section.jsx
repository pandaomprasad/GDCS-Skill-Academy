"use client";
import Image from "next/image";

const companies = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Meta", logo: "/logos/meta.png" },
  { name: "OpenAI", logo: "/logos/openai.png" },
  { name: "Netflix", logo: "/logos/netflix.png" },
  { name: "Apple", logo: "/logos/apple.png" },
  { name: "Tesla", logo: "/logos/tesla.png" },
];

export default function MarqueeSection() {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-white group flex flex-col items-center justify-center">
      <div className="mb-6">
        <span className="text-xl font-bold text-black">
          Trusted by Companies all over the world
        </span>
      </div>
      {/* Fade overlays on corners */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between ">
        <div className="w-16 h-full bg-gradient-to-r from-white to-transparent" />
        <div className="w-16 h-full bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Scrolling content */}
      <div className="whitespace-nowrap flex gap-16 text-black font-semibold text-lg px-4 relative z-0 animate-marquee group-hover:[animation-play-state:paused]">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-[#A09F9F] hover:text-black hover:text-glow transition duration-300 ease-in-out cursor-pointer"
          >
            {/* <Image
              src={company.logo}
              alt={company.name}
              width={28}
              height={28}
              className="object-contain"
            /> */}
            <span className="text-base">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
