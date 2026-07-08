# MOVO Web — Redesigned

Premium consumer electronics storefront built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Required for Stripe checkout
STRIPE_SECRET_KEY=sk_test_...

# Optional: override the base URL for Stripe redirects
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

Without `STRIPE_SECRET_KEY`, the checkout button will show an error — all other features work without it.

## What's New in This Redesign

### UI / Design
- **Better typography** — Inter + Space Grotesk via `next/font/google`
- **Darker, richer color palette** — `#0a0a0a` base, deliberate blue accents
- **Consistent design language** — rounded-3xl cards, border-white/8, glow effects
- **Custom scrollbar & selection color** — polished system-level details
- **Scroll progress bar** — smooth gradient spring animation at the top

### Navigation
- **Mobile hamburger menu** — fully animated, responsive
- **Sticky header** with scroll-aware shadow/blur
- **Wishlist icon** with live counter in the nav

### Home Page
- **Hero redesign** — split layout with floating product card + mini product chips
- **Featured Banner** — main + 2 secondary banners with real product images
- **Improved Testimonials** — interactive carousel with author selector
- **Better Newsletter** — glassmorphism card with animated confirmation

### Products
- **Search bar** — real-time name/description/category search
- **Category filter** — one-click filter pills
- **Sort** — price ascending, descending, A–Z
- **Product card** — wishlist heart button with animation
- **Product detail** — specs tab, reviews tab, related products, discount badge, delivery badges, tabs with animated underline

### Cart & Checkout
- **Free shipping progress bar** — animated fill showing distance to free shipping threshold
- **Coupon code** — enter `MOVO10` for 10% off
- **Better order summary** — discount line, final total, Stripe security badge
- **Success page** — animated checkmark, order status cards

### New Pages
- **Wishlist page** — `/wishlist` — save products with the heart icon
- **About page** — `/about` — full story, team, timeline, values
- **Contact page** — `/contact` — dropdown subject, real form with feedback
- **Support page** — `/support` — topic grid with quick-link cards
- **Warranty page** — `/warranty` — coverage table + full claim form with order ID field
- **FAQ page** — `/faq` — interactive accordion grouped by category

### Bug Fixes / Improvements
- Removed `@vercel/speed-insights` dependency (unnecessary outside Vercel deployment)
- Replaced anchor-redirect pages with real full pages
- Better TypeScript: consistent `Promise<{ slug }>` params in Next.js 16
- Improved empty states on cart, wishlist, products pages
- Toast notifications for cart/wishlist actions (no more invisible feedback)

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Animations | Framer Motion 11 |
| Fonts | Inter + Space Grotesk (next/font) |
| Payments | Stripe |
| State | React Context (cart + wishlist) |
| Persistence | localStorage |
