import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import AboutFlexContainer from "./AboutFlexContainer";

export default function AboutMissionSection() {
  return (
    <>
      <WidthDimensionsContainer>
        <AboutFlexContainer>
          <h3>Our mission ?</h3>
          <p>
            No boring corporate talk. No overpromises. Just smart marketing that
            works.
          </p>
        </AboutFlexContainer>
        <AboutFlexContainer>
          <p style={{ width: "48%" }}>
            We’re here to cut through the noise, build strategies that make
            sense, and help brands grow—without burnin’ out
          </p>
          <h3 style={{ textAlign: "end", width: "52%" }}>
            No fluff, just real, measurable results
          </h3>
        </AboutFlexContainer>
      </WidthDimensionsContainer>
    </>
  );
}
