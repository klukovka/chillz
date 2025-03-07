import { useMediaQuery } from "@mui/material";
import React from "react";
import PinAnimation from "../../../../components/PinAnimation";
import ServiceCard from "./ServiceCard";
import classes from "./ServicesGrid.module.css";

export default function ServicesGrid({ services }) {
  const matches = useMediaQuery("(min-width:850px)");
  let containerClass = classes["grid-container"];

  const children = services.map((service) => (
    <ServiceCard service={service} key={service.title} />
  ));

  if (matches) {
    return (
      <PinAnimation>
        <div className={containerClass}>{children}</div>
      </PinAnimation>
    );
  }

  return (
    <div className={containerClass}>
      {React.Children.toArray(children).map((child, index) => (
        <PinAnimation key={index}>{child}</PinAnimation>
      ))}
    </div>
  );
}
