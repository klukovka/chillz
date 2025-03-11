import { Link } from "react-router-dom";
import {
  ARTICLE_CATEGORY_ANALYTICS,
  ARTICLE_CATEGORY_AUDIENCE_GROWTH,
  ARTICLE_CATEGORY_CONTENT_CREATION,
  ARTICLE_CATEGORY_MONETIZATION,
  ARTICLE_CATEGORY_SEO,
  ARTICLE_CATEGORY_SOCIAL_MEDIA,
} from "../../../data/articles";
import classes from "./ArticleCategory.module.css";

export default function ArticleCategory({ category, isLink, isActive, dark }) {
  let displayText = "View All";
  switch (category) {
    case ARTICLE_CATEGORY_AUDIENCE_GROWTH:
      displayText = "Audience Growth";
      break;
    case ARTICLE_CATEGORY_CONTENT_CREATION:
      displayText = "Content Creation";
      break;
    case ARTICLE_CATEGORY_SOCIAL_MEDIA:
      displayText = "Social Media";
      break;
    case ARTICLE_CATEGORY_SEO:
      displayText = "SEO";
      break;
    case ARTICLE_CATEGORY_ANALYTICS:
      displayText = "Analytics";
      break;
    case ARTICLE_CATEGORY_MONETIZATION:
      displayText = "Monetization";
      break;
  }

  const className =
    classes.button +
    " " +
    `${isActive ? classes.active : dark ? classes.dark : ""}` +
    " " +
    `${isLink ? "" : classes.disabled}`;

  if (isLink) {
    return (
      <Link
        to={`/articles${category != null ? "/" + category : ""}`}
        className={className}
      >
        {displayText}
      </Link>
    );
  }

  return <button className={className}>{displayText}</button>;
}
