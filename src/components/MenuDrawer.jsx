"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MENU_LINKS } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";
import SocialIcons from "./SocialIcons";
import { X } from "lucide-react";

function DoubleBarBinaryDivider() {
  const [binaryString, setBinaryString] = useState(
    "0101010101010101010101010101010101010101"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let nextStr = "";
      for (let i = 0; i < 42; i++) {
        nextStr += Math.random() > 0.5 ? "1" : "0";
      }
      setBinaryString(nextStr);
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[290px] mx-auto my-1">
      <div className="flex flex-col items-center overflow-hidden text-center">
        {/* উপরের পাতলা অ্যানিমেটেড লাইটিং ব্লু লাইন */}
        <div className="w-full h-[1px] animate-lighting-blue" />

        <p className="font-mono text-[9px] leading-tight tracking-widest text-[#38bdf8] py-[2px] select-none whitespace-nowrap">
          {binaryString}
        </p>

        {/* নিচের পাতলা অ্যানিমেটেড লাইটিং ব্লু লাইন */}
        <div className="w-full h-[1px] animate-lighting-blue" />
      </div>
    </div>
  );
}

export default function MenuDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-center items-center overflow-y-auto p-3 md:p-6 print:hidden">
      {/* ১ নং পরিবর্তনের অ্যানিমেশন স্টাইল */}
      <style jsx global>{`
        @keyframes moveLightingBlue {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-lighting-blue {
          background: linear-gradient(
            90deg,
            #0284c7,
            #38bdf8,
            #e0f2fe,
            #38bdf8,
            #0284c7
          );
          background-size: 200% 100%;
          animation: moveLightingBlue 2s linear infinite;
          box-shadow: 0 0 6px rgba(56, 189, 248, 0.6);
        }
      `}</style>

      {/* ৩ নং পরিবর্তন: মোবাইল ও ডেস্কটপ দুই জায়গাতেই পারফেক্টলি খোলার কন্টেইনার */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl bg-vsCard border border-vsBorder rounded-xl p-5 md:p-8 shadow-2xl relative my-auto">
        {/* Top Row: Menu + Day/Night Toggle + Close */}
        <div className="flex items-center justify-between mb-5 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-vsText tracking-wide">
            Menu
          </h2>
          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-vsBg text-vsText hover:text-red-400 border border-vsBorder transition-colors"
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 9 Menu Items */}
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-x-6 md:gap-y-5 items-center text-center">
          {MENU_LINKS.map((item) => (
            <div key={item.path} className="w-full">
              {/* ২ নং পরিবর্তন: প্রথমে ব্লু থাকবে, মাউস নিলে বা ক্লিক করলে সাদা হবে */}
              <Link
                href={item.path}
                onClick={onClose}
                className="block text-lg md:text-xl font-extrabold text-[#38bdf8] hover:text-white active:text-white py-0.5 transition-colors duration-200"
              >
                {item.name}
              </Link>
              <DoubleBarBinaryDivider />
            </div>
          ))}
        </nav>

        {/* Bottom Social Media Icons Row */}
        <div className="mt-5 md:mt-8 pt-2 flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}