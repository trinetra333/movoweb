"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductGallery from "../../../components/ProductGallery";
import ProductCard from "../../../components/ProductCard";
import { Product, formatPrice, products } from "../../../data/products";
import { useCart } from "../../../lib/cart-context";
import { useWishlist } from "../../../lib/wishlist-context";
import { useToast } from "../../../components/Toast";

const productSpecs: Record<string, { label: string; value: string }[]> = {
  "movo-watch-x1": [
    { label: "Display", value: "1.43\" AMOLED, 466×466 px" },
    { label: "Battery", value: "7-day typical use" },
    { label: "Water Resistance", value: "5ATM" },
    { label: "Sensors", value: "SpO2, HR, Stress, Sleep" },
    { label: "Connectivity", value: "Bluetooth 5.3" },
    { label: "Weight", value: "32g (without strap)" },
  ],
  "movo-air-anc": [
    { label: "Driver Size", value: "11mm dynamic" },
    { label: "Frequency Response", value: "20Hz – 20kHz" },
    { label: "ANC Depth", value: "Up to −35dB" },
    { label: "Battery Life", value: "8h earbuds / 32h with case" },
    { label: "Connectivity", value: "Bluetooth 5.3, multipoint" },
    { label: "IPX Rating", value: "IPX4 sweat-resistant" },
  ],
  "movo-sound-one": [
    { label: "Drivers", value: "2× 20W full-range" },
    { label: "Frequency Response", value: "60Hz – 20kHz" },
    { label: "Battery Life", value: "18 hours" },
    { label: "Charging", value: "USB-C, 30W fast charge" },
    { label: "Connectivity", value: "Bluetooth 5.3, AUX, TWS pairing" },
    { label: "Water Resistance", value: "IPX6" },
  ],
  "movo-charge-65": [
    { label: "Total Power", value: "65W" },
    { label: "Ports", value: "2× USB-C, 1× USB-A" },
    { label: "Protocol", value: "GaN III, PD 3.0, QC 4.0+" },
    { label: "Input", value: "100–240V universal" },
    { label: "Dimensions", value: "51 × 36 × 31mm" },
    { label: "Weight", value: "108g" },
  ],
};

const tabs = ["Overview", "Specifications", "Reviews"] as const;
type Tab = (typeof tabs)[number];

