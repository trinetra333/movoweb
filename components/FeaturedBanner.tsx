import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function FeaturedBanner() {
  return (
    <section className="bg-[#0d0d0d] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">

            {/* Main banner */}
            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-8 md:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/6 blur-3xl" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">New Drop</span>
              <h3 className="mt-3 text-3xl font-black md:text-4xl" style={{ fontFamily: "var(--font-space)" }}>
                MOVO Watch X1
              </h3>
              <p className="mt-3 max-w-xs text-gray-500">
                AMOLED display. Advanced health tracking. 7-day battery. Redefining the smartwatch category.
              </p>
              <Link
                href="/products/movo-watch-x1"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Watch
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                  <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className="absolute bottom-0 right-4 h-48 w-48">
                <Image
                  src="/image/hero-watch.png"
                  alt="MOVO Watch X1"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_8px_24px_rgba(37,99,235,0.3)]"
                  sizes="192px"
                />
              </div>
            </div>

            {/* Secondary banners */}
            <div className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">True ANC</span>
                <h3 className="mt-2 text-2xl font-bold">MOVO Air ANC</h3>
                <p className="mt-2 text-sm text-gray-500">Block the world out. Crystal clear calls.</p>
                <Link href="/products/movo-air-anc" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-blue-400">
                  Shop Earbuds
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                </Link>
                <div className="absolute bottom-0 right-4 h-28 w-28">
                  <Image src="/image/air-anc.png" alt="MOVO Air ANC" fill className="object-contain object-bottom" sizes="112px" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">Fast Charge</span>
                <h3 className="mt-2 text-2xl font-bold">65W GaN Charger</h3>
                <p className="mt-2 text-sm text-gray-500">Charge everything. Fit it in your pocket.</p>
                <Link href="/products/movo-charge-65" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-blue-400">
                  Shop Charger
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                </Link>
                <div className="absolute bottom-0 right-4 h-28 w-28">
                  <Image src="/image/charger.png" alt="MOVO Charge 65" fill className="object-contain object-bottom" sizes="112px" />
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
