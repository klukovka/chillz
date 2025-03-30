import { useTranslation } from "react-i18next";
import PinAnimation from "../../components/PinAnimation";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";
import AboutDetailsButtonsSection from "./components/AboutDetailsButtonsSection";
import AboutMissionSection from "./components/AboutMissionSection";
import AboutPageDivider from "./components/AboutPageDivider";
import AboutUsSection from "./components/AboutUsSection";
import ImageWave from "./components/ImageWave";
import SushiCraby from "./components/SushiCraby";
import WhatDoWeDo from "./components/WhatDoWeDo";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <WidthDimensionsContainer>
        <PinAnimation>
          <ImageWave src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" />
        </PinAnimation>
        <AboutUsSection />
      </WidthDimensionsContainer>
      <AboutPageDivider backgroundColor="#EF4B8D">
        {t("about_divider_1")}
      </AboutPageDivider>
      <AboutMissionSection />
      <AboutPageDivider backgroundColor="#7DC8F7">
        {t("about_divider_2")}
      </AboutPageDivider>
      <WidthDimensionsContainer>
        <SushiCraby />
        <WhatDoWeDo />
        <AboutDetailsButtonsSection />
      </WidthDimensionsContainer>
    </>
  );
}
