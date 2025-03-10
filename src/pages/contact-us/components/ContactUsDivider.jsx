import classes from "./ContactUsDivider.module.css";

export default function ContactUsDivider({ children, bold }) {
  return (
    <div
      className={classes["divider"] + " " + `${bold ? classes["bold"] : ""}`}
    >
      {children}
    </div>
  );
}
