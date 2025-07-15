'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CurriculumAccordion({ curriculum }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
      <div className="rounded-lg overflow-hidden shadow-md border">
        {curriculum.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium ${
                  isActive ? 'bg-green-50 text-green-700' : 'bg-white text-black'
                } hover:bg-green-100 transition`}
              >
                <span>{item}</span>
                {isActive ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {isActive && (
                <div className="px-4 py-3 text-sm text-gray-700 bg-green-50">
                  {/* Optional detailed content */}
                  Content coming soon...
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
