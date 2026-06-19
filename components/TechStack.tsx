"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techs = [
  { name: "JavaScript", bg: "#323330", abbr: "JS", color: "#f7df1e" },
  { name: "TypeScript", bg: "#3178c6", abbr: "TS", color: "#ffffff" },
  { name: "Python", bg: "#3776ab", abbr: "Py", color: "#ffd43b" },
  { name: "Java", bg: "#1a1a2e", abbr: "Jv", color: "#f89820" },
  { name: "React", bg: "#1a1a2e", abbr: "Re", color: "#61dafb" },
  { name: "Node.js", bg: "#1a1a2e", abbr: "Nd", color: "#68a063" },
  { name: "Next.js", bg: "#1a1a2e", abbr: "Nx", color: "#ffffff" },
  { name: "PostgreSQL", bg: "#1a1a2e", abbr: "Pg", color: "#336791" },
];

function TechCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 cursor-default overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(59,130,246,0.04) 100%)" }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${tech.color}18 0%, transparent 70%)` }}
      />
      <div
        className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center text-lg font-black"
        style={{ backgroundColor: tech.bg, color: tech.color, border: `1px solid ${tech.color}30` }}
      >
        {tech.abbr}
      </div>
      <span className="relative z-10 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tech"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0f2c 0%, #050816 100%)" }}
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
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">MEGHANA</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">TECH STACK</h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
            Technologies I use to build modern, scalable, and user-focused web applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
