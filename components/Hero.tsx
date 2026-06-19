"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0a0f2c 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,58,138,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.10) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] text-blue-300 border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Meghana
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-xl sm:text-2xl font-light text-gray-400 mb-6 tracking-wide"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="text-gray-400 text-base max-w-lg leading-relaxed mb-8"
            >
              I build full stack web applications using React, Next.js, and Node.js. I also
              integrate AI features into applications and focus on creating user-friendly interfaces.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-blue-500/40 text-blue-300 hover:text-white hover:border-blue-400 text-sm font-semibold tracking-wider uppercase transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Meghana_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 text-sm font-semibold tracking-wider uppercase transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 order-first md:order-last"
          >
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)" }}
              />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-blue-500/50 via-blue-600/20 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30">
                  <Image
                    src="/profile.jpeg"
                    alt="Meghana"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-blue-400/20 group-hover:border-blue-400/40 transition-all duration-500 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-1 text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
