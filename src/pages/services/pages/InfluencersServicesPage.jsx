import { useTranslation } from "react-i18next";
import ArrowWithText from "../../../components/ArrowWithText";
import PinAnimation from "../../../components/PinAnimation";
import RoundedArrow from "../../../components/RoundedArrow";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import InfluencersServicesSection from "./components/brands/InfluencersServicesSection";
import SmsClouds from "./components/SmsClouds";
import classes from "./NestedServicesPage.module.css";

export default function InfluencersServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <WidthDimensionsContainer>
        <div className={classes["nested-services-page"]}>
          <PinAnimation>
            <h1 style={{ textAlign: "center" }}>
              {t("influencers_page_title")}
            </h1>
          </PinAnimation>
          <InfluencersServicesSection />
          <SmsClouds />
        </div>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer maxWidth={1200}>
        <PinAnimation>
          <div className={classes["arrow-container"]}>
            <p>{t("influencers_page_subtitle")}</p>
            <div className={classes["arrow"] + " " + classes["influencers"]}>
              <ArrowWithText />
            </div>
          </div>
        </PinAnimation>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer>
        <PinAnimation>
          <h3 className={classes["footer"] + " " + classes["influencers"]}>
            <span>{t("influencers_page_footer_highlight1")}</span>{" "}
            {t("influencers_page_footer_p1")}{" "}
            <span>{t("influencers_page_footer_highlight2")}</span>{" "}
            {t("influencers_page_footer_p2")}{" "}
            <span>{t("influencers_page_footer_highlight3")} </span>
            <RoundedArrow className={classes["arrow-influencers"]} />
          </h3>
        </PinAnimation>
      </WidthDimensionsContainer>
    </>
  );
}
