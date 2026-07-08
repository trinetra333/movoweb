"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product, formatPrice } from "../data/products";
import { useCart } from "../lib/cart-context";
import { useWishlist } from "../lib/wishlist-context";
import { useToast } from "./Toast";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image });
    setJustAdded(true);
    showToast(`${product.name} added to cart`);
    setTimeout(() => setJustAdded(false), 1500);
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
    showToast(
      isWishlisted(product.id) ? "Removed from wishlist" : `${product.name} wishlisted`,
      isWishlisted(product.id) ? "info" : "success"
    );
  }

  const wishlisted = isWishlisted(product.id);

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#141414] transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_60px_-16px_rgba(37,99,235,0.4)] cursor-pointer"
      >
        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition hover:border-white/25 hover:scale-110"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill={wishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            className={`h-4 w-4 transition-colors ${wishlisted ? "text-red-400" : "text-gray-400"}`}
            animate={wishlisted ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </motion.svg>
        </button>

        {/* Image */}
        <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#111]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-108"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {product.category}
          </span>

          <h3 className="mt-1.5 text-lg font-bold leading-tight text-white transition-colors group-hover:text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="text-xl font-black text-white">
              {formatPrice(product.price)}
            </span>

            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              className="relative overflow-hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 active:bg-blue-700"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={justAdded ? "added" : "add"}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block whitespace-nowrap"
                >
                  {justAdded ? "Added ✓" : "Add to Cart"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
