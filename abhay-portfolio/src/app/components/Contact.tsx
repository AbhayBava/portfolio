"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, rotateX: -90, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const buttonFloat = {
    initial: { y: 0 },
    animate: {
      y: [0, -4, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-xl mx-auto text-center shadow-xl rounded-3xl bg-white dark:bg-gray-900 px-8 py-12 border dark:border-gray-700"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Let's connect! I'm open to freelance, full-time, and collaborative projects.
        </p>

        <motion.a
          href="mailto:abhay@example.com"
          variants={buttonFloat}
          initial="initial"
          animate="animate"
          className="inline-block px-8 py-3 rounded-full home-button text-white font-medium shadow-lg hover:shadow-blue-400/40 transition duration-300"
        >
          Send Email
        </motion.a>
      </motion.div>
    </section>
  );
}
