import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function FeaturedProducts() {
  return (
    <section id="products" className="scroll-mt-24 bg-[#0a0a0a] py-28">
      <div className="mx-auto max-w-7xl px-5">

        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Our Collection</span>
              <h2 className="mt-3 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
                Featured Products
              </h2>
              <p className="mt-3 max-w-lg text-gray-500">
                Designed with precision. Built for everyday excellence.
              </p>
            </div>
            <a
              href="/products"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 flex-shrink-0"
            >
              View All Products
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.07}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
