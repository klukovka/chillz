import classes from "./FaqTableOfContent.module.css";

export default function FaqTableOfContent({ label, onClick, isActive }) {
  return (
    <div
      className={
        classes["table-of-content"] +
        " " +
        `${isActive ? classes["active"] : ""}`
      }
      onClick={onClick}
    >
      {label}
      <div className={classes["line"]}></div>
    </div>
  );
}
