import { useTranslation } from "react-i18next";
import RoundedArrow from "../../../components/RoundedArrow";
import classes from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  const { t } = useTranslation();
  return (
    <div className={classes.subsribe}>
      <h3 className={classes["subsribe-header"]}>
        <span style={{ color: "#9B4DFF" }}>
          {t("subscribe_stay_ahead_first_hightlight")}
        </span>{" "}
        {t("subscribe_stay_ahead_first_label")}{" "}
        <span style={{ color: "#7DC8F7" }}>
          {t("subscribe_stay_ahead_second_hightlight")}
        </span>{" "}
        {t("subscribe_stay_ahead_second_label")}
      </h3>
      <p>{t("your_email")}:</p>
      <div className={classes.control}>
        <input placeholder="crayby@chiillz.com" type="email" />
        <RoundedArrow className={classes["arrow"]} />
      </div>
    </div>
  );
}
