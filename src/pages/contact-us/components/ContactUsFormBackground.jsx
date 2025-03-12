import formCodeHorizontal from "../../../assets/form_code_horizontal.svg";
import formCodeVerical from "../../../assets/form_code_vertical.svg";
import classes from "./ContactUsFormBackground.module.css";

export default function ContactUsFormBackground({ children }) {
  return (
    <div className={classes["stack"]}>
      <div className={classes["form-background"]}>
        <div className={classes["background"]}>{children}</div>
        <div className={classes["personal-data"]}>
          <p>We will not spam or share your personal data.</p>
          <div className={classes["code-horizontal"]}>
            <img src={formCodeHorizontal} />
          </div>
        </div>
      </div>
      <div className={classes["code-vertical"]}>
        <img src={formCodeVerical} />
      </div>
    </div>
  );
}
