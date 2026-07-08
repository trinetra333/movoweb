"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const channels = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    ),
    title: "Email Support",
    description: "Get help via email within 24 hours",
    action: "hellomovotech@gmail.com",
    href: "mailto:hellomovotech@gmail.com",
    label: "Send Email",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    ),
    title: "Help Center",
    description: "Browse FAQs, guides and troubleshooting",
    action: "Visit FAQ →",
    href: "/faq",
    label: "Visit FAQ",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
    title: "Warranty Claims",
    description: "Raise a warranty claim for eligible products",
    action: "Check Warranty →",
    href: "/warranty",
    label: "Warranty Info",
  },
];

export default function SupportSection() {
  return (
    <section id="support" className="scroll-mt-24 bg-[#0d0d0d] py-28">
      <div className="mx-auto max-w-7xl px-5">

        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Support</span>
            <h2 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              We&apos;ve Got You Covered
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              World-class support for every MOVO product. We&apos;re here whenever you need us.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Link href={c.href} className="group block h-full rounded-3xl border border-white/8 bg-[#141414] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/35 hover:shadow-[0_0_40px_-12px_rgba(37,99,235,0.3)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/12 transition-all group-hover:bg-blue-600/20 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth={1.8} className="h-6 w-6">
                    {c.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-500">{c.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                  {c.label}
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                    <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
