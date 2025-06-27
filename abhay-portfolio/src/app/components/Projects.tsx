"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Salon Booking System",
    description: "Full-stack salon appointment system with multi-tenant architecture.",
    github: "https://github.com/AbhayBava/Salon_Management_System",
    image: "/images/salon.png", 
  },
  {
    title: "Portfolio Website",
    description: "Next.js portfolio with Framer Motion, dynamic typewriter, and dark mode.",
    github: "https://github.com/AbhayBava/portfolio",
    image: "/images/portfolio.png", 
  },
  {
    title: "Student Portal",
    description: "A fully responsive student portal built using HTML, CSS, JavaScript, and PHP.",
    github: "https://github.com/AbhayBava/Student-Portal",
    image: "/images/studentportal.png", 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Some of my featured work
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-30 rounded-t-xl opacity-0 transition-opacity duration-300 hover:opacity-100"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl font-bold hover:underline"
                >
                  View on GitHub
                </a>
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
