import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-14 text-center md:p-20">
            {/* Noise overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-10"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Limited Time</span>
              <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
                Ready to Elevate
                <br />
                Your Tech?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-blue-100/80">
                Shop the full MOVO collection and experience premium consumer electronics that are designed to last.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/products">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50 hover:scale-105 active:scale-95">
                    Shop Now
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
