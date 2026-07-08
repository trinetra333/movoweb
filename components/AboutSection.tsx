import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#0a0a0a] py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Our Story</span>
              <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
                Precision-Crafted
                <br />
                for Modern Life
              </h2>
              <p className="mt-6 leading-8 text-gray-500">
                MOVO was born from a simple belief: premium technology shouldn&apos;t be a privilege. We design consumer electronics that combine genuine innovation, premium build quality, and accessible pricing — making exceptional technology available to everyone.
              </p>
              <p className="mt-4 leading-8 text-gray-500">
                Every product in our lineup goes through 12 months of design iteration and rigorous quality testing before it ever reaches your hands. We&apos;re a team of engineers, designers, and product thinkers who are obsessed with detail.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Learn More
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-white/30"
                >
                  Shop Products
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/8 bg-[#141414] p-7">
                <div className="text-3xl font-black text-blue-400" style={{ fontFamily: "var(--font-space)" }}>2023</div>
                <div className="mt-2 font-semibold">Founded</div>
                <div className="mt-1.5 text-sm text-gray-500">Born with a mission to democratize premium technology.</div>
              </div>
              <div className="rounded-3xl border border-white/8 bg-[#141414] p-7">
                <div className="text-3xl font-black text-blue-400" style={{ fontFamily: "var(--font-space)" }}>50K+</div>
                <div className="mt-2 font-semibold">Customers</div>
                <div className="mt-1.5 text-sm text-gray-500">Happy customers across India trust MOVO daily.</div>
              </div>
              <div className="col-span-2 relative overflow-hidden rounded-3xl border border-white/8 bg-[#141414] p-7">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-600/6 blur-3xl" />
                <div className="relative">
                  <div className="text-3xl font-black text-blue-400" style={{ fontFamily: "var(--font-space)" }}>4 Products</div>
                  <div className="mt-2 font-semibold">In Our Lineup</div>
                  <div className="mt-1.5 text-sm text-gray-500">Smartwatch, ANC Earbuds, BT Speaker, GaN Charger — with more coming soon.</div>
                  <div className="mt-4 flex -space-x-3">
                    {["/image/watch-x1.png", "/image/air-anc.png", "/image/sound-pro.png", "/image/charger.png"].map((src, i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-[#141414] bg-[#1a1a1a] overflow-hidden relative">
                        <Image src={src} alt="" fill className="object-contain p-1" sizes="40px" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
