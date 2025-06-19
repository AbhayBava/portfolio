"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // triggers when halfway into viewport
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.9, 1]), {
    stiffness: 100,
    damping: 20,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="about"
      className="py-32 px-6 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"
        >
          About Me
        </motion.h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I build front-end experiences and engineer scalable backend systems.
        </p>

        <div className="text-base leading-relaxed text-gray-700 dark:text-gray-400 space-y-4">
          <p>
            I'm a <strong>results-driven Backend Developer</strong> with 1+ years of experience building robust APIs using Node.js, Express.js, and NestJS.
          </p>
          <p>
            Skilled with <strong>PostgreSQL</strong>, <strong>MySQL</strong>, <strong>AWS</strong>, and <strong>DigitalOcean</strong>. I design for performance and scalability.
          </p>
          <p>
            I love integrating modern services like <strong>Zepto Mail</strong> and delivering end-to-end systems with secure authentication, background workers, and microservices.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
