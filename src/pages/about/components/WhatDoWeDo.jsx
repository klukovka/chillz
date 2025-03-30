import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowWithText from "../../../components/ArrowWithText";
import PinAnimation from "../../../components/PinAnimation";
import CheckServicesButton from "./CheckServicesButton";
import PhysicsContainer from "./PhysicsContainer";
import classes from "./WhatDoWeDo.module.css";

export default function WhatDoWeDo() {
  const { t } = useTranslation();
  const [height, setHeight] = useState(8);
  const ref = useRef(null);

  const updateDimensions = useCallback(() => {
    setHeight(ref.current.clientHeight ?? 8);
  });

  useEffect(() => {
    updateDimensions(ref.current.clientHeight);
  });

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  //TODO: Check size which depends on localizations
  const services = [
    {
      width: 260,
      height: 64,
      text: t("brand_identity"),
      offset: 650,
      fallHeight: 400,
    },
    {
      width: 232,
      height: 64,
      text: t("graphic_design"),
      offset: 500,
      fallHeight: 350,
    },
    {
      width: 186,
      height: 64,
      text: t("visual_content"),
      offset: 350,
      fallHeight: 380,
    },
    {
      width: 218,
      height: 64,
      text: t("smm_strategy"),
      offset: 150,
      fallHeight: 150,
    },
    {
      width: 182,
      height: 64,
      text: t("influ_marketing"),
      offset: 285,
      fallHeight: 280,
    },
    {
      width: 132,
      height: 64,
      text: t("seo_sem"),
      offset: 350,
      fallHeight: 250,
    },
    {
      width: 220,
      height: 64,
      text: t("social_media_optimization"),
      offset: 500,
      fallHeight: 180,
    },
    {
      width: 190,
      height: 64,
      text: t("targeting"),
      offset: 600,
      fallHeight: 200,
    },
    {
      width: 280,
      height: 64,
      text: t("creative_strategy"),
      offset: 600,
      fallHeight: 150,
    },
  ];

  return (
    <div style={{ marginTop: "4rem" }}>
      <PinAnimation>
        <h1>{t("what_do_we_do_title")}</h1>
      </PinAnimation>
      <PinAnimation>
        <div className={classes["what-do-we-do"]} ref={ref}>
          <PhysicsContainer
            className={classes["physics-container"]}
            height={height - 8}
            elements={services}
          />

          <div>
            <p>{t("what_do_we_do_description_p1")}</p>
            <p>
              <p>{t("what_do_we_do_description_p2")}</p>
            </p>
            <div className={classes["arrow-container"]}>
              <div>
                <p>
                  <p>{t("what_do_we_do_description_p3")}</p>
                </p>
                <CheckServicesButton>
                  {t("check_our_services")}
                </CheckServicesButton>
              </div>
              <div className={classes["arrow"]}>
                <ArrowWithText text={t("then")} />
              </div>
            </div>
          </div>
        </div>
      </PinAnimation>
    </div>
  );
}
