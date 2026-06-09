"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiGlobeAlt, HiLockClosed, HiCloud } from "react-icons/hi";

const projects = [
  {
    title: "Real-Time Weather App",
    description:
      "A Python desktop application providing real-time weather information using the OpenWeatherMap API. Features a clean Tkinter-based interface with live updates and city-based search.",
    tech: ["Python", "Tkinter", "REST API"],
    icon: HiCloud,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Live weather information",
      "OpenWeatherMap integration",
      "Clean desktop interface",
      "Real-time updates",
    ],
  },
  {
    title: "Encrypted Peer-to-Peer Chatbot",
    description:
      "A secure messaging application using Python socket programming and symmetric key encryption. Implements client-server architecture for privacy-focused communication.",
    tech: ["Python", "Socket Programming", "Cryptography"],
    icon: HiLockClosed,
    color: "from-purple-500 to-pink-500",
    features: [
      "Secure messaging",
      "Symmetric key encryption",
      "Client-server architecture",
      "Privacy-focused communication",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Projects
          </span>
          <h2 className="section-heading mt-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mt-4">
            A selection of projects demonstrating technical problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className="glass-card overflow-hidden group card-hover"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                    Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <HiCode className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 transition-colors"
                  >
                    <HiGlobeAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
