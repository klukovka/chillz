import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [validateOnChange, setValidateOnChange] = useState(false);
  const [errorText, setErrorText] = useState(null);

  function handleChange(event) {
    setEnteredValue(event.target.value);
    if (validateOnChange && validationFn) {
      setErrorText(validationFn(event.target.value));
    }
  }

  function onSubmit() {
    setValidateOnChange(true);
    const error = validationFn ? validationFn(enteredValue) : null;
    setErrorText(error);
    return !error; // Return true if valid, false if there's an error
  }

  return {
    value: enteredValue,
    handleChange,
    errorText,
    onSubmit,
    validateOnChange,
  };
}
