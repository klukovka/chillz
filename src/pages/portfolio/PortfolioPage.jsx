import { NavLink } from "react-router-dom";
import PinAnimation from "../../components/PinAnimation";
import RoundedArrow from "../../components/RoundedArrow";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import { portfolio } from "../../data/portfolio";
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
        <PinAnimation className={classes["carousel"]}>
          <Carousel slidesToShow={5} clickable>
            {portfolio.map((item) => (
              <NavLink key={`portfolio_${item.id}`} to={`${item.id}`}>
                <img src={item.imgUrl} />
              </NavLink>
            ))}
          </Carousel>
        </PinAnimation>
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
