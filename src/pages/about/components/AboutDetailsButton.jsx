import RoundedArrow from "../../../components/RoundedArrow";
import classes from "./AboutDetailsButton.module.css";

export default function AboutDetailsButton({ children, primary }) {
  let buttonClass =
    classes["about-details"] + " " + classes[primary ? "primary" : "secondary"];

  let arrowClass = classes[primary ? "primary" : "secondary"];

  return (
    <button className={buttonClass}>
      <div className={classes["content"]}>{children}</div>
      <RoundedArrow className={arrowClass} />
    </button>
  );
}
