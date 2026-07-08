import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const topics = [
  {
    icon: "📦",
    title: "Orders & Shipping",
    desc: "Track your order, shipping timelines, and delivery issues.",
    links: [
      { text: "How long does shipping take?", href: "/faq#shipping" },
      { text: "Track my order", href: "/contact" },
      { text: "Wrong item received", href: "/contact" },
    ],
  },
  {
    icon: "↩️",
    title: "Returns & Refunds",
    desc: "7-day hassle-free return policy for all MOVO products.",
    links: [
      { text: "Start a return", href: "/contact" },
      { text: "Refund status", href: "/contact" },
      { text: "Return policy details", href: "/faq" },
    ],
  },
  {
    icon: "🛡️",
    title: "Warranty",
    desc: "All MOVO products include a 1-year limited manufacturer warranty.",
    links: [
      { text: "Submit warranty claim", href: "/warranty" },
      { text: "What's covered?", href: "/warranty" },
      { text: "Check warranty status", href: "/contact" },
    ],
  },
  {
    icon: "🔧",
    title: "Product Support",
    desc: "Setup guides, firmware updates, and troubleshooting.",
    links: [
      { text: "Setup guides", href: "/faq" },
      { text: "Product FAQs", href: "/faq" },
      { text: "Report a defect", href: "/contact" },
    ],
  },
  {
    icon: "💳",
    title: "Payments",
    desc: "Billing queries, failed payments, and invoice requests.",
    links: [
      { text: "Payment failed", href: "/contact" },
      { text: "Request invoice", href: "/contact" },
      { text: "Payment methods", href: "/faq" },
    ],
  },
  {
    icon: "📧",
    title: "Contact Support",
    desc: "Can't find your answer? Reach out to our team directly.",
    links: [
      { text: "Email us", href: "mailto:hellomovotech@gmail.com" },
      { text: "Send a message", href: "/contact" },
    ],
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-white/8 bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Help Center</span>
          <h1 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            How Can We Help?
          </h1>
          <p className="mt-4 text-gray-500">
            Browse our support topics or reach out to our team directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-3xl border border-white/8 bg-[#141414] p-7 transition hover:border-blue-500/30"
            >
              <div className="text-3xl">{topic.icon}</div>
              <h2 className="mt-4 text-xl font-bold">{topic.title}</h2>
              <p className="mt-2 text-sm text-gray-500">{topic.desc}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {topic.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
                    >
                      <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-blue-500 flex-shrink-0">
                        <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/8 bg-[#141414] p-10 text-center">
          <h3 className="text-2xl font-bold">Still Need Help?</h3>
          <p className="mt-3 text-gray-500">Our support team is available Monday – Saturday, 9 AM – 6 PM IST.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hellomovotech@gmail.com"
              className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Email Support
            </a>
            <Link
              href="/faq"
              className="rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:border-white/30"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
