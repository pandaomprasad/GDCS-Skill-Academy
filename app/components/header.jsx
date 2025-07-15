"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-2 border-b-0_5 border-gray-300">


        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">GDCS</div>

        {/* Nav Center */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="#home" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#courses" className="hover:text-blue-600 transition">
            Courses
          </Link>
          <Link href="#team" className="hover:text-blue-600 transition">
            Team
          </Link>
        </nav>

        {/* Contact Us Right */}
        <div>
          <Link
            href="#contact"
            className=" bg-green-600 text-white px-4 py-2 rounded hover:bg-transparent transition"
            // style={{
            //     backgroundColor: "var(--green)",
            // }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
