import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the MOVO website (movotechnologies.in) and purchasing MOVO products, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Products and Pricing",
    content: "All prices are listed in Indian Rupees (INR) inclusive of applicable taxes unless stated otherwise. MOVO reserves the right to modify product prices at any time without prior notice. Prices at the time of confirmed purchase will apply.",
  },
  {
    title: "3. Orders and Payment",
    content: "Orders are processed upon successful payment via our payment partner Stripe. MOVO reserves the right to cancel orders in cases of stock unavailability, pricing errors, or suspected fraud. You will be notified and fully refunded in such cases.",
  },
  {
    title: "4. Shipping and Delivery",
    content: "MOVO ships exclusively within India. Estimated delivery times are 3–5 business days for standard shipping. MOVO is not responsible for delays caused by courier partners, natural events, or customs (for territories outside our standard delivery zones).",
  },
  {
    title: "5. Returns and Refunds",
    content: "MOVO accepts returns within 7 days of delivery for products in original, unused condition with all accessories and packaging intact. Refunds are processed within 5–7 business days after we receive and inspect the returned product.",
  },
  {
    title: "6. Warranty",
    content: "MOVO products carry a limited 1-year manufacturer warranty against defects in materials and workmanship. This warranty does not cover damage resulting from accidents, misuse, unauthorized modifications, or normal wear and tear.",
  },
  {
    title: "7. Intellectual Property",
    content: "All content on the MOVO website — including text, images, logos, and product designs — is the exclusive property of MOVO Technologies Pvt. Ltd. and is protected by applicable intellectual property laws. Unauthorized use is strictly prohibited.",
  },
  {
    title: "8. Limitation of Liability",
    content: "MOVO's liability for any claim shall not exceed the purchase price of the product in question. MOVO shall not be liable for indirect, incidental, special, or consequential damages arising from product use or inability to use.",
  },
  {
    title: "9. Governing Law",
    content: "These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.",
  },
  {
    title: "10. Contact",
    content: "For questions regarding these terms, contact us at hellomovotech@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-white/8 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Legal</span>
          <h1 className="mt-4 text-4xl font-black" style={{ fontFamily: "var(--font-space)" }}>Terms of Service</h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold">{s.title}</h2>
              <p className="mt-3 leading-8 text-gray-500">{s.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-white/8 bg-[#141414] p-6 text-center text-sm text-gray-500">
          Questions about our terms? Email us at{" "}
          <a href="mailto:hellomovotech@gmail.com" className="text-blue-400 underline">hellomovotech@gmail.com</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
