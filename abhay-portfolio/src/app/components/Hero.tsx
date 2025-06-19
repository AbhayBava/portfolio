"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

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
      className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 perspective-1000"
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
          className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300"
          variants={heroVariants}
        >
          A full-stack developer crafting bold, performant, and scalable apps.
        </motion.p>

        <motion.a
          href="#projects"
          variants={heroVariants}
          className="mt-10 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide shadow-lg hover:shadow-xl transition"
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
