import { Link, useLocation } from "react-router-dom";
import {
  ARTICLE_CATEGORY_ANALYTICS,
  ARTICLE_CATEGORY_AUDIENCE_GROWTH,
  ARTICLE_CATEGORY_CONTENT_CREATION,
  ARTICLE_CATEGORY_MONETIZATION,
  ARTICLE_CATEGORY_SEO,
  ARTICLE_CATEGORY_SOCIAL_MEDIA,
} from "../data/articles";
import classes from "./BreadCrumbs.module.css";
import PinAnimation from "./PinAnimation";
import WidthDimensionsContainer from "./WidthDimensionsContainer";

export default function BreadCrumbs() {
  const location = useLocation();

  const pathCrumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");

  let backAmount = pathCrumbs.length;
  let showBreadCrumbs = true;

  const crumbs = pathCrumbs.map((crumb, index) => {
    let displayText = crumb;

    if (pathCrumbs[0] === "services") {
      if (crumb === "influencers") displayText = "for influ";
      if (crumb === "brands") displayText = "for brands";
    } else if (pathCrumbs[0] == "articles") {
      displayText = "articles";
      switch (crumb) {
        case ARTICLE_CATEGORY_AUDIENCE_GROWTH:
          displayText = "audience growth";
          break;
        case ARTICLE_CATEGORY_CONTENT_CREATION:
          displayText = "content creation";
          break;
        case ARTICLE_CATEGORY_SOCIAL_MEDIA:
          displayText = "social media";
          break;
        case ARTICLE_CATEGORY_SEO:
          displayText = "seo";
          break;
        case ARTICLE_CATEGORY_ANALYTICS:
          displayText = "analytics";
          break;
        case ARTICLE_CATEGORY_MONETIZATION:
          displayText = "monetization";
          break;
        case "all":
          displayText = "all";
          break;
      }
    }

    backAmount -= 1;

    return (
      <div className={classes.crumb} key={`${index}${crumb}`}>
        <Link to={-backAmount}>{displayText}</Link>
      </div>
    );
  });

  if (crumbs.length <= 1 || !showBreadCrumbs) return <></>;

  return (
    <WidthDimensionsContainer>
      <PinAnimation>
        <div className={classes.breadcrumbs}>{crumbs}</div>
      </PinAnimation>
    </WidthDimensionsContainer>
  );
}
