import PinAnimation from "../../components/PinAnimation";
import RoundedArrow from "../../components/RoundedArrow";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import FaqContent from "./componens/FaqContent";
import classes from "./FaqPage.module.css";

export default function FaqPage() {
  return (
    <WidthDimensionsContainer>
      <div className={classes["faq-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>any questions?</h1>
          <h1 style={{ textAlign: "center" }}>
            <span style={{ color: "#9B4DFF" }}>we can help you!</span>
          </h1>
        </PinAnimation>
        <PinAnimation>
          <FaqContent />
        </PinAnimation>
        <PinAnimation>
          <h3 className={classes["footer"]}>
            Still have questions? <span>Let’s chat! Drop us a message</span>,
            and we’ll clear things up<span> </span>
            <RoundedArrow className={classes["arrow"]} />
          </h3>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
