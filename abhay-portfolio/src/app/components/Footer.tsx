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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 pt-16 pb-10 px-6"
    >

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-center sm:text-left">
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src="/Abhay.png"
            alt="Abhay Logo"
            className="w-14 h-14 rounded-full border-2 border-blue-400 shadow-xl"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold tracking-wide text-white">Abhay Bava</h3>
            <p className="text-sm text-gray-400">Full Stack Engineer</p>
            <p className="text-xs mt-1 text-gray-500">&copy; {year} All rights reserved.</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="#experience" className="hover:text-cyan-400 transition">Experience</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-end space-x-5 text-xl">
          <a
            href="https://github.com/abhaybava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abhaybava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abhaybava@gmail.com"
            className="text-gray-400 hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider and Build Info */}
      <div className="relative z-10 border-t border-gray-700 mt-10 pt-4 text-xs text-center text-gray-500">
        Built with 💻 Next.js • Tailwind CSS • Framer Motion
      </div>
    </motion.footer>
  );
}
