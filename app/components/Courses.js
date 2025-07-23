const courses = [
  {
    slug: "python",
    title: "Master Python Programming: From Basics to Advanced Concepts",
    image: "/media/Python-Programing.jpg",
    rating: 4.8,
    duration: "03 hours",
    lessons: 30,
    students: 102,
    instructor: "Robert Smith",
    instructorImg: "/instructors/robert.jpg",
    price: 3499,
    description:
      "Learn Python from scratch with hands-on lessons covering syntax, functions, loops, and more. Perfect for beginners and anyone looking to build a strong programming foundation.",
    status: "online",
    learningOutcomes: [
      "Understanding quantum mechanics principles",
      "Implementing quantum algorithms",
      "Working with quantum development frameworks",
      "Building quantum circuits",
      "Solving real-world optimization problems",
    ],
    curriculum: [
      {
        title: "Introduction to Python",
        lessons: ["What is Python And Uses of Python", "History of Python"],
      },
      {
        title: "Styles of Python",
        lessons: [
          "Single Line to Multiline",
          "Statements",
          "Quotation",
          "Input/Output Methods",
          "Reserved KeyWords",
        ],
      },
      {
        title: "Object and Data Structure",
        lessons: [
          "Data Types",
          "Variables",
          "Assigning values to variables",
          "Python Objects",
        ],
      },
      {
        title: "Operators",
        lessons: ["Types of Operators", "Uses of Operators"],
      },
      {
        title: "Type Conversion",
        lessons: ["Implicit / Explicit"],
      },
      {
        title: "Control Flow and Control Structure",
        lessons: ["Conditions(if, else, etc)", "Loops (for, while, etc)"],
      },
      {
        title: "Functions and Methods",
        lessons: [
          "Different types of parameters",
          "Return value",
          "Function Calling",
        ],
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Mastery: From Research to High-Fidelity Prototypes",
    image: "/media/UI-UX Design.jpg",
    rating: 4.8,
    duration: "03 hours",
    lessons: 30,
    students: 102,
    instructor: "Inverness McKenzie",
    instructorImg: "/instructors/inverness.jpg",
    price: 3999,
    description:
      "Gain hands-on experience in user interface and user experience design using tools like Figma. Learn to conduct user research, create user flows, wireframes, and interactive prototypes, and build a professional design portfolio for real-world projects.",
    status: "register",
    learningOutcomes: [
      "Understand the fundamentals of UX/UI design",
      "Conduct user research and create user personas",
      "Build user flows and information architecture",
      "Design wireframes and high-fidelity mockups in Figma",
      "Apply UI design principles and accessibility standards",
      "Prototype interactive designs and perform user testing",
      "Design responsive web and mobile interfaces",
      "Develop and present a complete real-world design project",
      "Build a portfolio and showcase work on platforms like Behance or Dribbble",
    ],
    curriculum: [
      {
        title: "Introduction & UX Fundamentals",
        lessons: [
          "Understanding UX/UI Design",
          "Importance of UX/UI in Product Design",
          "User Research & Understanding Users",
          "Competitor Analysis & User Personas",
          "User Flow & Information Architecture",
          "Card Sorting & Sitemap Creation",
          "Design Thinking & Problem Solving",
        ],
      },
      {
        title: "UI Principles & Figma Basics",
        lessons: [
          "UI Design Principles",
          "Accessibility in UI Design",
          "Introduction to Figma",
          "Wireframing in Figma",
          "Using Grids & Spacing in UI",
          "Designing a Simple Web UI (Homepage UI)",
        ],
      },
      {
        title: "Prototyping & UI Enhancements",
        lessons: [
          "High-Fidelity UI Design",
          "Creating UI Components",
          "Understanding Auto Layout in Figma",
          "Prototyping in Figma",
          "User Testing & Gathering Feedback",
          "Mobile App UI Design",
          "Responsive UI Design",
        ],
      },
      {
        title: "Final Project & Portfolio Building",
        lessons: [
          "Working on a Real-World Project",
          "Wireframing the Project",
          "Creating a Design System",
          "High-Fidelity Screens for Project",
          "Prototyping & Usability Testing",
          "Design Handoff to Developers",
          "Case Study Writing for Portfolio",
          "Showcasing Work on Behance/Dribbble",
          "Career Guidance & Next Steps",
        ],
      },
    ],
  },
  {
    slug: "react-js",
    title: "React JS Development: Build Modern Web Apps with React",
    image: "/media/React-js.png", // make sure this image exists in /public/courses/
    rating: 4.9,
    duration: "4 hours",
    lessons: 35,
    students: 125,
    instructor: "Amit Sharma",
    instructorImg: "/instructors/amit.jpg", // add this image or change as needed
    price: 3999,
    description:
      "Master React.js from the ground up. Learn component-based architecture, hooks, state management, routing, and API integration while building dynamic, real-world web applications using best practices and modern development tools.",
    status: "register",
    learningOutcomes: [
      "Understand the core concepts of React.js and JSX",
      "Develop reusable components and manage props/state",
      "Handle user input with forms and events",
      "Use hooks like useState and useEffect effectively",
      "Integrate third-party APIs using fetch and axios",
      "Implement routing with React Router",
      "Manage state globally using Context API and Redux",
      "Apply performance optimization techniques",
      "Deploy full React projects using platforms like Vercel or Firebase",
    ],
    curriculum: [
      {
        title: "Introduction To React Js",
        lessons: [
          "Overview of React and its Advantages",
          "Setting up the React Environment (Vite, CRA)",
          "Understanding JSX and Components (Functional & Class)",
          "Props and Component Reusability",
          "Introduction to React Developer Tools",
          "Assignment: Build a Profile Card Component using Props",
        ],
      },
      {
        title: "State Management & Handling Events",
        lessons: [
          "Understanding useState and State Management",
          "Handling Events and Updating State",
          "React Forms and Controlled Components",
          "Lifting State Up & Prop Drilling",
          "Conditional Rendering and List Rendering",
          "Assignment: To-Do App with State Management",
          "Assignment: Dynamic Counter with Increment/Decrement Buttons",
        ],
      },
      {
        title: "React Hooks & API Integration",
        lessons: [
          "useEffect and Lifecycle Methods",
          "Fetching Data using fetch() and Axios",
          "Handling API Responses and Errors",
          "Introduction to React Router (Navigation & Dynamic Routing)",
          "Assignment: Create a Weather App using an API",
          "Assignment: Build a Multi-page Website with React Router",
        ],
      },
      {
        title: "Advanced Concepts & Final Project",
        lessons: [
          "Introduction to Context API & Redux (Basic Store & Actions)",
          "Performance Optimization (Lazy Loading, Memoization)",
          "Deployment Strategies (Netlify, Vercel, Firebase)",
          "Industry Best Practices (Folder Structure, Code Splitting)",
          "Assignment: CRUD-based React App (e.g., Task Manager or Blog)",
          "Assignment: Deploy Project and Present Work",
        ],
      },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design Essentials: HTML, CSS & JavaScript for Beginners",
    image: "/media/html-css-js.png", // make sure this image exists or update the path
    rating: 4.7,
    duration: "4 hours",
    lessons: 32,
    students: 98,
    instructor: "Priya Mehta",
    instructorImg: "/instructors/priya.jpg", // update as per available image
    price: 2999,
    status: "register",
    description:
      "Learn the foundations of web design with HTML, CSS, and JavaScript. Design responsive, user-friendly websites with real-world projects while gaining essential skills in layout, styling, interactivity, and deployment techniques.",
    learningOutcomes: [
      "Understand the fundamentals of web design and HTML",
      "Apply UI/UX principles to website layout and structure",
      "Write semantic HTML with forms, tables, and media",
      "Style websites using CSS, Flexbox, Grid, and frameworks like Tailwind",
      "Build responsive designs using mobile-first principles and media queries",
      "Add interactivity using JavaScript and DOM manipulation",
      "Implement simple animations and form validation",
      "Optimize performance and follow accessibility and SEO guidelines",
      "Deploy fully functional websites using GitHub Pages or Netlify",
    ],
    curriculum: [
      {
        title: "Introduction to Web Design & HTML Basics",
        lessons: [
          "Understanding the Basics of Web Design",
          "Introduction to UI/UX Principles",
          "Overview of HTML Structure and Semantic Elements",
          "Forms, Tables, and Media Elements (Images, Videos, Iframes)",
          "Assignment: Create a Simple Personal Portfolio Page using HTML",
          "Assignment: Design a Basic Contact Form",
        ],
      },
      {
        title: "Styling with CSS & Responsive Design",
        lessons: [
          "CSS Basics: Selectors, Properties, Colors, Typography",
          "Box Model, Flexbox, and Grid System",
          "Responsive Design: Media Queries & Mobile-First Approach",
          "CSS Frameworks (Bootstrap or Tailwind CSS)",
          "Assignment: Style the Portfolio Page using CSS",
          "Assignment: Create a Responsive Landing Page",
        ],
      },
      {
        title: "JavaScript & Interactive Elements",
        lessons: [
          "Basics of JavaScript (Variables, Functions, Events)",
          "DOM Manipulation & Event Handling",
          "Simple Animations using CSS & JavaScript",
          "Introduction to jQuery (Optional)",
          "Assignment: Add Form Validation to the Contact Form",
          "Assignment: Implement a Simple Image Slider",
        ],
      },
      {
        title: "Final Project & Industry Best Practices",
        lessons: [
          "Website Performance Optimization Techniques",
          "Introduction to Version Control (Git & GitHub)",
          "SEO Basics & Accessibility Guidelines",
          "Deploying Websites (GitHub Pages, Netlify)",
          "Assignment: Design and Develop a Multi-Page Responsive Website",
          "Assignment: Deploy it Online and Present the Project",
        ],
      },
    ],
  },
  {
    slug: "mongodb-nosql",
    title: "Mastering MongoDB & NoSQL Databases",
    image: "/media/mongodb-course.png", // update image path if needed
    rating: 4.8,
    duration: "5 hours",
    lessons: 28,
    students: 75,
    instructor: "Ravi Sharma",
    instructorImg: "/instructors/ravi.jpg", // update as per available image
    price: 3499,
    status: "register",
    description:
      "Gain in-depth knowledge of NoSQL databases and MongoDB. Learn database design, CRUD operations, aggregation, indexing, and deployment techniques through hands-on projects and real-world examples.",
    learningOutcomes: [
      "Understand the fundamentals of NoSQL databases and their types",
      "Set up and use MongoDB for application development",
      "Perform CRUD operations using MongoDB Shell and drivers",
      "Design efficient schemas for scalable applications",
      "Work with MongoDB’s Aggregation Framework for data analysis",
      "Implement indexing strategies for performance optimization",
      "Apply security best practices in MongoDB",
      "Optimize queries and manage performance bottlenecks",
      "Prepare for real-world applications and database deployment",
    ],
    curriculum: [
      {
        title: "Introduction to MongoDB and NoSQL",
        lessons: [
          "Understanding NoSQL Databases",
          "Advantages of NoSQL over Traditional RDBMS",
          "Types of NoSQL Databases",
          "MongoDB Overview and Use Cases",
        ],
      },
      {
        title: "Getting Started with MongoDB",
        lessons: [
          "Installing and Setting Up MongoDB Locally",
          "Introduction to MongoDB Shell and Compass",
          "Creating and Managing Databases and Collections",
          "Basic CRUD Operations: Insert, Read, Update, Delete",
        ],
      },
      {
        title: "Schema Design and Advanced Concepts",
        lessons: [
          "Understanding Data Modeling in MongoDB",
          "Embedding vs. Referencing Documents",
          "Schema Validation and Data Consistency",
          "Working with MongoDB Aggregation Framework",
        ],
      },
      {
        title: "Indexing, Security, and Optimization",
        lessons: [
          "Creating Indexes and Query Optimization",
          "Analyzing Query Performance with explain()",
          "User Roles, Authentication, and Access Control",
          "Backup, Restore, and Production Deployment Best Practices",
        ],
      },
    ],
  },
  {
    slug: "sql-across-databases",
    title: "SQL Across Databases: MySQL & Oracle Mastery",
    image: "/media/sql-databases.png", // Update image path if needed
    rating: 4.9,
    duration: "6 hours",
    lessons: 52,
    students: 120,
    instructor: "Punith Kumar",
    instructorImg: "/instructors/punith.jpg", // Update image path if needed
    price: 2999,
    status: "register",
    description:
      "Master SQL across MySQL and Oracle with this comprehensive course. Learn everything from basic queries and schema design to advanced functions, joins, and control statements. Perfect for beginners and professionals aiming to strengthen their database expertise.",
    learningOutcomes: [
      "Understand the fundamentals of relational databases and SQL",
      "Design efficient database schemas and enforce integrity constraints",
      "Write basic to advanced SQL queries using operators and functions",
      "Manipulate and retrieve data using SELECT, JOINs, GROUP BY, and subqueries",
      "Work with string, numeric, date/time, and control flow functions",
      "Use MySQL and Oracle-specific SQL features like the Dual table",
      "Understand and apply SQL commands: DDL, DML, and TCL",
      "Create reusable queries using Common Table Expressions (CTEs)",
      "Optimize data retrieval with indexing, LIMIT/OFFSET, and filtering techniques",
    ],
    curriculum: [
      {
        title: "Database Essentials",
        lessons: [
          "Understanding Data",
          "Introduction to Databases",
          "DBMS and SQL Overview",
          "Setting Up the Stage for Action",
        ],
      },
      {
        title: "Database Schema Design",
        lessons: ["Fundamentals of Schema Design and Management"],
      },
      {
        title: "SQL Query Essentials",
        lessons: [
          "SQL Constraints",
          "Data Integrity Enhancement",
          "SQL Aliases",
          "SQL Operators Overview",
          "Relational Operators",
          "Beyond Symbolic Operators",
          "Between And Operator",
          "IN Keyword Operator",
          "IS NULL and IS NOT NULL",
          "LIKE and NOT LIKE",
          "DISTINCT and UNIQUE Keywords",
        ],
      },
      {
        title: "Data Retrieval in SQL",
        lessons: ["Using LIMIT and OFFSET"],
      },
      {
        title: "SQL Functions",
        lessons: [
          "Introduction to SQL Functions",
          "String Functions in MySQL",
          "Using CONCAT for Data Concatenation",
          "Additional String Manipulations",
          "Mastering Number Functions",
          "Date and Time Functions",
          "Control Flow Functions",
          "Multi-Row Functions",
        ],
      },
      {
        title: "SQL in Oracle",
        lessons: [
          "The Dual Table in Oracle",
          "Oracle SQL Functions",
          "Control Flow and Conversion Functions in Oracle",
        ],
      },
      {
        title: "Structuring Data with SQL",
        lessons: [
          "Group By Clause",
          "Advanced SELECT Clauses",
          "Subqueries",
          "SQL Joins",
          "Common Table Expressions (CTEs)",
        ],
      },
      {
        title: "SQL Commands",
        lessons: [
          "Data Definition Language (DDL) Commands",
          "Data Manipulation Language (DML) Commands",
          "Transaction Control Language (TCL) Commands",
        ],
      },
    ],
  },
];

export default courses;
