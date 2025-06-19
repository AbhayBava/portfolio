'use client';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full p-5 shadow-md bg-white dark:bg-black fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Abhay Bava</h1>
        <nav className="space-x-6 text-sm text-gray-600 dark:text-gray-300">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
