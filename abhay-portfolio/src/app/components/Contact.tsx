"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import "../styles/theme.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.info("Sending email...", { autoClose: 5000 });

    try {
      const result = await emailjs.send(
        "service_phn0b3c",
        "template_jvvrngb",
        formData,
        "T0xE2vToKMMVadvOK"
      );

      toast.success("Thank you for contacting us! I'll get back to you soon.", {
        autoClose: 5000,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.", { autoClose: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Sending email...
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                className="inline-block ml-2 w-4 h-4 border-4 border-t-4 border-gray-600 dark:border-white border-solid rounded-full"
              ></motion.div>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="inline-block px-8 py-3 rounded-full text-white home-button font-medium shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
