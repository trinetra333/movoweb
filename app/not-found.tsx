import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-32 text-center">
        <div className="text-8xl font-black text-white/5 md:text-[180px]" style={{ fontFamily: "var(--font-space)" }}>
          404
        </div>
        <h1 className="mt-4 text-4xl font-black">Page Not Found</h1>
        <p className="mt-4 max-w-md text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-white/15 px-8 py-3.5 font-semibold transition hover:border-white/30"
          >
            Shop Products
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
