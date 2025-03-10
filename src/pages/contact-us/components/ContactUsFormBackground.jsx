import classes from "./ContactUsFormBackground.module.css";

export default function ContactUsFormBackground({ children }) {
  return (
    <div className={classes["form-background"]}>
      <div className={classes["background"]}>{children}</div>
      <div className={classes["personal-data"]}>
        <p>We will not spam or share your personal data.</p>
      </div>
    </div>
  );
}
