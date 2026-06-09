"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiGlobeAlt,
  HiShieldCheck,
  HiCode,
  HiChip,
  HiLightBulb,
} from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const strengths = [
  { icon: HiGlobeAlt, label: "Networking", color: "text-blue-500" },
  { icon: HiChip, label: "Surveillance Systems", color: "text-purple-500" },
  { icon: HiCode, label: "Python Development", color: "text-green-500" },
  { icon: HiShieldCheck, label: "Cybersecurity Awareness", color: "text-red-500" },
  { icon: HiChatBubbleLeftRight, label: "Technical Consulting", color: "text-amber-500" },
  { icon: HiLightBulb, label: "Problem Solving", color: "text-cyan-500" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="section-heading mt-2">
            Turning Technical Expertise Into{" "}
            <span className="gradient-text">Real-World Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 space-y-5">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I am a <strong className="text-slate-900 dark:text-white">Technical Associate at CP Plus (Aditya Infotech Ltd.)</strong> with
                hands-on experience in configuring CCTV systems, DVR/NVR setups, IP-based
                surveillance solutions, and network troubleshooting.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                As an <strong className="text-slate-900 dark:text-white">MCA candidate</strong>, I am continuously expanding my expertise in
                Python development, artificial intelligence, and cybersecurity. I have also led
                cybersecurity awareness initiatives and delivered technical demonstrations
                to clients.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                My goal is to leverage my technical foundation and problem-solving mindset to
                contribute to impactful projects in <strong className="text-slate-900 dark:text-white">networking, security, and software development</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
              Key Strengths
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 flex items-center gap-3 card-hover cursor-default"
                >
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
