'use client';

const teachers = [
  {
    id: 1,
    name: 'Burgundy Flemming',
    role: 'Head Teacher',
    image: '/teachers/teacher1.jpg'
  },
  {
    id: 2,
    name: 'Jarvis Pepperspray',
    role: 'Math Teacher',
    image: '/teachers/teacher2.jpg'
  },
  {
    id: 3,
    name: 'Dominic L. Ement',
    role: 'English Teacher',
    image: '/teachers/teacher3.jpg'
  }
];

export default function BestTeachers() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">• OUR TEAM</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Best Talented Teachers</h2>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}