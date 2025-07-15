export default function AboutUsPage() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">About GDCS Skill Academy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering your career through industry-relevant internships and hands-on learning.
        </p>
      </div>

      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          <strong>GDCS Skill Academy</strong> bridges the gap between education and industry by offering exceptional internship opportunities and real-world project experiences. Our mission is to provide learners with the tools, mentorship, and environment to become industry-ready professionals.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you're a student seeking exposure or a professional looking to enhance your expertise, our programs are designed to push your potential and position you ahead in a competitive world.
        </p>

        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Why Choose GDCS Skill Academy?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Industry Expert Instructors</h3>
              <p>Learn from professionals with real-world experience who bring practical insights and career-focused training.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Up-to-Date Course Content</h3>
              <p>Stay ahead with modern, industry-aligned curriculum crafted to keep you at the cutting edge of technology.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Biggest Student Community</h3>
              <p>Become part of a vibrant community where learners connect, collaborate, and grow together.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Commitment</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Providing immersive, project-based learning experiences</li>
            <li>Fostering in-demand, career-oriented skill development</li>
            <li>Encouraging a supportive and collaborative learning culture</li>
            <li>Connecting learners to real-world challenges and solutions</li>
          </ul>
        </div>

        <p className="text-xl text-center text-green-800 font-semibold mt-12">
          Start your journey with GDCS Skill Academy and shape your future today.
        </p>
      </div>
    </section>
  );
}
