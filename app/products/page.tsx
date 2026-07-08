"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
  { label: "Name A–Z", value: "az" },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let list = [...products];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }
    if (sort === "asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, category, sort]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Header */}
      <section className="border-b border-white/8 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Our Collection</span>
            <h1
              className="mt-3 text-4xl font-black md:text-5xl"
              style={{ fontFamily: "var(--font-space)" }}
            >
              All Products
            </h1>
            <p className="mt-3 text-gray-500">
              Premium consumer electronics engineered for everyday excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[66px] z-30 border-b border-white/8 bg-[#0a0a0a]/90 backdrop-blur-xl py-4">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Search */}
            <div className="relative max-w-sm w-full">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-full border border-white/10 bg-[#141414] py-2.5 pl-10 pr-5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-500/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category filter */}
              <div className="flex gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      category === c
                        ? "bg-blue-600 text-white"
                        : "border border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-white/10 bg-[#141414] px-4 py-2 text-xs font-medium text-gray-400 outline-none transition hover:border-white/20"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-24 text-center"
          >
            <div className="text-5xl">🔍</div>
            <h2 className="text-2xl font-bold">No products found</h2>
            <p className="text-gray-500">Try adjusting your search or filter.</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="mt-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold transition hover:border-white/30"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <>
            <p className="mb-8 text-sm text-gray-600">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}
