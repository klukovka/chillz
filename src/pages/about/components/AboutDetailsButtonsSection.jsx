import { useTranslation } from "react-i18next";
import PinAnimation from "../../../components/PinAnimation";
import AboutDetailsButton from "./AboutDetailsButton";
import classes from "./AboutDetailsButtonsSection.module.css";

export default function AboutDetailsButtonsSection() {
  const { t } = useTranslation();
  return (
    <PinAnimation>
      <div className={classes["buttons-section"]}>
        <AboutDetailsButton primary>
          {t("about_details_primary_button_first_sentence")}
          <br />
          <span>{t("about_details_primary_button_highlight")} </span>{" "}
          {t("about_details_primary_button_last_sentence")}
        </AboutDetailsButton>
        <AboutDetailsButton>
          {t("about_details_secondary_button_first_sentence")}
          <span> {t("about_details_secondary_button_highlight")}</span>{" "}
          {t("about_details_secondary_button_last_sentence")}
        </AboutDetailsButton>
      </div>
    </PinAnimation>
  );
}
