import { useTranslation } from "react-i18next";
import PageBottomLink from "../../components/PageBottomLink";
import PinAnimation from "../../components/PinAnimation";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import PortfolioCarousel from "./components/PortfolioCarousel";
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
          <PortfolioCarousel />
        </PinAnimation>
        <PinAnimation>
          {/* TODO: Add navigation */}
          <PageBottomLink pink>
            <span>{t("portfolio_page_footer_hightlight1")}</span>
            {t("portfolio_page_footer")}{" "}
            <span>{t("portfolio_page_footer_hightlight2")} </span>
          </PageBottomLink>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
