"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiShieldCheck, HiUserGroup, HiAcademicCap } from "react-icons/hi";
import { HiMegaphone } from "react-icons/hi2";

const highlights = [
  {
    icon: HiMegaphone,
    title: "Awareness Sessions",
    description: "Conducted cybersecurity awareness sessions for students and faculty",
  },
  {
    icon: HiAcademicCap,
    title: "Workshops & Seminars",
    description: "Organized workshops on phishing awareness and password security",
  },
  {
    icon: HiShieldCheck,
    title: "Phishing Awareness",
    description: "Promoted best practices for identifying and preventing phishing attacks",
  },
  {
    icon: HiUserGroup,
    title: "Community Building",
    description: "Encouraged password security practices and safe browsing habits",
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">Cyber Zero Club</span>
          </h2>
          <p className="section-subtitle mt-4">
            Founding Member & Awareness Coordinator
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-8 md:p-10 mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/20">
                <HiShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Cyber Zero Club
                </h3>
                <p className="text-primary-500 font-semibold">
                  Founding Member & Awareness Coordinator
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              Co-founded a cybersecurity awareness initiative aimed at educating peers about
              online security threats, phishing prevention, and safe digital practices. Led
              the planning and execution of multiple awareness campaigns and workshops.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="glass-card p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-500 shrink-0">
                    <h.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      {h.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {h.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
