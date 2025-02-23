import PinAnimation from "../../../components/PinAnimation";
import CheckServicesButton from "./CheckServicesButton";
import PhysicsContainer from "./PhysicsContainer";
import classes from "./WhatDoWeDo.module.css";

export default function WhatDoWeDo() {
  return (
    <div style={{ marginTop: "4rem" }}>
      <PinAnimation>
        <h1>what do we do?</h1>
      </PinAnimation>
      <PinAnimation>
        <div className={classes["what-do-we-do"]}>
          <PhysicsContainer
            className={classes["physics-container"]}
            height={classes["what-do-we-do"].height}
            elements={[
              {
                width: 260,
                height: 64,
                text: "brand identity",
                offset: 650,
                fallHeight: 300,
              },
              {
                width: 232,
                height: 64,
                text: "graphic design",
                offset: 500,
                fallHeight: 250,
              },
              {
                width: 186,
                height: 64,
                text: "visual\ncontent",
                offset: 350,
                fallHeight: 280,
              },
              {
                width: 218,
                height: 64,
                text: "smm\nstrategy",
                offset: 120,
                fallHeight: 50,
              },
              {
                width: 182,
                height: 64,
                text: "influ\nmarketing",
                offset: 285,
                fallHeight: 80,
              },
              {
                width: 132,
                height: 64,
                text: "SEO/SEM",
                offset: 350,
                fallHeight: 150,
              },
              {
                width: 220,
                height: 64,
                text: "social media\noptimization",
                offset: 500,
                fallHeight: 80,
              },
              {
                width: 190,
                height: 64,
                text: "targeting",
                offset: 600,
                fallHeight: 100,
              },
              {
                width: 280,
                height: 64,
                text: "creative strategy",
                offset: 660,
                fallHeight: 50,
              },
            ]}
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
            <p>Ready to turn up the volume on your brand?</p>
            <CheckServicesButton>Check our services</CheckServicesButton>
          </div>
        </div>
      </PinAnimation>
    </div>
  );
}
