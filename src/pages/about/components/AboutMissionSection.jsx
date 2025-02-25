import { useMediaQuery } from "@mui/material";
import logo from "../../../assets/claw_with_tablet.svg";
import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import AboutFlexContainer from "./AboutFlexContainer";
import classes from "./AboutMissionSection.module.css";

export default function AboutMissionSection() {
  const matches = useMediaQuery("(min-width:850px)");

  return (
    <>
      <div className={classes["about-mission"]}>
        <PinAnimation>
          <img src={logo} alt="Chillz Logo" />
        </PinAnimation>
        <WidthDimensionsContainer>
          <AboutFlexContainer end={!matches}>
            <h3>Our mission?</h3>
            <p>
              No boring corporate talk. No overpromises. Just smart marketing
              that works.
            </p>
          </AboutFlexContainer>
        </WidthDimensionsContainer>
      </div>
      <WidthDimensionsContainer>
        <AboutFlexContainer end>
          <h3 style={matches ? { width: "52%" } : undefined}>
            No fluff, just real, measurable results
          </h3>
          <p style={matches ? { width: "48%" } : undefined}>
            We’re here to cut through the noise, build strategies that make
            sense, and help brands grow—without burnin’ out
          </p>
        </AboutFlexContainer>
      </WidthDimensionsContainer>
    </>
  );
}
