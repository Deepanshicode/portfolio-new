"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase } from "react-icons/hi";
import { HiCheckBadge } from "react-icons/hi2";

const responsibilities = [
  "Configured CCTV and DVR/NVR systems for commercial and residential clients",
  "Managed IP-based surveillance solutions with remote monitoring capabilities",
  "Performed hardware and software troubleshooting to ensure system uptime",
  "Configured IP addressing, port forwarding, and remote access for security devices",
  "Supported solution design and pre-sales activities for enterprise clients",
  "Delivered technical demonstrations and consultations to stakeholders",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Experience
          </span>
          <h2 className="section-heading mt-2">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mt-4">
            Building expertise through hands-on industry experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-200 dark:from-primary-400 dark:to-primary-800" />

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative pl-16 md:pl-0 md:flex md:items-start"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="glass-card p-6 md:p-8 card-hover">
                  <div className="flex items-center gap-3 md:justify-end mb-4">
                    <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                      <HiBriefcase className="w-5 h-5" />
                    </div>
                    <div className="text-left md:text-right">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Technical Associate
                      </h3>
                      <p className="text-primary-500 font-semibold">
                        CP Plus (Aditya Infotech Ltd.)
                      </p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-semibold">
                    Current Position
                  </span>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 z-10 shadow-lg shadow-primary-500/30" />

              <div className="md:w-1/2 md:pl-12">
                <div className="glass-card p-6 md:p-8 card-hover">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <HiCheckBadge className="w-5 h-5 text-primary-500" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((r, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {r}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
