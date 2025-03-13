import classes from "./ContactUsSubmitMovingButton.module.css";

export default function ContactUsSubmitMovingButton({
  isLoading,
  error,
  moved,
}) {
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
          ? "🌊Washing up your message..."
          : error
          ? error
          : "🌊Your message just washed up on shore, and Crayby is already scuttling to process it! We’ll be in touch soon⚡"}
      </p>
      <button className={classes.slider + ` ${moved ? classes.moved : ""}`}>
        submit
      </button>
    </div>
  );
}
