import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import PinAnimation from "../../components/PinAnimation";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import ContactUsSegment from "./components/ContactUsSegment";
import classes from "./ContactUsPage.module.css";

export default function ContactUsPage() {
  const { t } = useTranslation();
  return (
    <WidthDimensionsContainer>
      <PinAnimation>
        <h1 style={{ textAlign: "center" }}>
          {t("contact_us_page_title_p1")}{" "}
          <span style={{ color: "#EF4B8D" }}>
            {t("contact_us_page_title_highlight")}
          </span>{" "}
          {t("contact_us_page_title_p2")}
        </h1>
      </PinAnimation>
      <PinAnimation>
        <div className={classes["tabs"]}>
          <ContactUsSegment to={"influencers"}>
            {t("influ").toLowerCase()}
          </ContactUsSegment>
          <ContactUsSegment to={"brands"} end>
            {t("brands").toLowerCase()}
          </ContactUsSegment>
        </div>
      </PinAnimation>
      <PinAnimation>
        <Outlet />
      </PinAnimation>
    </WidthDimensionsContainer>
  );
}
