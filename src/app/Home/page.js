import React from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CourseTabs from "@/components/CourseTabs";
import CourseSlider from "@/components/CourseSlider";
import StudentReview from "@/components/StudentReview";

export default function HomePage() {
  return (
    <div className="pb-2">
      {/* ১. অটোমেটিক সেন্টার ফটো স্লাইডার (প্রতি ৩ সেকেন্ডে পরিবর্তন) */}
      <HeroSlider />

      {/* ২. ফোল্ডার-ট্যাব কোর্স বার ও কানেক্টেড Course Information বক্স */}
      <CourseTabs />

      {/* ৩. ১৬:৯ ডান থেকে বাম দিকে চলমান কোর্স ফটো স্লাইডার */}
      <CourseSlider />

      {/* ৪. ৩টি আলাদা বক্সে স্টুডেন্ট রিভিউ */}
      <StudentReview />

      {/* ৫. বাটন লেআউট: উপরে সবুজ Check Your Certificate, নিচে পাশাপাশি নীল Apply ও অ্যাশ Contact */}
      <section className="w-full px-3 mt-5 space-y-2.5">
        <div className="flex justify-center">
          <Link
            href="/Verification"
            className="w-4/5 bg-[#22c55e] hover:bg-green-600 text-white font-extrabold text-sm sm:text-base py-2.5 px-6 rounded-full text-center shadow-lg transition transform active:scale-95"
          >
            Check Your Certificate
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <Link
            href="/Admission"
            className="bg-[#0066ff] hover:bg-blue-700 text-white font-extrabold text-base py-2.5 rounded-full text-center shadow-md transition active:scale-95"
          >
            Apply
          </Link>
          <a
            href="https://wa.me/8801765094092"
            target="_blank"
            rel="noreferrer"
            className="bg-[#9ca3af] hover:bg-gray-400 text-black font-extrabold text-base py-2.5 rounded-full text-center shadow-md transition active:scale-95"
          >
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}