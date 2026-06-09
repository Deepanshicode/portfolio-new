"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Email", href: "mailto:work.deepanshisharma@gmail.com" },
];

export default function Footer() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);
  return (
    <footer className="py-12 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 dark:text-slate-400 text-sm max-w-lg leading-relaxed"
          >
            &ldquo;Passionate about solving technical challenges and continuously learning
            emerging technologies.&rdquo;
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
            <span>&copy; {year} Deepanshi Sharma</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span>All rights reserved</span>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-colors"
            aria-label="Back to top"
          >
            <HiArrowUp className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
