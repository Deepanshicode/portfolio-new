"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap } from "react-icons/hi";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Amity University",
    status: "Currently Pursuing",
    statusColor: "bg-green-500",
    description: "Advanced studies in computer applications, software development, and emerging technologies.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Noida International University",
    status: "Completed",
    statusColor: "bg-primary-500",
    description: "Foundation in programming, database management, and computer science fundamentals.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Education
          </span>
          <h2 className="section-heading mt-2">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-200 dark:from-primary-400 dark:to-primary-800" />

            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                className="relative pl-16 mb-12 last:mb-0"
              >
                <div className="absolute left-4 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-slate-950 z-10 shadow-lg shadow-primary-500/30" />

                <div className="glass-card p-6 md:p-8 card-hover">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                        <HiAcademicCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-500 font-semibold text-sm">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white ${edu.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
