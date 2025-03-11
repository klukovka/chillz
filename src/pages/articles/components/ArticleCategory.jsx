import {
  ARTICLE_CATEGORY_ANALYTICS,
  ARTICLE_CATEGORY_AUDIENCE_GROWTH,
  ARTICLE_CATEGORY_CONTENT_CREATION,
  ARTICLE_CATEGORY_MONETIZATION,
  ARTICLE_CATEGORY_SEO,
  ARTICLE_CATEGORY_SOCIAL_MEDIA,
  ARTICLE_CATEGORY_TOOLS,
} from "../../../data/articles";
import classes from "./ArticleCategory.module.css";

export default function ArticleCategory({ category, onClick, isActive }) {
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
    case ARTICLE_CATEGORY_TOOLS:
      displayText = "Tools";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={classes.button + " " + `${isActive ? classes.active : ""}`}
    >
      {displayText}
    </button>
  );
}
