import { Link, useLocation } from "react-router-dom";
import classes from "./BreadCrumbs.module.css";
import PinAnimation from "./PinAnimation";
import WidthDimensionsContainer from "./WidthDimensionsContainer";

export default function BreadCrumbs() {
  const location = useLocation();

  const pathCrumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");

  let backAmount = pathCrumbs.length;

  const crumbs = pathCrumbs.map((crumb, index) => {
    let displayText = crumb;

    if (pathCrumbs[0] === "services") {
      if (crumb === "influencers") displayText = "for influ";
      if (crumb === "brands") displayText = "for brands";
    }

    backAmount -= 1;

    return (
      <div className={classes.crumb} key={`${index}${crumb}`}>
        <Link to={-backAmount}>{displayText}</Link>
      </div>
    );
  });

  if (crumbs.length <= 1) return <></>;

  return (
    <WidthDimensionsContainer>
      <PinAnimation>
        <div className={classes.breadcrumbs}>{crumbs}</div>
      </PinAnimation>
    </WidthDimensionsContainer>
  );
}
