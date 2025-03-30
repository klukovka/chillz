import { useTranslation } from "react-i18next";
import craby from "../../../assets/craby_sushi.svg";
import AboutFlexContainer from "./AboutFlexContainer";
import classes from "./SushiCraby.module.css";

export default function SushiCraby() {
  const { t } = useTranslation();
  return (
    <AboutFlexContainer className={classes["sushi-craby-section"]}>
      <section className={classes["craby-section"]}>
        <h2>
          <span style={{ color: "#FFD766" }}>{t("fresh_ideas_highlight")}</span>{" "}
          {t("fresh_ideas_title")}
        </h2>
        <h2>
          <span style={{ color: "#9B4DFF" }}>{t("real_impact_highlight")}</span>{" "}
          {t("real_impact_title")}
        </h2>
        <h2>
          <span style={{ color: "#EF4B8D" }}>{t("zero_stress_highlight")}</span>{" "}
          {t("zero_stress_title")}
        </h2>
      </section>
      <img src={craby} alt="Chillz Logo" className={classes["rotated-craby"]} />
    </AboutFlexContainer>
  );
}
