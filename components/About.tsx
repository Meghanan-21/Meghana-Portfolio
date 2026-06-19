"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
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
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            THE BIO
          </p>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-10 leading-none">
            ABOUT<br />ME.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {[
           "I'm a final year Information Science Engineering student at MITE, Moodabidri, passionate about building products that solve real problems — from healthcare appointment systems to AI-powered financial automation.",

"I specialize in full stack development with React, Next.js, and FastAPI, with hands-on experience integrating ML models, OCR pipelines, REST APIs, and AI capabilities into production-ready applications.",

"I enjoy taking projects from idea to deployment — writing clean, scalable code and constantly exploring new technologies to build software that is both functional and impactful.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {["Problem Solving", "Full Stack Developer", "AI Integration", "Hackathon Competitor"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-blue-300 border border-blue-500/25 bg-blue-500/5"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
