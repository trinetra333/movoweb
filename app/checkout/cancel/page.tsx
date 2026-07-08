import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-32 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/15 text-3xl text-yellow-400">
          ✕
        </div>
        <h1 className="mt-8 text-4xl font-black">Checkout Cancelled</h1>
        <p className="mt-5 max-w-md text-lg text-gray-400">
          No worries — your cart has been saved. You can continue shopping and come back whenever you&apos;re ready.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/cart"
            className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            Back to Cart
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-white/15 px-8 py-3.5 font-semibold transition hover:border-white/30"
          >
            Browse Products
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