const reviews = [
  { name: "Aarav S.", rating: 5, comment: "Outstanding quality. Exactly what I expected from MOVO.", date: "June 2025" },
  { name: "Priya M.", rating: 5, comment: "Superb build, premium feel. Arrived quickly and well-packaged.", date: "May 2025" },
  { name: "Karthik R.", rating: 4, comment: "Great product overall. Minor software quirks but updates have been consistent.", date: "April 2025" },
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const specs = productSpecs[product.slug] ?? [];

  // Related products (exclude current)
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  function handleAddToCart() {
    addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image }, quantity);
    setAdded(true);
    showToast(`${product.name} added to cart`);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image }, quantity);
    router.push("/cart");
  }

  const wishlisted = isWishlisted(product.id);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-white/8 bg-[#0d0d0d] py-4">
        <div className="mx-auto max-w-7xl px-5">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="transition hover:text-white">Home</a>
            <span>/</span>
            <a href="/products" className="transition hover:text-white">Products</a>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main product section */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <ProductGallery images={[product.image]} productName={product.name} />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-600/15 px-4 py-1.5 text-sm font-semibold text-blue-400">
                  {product.category}
                </span>
                <button
                  onClick={() => {
                    toggle(product.id);
                    showToast(wishlisted ? "Removed from wishlist" : "Added to wishlist", wishlisted ? "info" : "success");
                  }}
                  aria-label="Toggle wishlist"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${wishlisted ? "border-red-500/40 bg-red-500/10 text-red-400" : "border-white/10 text-gray-500 hover:border-white/25 hover:text-white"}`}
                >
                  <svg viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="h-4.5 w-4.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>

              <h1 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex gap-0.5 text-yellow-400">{"★".repeat(5)}</div>
                <span className="text-sm text-gray-500">4.9 (128 reviews)</span>
              </div>
            </div>

            <p className="text-lg leading-8 text-gray-400">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black" style={{ fontFamily: "var(--font-space)" }}>
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-gray-600 line-through">
                {formatPrice(Math.round(product.price * 1.2))}
              </span>
              <span className="rounded-full bg-green-500/12 px-3 py-1 text-sm font-semibold text-green-400">
                Save 17%
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Quantity</span>
              <div className="flex items-center overflow-hidden rounded-full border border-white/12">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center transition-colors hover:text-blue-400"
                  aria-label="Decrease"
                >
                  −
                </motion.button>
                <span className="w-10 text-center font-semibold">{quantity}</span>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center transition-colors hover:text-blue-400"
                  aria-label="Increase"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleBuyNow}
                className="flex-1 rounded-full bg-blue-600 py-4 font-bold text-white shadow-[0_0_40px_-8px_rgba(37,99,235,0.5)] transition hover:bg-blue-500"
              >
                Buy Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="flex-1 rounded-full border border-white/15 py-4 font-semibold transition hover:border-white/30 hover:bg-white/5"
              >
                {added ? "Added ✓" : "Add to Cart"}
              </motion.button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🛡️", title: "1-Year Warranty", desc: "Full manufacturer coverage" },
                { icon: "🚚", title: "Free Shipping", desc: "On orders above ₹999" },
                { icon: "↩️", title: "7-Day Returns", desc: "Hassle-free return policy" },
                { icon: "🔒", title: "Secure Payment", desc: "Encrypted via Stripe" },
              ].map((b) => (
                <div key={b.title} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#141414] p-4">
                  <span className="text-lg">{b.icon}</span>
                  <div>
                    <div className="text-sm font-bold">{b.title}</div>
                    <div className="text-xs text-gray-600">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          {/* Tab nav */}
          <div className="flex gap-1 border-b border-white/8 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 text-sm font-semibold transition ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-white"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "Overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg leading-8 text-gray-400">
                The {product.name} represents the pinnacle of MOVO&apos;s engineering philosophy — premium materials, thoughtful design, and performance that exceeds expectations at every price point. Whether you&apos;re a first-time buyer or upgrading from a previous MOVO device, this product is built to impress.
              </p>
              <p className="mt-4 leading-8 text-gray-500">
                Every unit is assembled with precision and tested against our strict quality control standards before leaving the warehouse. The {product.name} ships with all necessary accessories in eco-friendly packaging, ensuring your unboxing experience matches the premium product inside.
              </p>
            </motion.div>
          )}

          {activeTab === "Specifications" && (
            <motion.div
              key="specs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-3xl border border-white/8"
            >
              {specs.length > 0 ? (
                specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-[#141414]" : "bg-[#111]"}`}
                  >
                    <span className="text-sm font-medium text-gray-500">{spec.label}</span>
                    <span className="text-sm font-bold text-white">{spec.value}</span>
                  </div>
                ))
              ) : (
                <div className="p-10 text-center text-gray-500">Specifications coming soon.</div>
              )}
            </motion.div>
          )}

          {activeTab === "Reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black" style={{ fontFamily: "var(--font-space)" }}>4.9</span>
                  <div>
                    <div className="text-yellow-400">★★★★★</div>
                    <div className="text-sm text-gray-500">128 reviews</div>
                  </div>
                </div>
              </div>
              {reviews.map((r) => (
                <div key={r.name} className="rounded-3xl border border-white/8 bg-[#141414] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/15 text-xs font-bold text-blue-400">
                        {r.name.split(" ")[0][0]}{r.name.split(" ")[1]?.[0] ?? ""}
                      </div>
                      <div>
                        <div className="font-semibold">{r.name}</div>
                        <div className="text-xs text-gray-600">{r.date}</div>
                      </div>
                    </div>
                    <div className="text-yellow-400">{"★".repeat(r.rating)}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{r.comment}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
