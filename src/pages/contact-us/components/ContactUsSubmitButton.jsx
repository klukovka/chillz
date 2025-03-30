import { useTranslation } from "react-i18next";
import classes from "./ContactUsSubmitButton.module.css";

export default function ContactUsSubmitButton({ isLoading, error, submitted }) {
  const { t } = useTranslation();
  return (
    <button
      type="submit"
      className={classes.submit + ` ${error ? classes.error : ""}`}
    >
      {!(submitted || error) && t("submit")}
      {(submitted || error) && (
        <p className={classes.message + ` ${error ? classes.error : ""}`}>
          {isLoading
            ? t("washing_up_your_message")
            : error
            ? error
            : t("message_was_sent")}
        </p>
      )}
    </button>
  );
}
