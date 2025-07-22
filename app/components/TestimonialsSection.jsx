"use client";

import { useState, useEffect } from "react";

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    course: "Python Programming",
    image: "/avatars/aarav.jpg",
    rating: 5,
    content:
      "The Python course was incredibly well-structured and beginner-friendly. I loved the hands-on projects which helped me apply what I learned in real scenarios.",
    otherStudents: [
      "/avatars/aarav.jpg",
      "/avatars/rohan.jpg",
      "/avatars/sneha.jpg",
    ],
  },
  {
    id: 2,
    name: "Sneha Reddy",
    course: "Java Full Stack Development",
    image: "/avatars/sneha.jpg",
    rating: 5,
    content:
      "This course gave me full exposure to backend and frontend using Java. The real-world assignments really pushed me to think like a developer.",
    otherStudents: [
      "/avatars/sneha.jpg",
      "/avatars/meera.jpg",
      "/avatars/vikram.jpg",
    ],
  },
  {
    id: 3,
    name: "Raj Patel",
    course: "React JS",
    image: "/avatars/raj.jpg",
    rating: 5,
    content:
      "React JS training was detailed and practical. The mentor was really knowledgeable and always encouraged us to explore beyond the syllabus.",
    otherStudents: [
      "/avatars/raj.jpg",
      "/avatars/aarav.jpg",
      "/avatars/meera.jpg",
    ],
  },
  {
    id: 4,
    name: "Ishita Verma",
    course: "UI/UX Design",
    image: "/avatars/ishita.jpg",
    rating: 5,
    content:
      "From Figma to prototyping and usability testing, the UI/UX course was immersive and creative. The projects added great value to my portfolio.",
    otherStudents: [
      "/avatars/ishita.jpg",
      "/avatars/tanya.jpg",
      "/avatars/rohan.jpg",
    ],
  },
  {
    id: 5,
    name: "Vikram Singh",
    course: "React Native",
    image: "/avatars/vikram.jpg",
    rating: 5,
    content:
      "The React Native course helped me build my first cross-platform app. The live coding sessions and code reviews were super helpful.",
    otherStudents: [
      "/avatars/vikram.jpg",
      "/avatars/sneha.jpg",
      "/avatars/tanya.jpg",
    ],
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("entering");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("exiting");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setDirection("entering");
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = () => {
    if (direction === "entering") return "animate-slide-in-right";
    return "animate-slide-out-left";
  };

  return (
    <section className="w-full py-16 bg-[#064E3B] rounded-lg">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-10 text-center md:text-left">
          <span className="text-[#4ADE80] text-sm font-medium">
            • TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What Our Students Say
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <style jsx>{`
            @keyframes slideInRight {
              from {
                transform: translateX(100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            @keyframes slideOutLeft {
              from {
                transform: translateX(0);
                opacity: 1;
              }
              to {
                transform: translateX(-100%);
                opacity: 0;
              }
            }
            .animate-slide-in-right {
              animation: slideInRight 0.5s ease-out forwards;
            }
            .animate-slide-out-left {
              animation: slideOutLeft 0.5s ease-out forwards;
            }
          `}</style>

          <div className={`${getAnimationClass()}`}>
            <div className="bg-[#0B6B52]/30 p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-12">
                {/* Left Side */}
                <div className="flex-1 text-center md:text-left space-y-4 px-2">
                  <div className="text-[#4ADE80] text-5xl md:text-6xl">❝</div>

                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <StarIcon key={i} />
                      )
                    )}
                  </div>

                  <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].course}
                    </p>
                  </div>

                  <div className="flex justify-center md:justify-start -space-x-3 mt-4">
                    {testimonials[currentIndex].otherStudents.map(
                      (student, index) => (
                        <img
                          key={index}
                          src={student}
                          alt={`Student ${index + 1}`}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Right Side */}
                <div className="w-28 h-28 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 hidden md:block">
                <svg
                  className="w-6 h-6 text-[#4ADE80]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
