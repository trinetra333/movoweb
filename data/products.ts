export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number; // stored in INR, unformatted
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "movo-watch-x1",
    name: "MOVO Watch X1",
    category: "Smartwatch",
    price: 9999,
    image: "/image/watch-x1.png",
    description:
      "Premium AMOLED smartwatch with health tracking and long battery life.",
  },
  {
    id: 2,
    slug: "movo-air-anc",
    name: "MOVO Air ANC",
    category: "Wireless Earbuds",
    price: 4999,
    image: "/image/air-anc.png",
    description: "Active Noise Cancellation with premium sound quality.",
  },
  {
    id: 3,
    slug: "movo-sound-one",
    name: "MOVO Sound One",
    category: "Bluetooth Speaker",
    price: 5999,
    image: "/image/sound-pro.png",
    description: "Rich bass and immersive audio with all-day battery.",
  },
  {
    id: 4,
    slug: "movo-charge-65",
    name: "MOVO Charge 65",
    category: "GaN Charger",
    price: 2999,
    image: "/image/charger.png",
    description:
      "Ultra-fast 65W GaN charger for phones, tablets and laptops.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
