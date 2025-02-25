import PinAnimation from "../../../components/PinAnimation";
import classes from "./AboutFlexContainer.module.css";

export default function AboutFlexContainer({ children, end }) {
  let containerClass = classes["about-flex-container"];
  if (end) containerClass += " " + classes["end"];
  return (
    <PinAnimation>
      <div className={containerClass}>{children}</div>
    </PinAnimation>
  );
}
