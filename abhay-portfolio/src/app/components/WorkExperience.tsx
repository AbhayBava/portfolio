// components/WorkExperience.tsx
"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaStar } from "react-icons/fa";

const experiences = [
  {
    role: "Internship - Java Fullstack",
    company: "QSpiders",
    date: "Jun 2023 - Oct 2023",
    description:
      "Trained on core Java, SQL, JDBC, and frontend basics with live project exposure.",
    icon: <FaStar className="text-yellow-400" />,
  },
  {
    role: "Associate Software Developer",
    company: "Orionik Technologies",
    date: "Nov 2023 - Apr 2024",
    description:
      "Worked on backend services in Node.js, contributed to core APIs, and optimized DB queries.",
    icon: <FaBriefcase className="text-blue-600" />,
  },
  {
    role: "Junior Software Developer",
    company: "Orionik Technologies",
    date: "May 2024 - Present",
    description:
      "Promoted to Junior Developer, leading features for customer onboarding, scaling APIs, and DevOps workflows.",
    icon: <FaBriefcase className="text-green-600" />,
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="relative border-l-2 border-blue-500 dark:border-cyan-400 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute left-[-36px] top-1">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-cyan-400 shadow-md">
                  {exp.icon}
                </div>
              </span>

              {/* Content */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {exp.company} • {exp.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
