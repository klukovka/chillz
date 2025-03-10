import { Outlet } from "react-router-dom";
import PinAnimation from "../../components/PinAnimation";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import ContactUsSegment from "./components/ContactUsSegment";
import classes from "./ContactUsPage.module.css";

export default function ContactUsPage() {
  return (
    <WidthDimensionsContainer>
      <PinAnimation>
        <h1 style={{ textAlign: "center" }}>
          your next <span style={{ color: "#EF4B8D" }}>big move</span> starts
          here!
        </h1>
      </PinAnimation>
      <PinAnimation>
        <div className={classes["tabs"]}>
          <ContactUsSegment to={"influencers"}>influ</ContactUsSegment>
          <ContactUsSegment to={"brands"} end>
            brands
          </ContactUsSegment>
        </div>
      </PinAnimation>
      <PinAnimation>
        <Outlet />
      </PinAnimation>
    </WidthDimensionsContainer>
  );
}
