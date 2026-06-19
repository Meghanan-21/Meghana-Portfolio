"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    icon: "🌍",
    title: "Microsoft Imagine Cup 2026",
    description:
      "Participated in Microsoft's international student competition, leading the development of an innovative technology solution competing at a global level.",
    year: "2026",
  },
  {
    icon: "🏆",
    title: "Smart India Hackathon — Second Round Qualifier",
    description:
      "Qualified to the second round of Smart India Hackathon 2025, one of India's largest national-level hackathons, with a college-level selection for the Smart Yoga Mat project.",
    year: "2025",
  },
  {
    icon: "💡",
    title: "MSME Hackathon 2025 — Selected Participant",
    description:
      "Selected to participate in MSME Hackathon 2025 for developing an industry-focused MSME solution, directly tied to the AutoGST Pro financial automation system.",
    year: "2025",
  },
  {
    icon: "🚀",
    title: "MITE First Ideathon — Finalist",
    description:
      "Reached the finals of MITE's inaugural Ideathon by presenting an innovative software solution, competing among top student innovators at the college.",
    year: "2025",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
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
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">MILESTONES</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">ACHIEVEMENTS</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
          <div className="space-y-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 10 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#050816] z-10" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative rounded-2xl border border-white/5 p-6 overflow-hidden"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(59,130,246,0.04) 100%)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.10) 0%, transparent 65%)" }} />
                    <div className="relative z-10">
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-2xl">{item.icon}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
