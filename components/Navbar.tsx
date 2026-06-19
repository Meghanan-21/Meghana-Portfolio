"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1">
          <span className="text-white font-bold text-lg tracking-tight">MEGHANA</span>
          <span className="text-blue-400 font-bold text-lg tracking-tight">.N</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white p-1"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0f2c]/95 backdrop-blur-md border-b border-white/5 px-6 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-400 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
