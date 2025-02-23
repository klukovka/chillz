import Arrow from "../../../components/Arrow";
import classes from "./CheckServicesButton.module.css";
export default function CheckServicesButton({ children }) {
  return (
    <button className={classes["button"]}>
      <div>
        {children}
        <Arrow fill="black" />
      </div>
    </button>
  );
}
