"use client";

export default function AboutSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="relative w-full h-[400px]">
              {/* Main graduation image */}
              <img
                src="/student.jpeg"
                alt="Graduates"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Experience badge */}
              <div className="absolute -right-4 top-4 bg-yellow-400 rounded-full w-24 h-24 flex flex-col items-center justify-center transform rotate-12">
                <span className="text-2xl font-bold">25</span>
                <span className="text-xs text-center">Years of experience</span>
              </div>
              {/* Student image */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32">
                <img
                  src="/student.jpeg"
                  alt="Student"
                  className="w-full h-full object-cover rounded-lg border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 border border-black rounded-full px-3 py-1 w-fit mx-auto">
              {/* Green dot */}
              <span className="h-2 w-2 rounded-full bg-green-400" />

              {/* Text */}
              <span className="text-[8px] font-semibold text-black uppercase tracking-wider">
                About us
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Empower Your Learning Journey Everyday
            </h2>

            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour There are many variations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">5K+</h3>
                <p className="text-sm text-gray-600">Online Classes</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">7k+</h3>
                <p className="text-sm text-gray-600">Students each year</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">24+</h3>
                <p className="text-sm text-gray-600">Award Winning</p>
              </div>
            </div>

            {/* View More Button */}
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-[#3bb366] transition duration-300">
              
                <Link href="/aboutus">
                  
                    View More Details
                 
                </Link>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
