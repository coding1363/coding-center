const SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
  "https://script.google.com/macros/s/AKfycbwQA9CF5x-YRQ9JCvYcjfBUrYbuwRJrYuMpOqtZCcJjWNznIS01sgvKeYa8bOTmWG3WIg/exec";

export async function verifyCertificateFromSheet({ regNo, day, month, year }) {
  try {
    const publishDate = `${year}-${month}-${day}`;
    const url = `${SCRIPT_URL}?action=verify&regNo=${encodeURIComponent(
      regNo.trim()
    )}&day=${encodeURIComponent(day)}&month=${encodeURIComponent(
      month
    )}&year=${encodeURIComponent(year)}&publishDate=${encodeURIComponent(publishDate)}`;

    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    if (data && (data.found || data.studentName || data.StudentName)) {
      return {
        found: true,
        student: {
          regNo: data.regNo || data.RegistrationNumber || regNo,
          publishDate: data.publishDate || data.PublishDate || `${day}/${month}/${year}`,
          studentName: data.studentName || data.StudentName,
          courseName: data.courseName || data.CourseName,
          grade: data.grade || data.Grade,
        },
      };
    }
    return { found: false };
  } catch (error) {
    console.error("Certificate Verification Error:", error);
    return { found: false, error: true };
  }
}

export async function submitAdmissionToSheet(formData) {
  try {
    const payload = {
      action: "admission",
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({ success: true }));
    return { success: true, result };
  } catch (error) {
    console.error("Admission Submit Error:", error);
    return { success: false, error };
  }
}