import { useTranslation } from "react-i18next";
import classes from "./ContactUsSubmitMovingButton.module.css";

export default function ContactUsSubmitMovingButton({
  isLoading,
  error,
  moved,
}) {
  const { t } = useTranslation();
  return (
    <div className={classes.track + ` ${error ? classes.error : ""}`}>
      <p
        className={
          classes.message +
          ` ${moved || error ? classes.visible : ""}` +
          ` ${error ? classes.error : ""}`
        }
      >
        {isLoading
          ? t("washing_up_your_message")
          : error
          ? error
          : t("message_was_sent")}
      </p>
      <button
        className={classes.slider + ` ${moved ? classes.moved : ""}`}
        type="submit"
      >
        {t("submit").toLowerCase()}
      </button>
    </div>
  );
}
