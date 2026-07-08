import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Image
              src="/image/logo-mark.png"
              alt="MOVO"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
              Premium consumer electronics designed for modern lifestyles. Built with precision, innovation, and timeless craftsmanship.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-500 transition hover:border-white/25 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">Products</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Smartwatches", href: "/products" },
                { name: "Earbuds", href: "/products" },
                { name: "Speakers", href: "/products" },
                { name: "Chargers", href: "/products" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-gray-500 transition hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: "About", href: "/about" },
                { name: "Support", href: "/support" },
                { name: "Warranty", href: "/warranty" },
                { name: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-gray-500 transition hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "FAQ", href: "/faq" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-gray-500 transition hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-gray-600 sm:flex-row">
          <p>© 2026 MOVO Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Made with precision in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
