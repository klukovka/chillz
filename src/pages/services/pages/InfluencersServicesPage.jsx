import ArrowWithText from "../../../components/ArrowWithText";
import PinAnimation from "../../../components/PinAnimation";
import RoundedArrow from "../../../components/RoundedArrow";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import InfluencersServicesSection from "./components/brands/InfluencersServicesSection";
import SmsClouds from "./components/SmsClouds";
import classes from "./NestedServicesPage.module.css";

export default function InfluencersServicesPage() {
  return (
    <>
      <WidthDimensionsContainer>
        <div className={classes["nested-services-page"]}>
          <PinAnimation>
            <h1 style={{ textAlign: "center" }}>for influencers</h1>
          </PinAnimation>
          <InfluencersServicesSection />
          <SmsClouds />
        </div>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer maxWidth={1200}>
        <PinAnimation>
          <div className={classes["arrow-container"]}>
            <p>
              *Yes, you can work with us on a full-service basis or choose
              individual services based on what you need most, so
            </p>
            <div className={classes["arrow"] + " " + classes["influencers"]}>
              <ArrowWithText />
            </div>
          </div>
        </PinAnimation>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer>
        <PinAnimation>
          <h3 className={classes["footer"] + " " + classes["influencers"]}>
            <span>Let’s</span> optimize, strategize,{" "}
            <span>grow & glow together!</span> Tell us what you need, and we’ll
            craft the <span>perfect plan </span>
            <RoundedArrow className={classes["arrow-influencers"]} />
          </h3>
        </PinAnimation>
      </WidthDimensionsContainer>
    </>
  );
}
