"use client";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="bg-white text-black font-bold text-base px-6 py-1.5 rounded-full shadow-md hover:bg-sky-100 active:scale-95 transition-all border border-gray-300"
    >
      {theme === "night" ? "Day" : "Night"}
    </button>
  );
}