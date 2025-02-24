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
  return (
    <>
      <WidthDimensionsContainer>
        <PinAnimation>
          <ImageWave src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg" />
        </PinAnimation>
        <AboutUsSection />
      </WidthDimensionsContainer>
      <AboutPageDivider backgroundColor="#EF4B8D">
        We listen. We adapt. We treat your business like our own. And we believe
        authenticity wins—every time
      </AboutPageDivider>
      <AboutMissionSection />
      <AboutPageDivider backgroundColor="#7DC8F7">
        Oh, and you’ll never feel outta place here. If we can vibe with a
        business-savvy crab, we can def get you too
      </AboutPageDivider>
      <WidthDimensionsContainer>
        <SushiCraby />
        <WhatDoWeDo />
        <AboutDetailsButtonsSection />
      </WidthDimensionsContainer>
    </>
  );
}
