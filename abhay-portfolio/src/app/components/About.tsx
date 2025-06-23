"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1]), {
    stiffness: 120,
    damping: 18,
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
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-8"
        >
          About Me
        </motion.h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I build powerful frontend experiences and engineer backend systems
          that scale.
        </p>

        <div className="text-base leading-loose text-gray-700 dark:text-gray-400 space-y-5 text-left">
          <p>
            I'm a <strong>results-driven Backend Developer</strong> with 1+ years of experience
            building secure and performant APIs using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>NestJS</strong>. I’m passionate about clean architecture and reusable service logic.
          </p>
          <p>
            My expertise includes databases like <strong>PostgreSQL</strong> and <strong>MySQL</strong>,
            and I'm skilled in deploying services on <strong>AWS EC2</strong>, <strong>S3</strong>, and
            <strong>DigitalOcean Spaces</strong> using NGINX, Docker, and CI/CD pipelines.
          </p>
          <p>
            I integrate modern infrastructure tools including:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>SendGrid</strong> for dynamic transactional emails (OTP, reset, confirmations)
              </li>
              <li>
                <strong>Amazon SES</strong> with templated emails and DKIM/SPF support for inbox delivery
              </li>
              <li>
                <strong>Firebase</strong> for real-time <strong>push notifications</strong> (appointments, alerts)
              </li>
              <li>
                <strong>Stripe</strong> for seamless <strong>subscription billing & secure payments</strong>
              </li>
            </ul>
          </p>
          <p>
            I follow a modular, microservices-based architecture and leverage tools like
            <strong> BullMQ</strong> for background jobs and <strong>RabbitMQ</strong> for async processing.
          </p>
          <p>
            Beyond backend, I love crafting frontend UIs with <strong>React</strong>, <strong>TailwindCSS</strong>,
            and integrating dashboards with charts and analytics to visualize business data.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
