"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Chatbot",
    description: "Built a smart chatbot using Node.js, OpenAI, and React for customer support.",
    github: "https://github.com/your-username/ai-chatbot",
  },
  {
    title: "Salon Booking System",
    description: "Full-stack salon appointment system with multi-tenant architecture.",
    github: "https://github.com/your-username/salon-booking",
  },
  {
    title: "Portfolio Website",
    description: "Next.js portfolio with Framer Motion, dynamic typewriter, and dark mode.",
    github: "https://github.com/your-username/portfolio",
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
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Projects</h2>
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
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-cyan-400 hover:underline font-medium"
            >
              <FaGithub />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
