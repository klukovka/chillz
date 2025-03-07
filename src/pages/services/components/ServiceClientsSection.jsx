import { useMediaQuery } from "@mui/material";
import PinAnimation from "../../../components/PinAnimation";
import ServiceClientCard from "./ServiceClientCard";
import classes from "./ServiceClientsSection.module.css";

export default function ServiceClientsSection() {
  const matches = useMediaQuery("(min-width:850px)");

  const influ = (
    <ServiceClientCard
      className={classes["influ-background"]}
      client={{
        title: "influ",
        description:
          "Your socials should be a space where you create, not stress. We help you grow your platforms without the overwhelm, so you can focus on becoming the next big thing",
        to: "influencers",
      }}
    />
  );
  const brands = (
    <ServiceClientCard
      className={classes["brands-background"]}
      client={{
        title: "brands",
        description:
          "Your business needs a digital presence that converts, not just exists. We help brands build, optimize, and scale their social media channels to drive real business results",
        to: "brands",
      }}
    />
  );

  if (matches) {
    return (
      <PinAnimation>
        <section className={classes["service-clients-section"]}>
          {influ}
          {brands}
        </section>
      </PinAnimation>
    );
  }

  return (
    <section className={classes["service-clients-section"]}>
      <PinAnimation> {influ}</PinAnimation>
      <PinAnimation> {brands}</PinAnimation>
    </section>
  );
}
