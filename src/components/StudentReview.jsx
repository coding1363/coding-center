"use client";
import React from "react";
import { CONSISTENT_REVIEWS } from "@/data/reviews";

export default function StudentReview() {
  return (
    <section className="w-full px-3 mt-4 space-y-2.5">
      {CONSISTENT_REVIEWS.map((review) => (
        <div
          key={review.id}
          className="w-full bg-vsCard border border-vsBorder rounded-lg p-3.5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-extrabold text-vsText">
              Student Review — <span className="text-[#38bdf8]">{review.studentName}</span>
            </h4>
            <span className="text-[11px] font-mono text-vsTeal bg-vsBg px-2 py-0.5 rounded border border-vsBorder">
              {review.course}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-vsText/85 leading-relaxed">
            {review.comment}
          </p>
        </div>
      ))}
    </section>
  );
}