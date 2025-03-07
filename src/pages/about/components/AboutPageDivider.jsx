import PinAnimation from "../../../components/PinAnimation";
import classes from "./AboutPageDivider.module.css";

export default function AboutPageDivider({ children, backgroundColor }) {
  return (
    <PinAnimation>
      <div
        style={{
          backgroundColor: backgroundColor,
          padding: "0 2rem",
          marginTop: "2rem",
        }}
      >
        <p className={classes["about-divider-text"]}>{children}</p>
      </div>
    </PinAnimation>
  );
}
