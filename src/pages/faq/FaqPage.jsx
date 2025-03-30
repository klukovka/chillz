import { useTranslation } from "react-i18next";
import PinAnimation from "../../components/PinAnimation";
import RoundedArrow from "../../components/RoundedArrow";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import FaqContent from "./componens/FaqContent";
import classes from "./FaqPage.module.css";

export default function FaqPage() {
  const { t } = useTranslation();
  return (
    <WidthDimensionsContainer>
      <div className={classes["faq-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>{t("faq_page_title")}</h1>
          <h1 style={{ textAlign: "center" }}>
            <span style={{ color: "#9B4DFF" }}>
              {t("faq_page_title_hightlight")}
            </span>
          </h1>
        </PinAnimation>
        <PinAnimation>
          <FaqContent />
        </PinAnimation>
        <PinAnimation>
          <h3 className={classes["footer"]}>
            {t("faq_page_footer_p1")}{" "}
            <span>{t("faq_page_footer_hightlight")}</span>
            {t("faq_page_footer_p2")}
            <span> </span>
            <RoundedArrow className={classes["arrow"]} />
          </h3>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
