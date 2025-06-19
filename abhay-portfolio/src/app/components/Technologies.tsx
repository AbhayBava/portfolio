"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGithubactions,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-black dark:text-white" /> },
];

export default function TechGrid() {
  return (
    <section
      id="techgrid"
      className="py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col items-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <div className="text-sm font-semibold tracking-wide">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
