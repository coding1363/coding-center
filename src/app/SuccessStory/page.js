"use client";
import React from "react";
import Link from "next/link";
import { SUCCESS_STORY_ITEMS } from "@/data/reviews";
import VideoCard from "@/components/VideoCard";
import { getPlaceholderSvg } from "@/lib/utils";

export default function SuccessStoryPage() {
  return (
    <div className="px-3 py-4 space-y-4">
      <h1 className="text-xl font-extrabold text-center text-[#38bdf8]">
        Student Success Stories
      </h1>

      <div className="space-y-4">
        {SUCCESS_STORY_ITEMS.map((item, idx) =>
          item.type === "video" ? (
            <VideoCard key={idx} title={item.title} videoUrl={item.videoUrl} />
          ) : (
            <div
              key={idx}
              className="bg-vsCard border border-vsBorder rounded-xl p-4 space-y-3 shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src = getPlaceholderSvg("Student", 100, 100);
                  }}
                  className="w-12 h-12 rounded-full object-cover border border-[#38bdf8]"
                />
                <div>
                  <p className="text-xs font-bold text-[#4ec9b0]">{item.title}</p>
                  <h3 className="text-sm font-extrabold text-vsText">
                    Name: {item.name}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-vsText/85">
                <span className="font-bold text-[#38bdf8]">Review Text: </span>
                {item.reviewText}
              </p>
              {item.videoUrl && (
                <div className="pt-2">
                  <VideoCard title="Attached Video Review" videoUrl={item.videoUrl} />
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* Bottom Row Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Link
          href="/Admission"
          className="bg-[#007acc] hover:bg-blue-600 text-white font-extrabold text-sm py-3 rounded-lg text-center shadow"
        >
          Apply Now
        </Link>
        <a
          href="https://wa.me/8801765094092"
          target="_blank"
          rel="noreferrer"
          className="bg-[#22c55e] hover:bg-green-600 text-white font-extrabold text-sm py-3 rounded-lg text-center shadow"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}