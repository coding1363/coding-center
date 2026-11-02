"use client";
import React, { useState } from "react";
import { getPlaceholderSvg } from "@/lib/utils";

export default function LogoEffect() {
  const [isHolding, setIsHolding] = useState(false);

  const startHold = () => setIsHolding(true);
  const stopHold = () => setIsHolding(false);

  return (
    <div className="relative select-none">
      {/* মূল হেডারের বাম পাশের চারকোনা লোগো বক্স */}
      <button
        type="button"
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
        onClick={() => {
          setIsHolding(true);
          setTimeout(() => setIsHolding(false), 1800);
        }}
        className="w-12 h-12 bg-vsCard border border-vsBorder flex items-center justify-center rounded shadow-md active:scale-95 transition-transform relative z-30 overflow-hidden"
        title="Click or Hold Logo for Water Ripple Effect"
      >
        <img
          src="/images/logo.png"
          alt="C|>"
          onError={(e) => {
            e.currentTarget.src = getPlaceholderSvg("C|>", 80, 80);
          }}
          className="w-10 h-10 object-contain"
        />
      </button>

      {/* প্রেস/ক্লিক করলে নিচে ও হালকা সাইডে ভেসে ওঠা বড় লোগো ও পানির ঢেউ অ্যানিমেশন */}
      {isHolding && (
        <div className="fixed top-20 left-8 z-50 pointer-events-none flex items-center justify-center">
          <div className="relative flex items-center justify-center w-36 h-36">
            <span className="water-ripple-ring delay-0" />
            <span className="water-ripple-ring delay-300" />
            <span className="water-ripple-ring delay-600" />
            <div className="w-20 h-20 rounded-full bg-[#1e1e1e]/90 border-2 border-[#38bdf8] shadow-[0_0_28px_#00bfff] flex items-center justify-center animate-bounce">
              <img
                src="/images/logo.png"
                alt="Coding Center Logo"
                onError={(e) => {
                  e.currentTarget.src = getPlaceholderSvg("C|>", 100, 100);
                }}
                className="w-14 h-14 object-contain drop-shadow-[0_0_12px_#38bdf8]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}