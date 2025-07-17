"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Users, BookOpen, Star, CheckCircle, X } from "lucide-react";

export default function CourseDetails({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    whatsapp: "",
    email: "",
    qualification: "",
    semester: "",
    branch: "",
    university: "",
    city: "",
    state: "",
    pincode: "",
    referralSource: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
  };

  if (!course) return null;

  return (
    <div className="bg-white">
      {/* Existing Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-yellow-500 font-semibold mb-4">
                ⭐ {course.rating} Rating
              </div>
              <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
              <p className="text-gray-600 mb-8">{course.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" /> {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> {course.lessons} Lessons
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" /> {course.students} Students
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={course.instructorImg}
                  alt={course.instructor}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium">{course.instructor}</p>
                </div>
              </div>
             <div className="space-y-2">
  <button
    onClick={() => setIsModalOpen(true)}
    className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
  >
    {course.status?.toLowerCase() === 'online' ? `Enroll Now - $${course.price}` : 'Register'}
  </button>

  {course.status?.toLowerCase() !== 'online' && (
    <p className="text-sm text-red-600">
      * Course is starting online soon. Register now to secure your spot!
    </p>
  )}
</div>

            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Existing Course Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learningOutcomes &&
                  course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>{outcome}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum &&
                  course.curriculum.map((section, index) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 px-6 py-4">
                        <h3 className="font-semibold">{section.title}</h3>
                      </div>
                      <div className="divide-y">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="px-6 py-4 flex items-center gap-3"
                          >
                            <BookOpen className="w-5 h-5 text-gray-400" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="bg-gray-50 p-6 rounded-xl h-fit">
            <h3 className="text-xl font-bold mb-4">Course Features</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Lessons</span>
                <span className="font-medium">{course.lessons}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Students</span>
                <span className="font-medium">{course.students}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Rating</span>
                <span className="font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  {course.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-3xl mx-4 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-6">
              Enroll in {course.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              >
                <option value="">Select Qualification</option>
                <option value="diploma">Diploma</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              >
                <option value="">Select Semester</option>
                {[...Array(8).keys()].map((i) => (
                  <option key={i + 1} value={`Semester ${i + 1}`}>{`Semester ${
                    i + 1
                  }`}</option>
                ))}
              </select>
              <input
                type="text"
                name="branch"
                placeholder="Branch/Field of Study"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="university"
                placeholder="University Name"
                value={formData.university}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <div className="space-y-2">
                <p className="font-medium">
                  How did you know about the program?
                </p>
                {["Social Media", "College", "Friend", "Other"].map(
                  (option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="referralSource"
                        value={option}
                        onChange={handleInputChange}
                        checked={formData.referralSource === option}
                        required
                      />
                      {option}
                    </label>
                  )
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded font-medium hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
