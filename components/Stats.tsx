import Reveal from "./Reveal";

const stats = [
  { number: "50K+", label: "Happy Customers", desc: "Across India" },
  { number: "25+", label: "Premium Products", desc: "In our lineup" },
  { number: "100+", label: "Retail Partners", desc: "Nationwide" },
  { number: "24/7", label: "Customer Support", desc: "Always available" },
];

export default function Stats() {
  return (
    <section className="bg-[#0d0d0d] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="group rounded-3xl border border-white/8 bg-[#141414] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_40px_-12px_rgba(37,99,235,0.3)]">
                <div className="text-4xl font-black text-blue-400 md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
                  {stat.number}
                </div>
                <div className="mt-2 font-semibold text-white">{stat.label}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
