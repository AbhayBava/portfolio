"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-center sm:text-left">
        {/* Logo and Name */}
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <img
            src="/Abhay.png"
            alt="Abhay Logo"
            className="w-10 h-10 rounded-full border border-blue-500"
          />
          <div>
            <h3 className="text-lg font-bold tracking-wide">Abhay Bava</h3>
            <p className="text-sm">&copy; {year} All rights reserved.</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="#about" className="hover:text-blue-500 transition font-medium">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-500 transition font-medium">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-blue-500 transition font-medium">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-blue-500 transition font-medium">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end space-x-5 text-xl">
          <a
            href="https://github.com/abhaybava"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abhaybava"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abhaybava@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-xs text-center">
        Built with 💻 Next.js • Tailwind CSS • Framer Motion
      </div>
    </motion.footer>
  );
}
