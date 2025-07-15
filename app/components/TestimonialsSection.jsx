'use client';

import { useState, useEffect } from 'react';

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Web Development Student',
    content: 'The courses here have transformed my career path. The practical approach and industry-relevant curriculum helped me land my dream job in web development.',
    rating: 5,
    image: '/student.jpeg',
    otherStudents: ['/student.jpeg', '/student.jpeg', '/student.jpeg']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Science Graduate',
    content: 'Outstanding learning experience! The hands-on projects and expert guidance gave me the confidence to tackle real-world data science challenges.',
    rating: 5,
    image: '/student.jpeg',
    otherStudents: ['/student.jpeg', '/student.jpeg', '/student.jpeg']
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UI/UX Design Student',
    content: 'The design courses here are exceptional. The instructors are industry professionals who provide valuable insights and feedback on every project.',
    rating: 5,
    image: '/student.jpeg',
    otherStudents: ['/student.jpeg', '/student.jpeg', '/student.jpeg']
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('entering'); // 'entering' or 'exiting'

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setDirection('exiting');
      
      // After exit animation, change content and start enter animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setDirection('entering');
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = () => {
    if (direction === 'entering') {
      return 'animate-slide-in-right';
    }
    return 'animate-slide-out-left';
  };

  return (
    <section className="w-full py-16 bg-[#064E3B] rounded-lg ">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#4ADE80] text-sm font-medium">• TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl font-bold text-white">What Our Students Says</h2>
        </div>

        {/* Testimonials Cards */}
        <div className="relative overflow-hidden">
          <style jsx>{`
            @keyframes slideInRight {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutLeft {
              from { transform: translateX(0); opacity: 1; }
              to { transform: translateX(-100%); opacity: 0; }
            }
            .animate-slide-in-right {
              animation: slideInRight 0.5s ease-out forwards;
            }
            .animate-slide-out-left {
              animation: slideOutLeft 0.5s ease-out forwards;
            }
          `}</style>
          <div className={`${getAnimationClass()}`}>
            <div className="bg-[#0B6B52]/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex-1 space-y-4">
                  {/* Quote Icon */}
                  <div className="text-[#4ADE80] text-6xl mb-4">❝</div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Author Info */}
                  <div className="mt-6">
                    <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>

                  {/* Other Students */}
                  <div className="flex -space-x-3 mt-4">
                    {testimonials[currentIndex].otherStudents.map((student, index) => (
                      <img
                        key={index}
                        src={student}
                        alt={`Student ${index + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>

                {/* Student Image */}
                <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}