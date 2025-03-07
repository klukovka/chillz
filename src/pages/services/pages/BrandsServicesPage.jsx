import ArrowWithText from "../../../components/ArrowWithText";
import PinAnimation from "../../../components/PinAnimation";
import RoundedArrow from "../../../components/RoundedArrow";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import BrandsServicesSection from "./components/brands/BrandsServicesSection";
import SmsClounds from "./components/SmsClouds";
import classes from "./NestedServicesPage.module.css";

export default function BrandsServicesPage() {
  return (
    <>
      <WidthDimensionsContainer>
        <div className={classes["nested-services-page"]}>
          <PinAnimation>
            <h1 style={{ textAlign: "center" }}>for brands</h1>
          </PinAnimation>
          <BrandsServicesSection />
          <SmsClounds />
        </div>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer maxWidth={1200}>
        <PinAnimation>
          <div className={classes["arrow-container"]}>
            <p>
              *Yes, you can work with us on a full-service basis or choose
              individual services based on what you need most, so
            </p>
            <div className={classes["arrow"] + " " + classes["brands"]}>
              <ArrowWithText />
            </div>
          </div>
        </PinAnimation>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer>
        <PinAnimation>
          <h3 className={classes["footer"] + " " + classes["brands"]}>
            <span>Let’s </span>make waves and <span> turn your </span> online
            <span> presence into real impact!</span> Tell us what you need, and
            we’ll craft <span>the perfect plan </span>
            <RoundedArrow className={classes["arrow-brands"]} />
          </h3>
        </PinAnimation>
      </WidthDimensionsContainer>
    </>
  );
}
