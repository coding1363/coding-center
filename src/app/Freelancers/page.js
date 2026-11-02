"use client";
import React from "react";
import Link from "next/link";
import { getPlaceholderSvg } from "@/lib/utils";

const FREELANCERS = [
  { name: "Ariful Islam", skill: "Meta & Google Ads Freelancer", avatar: "/images/students/student1.png" },
  { name: "Nusrat Jahan", skill: "E-Commerce & Dropshipping Specialist", avatar: "/images/students/student2.png" },
  { name: "Sabbir Hossain", skill: "Full-Stack Next.js Developer", avatar: "/images/students/student4.png" },
  { name: "Mehedi Hasan", skill: "WordPress & Frontend Freelancer", avatar: "/images/students/student5.png" },
];

export default function FreelancersPage() {
  return (
    <div className="px-3 py-4 space-y-4">
      <h1 className="text-xl font-extrabold text-center text-[#38bdf8]">
        Our Successful Freelancers
      </h1>

      <div className="grid grid-cols-1 gap-3">
        {FREELANCERS.map((f, i) => (
          <div
            key={i}
            className="bg-vsCard border border-vsBorder rounded-xl p-4 flex items-center gap-3.5 shadow"
          >
            <img
              src={f.avatar}
              alt={f.name}
              onError={(e) => {
                e.currentTarget.src = getPlaceholderSvg(f.name, 100, 100);
              }}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#4ec9b0]"
            />
            <div>
              <h3 className="text-base font-extrabold text-vsText">{f.name}</h3>
              <p className="text-xs text-[#4ec9b0] font-semibold">{f.skill}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/Admission"
        className="block w-full bg-[#007acc] hover:bg-blue-600 text-white font-extrabold py-3 rounded-full text-center shadow-lg"
      >
        Apply Now
      </Link>
    </div>
  );
}