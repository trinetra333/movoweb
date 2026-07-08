import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const team = [
  { name: "Vikram Sharma", role: "Founder & CEO", avatar: "VS" },
  { name: "Ananya Reddy", role: "Head of Design", avatar: "AR" },
  { name: "Arjun Menon", role: "Head of Engineering", avatar: "AM" },
  { name: "Shreya Patel", role: "Head of Operations", avatar: "SP" },
];

const milestones = [
  { year: "2023", event: "MOVO founded with a vision to democratize premium electronics." },
  { year: "Q3 2023", event: "First product launch: MOVO Watch X1 sold out in 72 hours." },
  { year: "Q4 2023", event: "MOVO Air ANC launched. Crossed 10,000 units in the first month." },
  { year: "2024", event: "Expanded lineup with Sound One and Charge 65. Crossed 50,000 customers." },
  { year: "2025", event: "Partnered with 100+ retail stores across India. Series A funding closed." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-white/8 bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Our Story</span>
              <h1 className="mt-4 text-4xl font-black md:text-6xl" style={{ fontFamily: "var(--font-space)" }}>
                Technology for
                <br />
                <span className="text-blue-400">Everyone</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                MOVO was born from a simple conviction: premium technology shouldn&apos;t require a premium price. We exist to build consumer electronics that combine genuine innovation, exceptional build quality, and honest pricing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products" className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500">
                  Shop Products
                </Link>
                <Link href="/contact" className="rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:border-white/30">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "50K+", l: "Customers" },
                { n: "25+", l: "Products" },
                { n: "100+", l: "Retail Partners" },
                { n: "2023", l: "Founded" },
              ].map((s) => (
                <div key={s.l} className="rounded-3xl border border-white/8 bg-[#141414] p-8 text-center">
                  <div className="text-3xl font-black text-blue-400" style={{ fontFamily: "var(--font-space)" }}>{s.n}</div>
                  <div className="mt-2 text-sm text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Mission</span>
          <h2 className="mt-4 text-3xl font-black md:text-4xl" style={{ fontFamily: "var(--font-space)" }}>
            Precision-Crafted for Modern Life
          </h2>
          <p className="mt-6 leading-8 text-gray-400">
            Every MOVO product undergoes 12 months of design iteration, material selection, and quality testing before it reaches your hands. We obsess over details that most brands overlook — the weight of a device in your palm, the heft of a charging cable, the satisfying click of a button. These are the things that make technology feel truly premium.
          </p>
          <p className="mt-4 leading-8 text-gray-400">
            We believe the best technology is invisible — it simply works, every time, without demanding your attention. That&apos;s the MOVO promise.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">History</span>
            <h2 className="mt-4 text-3xl font-black" style={{ fontFamily: "var(--font-space)" }}>Our Journey</h2>
          </div>
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-5 top-3 bottom-3 w-px bg-white/8 hidden md:block" />
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 pb-8 last:pb-0">
                <div className="relative flex-shrink-0">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${i === milestones.length - 1 ? "border-blue-500 bg-blue-600/15 text-blue-400" : "border-white/8 bg-[#141414] text-gray-500"} text-xs font-bold`}>
                    ●
                  </div>
                </div>
                <div className="pb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400">{m.year}</div>
                  <p className="mt-1.5 text-gray-400">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Team</span>
            <h2 className="mt-4 text-3xl font-black" style={{ fontFamily: "var(--font-space)" }}>The People Behind MOVO</h2>
            <p className="mt-4 text-gray-500">A small team with outsized ambition.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-3xl border border-white/8 bg-[#141414] p-8 text-center transition hover:border-blue-500/30">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/15 text-2xl font-black text-blue-400">
                  {member.avatar}
                </div>
                <h3 className="mt-5 font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Values</span>
            <h2 className="mt-4 text-3xl font-black" style={{ fontFamily: "var(--font-space)" }}>What We Stand For</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Honesty", desc: "We don&apos;t inflate specs or hide limitations. Our product pages tell you exactly what you&apos;re buying." },
              { title: "Quality", desc: "We would rather launch one exceptional product than three mediocre ones. Every detail matters." },
              { title: "Accessibility", desc: "Premium shouldn&apos;t mean unaffordable. We work relentlessly to keep prices honest without compromising quality." },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl border border-white/8 bg-[#141414] p-8">
                <h3 className="text-xl font-bold text-blue-400">{v.title}</h3>
                <p className="mt-3 leading-7 text-gray-500" dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
