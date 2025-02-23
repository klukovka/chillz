import PinAnimation from "../../../components/PinAnimation";
import classes from "./AboutFlexContainer.module.css";

export default function AboutFlexContainer({ children, className }) {
  let containerClass = classes["about-flex-container"];
  if (className) containerClass += " " + className;
  return (
    <PinAnimation>
      <div className={containerClass}>{children}</div>
    </PinAnimation>
  );
}
