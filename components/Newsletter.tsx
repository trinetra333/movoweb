"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setEmail("");
    }, 900);
  }

  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-white/8 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-12 text-center md:p-20">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative">
              <span className="inline-block rounded-full border border-blue-500/25 bg-blue-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Stay Connected
              </span>

              <h2 className="mt-5 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
                Join the MOVO Community
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-gray-500">
                Be the first to know about new launches, exclusive offers, software updates and limited drops. No spam.
              </p>

              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-green-500/25 bg-green-500/8 px-6 py-5 text-green-400"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 flex-shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">You&apos;re in! Welcome to MOVO.</span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-2xl border border-white/10 bg-[#0a0a0a] px-6 py-4 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                    />
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
                    >
                      {status === "loading" ? "Subscribing…" : "Subscribe"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

              <p className="mt-5 text-xs text-gray-700">
                By subscribing you agree to our{" "}
                <a href="/privacy" className="underline hover:text-gray-500 transition">Privacy Policy</a>.
                Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
