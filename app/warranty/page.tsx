"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WarrantyPage() {
  const [form, setForm] = useState({ name: "", email: "", orderId: "", product: "", issue: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setForm({ name: "", email: "", orderId: "", product: "", issue: "" });
    }, 1000);
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Warranty</span>
          <h1 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            1-Year Limited Warranty
          </h1>
          <p className="mt-4 text-gray-500">
            Every eligible MOVO product ships with a 12-month manufacturer&apos;s warranty. We stand behind what we build.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">

        {/* Coverage */}
        <div className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">What&apos;s Covered</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { covered: true, title: "Manufacturing Defects", desc: "Defects in materials or workmanship present at the time of delivery." },
              { covered: true, title: "Hardware Failures", desc: "Internal component failures under normal usage conditions." },
              { covered: true, title: "Battery Defects", desc: "Significant battery capacity loss within the first year (below 80% capacity)." },
              { covered: true, title: "Display Issues", desc: "Dead pixels or display anomalies not caused by physical damage." },
              { covered: false, title: "Physical Damage", desc: "Drops, cracks, liquid damage, or other accidental damage." },
              { covered: false, title: "Unauthorized Modifications", desc: "Products that have been tampered with or modified." },
            ].map((item) => (
              <div key={item.title} className={`flex items-start gap-4 rounded-2xl border p-5 ${item.covered ? "border-green-500/20 bg-green-500/5" : "border-red-500/15 bg-red-500/5"}`}>
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${item.covered ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"} text-sm font-bold`}>
                  {item.covered ? "✓" : "✕"}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Claim form */}
        <div className="rounded-3xl border border-white/8 bg-[#141414] p-8 md:p-10">
          <h2 className="text-2xl font-bold">Submit a Warranty Claim</h2>
          <p className="mt-2 text-sm text-gray-500">Fill in the form and our team will respond within 24–48 hours.</p>

          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/8 p-10 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-2xl text-green-400">✓</div>
                <div className="text-lg font-bold">Claim Submitted!</div>
                <p className="text-sm text-gray-500">We&apos;ll be in touch within 24–48 hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-blue-400 underline">Submit another claim</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">Full Name *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">Email Address *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">Order ID</label>
                  <input value={form.orderId} onChange={(e) => setForm({ ...form, orderId: e.target.value })} placeholder="From your confirmation email" className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">Product *</label>
                  <select required value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white outline-none transition focus:border-blue-500/50">
                    <option value="">Select product…</option>
                    <option>MOVO Watch X1</option>
                    <option>MOVO Air ANC</option>
                    <option>MOVO Sound One</option>
                    <option>MOVO Charge 65</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">Describe the Issue *</label>
                  <textarea required rows={5} value={form.issue} onChange={(e) => setForm({ ...form, issue: e.target.value })} placeholder="Please describe the issue in as much detail as possible…" className="w-full resize-none rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50" />
                </div>
                <div className="md:col-span-2">
                  <motion.button type="submit" disabled={status === "loading"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60">
                    {status === "loading" ? "Submitting…" : "Submit Warranty Claim"}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </section>

      <Footer />
    </main>
  );
}
