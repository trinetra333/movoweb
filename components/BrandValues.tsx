import Reveal from "./Reveal";

const values = [
  {
    title: "Premium Quality",
    description: "Every MOVO product is built with premium materials and rigorous quality standards. No compromises.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: "Smart Innovation",
    description: "Technology designed to make everyday life simpler and more enjoyable. Forward-thinking design.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    ),
  },
  {
    title: "Reliable Performance",
    description: "Fast, efficient, and dependable products you can trust every day. Built to last.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
  },
  {
    title: "1-Year Warranty",
    description: "Every product ships with a full manufacturer's warranty. We stand by what we build.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    ),
  },
];

export default function BrandValues() {
  return (
    <section className="bg-[#0a0a0a] py-28">
      <div className="mx-auto max-w-7xl px-5">

        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Why MOVO</span>
            <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              Built Different
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Every decision we make — from material choice to packaging — reflects our obsession with quality.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-white/8 bg-[#141414] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/35 hover:shadow-[0_0_40px_-12px_rgba(37,99,235,0.35)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 transition-all duration-300 group-hover:bg-blue-600/25 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth={1.8} className="h-6 w-6">
                    {v.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
