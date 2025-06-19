'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Hi, I'm <span className="text-blue-600">Abhay Bava</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300"
      >
        I’m a full-stack developer passionate about building modern, scalable web apps.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        href="#projects"
        className="mt-10 inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        See My Work
      </motion.a>
    </section>
  );
}
