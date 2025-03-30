import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import PinAnimation from "../../components/PinAnimation";
import RoundedArrow from "../../components/RoundedArrow";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import { portfolio } from "../../data/portfolio";
import Carousel from "./components/Carousel";
import classes from "./PortfolioPage.module.css";

export default function PortfolioPage() {
  const { t } = useTranslation();
  return (
    <WidthDimensionsContainer>
      <div className={classes["portfolio-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>
            {t("portfolio_page_title_p1")}
          </h1>
          <h1 style={{ textAlign: "center" }}>
            {t("portfolio_page_title_p2")}
            <span style={{ color: "#E84E31" }}>
              {t("portfolio_page_title_hightlight")}
            </span>
          </h1>
        </PinAnimation>

        <PinAnimation>
          <p>{t("portfolio_page_subtitle")}</p>
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
            <span>{t("portfolio_page_footer_hightlight1")}</span>
            {t("portfolio_page_footer")}{" "}
            <span>{t("portfolio_page_footer_hightlight2")} </span>
            <RoundedArrow className={classes["arrow"]} />
          </h3>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
