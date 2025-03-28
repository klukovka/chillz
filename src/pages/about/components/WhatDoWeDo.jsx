import { useCallback, useEffect, useRef, useState } from "react";
import ArrowWithText from "../../../components/ArrowWithText";
import PinAnimation from "../../../components/PinAnimation";
import CheckServicesButton from "./CheckServicesButton";
import PhysicsContainer from "./PhysicsContainer";
import classes from "./WhatDoWeDo.module.css";

export default function WhatDoWeDo() {
  const [height, setHeight] = useState(8);
  const ref = useRef(null);

  const updateDimensions = useCallback(() => {
    setHeight(ref.current.clientHeight ?? 8);
  });

  useEffect(() => {
    updateDimensions(ref.current.clientHeight);
  });

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const services = [
    {
      width: 260,
      height: 64,
      text: "brand identity",
      offset: 650,
      fallHeight: 400,
    },
    {
      width: 232,
      height: 64,
      text: "graphic design",
      offset: 500,
      fallHeight: 350,
    },
    {
      width: 186,
      height: 64,
      text: "visual\ncontent",
      offset: 350,
      fallHeight: 380,
    },
    {
      width: 218,
      height: 64,
      text: "smm\nstrategy",
      offset: 150,
      fallHeight: 150,
    },
    {
      width: 182,
      height: 64,
      text: "influ\nmarketing",
      offset: 285,
      fallHeight: 280,
    },
    {
      width: 132,
      height: 64,
      text: "SEO/SEM",
      offset: 350,
      fallHeight: 250,
    },
    {
      width: 220,
      height: 64,
      text: "social media\noptimization",
      offset: 500,
      fallHeight: 180,
    },
    {
      width: 190,
      height: 64,
      text: "targeting",
      offset: 600,
      fallHeight: 200,
    },
    {
      width: 280,
      height: 64,
      text: "creative strategy",
      offset: 600,
      fallHeight: 150,
    },
  ];

  return (
    <div style={{ marginTop: "4rem" }}>
      <PinAnimation>
        <h1>what do we do?</h1>
      </PinAnimation>
      <PinAnimation>
        <div className={classes["what-do-we-do"]} ref={ref}>
          <PhysicsContainer
            className={classes["physics-container"]}
            height={height - 8}
            elements={services}
          />

          <div>
            <p>
              We craft strategies that click, stick, and actually make an
              impact. Whether you’re buildin’ a brand, growin’ an audience, or
              just tryna get your message out there—we got you.
            </p>
            <p>
              From brand identity to content optimization, engagement, and
              beyond—you name it, we handle it, so you can focus on what you
              love.
            </p>
            <div className={classes["arrow-container"]}>
              <div>
                <p>Ready to turn up the volume on your brand?</p>
                <CheckServicesButton>Check our services</CheckServicesButton>
              </div>
              <div className={classes["arrow"]}>
                <ArrowWithText text="THEN" />
              </div>
            </div>
          </div>
        </div>
      </PinAnimation>
    </div>
  );
}
