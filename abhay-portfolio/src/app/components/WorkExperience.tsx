// components/WorkExperience.tsx
"use client";

import { useState } from "react";
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

const cardVariants = {
  collapsed: {
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  expanded: {
    rotateX: 0,
    scale: 1.02,
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="relative border-l-2 border-blue-500 dark:border-cyan-400 pl-6 space-y-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                animate={isExpanded ? "expanded" : "collapsed"}
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.01 }}
                className={`relative cursor-pointer transition-transform duration-500`}
              >
                {/* Timeline marker */}
                <span className="absolute left-[-36px] top-1">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-cyan-400 shadow-md">
                    {exp.icon}
                  </div>
                </span>

                {/* Content */}
                <motion.div
                  className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-500 ${
                    isExpanded ? "scale-[1.02]" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} • {exp.date}
                  </p>

                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : "0px",
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
