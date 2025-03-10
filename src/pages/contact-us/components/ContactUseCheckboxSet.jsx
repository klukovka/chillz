import classes from "./ContactUseCheckboxSet.module.css";

export default function ContactUsCheckboxSet({ name, label, values, error }) {
  return (
    <fieldset
      className={classes["control"] + " " + `${error ? classes.error : ""}`}
    >
      <legend>{label}</legend>
      <div
        className={
          classes["control-items"] + " " + `${error ? classes.error : ""}`
        }
      >
        {values.map((value) => (
          <div className={classes["control-item"]} key={`${name}_${value.id}`}>
            <input
              type="checkbox"
              id={value.id}
              name={name}
              value={value.value}
            />
            <label htmlFor={value.id}>{value.label}</label>
          </div>
        ))}
      </div>

      {error && <p className={classes["control-error"]}>{error}</p>}
    </fieldset>
  );
}
