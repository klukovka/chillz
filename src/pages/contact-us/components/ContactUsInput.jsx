import classes from "./ContactUsInput.module.css";

export default function ContactUsInput({
  label,
  id,
  error,
  textarea,
  ...props
}) {
  return (
    <div className={classes["control"] + " " + `${error ? classes.error : ""}`}>
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea id={id} {...props} />
      ) : (
        <input id={id} {...props} />
      )}
      {error && <p className={classes["control-error"]}>{error}</p>}
    </div>
  );
}
