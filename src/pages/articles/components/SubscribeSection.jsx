import RoundedArrow from "../../../components/RoundedArrow";
import classes from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  return (
    <div className={classes.subsribe}>
      <h3 className={classes["subsribe-header"]}>
        <span style={{ color: "#9B4DFF" }}>Subscribe</span> and{" "}
        <span style={{ color: "#7DC8F7" }}>stay ahead</span> of the tide!
      </h3>
      <p>Your e-mail:</p>
      <div className={classes.control}>
        <input placeholder="crayby@chiillz.com" type="email" />
        <RoundedArrow className={classes["arrow"]} height={29} width={30} />
      </div>
    </div>
  );
}
