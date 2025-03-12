import { useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./ContactUsDivider.module.css";

export default function ContactUsDivider({ children, bold }) {
  const matches = useMediaQuery("(min-width:1020px)");

  if (matches) {
    return (
      <div
        className={classes["divider"] + " " + `${bold ? classes["bold"] : ""}`}
      >
        {children}
      </div>
    );
  }

  return (
    <>
      {React.Children.toArray(children).map((child, index) => (
        <div
          key={`ContactUsDivider${index}`}
          className={
            classes["divider"] +
            " " +
            `${bold && index == 0 ? classes["bold"] : ""}`
          }
        >
          {child}
        </div>
      ))}
    </>
  );
}
