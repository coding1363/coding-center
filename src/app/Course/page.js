import React from "react";
import CourseTabs from "@/components/CourseTabs";
import CourseSlider from "@/components/CourseSlider";

export default function CoursePage() {
  return (
    <div className="py-3">
      <div className="px-3 mb-2">
        <h1 className="text-xl font-extrabold text-[#38bdf8]">Our Courses</h1>
        <p className="text-xs text-vsText/75">
          যেকোনো কোর্স ট্যাবে ক্লিক করে মডিউল ও ফি দেখে নিন
        </p>
      </div>
      <CourseTabs />
      <CourseSlider />
    </div>
  );
}