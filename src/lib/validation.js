export const BD_PHONE_REGEX = /^01[3-9]\d{8}$/;
export const ALLOWED_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ymail\.com|protonmail\.com|proton\.me)$/i;

export function validateAdmissionForm(data) {
  const errors = {};
  if (!data.firstName?.trim()) errors.firstName = "First Name আবশ্যক।";
  if (!data.lastName?.trim()) errors.lastName = "Last Name আবশ্যক।";
  if (!data.gender) errors.gender = "Gender নির্বাচন করুন।";
  if (!data.dob) errors.dob = "Date of Birth আবশ্যক।";
  if (!data.courseType) errors.courseType = "Course নির্বাচন করুন।";
  if (!BD_PHONE_REGEX.test(data.phone || "")) {
    errors.phone = "সঠিক ১১ ডিজিটের বাংলাদেশি নাম্বার দিন (01XXXXXXXXX)।";
  }
  if (!ALLOWED_EMAIL_REGEX.test(data.email || "")) {
    errors.email = "শুধুমাত্র Gmail, Yahoo Mail অথবা ProtonMail গ্রহণযোগ্য।";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCertificateSearch({ regNo, day, month, year }) {
  const errors = {};
  if (!regNo?.trim()) errors.regNo = "Registration Number দিন।";
  if (!day || !month || !year) errors.date = "সম্পূর্ণ Publish Date (DD, MM, YYYY) নির্বাচন করুন।";
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}