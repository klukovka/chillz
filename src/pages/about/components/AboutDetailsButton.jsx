import { Link } from "react-router-dom";
import RoundedArrow from "../../../components/RoundedArrow";
import classes from "./AboutDetailsButton.module.css";

export default function AboutDetailsButton({ children, primary, to }) {
  let buttonClass =
    classes["about-details"] + " " + classes[primary ? "primary" : "secondary"];

  let arrowClass = classes[primary ? "primary" : "secondary"];

  return (
    <Link className={buttonClass} target="_blank" to={to}>
      <div className={classes["content"]}>{children}</div>
      <RoundedArrow className={arrowClass} />
    </Link>
  );
}
