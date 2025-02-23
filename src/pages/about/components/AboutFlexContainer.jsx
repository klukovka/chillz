import classes from "./AboutFlexContainer.module.css";

export default function AboutFlexContainer({ children }) {
  return <div className={classes["about-fex-container"]}>{children}</div>;
}
