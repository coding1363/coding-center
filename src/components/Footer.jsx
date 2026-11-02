"use client";
import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full px-3 pt-4 pb-8 space-y-3 print:hidden">
      {/* Center Talk (Motivational Quote Box) */}
      <div className="w-full bg-vsCard border border-vsBorder rounded-lg p-4 text-center shadow">
        <p className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold mb-1">
          Center Talk
        </p>
        <blockquote className="text-sm sm:text-base font-extrabold text-vsText italic">
          &ldquo;Learn Today, Build Your Skills, and Create a Better Future.&rdquo;
        </blockquote>
      </div>

      {/* Connect With Us (Icons Only) */}
      <div className="w-full bg-vsCard border border-vsBorder rounded-lg p-3 text-center">
        <p className="text-xs font-bold text-vsText/80 mb-2">Connect With Us</p>
        <SocialIcons />
      </div>

      {/* Copyright Box */}
      <div className="w-full bg-vsCard border border-vsBorder rounded-lg p-3.5 text-center space-y-1">
        <p className="text-xs font-extrabold text-vsText">
          © 2026 Coding Center. All Rights Reserved.
        </p>
        <p className="text-[11px] text-vsText/70 leading-snug">
          All course information, fees, schedules, and services are subject to
          change. Please contact Coding Center for the latest updates.
        </p>
      </div>
    </footer>
  );
}