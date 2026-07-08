"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products, formatPrice } from "../data/products";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  const featured = products[0]; // MOVO Watch X1

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-700/8 blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left — copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/8 px-4 py-1.5 text-sm font-medium text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                Premium Consumer Electronics
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
            >
              MOVE WITH
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                INTELLIGENCE
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Discover premium consumer electronics designed with precision,
              innovation, and timeless craftsmanship. Engineered for everyday excellence.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Link href="/products">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 600, damping: 20 }}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_-8px_rgba(37,99,235,0.6)] transition hover:bg-blue-500"
                >
                  Shop Now
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </Link>

              <Link href="#products">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 600, damping: 20 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold transition hover:border-white/35 hover:bg-white/5"
                >
                  Explore
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={item} className="mt-14 flex flex-wrap gap-8">
              {[
                { n: "50K+", l: "Happy Customers" },
                { n: "25+", l: "Products" },
                { n: "100+", l: "Retail Partners" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-space)" }}>{s.n}</div>
                  <div className="mt-0.5 text-sm text-gray-500">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — featured product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            {/* Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/8 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent" />

              <div className="relative flex h-64 items-center justify-center md:h-80">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={featured.image}
                    alt={featured.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Product info */}
              <div className="relative mt-6 border-t border-white/8 pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs font-medium text-blue-400">{featured.category}</span>
                    <h2 className="mt-1 text-2xl font-bold">{featured.name}</h2>
                    <p className="mt-1.5 text-sm text-gray-500">{featured.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black">{formatPrice(featured.price)}</div>
                    <Link
                      href={`/products/${featured.slug}`}
                      className="mt-2 inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-500"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini product chips */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {products.slice(1).map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-[#141414] p-4 transition hover:border-blue-500/40 hover:bg-[#1a1a1a]"
                  >
                    <div className="relative h-12 w-12">
                      <Image src={p.image} alt={p.name} fill className="object-contain" sizes="48px" />
                    </div>
                    <span className="text-center text-xs font-medium text-gray-400 group-hover:text-white leading-tight transition">
                      {p.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
