import React from "react";

export default function AboutPage() {
  return (
    <div className="px-3 py-4 space-y-4">
      <div className="bg-vsCard border border-vsBorder rounded-xl p-5 space-y-3 shadow">
        <h1 className="text-xl font-extrabold text-[#38bdf8]">Our Main Goal</h1>
        <p className="text-sm text-vsText leading-relaxed">
          The main objective of Coding Center is to create freelancers in every
          home so that no youth remains unemployed or falls into addiction.
        </p>
        <p className="text-sm font-bold text-[#4ec9b0] leading-relaxed">
          কোডিং সেন্টারের মূল উদ্দেশ্য একটাই—ঘরে ঘরে ফ্রিল্যান্সার তৈরি করা, যেন
          কোনো যুবক বেকার বা নেশাগ্রস্ত না থাকে।
        </p>
      </div>

      <div className="bg-vsCard border border-vsBorder rounded-xl p-5 space-y-3 shadow">
        <h2 className="text-lg font-extrabold text-[#38bdf8]">Our Address</h2>
        <p className="text-sm text-vsText">
          Chini Masjid, Saidpur, Nilphamari. (আমাদের ঠিকানাঃ চিনি মসজিদ,
          সৈয়দপুর, নীলফামারী।)
        </p>
        <a
          href="https://share.google/yewGrD3ekfNlEp0ur"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full bg-[#007acc] hover:bg-blue-600 text-white font-bold text-sm py-2.5 rounded-lg text-center transition"
        >
          📍 View on Google Maps
        </a>
      </div>

      <div className="bg-vsCard border border-vsBorder rounded-xl p-5 space-y-3 shadow">
        <h2 className="text-lg font-extrabold text-[#22c55e]">Our WhatsApp</h2>
        <p className="text-base font-mono font-bold text-vsText">01765094092</p>
        <a
          href="https://wa.me/8801765094092"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full bg-[#22c55e] hover:bg-green-600 text-white font-bold text-sm py-2.5 rounded-lg text-center transition"
        >
          💬 Chat on WhatsApp Business
        </a>
      </div>
    </div>
  );
}