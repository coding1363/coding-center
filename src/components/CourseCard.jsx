"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CONSISTENT_REVIEWS } from "@/data/reviews";
import { Lock, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function CourseCard({ course }) {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="w-full bg-vsCard border border-[#007acc] rounded-b-lg rounded-tr-lg p-4 shadow-lg relative z-10">
      <div className="flex items-center justify-between border-b border-vsBorder pb-2.5 mb-3">
        <h3 className="text-lg font-extrabold text-vsText">{course.title}</h3>
        {course.locked ? (
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-2.5 py-1 rounded-full">
            <Lock size={13} /> Locked
          </span>
        ) : (
          <span className="text-xs font-mono text-vsTeal bg-vsBg px-2.5 py-1 rounded border border-vsBorder">
            Active Course
          </span>
        )}
      </div>

      {course.locked ? (
        <div className="py-8 text-center space-y-2">
          <Lock className="mx-auto text-amber-400" size={36} />
          <p className="text-base font-bold text-vsText">
            এই কোর্সটি বর্তমানে লকড (Upcoming) অবস্থায় আছে।
          </p>
          <p className="text-xs text-vsText/70">
            খুব শীঘ্রই আমাদের নতুন ব্যাচের ভর্তি শুরু হবে। আপডেট পেতে হোয়াটসঅ্যাপে যোগাযোগ করুন।
          </p>
        </div>
      ) : (
        <>
          {/* কোর্স মডিউল তালিকা */}
          <div className="mb-4">
            <p className="text-xs uppercase tracking-wider text-[#38bdf8] font-bold mb-2">
              Course Modules:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {course.modules.map((mod) => (
                <li
                  key={mod}
                  className="flex items-center gap-2 text-xs sm:text-sm text-vsText bg-vsBg/70 px-2.5 py-1.5 rounded border border-vsBorder"
                >
                  <CheckCircle2 size={14} className="text-vsTeal shrink-0" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* কোর্স ফি */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-vsBg p-3 rounded-lg border border-vsBorder mb-3">
            <div className="text-xs sm:text-sm font-bold text-vsText">
              Admission Fee: <span className="text-vsTeal">{course.admissionFee}</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-vsText">
              Application Form Fee: <span className="text-[#38bdf8]">{course.formFee}</span>
            </div>
          </div>

          {/* ৩টি স্টুডেন্ট রিভিউ দেখার ড্রপডাউন */}
          {course.hasReviewsDropdown && (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setShowReviews(!showReviews)}
                className="w-full flex items-center justify-between text-xs font-bold bg-vsBg hover:bg-vsBorder/40 text-vsText px-3 py-2 rounded border border-vsBorder transition"
              >
                <span>Student Reviews (3)</span>
                {showReviews ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showReviews && (
                <div className="mt-2 space-y-2 pl-2 border-l-2 border-[#007acc]">
                  {CONSISTENT_REVIEWS.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-vsBg p-2.5 rounded border border-vsBorder text-xs"
                    >
                      <p className="font-bold text-[#38bdf8]">
                        {rev.studentName} ({rev.course})
                      </p>
                      <p className="text-vsText/85 mt-0.5">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Apply Now & More Information বাটন */}
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href="/Admission"
              className="bg-[#007acc] hover:bg-blue-600 text-white text-center font-bold text-xs sm:text-sm py-2.5 rounded-lg shadow transition"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/8801765094092"
              target="_blank"
              rel="noreferrer"
              className="bg-vsBg hover:bg-vsBorder text-vsText text-center font-bold text-xs sm:text-sm py-2.5 rounded-lg border border-vsBorder transition"
            >
              More Information
            </a>
          </div>
        </>
      )}
    </div>
  );
}