"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white dark:bg-gray-900 text-center"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a creative developer who loves turning ideas into interactive, high-performance web experiences using modern frameworks.
        </p>
      </motion.div>
    </section>
  );
}