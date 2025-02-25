import { useMediaQuery } from "@mui/material";
import React from "react";
import PinAnimation from "../../../components/PinAnimation";
import classes from "./AboutFlexContainer.module.css";

export default function AboutFlexContainer({ children, end }) {
  const matches = useMediaQuery("(min-width:850px)");
  let containerClass = classes["about-flex-container"];
  if (end) containerClass += " " + classes["end"];

  if (matches) {
    return (
      <PinAnimation>
        <div className={containerClass}>{children}</div>
      </PinAnimation>
    );
  }

  console.log(children);

  return (
    <div className={containerClass}>
      {React.Children.toArray(children).map((child, index) => (
        <PinAnimation key={index}>{child}</PinAnimation>
      ))}
    </div>
  );
}
