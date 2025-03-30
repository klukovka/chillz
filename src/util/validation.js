export function isEmail(value, message) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return message || "enter valid email";
  }
}

export function isNotEmpty(value, message) {
  if ((value ?? "").trim() === "") {
    return message || "field required";
  }
}

export function isNotEmptyList(value, message) {
  if ((value ?? []).length === 0)
    return message || "select at least one option";
}
