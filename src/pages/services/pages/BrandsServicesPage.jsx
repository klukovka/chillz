import { useTranslation } from "react-i18next";
import ArrowWithText from "../../../components/ArrowWithText";
import PageBottomLink from "../../../components/PageBottomLink";
import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import BrandsServicesSection from "./components/brands/BrandsServicesSection";
import SmsClounds from "./components/SmsClouds";
import classes from "./NestedServicesPage.module.css";

export default function BrandsServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <WidthDimensionsContainer>
        <div className={classes["nested-services-page"]}>
          <PinAnimation>
            <h1 style={{ textAlign: "center" }}>{t("brands_page_title")}</h1>
          </PinAnimation>
          <BrandsServicesSection />
          <SmsClounds />
        </div>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer maxWidth={1200}>
        <PinAnimation>
          <div className={classes["arrow-container"]}>
            <p>{t("brands_page_subtitle")}</p>
            <div className={classes["arrow"] + " " + classes["brands"]}>
              <ArrowWithText />
            </div>
          </div>
        </PinAnimation>
      </WidthDimensionsContainer>
      <WidthDimensionsContainer>
        <PinAnimation>
          <PageBottomLink blue to="/contact-us/brands">
            <span>{t("brands_page_footer_highlight1")} </span>
            {t("brands_page_footer_p1")}{" "}
            <span> {t("brands_page_footer_highlight2")} </span>{" "}
            {t("brands_page_footer_p2")}
            <span> {t("brands_page_footer_highlight3")}</span>{" "}
            {t("brands_page_footer_p3")}{" "}
            <span>{t("brands_page_footer_highlight4")} </span>
          </PageBottomLink>
        </PinAnimation>
      </WidthDimensionsContainer>
    </>
  );
}
