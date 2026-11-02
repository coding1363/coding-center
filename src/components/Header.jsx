"use client";
import React, { useState } from "react";
import Link from "next/link";
import LogoEffect from "./LogoEffect";
import MenuDrawer from "./MenuDrawer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-vsBg/95 backdrop-blur border-b border-vsBorder px-3 py-2.5 print:hidden">
        <div className="flex items-center gap-2.5">
          {/* বাম পাশের আলাদা লোগো বক্স */}
          <LogoEffect />

          {/* ডান পাশের প্রশস্ত বার: Coding Center + 3-Line Menu */}
          <div className="flex-1 h-12 bg-vsCard border border-vsBorder rounded px-4 flex items-center justify-between shadow-sm">
            <Link
              href="/Home"
              className="text-lg font-extrabold tracking-wide text-vsText hover:text-[#38bdf8] transition-colors"
            >
              Coding Center
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              className="flex flex-col justify-center items-center gap-1.5 p-1.5 rounded hover:bg-vsBorder/50 transition"
            >
              <span className="w-6 h-0.5 bg-vsText block rounded"></span>
              <span className="w-6 h-0.5 bg-vsText block rounded"></span>
              <span className="w-6 h-0.5 bg-vsText block rounded"></span>
            </button>
          </div>
        </div>
      </header>

      <MenuDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}