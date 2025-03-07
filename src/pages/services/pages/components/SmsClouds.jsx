import firstCloud from "../../../../assets/first_cloud.svg";
import secondCloud from "../../../../assets/second_cloud.svg";
import PinAnimation from "../../../../components/PinAnimation";
import classes from "./SmsClouds.module.css";

export default function SmsClouds() {
  //TODO: Add shadows

  return (
    <PinAnimation>
      <div className={classes["sms-container"]}>
        <img src={firstCloud} />
        <img src={secondCloud} />
      </div>
    </PinAnimation>
  );
}
