"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
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
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-white/8 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Get in Touch</span>
          <h1 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            Contact Us
          </h1>
          <p className="mt-4 text-gray-500">
            Questions, feedback, partnerships, or just want to say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-5">

          {/* Info */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-3xl border border-white/8 bg-[#141414] p-7">
              <h3 className="font-bold">Email</h3>
              <a href="mailto:hellomovotech@gmail.com" className="mt-2 block text-sm text-blue-400 transition hover:text-blue-300">
                hellomovotech@gmail.com
              </a>
            </div>
            <div className="rounded-3xl border border-white/8 bg-[#141414] p-7">
              <h3 className="font-bold">Response Time</h3>
              <p className="mt-2 text-sm text-gray-500">We reply within 24–48 hours on business days (Mon–Sat).</p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-[#141414] p-7">
              <h3 className="font-bold">Headquarters</h3>
              <p className="mt-2 text-sm text-gray-500">India 🇮🇳</p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-[#141414] p-7">
              <h3 className="font-bold">For Support</h3>
              <p className="mt-2 text-sm text-gray-500">
                For order issues, returns, or warranty claims, visit our{" "}
                <a href="/support" className="text-blue-400 underline hover:text-blue-300">Support page</a>.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/8 bg-[#141414] p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold">Send a Message</h2>

            <AnimatePresence mode="wait">
              {status === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-2xl text-green-400">✓</div>
                  <div className="text-lg font-bold">Message Sent!</div>
                  <p className="text-sm text-gray-500">We&apos;ll get back to you within 24–48 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-blue-400 underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-500">Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-500">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-500">Subject *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white outline-none transition focus:border-blue-500/50"
                    >
                      <option value="">Select a topic…</option>
                      <option>Product Inquiry</option>
                      <option>Order Support</option>
                      <option>Warranty Claim</option>
                      <option>Partnerships / B2B</option>
                      <option>Press / Media</option>
                      <option>General Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-500">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help…"
                      className="w-full resize-none rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                    />
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
      </section>

      <Footer />
    </main>
  );
}
