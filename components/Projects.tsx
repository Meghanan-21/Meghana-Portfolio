"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Help2Heal — Doctor Appointment System",
    tags: ["Healthcare", "2025"],
    category: "Healthcare",
    description:
      "A full-stack healthcare app for appointment scheduling and doctor–patient management. Features secure role-based authentication, real-time booking and availability tracking using optimized MongoDB queries, and Cashfree API (Test Mode) integration for online payments.",
    tech: ["React.js", "Next.js", "MongoDB", "Express.js", "Cashfree API"],
    github: "https://github.com/VC-Nithesh944/Help2Heal",
    live: "https://help2heal-frontend.vercel.app/",
  },
  {
    title: "BlogVerse — Full-Stack Blog Platform",
    tags: ["Web", "2024"],
    category: "Web",
    description:
      "A complete blog platform with public, admin, and backend modules. Built secure RESTful APIs for blog creation, deletion, and category-based filtering. Includes an Admin Dashboard to manage posts, categories, and email subscriptions, with SEO-optimized page rendering.",
    tech: ["Next.js", "MongoDB", "Node.js", "REST API", "TailwindCSS"],
    github: "https://github.com/Meghanan-21/blogverse",
    live: "https://blogverse-flame.vercel.app/",
  },
  {
    title: "AutoGST Pro — Financial Operations System",
    tags: ["AI/ML", "2025"],
    category: "AI",
    description:
      "An AI-based system for MSME financial automation and GST handling. Features OCR-powered bill data extraction, ML models for automated expense classification and insights, and a blockchain-based ledger for secure, tamper-proof financial records.",
    tech: ["FastAPI", "PostgreSQL", "scikit-learn", "Next.js", "Tesseract OCR"],
    github: "https://github.com/vishwanathaiah2004/AutoGST",
    live: "#",
  },
];

const filters = ["All", "Healthcare", "Web", "AI"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0a0f2c 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,58,138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">MY PROJECTS</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                active === f
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                  : "border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/5 p-6 overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(59,130,246,0.04) 100%)" }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)" }}
                />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md text-xs text-gray-500 bg-white/5 border border-white/5">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.live !== "#" ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200">
                        View Project
                      </a>
                    ) : (
                      <span className="px-4 py-1.5 rounded-full bg-white/5 text-gray-500 text-xs font-semibold tracking-wide uppercase cursor-not-allowed">
                        Coming Soon
                      </span>
                    )}
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full border border-white/10 hover:border-white/25 text-gray-300 hover:text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}