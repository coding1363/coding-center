"use client";
import React, { useState } from "react";
import { validateCertificateSearch } from "@/lib/validation";
import { verifyCertificateFromSheet } from "@/lib/googleSheets";
import { getPlaceholderSvg } from "@/lib/utils";

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
const MONTHS = [
  { value: "01", label: "01 - January" },
  { value: "02", label: "02 - February" },
  { value: "03", label: "03 - March" },
  { value: "04", label: "04 - April" },
  { value: "05", label: "05 - May" },
  { value: "06", label: "06 - June" },
  { value: "07", label: "07 - July" },
  { value: "08", label: "08 - August" },
  { value: "09", label: "09 - September" },
  { value: "10", label: "10 - October" },
  { value: "11", label: "11 - November" },
  { value: "12", label: "12 - December" },
];
const YEARS = ["2025", "2026", "2027"];

export default function VerificationPage() {
  const [regNo, setRegNo] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [verifiedData, setVerifiedData] = useState(null);
  const [showFailModal, setShowFailModal] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    const check = validateCertificateSearch({ regNo, day, month, year });
    if (!check.isValid) {
      setErrors(check.errors);
      return;
    }
    setErrors({});
    setLoading(true);

    const res = await verifyCertificateFromSheet({ regNo, day, month, year });
    setLoading(false);

    if (res.found) {
      setVerifiedData(res.student);
    } else {
      setVerifiedData(null);
      setShowFailModal(true);
    }
  };

  const handleReset = () => {
    setVerifiedData(null);
    setRegNo("");
    setDay("");
    setMonth("");
    setYear("");
    setErrors({});
  };

  return (
    <div className="px-3 py-4 space-y-4">
      {/* Institute Branding Header */}
      <div className="bg-vsCard border border-vsBorder rounded-xl p-4 text-center space-y-1 print:border-black">
        <img
          src="/images/logo.png"
          alt="CODING CENTER"
          onError={(e) => {
            e.currentTarget.src = getPlaceholderSvg("C|>", 80, 80);
          }}
          className="w-14 h-14 mx-auto object-contain"
        />
        <h1 className="text-xl font-black tracking-wider text-vsText">
          CODING CENTER
        </h1>
        <p className="text-xs text-vsText/80">
          Chini Masjid, Saidpur, Nilphamari | Phone: 01765094092
        </p>
        <h2 className="text-base font-extrabold text-[#22c55e] pt-1">
          Check Your Certificate
        </h2>
      </div>

      {/* Search Form (Hidden on Print) */}
      {!verifiedData && (
        <form
          onSubmit={handleVerify}
          className="bg-vsCard border border-vsBorder rounded-xl p-4 space-y-3.5 print:hidden"
        >
          <div>
            <label className="block text-xs font-bold mb-1">
              Registration Number *
            </label>
            <input
              type="text"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter Registration Number"
              className="w-full bg-vsBg border border-vsBorder focus:border-[#007acc] rounded-lg px-3 py-2 text-sm outline-none"
            />
            {errors.regNo && (
              <p className="text-xs text-red-400 mt-1">{errors.regNo}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold mb-1">
              Publish Date (DD / MM / YYYY) *
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="bg-vsBg border border-vsBorder rounded-lg px-2 py-2 text-xs outline-none"
              >
                <option value="">DD</option>
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="bg-vsBg border border-vsBorder rounded-lg px-2 py-2 text-xs outline-none"
              >
                <option value="">MM</option>
                {MONTHS.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-vsBg border border-vsBorder rounded-lg px-2 py-2 text-xs outline-none"
              >
                <option value="">YYYY</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            {errors.date && (
              <p className="text-xs text-red-400 mt-1">{errors.date}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#22c55e] hover:bg-green-600 text-white font-extrabold py-2.5 rounded-lg shadow transition"
          >
            {loading ? "Verifying..." : "Check Certificate"}
          </button>
        </form>
      )}

      {/* Verified Certificate Profile View */}
      {verifiedData && (
        <div className="bg-vsCard border-2 border-[#22c55e] rounded-xl p-5 space-y-4 shadow-xl print:border-black print:bg-white print:text-black">
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm bg-vsBg/70 p-3 rounded-lg border border-vsBorder print:bg-gray-100">
            <p>
              <strong>Reg. No:</strong> {verifiedData.regNo}
            </p>
            <p>
              <strong>Publish Date:</strong> {verifiedData.publishDate}
            </p>
            <p>
              <strong>Student Name:</strong> {verifiedData.studentName}
            </p>
            <p>
              <strong>Course Name:</strong> {verifiedData.courseName}
            </p>
            <p className="col-span-2">
              <strong>Grade:</strong>{" "}
              <span className="text-[#22c55e] font-extrabold">
                {verifiedData.grade}
              </span>
            </p>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-justify">
            This is to certify that Mr./Ms.{" "}
            <strong>{verifiedData.studentName}</strong> has successfully
            completed the <strong>{verifiedData.courseName}</strong> course from
            CODING CENTER and passed the final assessment with a{" "}
            <strong>{verifiedData.grade}</strong> grade on{" "}
            <strong>{verifiedData.publishDate}</strong>. During the course
            period, the student successfully completed all required theoretical
            and practical training as prescribed by the institute. This
            statement is issued as official confirmation of the student’s
            successful course completion and academic achievement. We wish
            him/her every success in future education and professional career.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="bg-[#007acc] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg"
            >
              Print
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Custom Error Popup Modal */}
      {showFailModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-vsCard border-2 border-red-500 rounded-xl max-w-sm w-full p-5 text-center space-y-3 shadow-2xl">
            <h3 className="text-lg font-extrabold text-red-400">
              Verification Failed!
            </h3>
            <p className="text-xs sm:text-sm text-vsText/90 leading-relaxed">
              Verification Failed! No student record was found matching this
              Registration Number and Publish Date. Please double-check your
              information and try again, or contact the CODING CENTER
              administration office for assistance.
            </p>
            <button
              type="button"
              onClick={() => setShowFailModal(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}