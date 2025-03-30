import { useTranslation } from "react-i18next";
import PinAnimation from "../../components/PinAnimation";
import RoundedArrow from "../../components/RoundedArrow";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import ServiceClientsSection from "./components/ServiceClientsSection";
import WorkflowSection from "./components/WorkflowSection";
import classes from "./ServicesPage.module.css";

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <WidthDimensionsContainer>
      <div className={classes["services-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>
            {t("services_page_title_p1")}{" "}
            <span style={{ color: "#EF4B8D" }}>
              {t("services_page_title_highlight")}
            </span>{" "}
            {t("services_page_title_p2")}
          </h1>
        </PinAnimation>
        <ServiceClientsSection />
        <WorkflowSection />
        <PinAnimation>
          <h3 className={classes["footer"]}>
            {t("services_page_footer_p1")}{" "}
            <span>{t("services_page_footer_highlight")}</span>{" "}
            {t("services_page_footer_p2")}
            <span> </span>
            <RoundedArrow className={classes["arrow"]} />
          </h3>
        </PinAnimation>
      </div>
    </WidthDimensionsContainer>
  );
}
