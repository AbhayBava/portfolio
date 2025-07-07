"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

import {
  FaNodeJs,
  FaAws,
  FaDocker,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiFirebase,
  SiSendgrid,
  SiRabbitmq,
  SiNestjs,
} from "react-icons/si";

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
      className="relative py-32 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Floating glowing background */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
        <div className="w-[800px] h-[800px] bg-blue-400/30 rounded-full absolute top-0 -left-20 animate-pulse" />
        <div className="w-[600px] h-[600px] bg-cyan-300/20 rounded-full absolute bottom-0 right-0 animate-pulse delay-200" />
      </div>

      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto text-center space-y-14"
      >
        <motion.h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          About Me
        </motion.h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I engineer scalable backend systems and craft intuitive frontend experiences.
        </p>

        {/* Grid of Tilt Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: "Backend Engineering",
              desc: (
                <>
                  1+ years designing REST APIs with <strong>Node.js</strong>,{" "}
                  <strong>Express</strong>, and <strong>NestJS</strong>. Clean
                  architecture, reusable services, async logic with{" "}
                  <strong>RabbitMQ</strong> and <strong>BullMQ</strong>.
                </>
              ),
            },
            {
              title: "Cloud & Deployment",
              desc: (
                <>
                  Deployed systems on <strong>AWS EC2</strong>,{" "}
                  <strong>S3</strong>, <strong>DigitalOcean</strong> using
                  Docker, NGINX, and CI/CD with GitHub Actions.
                </>
              ),
            },
            {
              title: "Integrations",
              desc: (
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>SendGrid</strong> for OTP and transactional emails
                  </li>
                  <li>
                    <strong>Amazon SES</strong> with DKIM/SPF support
                  </li>
                  <li>
                    <strong>Firebase</strong> for push notifications
                  </li>
                  <li>
                    <strong>Zepto Mail</strong> for push notifications
                  </li>
                  <li>
                    <strong>Stripe</strong> for billing and subscriptions
                  </li>
                </ul>
              ),
            },
            {
              title: "Frontend Power",
              desc: (
                <>
                  Building sleek UIs with <strong>React</strong>,{" "}
                  <strong>TailwindCSS</strong>, and real-time charts for
                  dashboards.
                </>
              ),
            },
          ].map(({ title, desc }, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.1}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {desc}
              </div>
            </Tilt>
          ))}
        </div>

        {/* Tech Stack Icons with Tilt */}
        <Tilt
          scale={1.03}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          transitionSpeed={1500}
          className="mt-12"
        >
          <div className="flex justify-center flex-wrap gap-6 text-4xl text-blue-500 dark:text-cyan-400">
            <FaNodeJs title="Node.js" />
            <SiNestjs title="NestJS" />
            <SiPostgresql title="PostgreSQL" />
            <FaAws title="AWS" />
            <FaDocker title="Docker" />
            <SiSendgrid title="SendGrid" />
            <SiFirebase title="Firebase" />
            <FaStripe title="Stripe" />
            <SiRabbitmq title="RabbitMQ" />
            <FaReact title="React" />
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
}
