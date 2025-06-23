"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws,
  FaLaptopCode, FaServer, FaTools
} from "react-icons/fa";
import {
  SiMongodb, SiPostgresql, SiExpress, SiTypescript,
  SiTailwindcss, SiRedux, SiGithubactions
} from "react-icons/si";

const techGroups = [
  {
    role: "Frontend",
    icon: <FaLaptopCode className="text-blue-600 text-xl" />,
    stack: [
      { name: "React", icon: <FaReact className="text-sky-500" />, description: "Component-based UI library" },
      { name: "Redux", icon: <SiRedux className="text-purple-500" />, description: "State management tool" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, description: "Utility-first CSS framework" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, description: "Typed superset of JavaScript" },
    ],
  },
  {
    role: "Backend",
    icon: <FaServer className="text-green-600 text-xl" />,
    stack: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, description: "JS runtime for backend" },
      { name: "Express", icon: <SiExpress className="text-gray-500" />, description: "Minimal Node.js framework" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, description: "NoSQL document DB" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" />, description: "Relational DB" },
    ],
  },
  {
    role: "DevOps",
    icon: <FaTools className="text-yellow-500 text-xl" />,
    stack: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, description: "Version control" },
      { name: "Docker", icon: <FaDocker className="text-blue-400" />, description: "Container platform" },
      { name: "AWS", icon: <FaAws className="text-yellow-500" />, description: "Cloud hosting & tools" },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-black dark:text-white" />, description: "CI/CD pipeline" },
    ],
  },
];

export default function TechGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="techstack"
      className="py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-blue-600 dark:text-cyan-400">Tech Stack</span>
        </motion.h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap relative">
          {techGroups.map((group, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border transition duration-300 text-sm font-medium
                ${
                  activeTab === index
                    ? "bg-blue-100 dark:bg-cyan-900 border-blue-500 dark:border-cyan-400 text-blue-700 dark:text-cyan-300"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {group.icon}
              {group.role}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {techGroups[activeTab].stack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col items-center shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                title={tech.description}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-semibold">{tech.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
