"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { useWishlist } from "../../lib/wishlist-context";
import { products } from "../../data/products";

export default function WishlistPage() {
  const { items } = useWishlist();
  const wishlisted = products.filter((p) => items.includes(p.id));

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Your List</span>
          <h1 className="mt-3 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            Wishlist
          </h1>
          {wishlisted.length > 0 && (
            <p className="mt-2 text-gray-500">{wishlisted.length} saved item{wishlisted.length !== 1 ? "s" : ""}</p>
          )}
        </motion.div>

        {wishlisted.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-white/8 bg-[#141414] p-16 text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5 text-3xl">🤍</div>
            <div>
              <h2 className="text-2xl font-bold">Nothing saved yet</h2>
              <p className="mt-2 text-gray-500">Tap the heart icon on any product to save it here.</p>
            </div>
            <Link
              href="/products"
              className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlisted.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
