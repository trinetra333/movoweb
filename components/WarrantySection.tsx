"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function WarrantySection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", product: "", issue: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <section id="warranty" className="scroll-mt-24 bg-[#0a0a0a] py-28">
      <div className="mx-auto max-w-5xl px-5">

        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Warranty</span>
            <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              1-Year Limited Warranty
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Every eligible MOVO product ships with a 12-month limited manufacturer&apos;s warranty. We stand behind what we build.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Manufacturing Defects", desc: "Covered in full for 12 months from date of purchase." },
              { title: "Hardware Failures", desc: "Internal component failures not caused by physical damage." },
              { title: "Easy Claims", desc: "Simple online claim process. Most issues resolved in 7 days." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/8 bg-[#141414] p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15 text-green-400 mb-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-white/8 bg-[#141414] p-8 md:p-10">
            <h3 className="text-2xl font-bold">Submit a Warranty Claim</h3>
            <p className="mt-2 text-sm text-gray-500">Fill in the form and our team will get back to you within 24–48 hours.</p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-green-500/25 bg-green-500/8 p-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-2xl text-green-400">✓</div>
                  <div>
                    <div className="text-lg font-bold">Claim Submitted!</div>
                    <p className="mt-2 text-sm text-gray-500">We&apos;ve received your warranty claim. Expect a response within 24–48 hours at your email.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-400">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Aarav Sharma"
                      className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-400">Product</label>
                    <select
                      required
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-3.5 text-sm text-white outline-none transition focus:border-blue-500/50"
                    >
                      <option value="">Select product…</option>
                      <option>MOVO Watch X1</option>
                      <option>MOVO Air ANC</option>
                      <option>MOVO Sound One</option>
                      <option>MOVO Charge 65</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-gray-400">Describe the Issue</label>
                    <textarea
                      required
                      rows={4}
                      value={form.issue}
                      onChange={(e) => setForm({ ...form, issue: e.target.value })}
                      placeholder="Describe the issue in detail…"
                      className="w-full resize-none rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
                    >
                      {loading ? "Submitting…" : "Submit Warranty Claim"}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
