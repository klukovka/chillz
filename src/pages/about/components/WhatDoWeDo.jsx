import { useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import animationData from "../../../assets/services_lottie.json";
import ArrowWithText from "../../../components/ArrowWithText";
import PinAnimation from "../../../components/PinAnimation";
import CheckServicesButton from "./CheckServicesButton";
import classes from "./WhatDoWeDo.module.css";

export default function WhatDoWeDo() {
  const { t } = useTranslation();
  const [height, setHeight] = useState(20);
  const ref = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const matches = useMediaQuery("(min-width:700px)");

  const updateDimensions = useCallback(() => {
    setHeight(ref.current?.clientHeight ?? 20);
  });

  useEffect(() => {
    updateDimensions();
  });

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    //TODO: Use different animations for different localization
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMax meet",
    },
  };

  const bottom = matches ? 1.25 : 0;

  return (
    <div style={{ marginTop: "4rem" }}>
      <PinAnimation>
        <h1>{t("what_do_we_do_title")}</h1>
      </PinAnimation>
      <PinAnimation
        onVisibilityChanged={(value) => {
          setIsPaused(!value);
        }}
      >
        <div className={classes["what-do-we-do"]} ref={ref}>
          <Lottie
            options={defaultOptions}
            isPaused={isCompleted || isPaused}
            speed={1.5}
            style={{
              position: "absolute",
              right: "0.25rem",
              bottom: `-${bottom}rem`,
              width: "calc(100% - 1.25rem)",
              maxWidth: "900px",
              height: `calc(${height}px + ${bottom}rem)`,
            }}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => setIsCompleted(true),
              },
            ]}
          />

          <div>
            <p>{t("what_do_we_do_description_p1")}</p>
            <p>{t("what_do_we_do_description_p2")}</p>
            <div className={classes["arrow-container"]}>
              <div>
                <p>{t("what_do_we_do_description_p3")}</p>
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
