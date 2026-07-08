"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({ images, productName }: GalleryProps) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] border border-white/8 bg-gradient-to-br from-[#161616] to-[#0f0f0f] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 to-transparent" />
        <Image
          src={images[active]}
          alt={productName}
          fill
          className="object-contain p-14 transition-all duration-500"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-20 w-20 overflow-hidden rounded-2xl border transition ${
                i === active
                  ? "border-blue-500 bg-blue-600/10"
                  : "border-white/8 bg-[#141414] hover:border-white/20"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} view ${i + 1}`}
                fill
                className="object-contain p-3"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
