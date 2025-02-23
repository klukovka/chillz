import PinAnimation from "../../../components/PinAnimation";
import PhysicsContainer from "./PhysicsContainer";
import classes from "./WhatDoWeDo.module.css";

export default function WhatDoWeDo() {
  return (
    <div style={{ marginTop: "4rem" }}>
      <PinAnimation>
        <h1>what do we do?</h1>
      </PinAnimation>
      <PinAnimation>
        <div className={classes["physics-container"]}>
          <p>
            We craft strategies that click, stick, and actually make an impact.
            Whether you’re buildin’ a brand, growin’ an audience, or just tryna
            get your message out there—we got you.
          </p>
          <p>
            From brand identity to content optimization, engagement, and
            beyond—you name it, we handle it, so you can focus on what you love.
          </p>
          <p>Ready to turn up the volume on your brand?</p>
          <PhysicsContainer />
        </div>
      </PinAnimation>
    </div>
  );
}
