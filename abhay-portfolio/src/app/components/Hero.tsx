"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Typewriter loop phrases
const phrases = [
  "A full-stack developer crafting bold, performant, and scalable apps.",
  "Focused on clean code and creative solutions.",
  "Building modern products with precision and care.",
  "Turning ideas into beautiful user experiences.",
];

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const controls = useAnimation();

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!inView) return;
    controls.start("visible");
  }, [inView, controls]);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < currentPhrase.length) {
      timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), 60);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length - 1)), 30);
    } else if (!deleting && text.length === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -10,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.2, 0.6, 0.3, 0.9],
      },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center justify-center"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white"
          variants={heroVariants}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
            Abhay Bava
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 min-h-[72px]"
          variants={heroVariants}
        >
          {text}
          <span className="blinking-cursor">|</span>
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          {/* View Projects */}
          <motion.a
            href="#projects"
            variants={heroVariants}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide shadow-lg hover:shadow-xl transition"
          >
            See My Work
          </motion.a>

          {/* Download Resume */}
          <motion.a
            href="/AbhayBava.pdf"
            download
            variants={heroVariants}
            className="px-8 py-3 rounded-xl bg-white dark:bg-gray-800 text-blue-600 dark:text-cyan-400 border border-blue-600 dark:border-cyan-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition font-medium shadow"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Cursor animation */}
      <style>{`
        .blinking-cursor {
          display: inline-block;
          margin-left: 4px;
          width: 1px;
          background-color: currentColor;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0 }
        }
      `}</style>
    </section>
  );
}
