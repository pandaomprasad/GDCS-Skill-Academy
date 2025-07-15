'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Clock, BookOpen, Users, Star } from 'lucide-react';

export default function WorkshopDetailsPage() {
  const params = useSearchParams();

  const title = params.get('title') || 'Workshop Title';
  const tutor = params.get('tutor') || 'Instructor Name';
  const duration = params.get('duration') || 'N/A';
  const time = params.get('time') || 'N/A';
  const perks = params.get('perks')?.split(',') || [];

  return (
    <div className="min-h-screen bg-white text-black py-16 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
            <Star className="w-4 h-4" /> 4.8 Rating
          </div>

          <h1 className="text-4xl font-bold mb-3">{title}</h1>

          <p className="text-gray-700 mb-6">
            Join our <strong>{title}</strong> workshop led by <strong>{tutor}</strong>. This workshop includes <strong>{duration}</strong> of live sessions with <strong>{time}</strong> duration each.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {time}
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> {duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Unlimited Access
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/instructors/robert.jpg"
              alt={tutor}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="text-gray-800 font-medium">{tutor}</p>
              <p className="text-gray-500 text-xs">Instructor</p>
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-md font-semibold">
            Enroll Now
          </button>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/workshop-banner.jpg"
            alt="Workshop Banner"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">What you'll get</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {perks.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500" /> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Section - Optional */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Workshop Overview</h2>
        <div className="border rounded-lg divide-y">
          <div className="px-4 py-3 font-semibold">Introduction & Fundamentals</div>
          <div className="px-4 py-3 flex items-center gap-2 text-gray-700">
            <BookOpen className="w-4 h-4" /> Live Sessions by Experts
          </div>
          <div className="px-4 py-3 flex items-center gap-2 text-gray-700">
            <BookOpen className="w-4 h-4" /> Practical Assignments & Projects
          </div>
          <div className="px-4 py-3 flex items-center gap-2 text-gray-700">
            <BookOpen className="w-4 h-4" /> Doubt Clearing + Career Guidance
          </div>
        </div>
      </div>
    </div>
  );
}
