import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly when placing orders: name, email address, shipping address, and payment information (processed securely by Stripe — we never store card details). We also collect usage data such as pages visited and browser type to improve our website.",
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your information to: process and fulfill orders; send order confirmations and shipping updates; respond to customer support inquiries; send promotional emails (only with your consent); and improve our products and website.",
  },
  {
    title: "3. Information Sharing",
    content: "MOVO does not sell, trade, or rent your personal information to third parties. We share information only with trusted service providers (payment processors, shipping partners) strictly for fulfilling your orders, under confidentiality agreements.",
  },
  {
    title: "4. Payment Security",
    content: "All payments are processed by Stripe, a PCI DSS Level 1 certified payment processor. MOVO never stores your full credit/debit card details. Stripe's privacy policy governs the use of payment information.",
  },
  {
    title: "5. Cookies",
    content: "Our website uses essential cookies to maintain your shopping cart session and remember your preferences. Analytics cookies (if used) collect anonymized data to help us improve the site. You can disable cookies in your browser settings, though some features may not function correctly.",
  },
  {
    title: "6. Data Retention",
    content: "We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Order data is typically retained for 7 years for tax compliance.",
  },
  {
    title: "7. Your Rights",
    content: "Under applicable data protection laws, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hellomovotech@gmail.com. We will respond within 30 days.",
  },
  {
    title: "8. Children's Privacy",
    content: "MOVO's services are not directed at children under 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.",
  },
  {
    title: "9. Changes to This Policy",
    content: "MOVO may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. Your continued use of our services after changes constitutes acceptance of the revised policy.",
  },
  {
    title: "10. Contact Us",
    content: "For privacy-related questions or requests, email us at hellomovotech@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-white/8 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Legal</span>
          <h1 className="mt-4 text-4xl font-black" style={{ fontFamily: "var(--font-space)" }}>Privacy Policy</h1>
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
          Questions about your privacy? Email us at{" "}
          <a href="mailto:hellomovotech@gmail.com" className="text-blue-400 underline">hellomovotech@gmail.com</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
