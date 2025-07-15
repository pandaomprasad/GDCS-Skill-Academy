"use client";

import Image from "next/image";
import { Clock, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import courses from "./Courses";

export default function MostPopularCourses() {
  return (
    <section className="py-16 px-6 bg-white text-black">
      <div className="text-center mb-10">
        <div className="inline-block border border-gray-300 text-xs px-3 py-1 rounded-full text-gray-500 font-medium mb-2">
          + Popular Course
        </div>
        <h2 className="text-3xl font-bold">Most Popular Courses</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <Link
            key={index}
            href={`/courses/${course.slug}`}
          >
            <h3 className="text-lg font-semibold mb-4 leading-snug hover:underline cursor-pointer">
              {course.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
