import classes from "./ContactUseCheckboxSet.module.css";

export default function ContactUsCheckboxSet({
  name,
  label,
  items,
  error,
  value,
  onChange,
}) {
  return (
    <fieldset
      className={classes["control"] + " " + `${error ? classes.error : ""}`}
      onChange={(event) => {
        const changedValue = event.target.value;
        let newValue = value.filter((item) => item !== changedValue);
        if (newValue.length === value.length) {
          newValue.push(changedValue);
        }
        onChange(newValue);
      }}
    >
      <legend>{label}</legend>
      <div
        className={
          classes["control-items"] + " " + `${error ? classes.error : ""}`
        }
      >
        {items.map((value) => (
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
