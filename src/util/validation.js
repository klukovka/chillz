export function isEmail(value) {
  if (!(value ?? "").includes("@")) {
    return "enter valid email";
  }
}

export function isNotEmpty(value) {
  if ((value ?? "").trim() === "") {
    return "field required";
  }
}

export function isNotEmptyList(value) {
  if ((value ?? []).length === 0) return "select at least one option";
}
