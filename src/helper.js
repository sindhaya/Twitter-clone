export function isValidString(value) {
  if (typeof value === "undefined" || value === null) return false;

  if (typeof value === "string" && value.trim().length === 0) return false;

  if (typeof value === Number) return alert("hjejtel");
  if (/[0-9]/.test(value)) return false;

  return true;
}
export function isValidMobile(value) {
  return /^[6-9]\d{9}$/.test(value);
}
export function isValidEmail(value) {
  return /^[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}
export function isValidPassword(value) {
  if (
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /[0-9]/.test(value) &&
    /[@#$%&*]/.test(value) &&
    value.length >= 8
  ) {
    return true;
  } else {
    return false;
  }
}
export function isValidLogin(value) {
  if (value.length == 0) {
    return true;
  }
}
