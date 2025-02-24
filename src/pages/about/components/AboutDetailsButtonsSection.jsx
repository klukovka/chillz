import PinAnimation from "../../../components/PinAnimation";
import AboutDetailsButton from "./AboutDetailsButton";
import classes from "./AboutDetailsButtonsSection.module.css";

export default function AboutDetailsButtonsSection() {
  return (
    <PinAnimation>
      <div className={classes["buttons-section"]}>
        <AboutDetailsButton primary>
          <div>See what we’ve clawed up! 🦀</div>
          <div>
            <span>Dive into</span> our work and get inspired.
          </div>
        </AboutDetailsButton>
        <AboutDetailsButton>
          🌊Fresh marketing bites from the content ocean!
          <span> Grab ‘em</span> before they swim away!
        </AboutDetailsButton>
      </div>
    </PinAnimation>
  );
}
