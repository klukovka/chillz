import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import classes from "./NestedServicesPage.module.css";

export default function InfluencersServicesPage() {
  return (
    <WidthDimensionsContainer>
      <div className={classes["nested-services-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>for influencers</h1>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
