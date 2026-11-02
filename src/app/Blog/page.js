"use client";
import React, { useState } from "react";
import { BLOG_VIDEOS } from "@/data/videos";
import VideoCard from "@/components/VideoCard";

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const videosPerPage = 5;
  const startIndex = (page - 1) * videosPerPage;
  const currentVideos = BLOG_VIDEOS.slice(startIndex, startIndex + videosPerPage);

  return (
    <div className="px-3 py-4 space-y-4">
      <h1 className="text-xl font-extrabold text-center text-[#38bdf8]">
        Coding Center Video Blog
      </h1>

      {currentVideos.length > 0 ? (
        <div className="space-y-4">
          {currentVideos.map((video) => (
            <VideoCard key={video.id} title={video.title} videoUrl={video.url} />
          ))}
        </div>
      ) : (
        <div className="bg-vsCard border border-vsBorder rounded-xl p-8 text-center text-sm text-vsText/70">
          এই পেজে নতুন ভিডিও শীঘ্রই যুক্ত হবে।
        </div>
      )}

      {/* Pagination Buttons (1, 2, 3) */}
      <div className="flex justify-center items-center gap-2 pt-3">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => {
              setPage(num);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`w-10 h-10 rounded-lg font-extrabold text-sm border transition ${
              page === num
                ? "bg-[#007acc] text-white border-[#38bdf8]"
                : "bg-vsCard text-vsText border-vsBorder hover:border-[#007acc]"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}