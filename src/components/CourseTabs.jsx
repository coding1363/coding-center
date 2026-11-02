"use client";
import React, { useState } from "react";
import { COURSES_DATA } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function CourseTabs() {
  const [activeCourseId, setActiveCourseId] = useState(COURSES_DATA[0].id);
  const activeCourse =
    COURSES_DATA.find((c) => c.id === activeCourseId) || COURSES_DATA[0];

  return (
    <section className="w-full px-3 mt-4">
      {/* পাশাপাশি কোর্স বার (Folder Tabs) */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 items-end">
        {COURSES_DATA.map((course) => {
          const isActive = course.id === activeCourseId;
          return (
            <button
              key={course.id}
              type="button"
              onClick={() => setActiveCourseId(course.id)}
              className={`text-[11px] sm:text-xs font-bold px-2 py-2.5 text-center transition-all truncate ${
                isActive
                  ? "bg-vsCard text-[#38bdf8] border-t-2 border-l border-r border-[#007acc] rounded-t-lg pb-3 -mb-[1px] z-20 shadow-[0_-4px_12px_rgba(0,122,204,0.25)]"
                  : "bg-vsBg text-vsText/80 border border-vsBorder rounded-md mb-1 hover:border-[#007acc]"
              }`}
            >
              {course.shortLabel}
            </button>
          );
        })}
      </div>

      {/* ফোল্ডার ট্যাবের সাথে জোড়া লাগানো Course Information বক্স */}
      <CourseCard course={activeCourse} />
    </section>
  );
}