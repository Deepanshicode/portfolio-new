"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiCheckCircle } from "react-icons/hi";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Ducat Institute",
    icon: "🐍",
    color: "from-yellow-400 to-green-500",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Samsung Innovation Campus",
    icon: "🤖",
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Neural Networks Workshop",
    issuer: "Workshop Certification",
    icon: "🧠",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Cloud Computing",
    issuer: "Aptron",
    icon: "☁️",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "C Programming",
    issuer: "QSpider",
    icon: "💻",
    color: "from-green-400 to-teal-500",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Certifications
          </span>
          <h2 className="section-heading mt-2">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle mt-4">
            Committed to continuous learning and skill development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 card-hover group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-green-500">
                <HiCheckCircle className="w-4 h-4" />
                <span className="text-xs font-semibold">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
