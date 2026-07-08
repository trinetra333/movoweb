"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useCart } from "../../../lib/cart-context";

function SuccessContent() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (!cleared) {
      clearCart();
      setCleared(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-32 text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500/15 text-5xl text-green-400"
      >
        ✓
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="mt-8 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
          Order Confirmed!
        </h1>

        <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-gray-400">
          Thank you for shopping with MOVO. We&apos;ve received your order and sent a confirmation to your email. We&apos;ll notify you when it ships.
        </p>

        {sessionId && (
          <div className="mx-auto mt-5 max-w-lg rounded-2xl border border-white/8 bg-[#141414] px-5 py-4">
            <p className="text-xs text-gray-600 mb-1">Payment Reference</p>
            <p className="break-all font-mono text-xs text-gray-500">{sessionId}</p>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: "📦", title: "Processing", desc: "Your order is being prepared" },
            { icon: "🚚", title: "Shipping", desc: "Estimated 3–5 business days" },
            { icon: "📧", title: "Confirmation", desc: "Check your inbox" },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/8 bg-[#141414] p-5">
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-2 font-bold">{s.title}</div>
              <div className="mt-1 text-sm text-gray-500">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-8 py-3.5 font-semibold transition hover:border-white/30"
          >
            Back Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Suspense fallback={<div className="py-32" />}>
        <SuccessContent />
      </Suspense>
      <Footer />
    </main>
  );
}
