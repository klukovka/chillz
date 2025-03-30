import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/claw_with_tablet.svg";
import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import AboutFlexContainer from "./AboutFlexContainer";
import classes from "./AboutMissionSection.module.css";

export default function AboutMissionSection() {
  const matches = useMediaQuery("(min-width:850px)");
  const { t } = useTranslation();
  return (
    <>
      <div className={classes["about-mission"]}>
        <PinAnimation>
          <img src={logo} alt="Chillz Logo" />
        </PinAnimation>
        <WidthDimensionsContainer>
          <AboutFlexContainer end={!matches}>
            <h3>{t("our_mission_title")}</h3>
            <p>{t("our_mission_subtitle")}</p>
          </AboutFlexContainer>
        </WidthDimensionsContainer>
      </div>
      <WidthDimensionsContainer>
        <AboutFlexContainer end>
          <h3 style={matches ? { width: "52%" } : undefined}>
            {t("measurable_results_title")}
          </h3>
          <p style={matches ? { width: "48%" } : undefined}>
            {t("measurable_results_subtitle")}
          </p>
        </AboutFlexContainer>
      </WidthDimensionsContainer>
    </>
  );
}
