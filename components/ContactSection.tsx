"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-[#0d0d0d] py-28">
      <div className="mx-auto max-w-5xl px-5">

        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Contact</span>
            <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Questions, feedback, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-10 lg:grid-cols-5">

            {/* Left — info */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                  label: "Email",
                  value: "hellomovotech@gmail.com",
                  href: "mailto:hellomovotech@gmail.com",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  label: "Response Time",
                  value: "Within 24–48 hours",
                  href: null,
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
                  label: "Headquarters",
                  value: "India 🇮🇳",
                  href: null,
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-[#141414] p-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600/12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth={1.8} className="h-5 w-5">
                      {info.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="mt-0.5 text-sm font-medium text-white transition hover:text-blue-400">{info.value}</a>
                    ) : (
                      <div className="mt-0.5 text-sm font-medium text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <div className="rounded-3xl border border-white/8 bg-[#141414] p-8 lg:col-span-3">
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-2xl text-green-400">✓</div>
                    <div className="text-lg font-bold">Message Sent!</div>
                    <p className="text-sm text-gray-500">We&apos;ll get back to you within 24–48 hours.</p>
                    <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-blue-400 underline">Send another message</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-gray-500">Name</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-gray-500">Email</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-500">Subject</label>
                      <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-500">Message</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us more…" className="w-full resize-none rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="self-start rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending…" : "Send Message"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
