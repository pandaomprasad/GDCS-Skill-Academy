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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <Link
            key={index}
            href={`/courses/${course.slug}`}
            className="group block rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <div className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-full h-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 leading-snug group-hover:text-black transition-colors duration-300">
                {course.title}
              </h3>
              <div className="flex flex-wrap text-sm text-gray-600 gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Clock size={14} /> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={14} /> {course.lessons} Lessons
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} /> {course.students} Students
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
