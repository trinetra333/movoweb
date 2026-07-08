"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Product Designer, Mumbai",
    avatar: "AS",
    rating: 5,
    product: "MOVO Watch X1",
    comment:
      "Exceptional build quality — the AMOLED display is stunning in any lighting. Feels like a luxury device without the absurd price tag. Daily driver for 3 months and zero issues.",
  },
  {
    name: "Priya Patel",
    role: "Software Engineer, Bangalore",
    avatar: "PP",
    rating: 5,
    product: "MOVO Air ANC",
    comment:
      "The noise cancellation actually works. I can finally focus during work calls without ambient noise ruining everything. Sound stage is wide and detailed. Highly impressed.",
  },
  {
    name: "Rahul Nair",
    role: "Entrepreneur, Hyderabad",
    avatar: "RN",
    rating: 5,
    product: "MOVO Sound One",
    comment:
      "Beautiful products with a premium feel. The bass on the Sound One is deep but controlled, and the battery lasts all day. Looking forward to more launches from MOVO.",
  },
  {
    name: "Kavya Menon",
    role: "UX Researcher, Chennai",
    avatar: "KM",
    rating: 5,
    product: "MOVO Charge 65",
    comment:
      "Charged my laptop, phone and tablet simultaneously at full speed. The GaN technology really makes a difference — compact, cool, and incredibly fast. Worth every rupee.",
  },
  {
    name: "Arjun Singh",
    role: "Architect, Delhi",
    avatar: "AJ",
    rating: 5,
    product: "MOVO Watch X1",
    comment:
      "I was skeptical about Indian consumer electronics brands, but MOVO completely changed my mind. The attention to detail in both hardware and software is genuinely impressive.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0d0d0d] py-28">
      <div className="mx-auto max-w-7xl px-5">

        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Testimonials</span>
            <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              What People Say
            </h2>
            <p className="mt-4 text-gray-500">Real reviews from our community of early adopters.</p>
          </div>
        </Reveal>

        {/* Featured review */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-2xl rounded-3xl border border-white/8 bg-[#141414] p-10 text-center"
            >
              <div className="flex justify-center gap-1 text-yellow-400">
                {"★".repeat(reviews[active].rating)}
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                &ldquo;{reviews[active].comment}&rdquo;
              </p>
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-400">
                  {reviews[active].avatar}
                </div>
                <div>
                  <div className="font-bold">{reviews[active].name}</div>
                  <div className="text-sm text-gray-500">{reviews[active].role}</div>
                </div>
                <span className="mt-1 rounded-full bg-blue-600/10 px-3 py-1 text-xs text-blue-400">
                  {reviews[active].product}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Author grid */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                i === active
                  ? "border-blue-500/40 bg-blue-600/10 text-white"
                  : "border-white/8 text-gray-500 hover:border-white/20 hover:text-white"
              }`}
            >
              <span className="font-bold">{r.avatar}</span>
              {r.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
