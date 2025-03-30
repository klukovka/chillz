import { useTranslation } from "react-i18next";
import AboutFlexContainer from "./AboutFlexContainer";

export default function AboutUsSection() {
  const { t } = useTranslation();
  return (
    <>
      <AboutFlexContainer>
        <h3>{t("who_we_are_title")}</h3>
        <p>{t("who_we_are_subtitle")}</p>
      </AboutFlexContainer>
      <AboutFlexContainer end>
        <h3>
          {t("simplicity_first_title")}{" "}
          <span style={{ color: "#9B4DFF" }}>
            {t("simplicity_hightlight_title")}
          </span>{" "}
          {t("simplicity_last_title")}
        </h3>
        <p>{t("simplicity_subtitle")}</p>
      </AboutFlexContainer>
      <AboutFlexContainer>
        <h3>{t("way_title")}</h3>
        <p>{t("way_subtitle")}</p>
      </AboutFlexContainer>
    </>
  );
}
