"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What is MOVO?",
        answer: "MOVO is a premium Indian consumer electronics brand focused on beautifully designed smart devices — smartwatches, earbuds, speakers, and chargers — at accessible price points.",
      },
      {
        question: "Where are MOVO products made?",
        answer: "MOVO products are designed in India and manufactured with internationally sourced premium components, ensuring world-class quality standards.",
      },
      {
        question: "How can I contact MOVO?",
        answer: "Email us at hellomovotech@gmail.com. Our support team responds within 24–48 hours on business days.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        question: "Where can I buy MOVO products?",
        answer: "MOVO products are available exclusively through our official website. Simply add products to your cart and proceed to checkout via Stripe.",
      },
      {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 3–5 business days within India. Express delivery options may be available at checkout.",
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes! Orders above ₹1,999 qualify for free standard shipping. A flat ₹99 shipping fee applies to smaller orders.",
      },
      {
        question: "Can I track my order?",
        answer: "Yes. Once your order ships, you will receive a tracking number via email with a link to track your package in real time.",
      },
    ],
  },
  {
    category: "Returns & Warranty",
    items: [
      {
        question: "What is MOVO's return policy?",
        answer: "We offer a 7-day hassle-free return policy from the date of delivery. Products must be in original condition with all accessories and packaging.",
      },
      {
        question: "Do MOVO products include a warranty?",
        answer: "Yes. All eligible MOVO products include a 12-month limited manufacturer warranty covering manufacturing defects and hardware failures.",
      },
      {
        question: "How do I raise a warranty claim?",
        answer: "Visit our Warranty page and fill out the claim form with your product details and issue description. Our team will respond within 24–48 hours.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards (Visa, Mastercard, RuPay), UPI, and net banking via Stripe's secure checkout.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Absolutely. All transactions are processed through Stripe, a PCI DSS Level 1 certified payment processor. We never store your card details.",
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-blue-400"
      >
        <span className="font-semibold">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/12 text-lg leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-8 text-gray-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="border-b border-white/8 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">Help Center</span>
          <h1 className="mt-4 text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-500">
            Everything you need to know about MOVO products, orders, and support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="flex flex-col gap-8">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-400">
                {section.category}
              </h2>
              <div className="rounded-3xl border border-white/8 bg-[#141414] px-6">
                {section.items.map((item) => (
                  <AccordionItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-blue-500/20 bg-blue-600/5 p-8 text-center">
          <h3 className="text-xl font-bold">Still have questions?</h3>
          <p className="mt-2 text-gray-500">Can&apos;t find what you&apos;re looking for? Our team is happy to help.</p>
          <a
            href="mailto:hellomovotech@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
