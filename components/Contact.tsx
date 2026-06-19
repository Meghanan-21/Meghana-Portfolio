"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_0okrifi";
const TEMPLATE_ID = "template_lmw691g";
const PUBLIC_KEY = "McU5lWQ4GUAYvnFA3";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const buttonText = {
    idle: "Send Message",
    sending: "Sending...",
    sent: "Message Sent!",
    error: "Failed — Try Again",
  }[status];

  return (
    <section
      id="contact"
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
      <div className="relative z-10 max-w-2xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">CONTACT</h2>
          <p className="text-gray-500 text-sm">Open to opportunities in Bangalore. Let&apos;s build something together.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-white/5 p-8 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(59,130,246,0.04) 100%)", backdropFilter: "blur(12px)" }}
        >
          <div className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(ellipse at 50% -20%, rgba(59,130,246,0.07) 0%, transparent 60%)" }} />
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">NAME_ID</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">EMAIL_ADDRESS</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">DATA_PACKET</label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl text-sm font-bold tracking-wider uppercase text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)" }}
            >
              {buttonText}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mt-8"
        >
          {[
            { label: "LinkedIn", href: "https://linkedin.com", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            { label: "GitHub", href: "https://github.com", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all duration-200"
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}