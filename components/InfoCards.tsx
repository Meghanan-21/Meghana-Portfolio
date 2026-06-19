"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  { value: "3rd", label: "Year of Study" },
  { value: "ISE", label: "Specialization" },
  { value: "Full Stack", label: "Primary Focus" },
  { value: "SDE", label: "Career Goal" },
];

function InfoCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl p-6 border border-white/5 cursor-default overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(59,130,246,0.04) 100%)" }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.10) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/20 transition-all duration-500" />
      <div className="relative z-10 text-center">
        <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-2 leading-tight">
          {card.value}
        </div>
        <div className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">
          {card.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function InfoCards() {
  return (
    <section
      className="relative py-16 px-6"
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
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <InfoCard key={card.label} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
