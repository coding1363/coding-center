"use client";
import React from "react";
import { getYouTubeEmbedUrl } from "@/lib/utils";

export default function VideoCard({ title, videoUrl }) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className="bg-vsCard border border-vsBorder rounded-xl overflow-hidden shadow-lg">
      {title && (
        <div className="px-3.5 py-2.5 border-b border-vsBorder bg-vsBg/60">
          <h3 className="text-xs sm:text-sm font-bold text-vsText">{title}</h3>
        </div>
      )}
      <div className="w-full aspect-[4/5] bg-black relative">
        <iframe
          src={embedUrl}
          title={title || "Coding Center Video"}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}