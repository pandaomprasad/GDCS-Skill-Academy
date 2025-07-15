"use client";

import { useSearchParams } from "next/navigation";

export default function CourseDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c2e2c] to-[#173824] text-white p-10">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        Course Details: {title?.replace(/-/g, " ")}
      </h1>
      <p className="text-lg text-gray-300">More details coming soon...</p>
    </div>
  );
}
