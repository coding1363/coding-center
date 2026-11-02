"use client";
import React from "react";
import { getPlaceholderSvg } from "@/lib/utils";

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-vsCard border border-vsBorder rounded-xl p-5 flex flex-col items-center text-center shadow-md hover:border-[#007acc] transition">
      {/* উপরে গোল প্রোফাইল ছবি */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.3)] mb-3">
        <img
          src={mentor.image}
          alt={mentor.name}
          onError={(e) => {
            e.currentTarget.src = getPlaceholderSvg(mentor.name, 200, 200);
          }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ১ম টেক্সট হোল্ডার: Name */}
      <div className="w-full bg-vsBg border border-vsBorder rounded py-1.5 px-3 mb-2">
        <h3 className="text-base font-extrabold text-vsText">{mentor.name}</h3>
      </div>

      {/* ২য় টেক্সট হোল্ডার: Role */}
      <div className="w-full bg-vsBg border border-vsBorder rounded py-1 px-3 mb-3">
        <p className="text-xs font-bold text-[#4ec9b0]">{mentor.role}</p>
      </div>

      {/* নিচে প্লেইন টেক্সট About */}
      <p className="text-xs sm:text-sm text-vsText/85 leading-relaxed">
        {mentor.about}
      </p>
    </div>
  );
}