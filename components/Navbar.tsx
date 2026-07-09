"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../lib/cart-context";
import { useWishlist } from "../lib/wishlist-context";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[#0a0a0a]/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/image/logo-mark.png"
              alt="MOVO"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-xl px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.name}
                <span className="absolute inset-x-3 bottom-0.5 h-[1.5px] scale-x-0 rounded-full bg-blue-500 transition-transform duration-300 origin-center group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-white/30 hover:text-white hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4.5 w-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="View cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-white/30 hover:text-white hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4.5 w-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l.9 4.5m0 0L6.6 15.6a1.5 1.5 0 001.48 1.24h9.24a1.5 1.5 0 001.47-1.18l1.42-6.32H4.65m0 0L4.65 7.5m3.6 12.75a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm10.5 0a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
              </svg>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold text-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Shop Now — desktop only */}
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 hover:scale-105 active:scale-95"
            >
              Shop Now
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 md:hidden"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 rounded-full bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 rounded-full bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sticky top-[66px] z-40 overflow-hidden border-b border-white/10 bg-[#0a0a0a]/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 border-t border-white/10 pt-3">
                <Link
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
                >
                  Shop Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
