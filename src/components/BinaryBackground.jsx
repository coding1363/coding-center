"use client";
import React, { useEffect, useRef } from "react";
import { useScroll } from "@/hooks/useScroll";

export default function BinaryBackground() {
  const canvasRef = useRef(null);
  const isScrolling = useScroll();
  const scrollingRef = useRef(false);

  useEffect(() => {
    scrollingRef.current = isScrolling;
  }, [isScrolling]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ৪ নম্বর সমাধান: ফন্ট সাইজ কমিয়ে ১৩ করা হয়েছে যাতে কোডগুলো অনেক বেশি নিখুঁত ও ঘন দেখায়
    const fontSize = 13;
    // কলামের মধ্যকার দূরত্ব ২২ থেকে কমিয়ে ১২ করা হয়েছে যাতে কোডগুলো পাশাপাশি অনেক ঘনভাবে বসে
    const columns = Math.floor(window.innerWidth / 12);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);
    // ৪ নম্বর সমাধান: স্পিড বা গতি কমিয়ে স্লো করে দেওয়া হয়েছে
    const speeds = Array.from({ length: columns }, () => 0.4 + Math.random() * 0.6);

    const render = () => {
      const isDay = document.documentElement.getAttribute("data-theme") === "day";
      ctx.fillStyle = isDay ? "rgba(243, 243, 243, 0.22)" : "rgba(30, 30, 30, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = isDay ? "rgba(0, 122, 204, 0.25)" : "rgba(78, 201, 176, 0.22)";

      const speedFactor = scrollingRef.current ? 0.28 : 1;

      for (let i = 0; i < drops.length; i++) {
        const bit = Math.random() > 0.5 ? "1" : "0";
        const x = i * 12; // কলামের ব্যবধান ১২ করা হয়েছে
        const y = drops[i] * fontSize;

        ctx.fillText(bit, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // গতি কমানোর জন্য এখানে মাল্টিপ্লায়ার ছোট (0.15) করা হয়েছে
        drops[i] += speeds[i] * speedFactor * 0.15;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 print:hidden"
    />
  );
}