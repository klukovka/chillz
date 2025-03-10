import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [validateOnChange, setValidateOnChange] = useState(false);

  const errorText =
    validateOnChange && validationFn ? validationFn(enteredValue) : null;

  function handleChange(event) {
    setEnteredValue(event.target.value);
  }

  function onSubmit() {
    setValidateOnChange(true);
  }

  return {
    value: enteredValue,
    handleChange,
    errorText,
    onSubmit,
    validateOnChange,
  };
}
