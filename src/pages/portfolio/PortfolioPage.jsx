import PinAnimation from "../../components/PinAnimation";
import RoundedArrow from "../../components/RoundedArrow";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import Carousel from "./components/Carousel";
import classes from "./PortfolioPage.module.css";

export default function PortfolioPage() {
  return (
    <WidthDimensionsContainer>
      <div className={classes["portfolio-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>creative</h1>
          <h1 style={{ textAlign: "center" }}>
            cr<span style={{ color: "#E84E31" }}>hub</span>
          </h1>
        </PinAnimation>

        <PinAnimation>
          <p>
            Take a peek into our creative world. From bold strategies to
            seamless execution, we craft solutions that drive real results
          </p>
        </PinAnimation>
        <Carousel>
          {[...Array(77)].map((_, index) => (
            <div key={index}>
              <div>
                {" "}
                <h3>{index}</h3>
              </div>
            </div>
          ))}
        </Carousel>
        <PinAnimation>
          <h3 className={classes["footer"]}>
            🦀<span>Drop us a line</span>, and we'll hook you uo with a{" "}
            <span>crab-solutely brilliant plan! </span>
            <RoundedArrow className={classes["arrow"]} />
          </h3>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
