"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiGlobeAlt, HiChip } from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";

const categories = [
  {
    title: "Programming",
    icon: HiCode,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Networking",
    icon: HiGlobeAlt,
    color: "text-green-500",
    bg: "bg-green-500/10",
    skills: [
      { name: "IP Addressing", level: 92 },
      { name: "Port Configuration", level: 85 },
      { name: "Remote Access", level: 88 },
      { name: "DVR/NVR Setup", level: 95 },
    ],
  },
  {
    title: "Concepts",
    icon: HiChip,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    skills: [
      { name: "Artificial Intelligence", level: 70 },
      { name: "Neural Networks", level: 65 },
      { name: "Cryptography", level: 78 },
      { name: "Cloud Computing", level: 72 },
    ],
  },
  {
    title: "Tools",
    icon: HiWrench,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    skills: [
      { name: "Microsoft Office", level: 90 },
      { name: "Documentation", level: 88 },
      { name: "Internet Applications", level: 85 },
      { name: "System Logs", level: 82 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Skills
          </span>
          <h2 className="section-heading mt-2">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mt-4">
            A diverse skill set spanning networking, development, and security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + ci * 0.15 }}
              className="glass-card p-6 md:p-8 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${cat.bg} ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.6 + ci * 0.15 + si * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color === "text-blue-500" ? "from-blue-500 to-blue-400" : cat.color === "text-green-500" ? "from-green-500 to-green-400" : cat.color === "text-purple-500" ? "from-purple-500 to-purple-400" : "from-amber-500 to-amber-400"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
