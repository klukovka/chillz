import { Link } from "react-router-dom";
import classes from "./PageBottomLink.module.css";
import RoundedArrow from "./RoundedArrow";

export default function PageBottomLink({ children, to, pink, purple, blue }) {
  return (
    <Link
      to={to}
      target="_blank"
      className={`${classes.footer} ${pink ? classes.pink : ""} ${
        purple ? classes.purple : ""
      } ${blue ? classes.blue : ""}`}
    >
      {children}
      <RoundedArrow className={classes.arrow} />
    </Link>
  );
}
