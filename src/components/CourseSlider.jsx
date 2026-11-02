"use client";
import React from "react";
import { COURSE_SLIDER_PHOTOS } from "@/data/courses";
import { getPlaceholderSvg } from "@/lib/utils";

export default function CourseSlider() {
  const loopPhotos = [...COURSE_SLIDER_PHOTOS, ...COURSE_SLIDER_PHOTOS];

  return (
    <section className="w-full px-3 mt-4 overflow-hidden">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="flex gap-3 animate-marquee-rtl w-max">
          {loopPhotos.map((src, index) => (
            <div
              key={index}
              className="w-60 sm:w-72 aspect-video bg-vsCard border border-vsBorder rounded-lg overflow-hidden shrink-0 relative shadow"
            >
              <img
                src={src}
                alt={`Course Photo ${(index % 4) + 1}`}
                onError={(e) => {
                  e.currentTarget.src = getPlaceholderSvg(
                    `16:9 Course Photo ${(index % 4) + 1}`,
                    640,
                    360
                  );
                }}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                ⬅ 16:9
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}