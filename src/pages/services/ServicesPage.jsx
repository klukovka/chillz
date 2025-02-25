import PinAnimation from "../../components/PinAnimation";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import ServiceClientsSection from "./components/ServiceClientsSection";
import WorkflowSection from "./components/WorkflowSection";
import classes from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <WidthDimensionsContainer>
      <div className={classes["services-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>
            what <span style={{ color: "#EF4B8D" }}>can</span> we do for
          </h1>
        </PinAnimation>
        <ServiceClientsSection />
        <WorkflowSection />
      </div>
    </WidthDimensionsContainer>
  );
}
