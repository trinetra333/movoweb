"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCart } from "../../lib/cart-context";
import { formatPrice } from "../../data/products";

const FREE_SHIPPING_THRESHOLD = 1999;

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, isLoaded } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 99;
  const discount = couponApplied ? Math.round(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice + shipping - discount;

  const shippingProgress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);

  async function handleCheckout() {
    setError(null);
    setIsCheckingOut(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Could not start checkout");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsCheckingOut(false);
    }
  }

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === "MOVO10") {
      setCouponApplied(true);
    } else {
      setError("Invalid coupon code. Try MOVO10 for 10% off!");
    }
  }

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            {[1, 2].map((i) => (
              <div key={i} className="h-28 animate-pulse rounded-3xl bg-[#141414]" />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            Your Cart
          </h1>
          {items.length > 0 && (
            <p className="mt-2 text-gray-500">{items.length} item{items.length !== 1 ? "s" : ""}</p>
          )}
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-white/8 bg-[#141414] p-16 text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5 text-3xl">
              🛒
            </div>
            <div>
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <p className="mt-2 text-gray-500">Discover our premium electronics collection.</p>
            </div>
            <Link
              href="/products"
              className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-3">

            {/* Line items */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Free shipping progress */}
              {totalPrice < FREE_SHIPPING_THRESHOLD && (
                <div className="rounded-2xl border border-white/8 bg-[#141414] p-5">
                  <p className="text-sm text-gray-400">
                    Add <span className="font-bold text-white">{formatPrice(FREE_SHIPPING_THRESHOLD - totalPrice)}</span> more for{" "}
                    <span className="font-bold text-green-400">free shipping</span>
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${shippingProgress}%` }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                    />
                  </div>
                </div>
              )}

              {totalPrice >= FREE_SHIPPING_THRESHOLD && (
                <div className="rounded-2xl border border-green-500/20 bg-green-500/8 p-4 text-center text-sm font-medium text-green-400">
                  🎉 You qualify for free shipping!
                </div>
              )}

              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40, transition: { duration: 0.22 } }}
                    transition={{ duration: 0.28 }}
                    className="flex items-center gap-5 rounded-3xl border border-white/8 bg-[#141414] p-5"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-[#1a1a1a]">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2.5" sizes="80px" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold truncate">{item.name}</h3>
                      <p className="mt-0.5 text-sm text-gray-500">{formatPrice(item.price)} each</p>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center overflow-hidden rounded-full border border-white/12">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-9 w-9 items-center justify-center transition hover:text-blue-400"
                        aria-label="Decrease"
                      >
                        −
                      </motion.button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-9 w-9 items-center justify-center transition hover:text-blue-400"
                        aria-label="Increase"
                      >
                        +
                      </motion.button>
                    </div>

                    <p className="w-24 text-right font-black">
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-red-500/10 hover:text-red-400"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zm0 1.5h2.5A1.25 1.25 0 0112.5 3.75v.345a41.51 41.51 0 00-5 0V3.75A1.25 1.25 0 018.75 2.5zm-1.595 6.04a.75.75 0 011.01-.31l.014.008a.75.75 0 01-.724 1.318.75.75 0 01-.3-1.016zm3.3-.31a.75.75 0 01.3 1.016.75.75 0 01-1.01.31l-.014-.008a.75.75 0 01.724-1.318z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="h-fit rounded-3xl border border-white/8 bg-[#141414] p-7"
            >
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-white">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-400">Free</span>
                  ) : (
                    <span className="text-white">{formatPrice(shipping)}</span>
                  )}
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount (MOVO10)</span>
                    <span>−{formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              {/* Coupon */}
              {!couponApplied ? (
                <div className="mt-5 flex gap-2">
                  <input
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value); setError(null); }}
                    placeholder="Coupon code"
                    className="flex-1 rounded-full border border-white/10 bg-[#0a0a0a] px-4 py-2.5 text-sm text-white placeholder-gray-700 outline-none transition focus:border-blue-500/50"
                  />
                  <button
                    onClick={applyCoupon}
                    className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold transition hover:border-white/30"
                  >
                    Apply
                  </button>
                </div>
              ) : (
                <div className="mt-5 rounded-full border border-green-500/20 bg-green-500/8 px-4 py-2.5 text-center text-sm font-medium text-green-400">
                  ✓ MOVO10 applied — 10% off!
                </div>
              )}

              <div className="mt-5 flex justify-between border-t border-white/8 pt-5 font-black">
                <span>Total</span>
                <span className="text-xl">{formatPrice(finalTotal)}</span>
              </div>

              {error && <p className="mt-3 text-xs text-red-400">{error}</p>}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="mt-5 w-full rounded-full bg-blue-600 py-4 font-bold text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.5)] transition hover:bg-blue-500 disabled:opacity-60"
              >
                {isCheckingOut ? "Redirecting…" : "Proceed to Checkout"}
              </motion.button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-700">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
                Secured by Stripe · 256-bit encryption
              </div>
            </motion.div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
