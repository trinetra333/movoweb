import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CartProvider } from "../lib/cart-context";
import { WishlistProvider } from "../lib/wishlist-context";
import ScrollProgress from "../components/ScrollProgress";
import ToastContainer from "../components/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "MOVO — Premium Consumer Electronics", template: "%s | MOVO" },
  description:
    "Discover premium consumer electronics designed with precision, innovation, and timeless craftsmanship. Smartwatches, earbuds, speakers & chargers.",
  keywords: ["MOVO", "electronics", "smartwatch", "earbuds", "speakers", "charger", "premium"],
  openGraph: {
    siteName: "MOVO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <ScrollProgress />
        <CartProvider>
          <WishlistProvider>
            {children}
            <ToastContainer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
