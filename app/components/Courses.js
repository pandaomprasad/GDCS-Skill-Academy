const courses = [
  {
    slug: "python",
    title: "Introduction to Python",
    image: "/courses/quantum.jpg",
    rating: 4.8,
    duration: "03 hours",
    lessons: 30,
    students: 102,
    instructor: "Robert Smith",
    instructorImg: "/instructors/robert.jpg",
    price: 32.5,
    description: "Master the fundamentals of quantum computing...",
    learningOutcomes: [
      "Understanding quantum mechanics principles",
      "Implementing quantum algorithms",
      "Working with quantum development frameworks",
      "Building quantum circuits",
      "Solving real-world optimization problems"
    ],
    curriculum: [
      {
        title: "Introduction to Python",
        lessons: [
          "What is ",
          "Qubits and Quantum States",
          "Quantum Gates and Circuits"
        ]
      },
      {
        title: "Quantum Algorithms",
        lessons: [
          "Quantum Fourier Transform",
          "Shor's Algorithm",
          "Grover's Algorithm"
        ]
      }
    ]
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking: Defending the Digital Frontier",
    image: "/courses/hacking.jpg",
    rating: 4.8,
    duration: "03 hours",
    lessons: 30,
    students: 102,
    instructor: "Inverness McKenzie",
    instructorImg: "/instructors/inverness.jpg",
    price: 65.5,
  },
  {
    slug: "sustainable-architecture",
    title: "Sustainable Architecture: Building a Greener Future",
    image: "/courses/architecture.jpg",
    rating: 4.8,
    duration: "03 hours",
    lessons: 30,
    students: 102,
    instructor: "Hugh Millie-Yate",
    instructorImg: "/instructors/hugh.jpg",
    price: 22.5,
  },
];

export default courses;
