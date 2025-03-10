import formCode from "../../../assets/form_code.svg";
import classes from "./ContactUsFormBackground.module.css";

export default function ContactUsFormBackground({ children }) {
  return (
    <div className={classes["stack"]}>
      <div className={classes["form-background"]}>
        <div className={classes["background"]}>{children}</div>
        <div className={classes["personal-data"]}>
          <p>We will not spam or share your personal data.</p>
        </div>
      </div>
      <div className={classes["code"]}>
        <img src={formCode} />
      </div>
    </div>
  );
}
