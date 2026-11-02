"use client";
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("night");

  useEffect(() => {
    const saved = localStorage.getItem("cc_theme") || "night";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "night" ? "day" : "night";
    setTheme(next);
    localStorage.setItem("cc_theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return { theme, toggleTheme };
}