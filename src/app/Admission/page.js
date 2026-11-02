"use client";
import React, { useState } from "react";
import { validateAdmissionForm } from "@/lib/validation";
import { submitAdmissionToSheet } from "@/lib/googleSheets";

export default function AdmissionPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    courseType: "Basic Computer",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedMsg, setSubmittedMsg] = useState("");
  const [showPreviewMenu, setShowPreviewMenu] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = validateAdmissionForm(form);
    if (!check.isValid) {
      setErrors(check.errors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const res = await submitAdmissionToSheet(form);
    setSubmitting(false);

    if (res.success) {
      setSubmittedMsg("আপনার অ্যাডমিশন ফর্ম সফলভাবে জমা হয়েছে!");
    }
  };

  const inputClass =
    "w-full bg-vsBg border border-vsBorder rounded-lg px-3 py-2 text-sm text-vsText outline-none transition-all focus:border-[#38bdf8] focus:shadow-[0_0_12px_rgba(56,189,248,0.45)]";

  return (
    <div className="px-3 py-4 space-y-4">
      <div className="bg-vsCard border border-vsBorder rounded-xl p-4 text-center">
        <h1 className="text-xl font-extrabold text-[#38bdf8]">
          Coding Center Admission Form
        </h1>
        <p className="text-xs text-vsText/75">
          সঠিক তথ্য দিয়ে আপনার পছন্দের কোর্সে আবেদন করুন
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-vsCard border border-vsBorder rounded-xl p-4 space-y-3.5 print:border-black"
      >
        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-bold mb-1">First Name *</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={inputClass}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-[11px] text-red-400 mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold mb-1">Last Name *</label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={inputClass}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-[11px] text-red-400 mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-bold mb-1">Gender *</label>
            <select
              value={form.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className={inputClass}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {errors.gender && (
              <p className="text-[11px] text-red-400 mt-1">{errors.gender}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold mb-1">Date of Birth *</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              className={inputClass}
            />
            {errors.dob && (
              <p className="text-[11px] text-red-400 mt-1">{errors.dob}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold mb-1">Course Type *</label>
          <select
            value={form.courseType}
            onChange={(e) => handleChange("courseType", e.target.value)}
            className={inputClass}
          >
            <option value="Basic Computer">Basic Computer</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Web Development">Web Development</option>
            <option value="Dropshipping" disabled>
              Dropshipping (Locked)
            </option>
            <option value="Video Editing" disabled>
              Video Editing (Locked)
            </option>
            <option value="3D Animation" disabled>
              3D Animation (Locked)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold mb-1">
            Phone Number (01XXXXXXXXX) *
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="017XXXXXXXX"
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold mb-1">
            Email (Gmail, Yahoo, or ProtonMail) *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="example@gmail.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        {submittedMsg && (
          <p className="text-xs font-bold text-[#22c55e] bg-green-950/40 p-2.5 rounded border border-[#22c55e]">
            {submittedMsg}
          </p>
        )}

        {/* Submit & Preview Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2 print:hidden">
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#007acc] hover:bg-blue-600 text-white font-extrabold py-2.5 rounded-lg shadow"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPreviewMenu(!showPreviewMenu)}
              className="w-full bg-vsBg hover:bg-vsBorder text-vsText font-extrabold py-2.5 rounded-lg border border-vsBorder"
            >
              Preview
            </button>

            {showPreviewMenu && (
              <div className="absolute bottom-12 right-0 w-full bg-vsCard border border-[#007acc] rounded-lg shadow-xl overflow-hidden z-30">
                <button
                  type="button"
                  onClick={() => {
                    setShowPreviewMenu(false);
                    window.print();
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-[#007acc] hover:text-white border-b border-vsBorder"
                >
                  🖨️ Print
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPreviewMenu(false);
                    setShowSummaryModal(true);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-[#007acc] hover:text-white"
                >
                  👁️ Preview
                </button>
              </div>
            )}
          </div>
        </div>
      </form>

      {/* Application Summary Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-vsCard border border-[#38bdf8] rounded-xl max-w-sm w-full p-5 space-y-3">
            <h3 className="text-base font-extrabold text-[#38bdf8]">
              Application Preview Summary
            </h3>
            <div className="text-xs space-y-1.5 bg-vsBg p-3 rounded border border-vsBorder">
              <p><strong>Name:</strong> {form.firstName} {form.lastName}</p>
              <p><strong>Gender:</strong> {form.gender}</p>
              <p><strong>Date of Birth:</strong> {form.dob}</p>
              <p><strong>Course:</strong> {form.courseType}</p>
              <p><strong>Phone:</strong> {form.phone}</p>
              <p><strong>Email:</strong> {form.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-[#007acc] text-white text-xs font-bold py-2 rounded"
              >
                Print
              </button>
              <button
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="bg-vsBg border border-vsBorder text-vsText text-xs font-bold py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}