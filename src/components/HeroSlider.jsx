"use client";
import React, { useState, useEffect } from "react";
import { HERO_SWAP_PHOTOS } from "@/data/courses";
import { getPlaceholderSvg } from "@/lib/utils";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SWAP_PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-3 pt-3">
      <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden bg-vsCard border border-vsBorder shadow-lg">
        {HERO_SWAP_PHOTOS.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Coding Center Slide ${index + 1}`}
            onError={(e) => {
              e.currentTarget.src = getPlaceholderSvg(
                `Center Photo ${index + 1}`,
                700,
                380
              );
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* নিচে মাঝখানে ডট ইন্ডিকেটর (••••) */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/45 px-3 py-1 rounded-full">
          {HERO_SWAP_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === current ? "bg-[#38bdf8] scale-125" : "bg-white/60"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}