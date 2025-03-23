import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  ARTICLE_CATEGORY_ANALYTICS,
  ARTICLE_CATEGORY_AUDIENCE_GROWTH,
  ARTICLE_CATEGORY_CONTENT_CREATION,
  ARTICLE_CATEGORY_MONETIZATION,
  ARTICLE_CATEGORY_SEO,
  ARTICLE_CATEGORY_SOCIAL_MEDIA,
  ARTICLES,
} from "../data/articles";

import { portfolio } from "../data/portfolio";
import classes from "./BreadCrumbs.module.css";
import PinAnimation from "./PinAnimation";
import WidthDimensionsContainer from "./WidthDimensionsContainer";

export default function BreadCrumbs() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathCrumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");

  const crumbs = [];

  for (let index = 0; index < pathCrumbs.length; index++) {
    const crumb = pathCrumbs[index];
    let displayText = crumb;

    if (pathCrumbs[0] === "services") {
      if (crumb === "influencers") displayText = "for influ";
      if (crumb === "brands") displayText = "for brands";
      crumbs.push(displayText);
    } else if (pathCrumbs[0] == "portfolio") {
      const portfolioItem = portfolio.find((item) => item.id == crumb);
      if (portfolioItem) displayText = portfolioItem.name;
      crumbs.push(displayText);
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

      crumbs.push(displayText);
    }
  }

  const page = searchParams.get("page");
  const id = searchParams.get("id");

  if (pathCrumbs[0] == "articles" && id) {
    const article = ARTICLES.find((article) => article.id == id).title;
    if (page) {
      crumbs.push(article);
    } else {
      if (crumbs.length > 1) crumbs.pop();
      crumbs.push(article);
    }
  }

  if (crumbs.length <= 1) return <></>;

  let backAmount = crumbs.length;

  return (
    <WidthDimensionsContainer>
      <PinAnimation>
        <div className={classes.breadcrumbs}>
          {crumbs.map((crumb, index) => {
            backAmount -= 1;
            let to;
            if (pathCrumbs[0] == "articles" && page) {
              if (index === 0) to = location.pathname.replaceAll("/all", "");
              if (index === 1) to = `${location.pathname}?page=${page}`;
            } else {
              to = -backAmount;
            }

            return (
              <div className={classes.crumb} key={`${index}${crumb}`}>
                <Link to={to}>{crumb}</Link>
              </div>
            );
          })}
        </div>
      </PinAnimation>
    </WidthDimensionsContainer>
  );
}
