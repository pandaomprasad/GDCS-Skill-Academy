"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-2 border-b border-white/20">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-500 hover:text-green-600 transition">
          GDCS
        </Link>

        {/* Nav Center */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="#about" className="hover:text-green-400 transition">About</Link>
          <Link href="#courses" className="hover:text-green-400 transition">Courses</Link>
          <Link href="#team" className="hover:text-green-400 transition">Team</Link>
        </nav>

        {/* Contact Us Right */}
        <div>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
