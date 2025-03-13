import classes from "./ContactUsSubmitButton.module.css";

export default function ContactUsSubmitButton({ isLoading, error, submitted }) {
  return (
    <button
      type="submit"
      className={classes.submit + ` ${error ? classes.error : ""}`}
    >
      {!(submitted || error) && "Submit"}
      {(submitted || error) && (
        <p className={classes.message + ` ${error ? classes.error : ""}`}>
          {isLoading
            ? "🌊Washing up your message..."
            : error
            ? error
            : "🌊Your message just washed up on shore, and Crayby is already scuttling to process it! We’ll be in touch soon⚡"}
        </p>
      )}
    </button>
  );
}
