import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import PinAnimation from "../../../components/PinAnimation";
import ServiceClientCard from "./ServiceClientCard";
import classes from "./ServiceClientsSection.module.css";

export default function ServiceClientsSection() {
  const { t } = useTranslation();
  const matches = useMediaQuery("(min-width:850px)");

  const influ = (
    <ServiceClientCard
      className={classes["influ-background"]}
      client={{
        title: t("influ").toLowerCase(),
        description: t("influ_service_description"),
        to: "influencers",
      }}
    />
  );
  const brands = (
    <ServiceClientCard
      className={classes["brands-background"]}
      client={{
        title: t("brands").toLowerCase(),
        description: t("brands_service_description"),
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
