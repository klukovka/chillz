import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import BrandsServicesSection from "./components/brands/BrandsServicesSection";
import classes from "./NestedServicesPage.module.css";

export default function BrandsServicesPage() {
  return (
    <WidthDimensionsContainer>
      <div className={classes["nested-services-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>for brands</h1>
        </PinAnimation>
        <BrandsServicesSection />
      </div>
    </WidthDimensionsContainer>
  );
}
