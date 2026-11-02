import React from "react";
import Link from "next/link";
import { MENTORS_DATA } from "@/data/mentors";
import MentorCard from "@/components/MentorCard";

export default function MentorsPage() {
  return (
    <div className="px-3 py-4 space-y-4">
      <h1 className="text-xl font-extrabold text-center text-[#38bdf8]">
        Our Expert Mentors
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {MENTORS_DATA.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>

      <div className="pt-2 text-center">
        <Link
          href="/Admission"
          className="inline-block w-full bg-gradient-to-r from-[#007acc] via-[#22c55e] to-[#007acc] text-white font-extrabold py-3 rounded-full shadow-lg hover:opacity-95 transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}