import { useTranslation } from "react-i18next";
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

export default function ArticleCategory({
  category,
  isLink,
  isActive,
  className,
}) {
  const { t } = useTranslation();
  let displayText = t("view_all");
  switch (category) {
    case ARTICLE_CATEGORY_AUDIENCE_GROWTH:
      displayText = t("audience_growth");
      break;
    case ARTICLE_CATEGORY_CONTENT_CREATION:
      displayText = t("content_creation");
      break;
    case ARTICLE_CATEGORY_SOCIAL_MEDIA:
      displayText = t("social_media");
      break;
    case ARTICLE_CATEGORY_SEO:
      displayText = t("seo");
      break;
    case ARTICLE_CATEGORY_ANALYTICS:
      displayText = t("analytics");
      break;
    case ARTICLE_CATEGORY_MONETIZATION:
      displayText = t("monetization");
      break;
  }

  const definedClassName =
    className != null
      ? className
      : classes.button +
        " " +
        `${isActive ? classes.active : ""}` +
        " " +
        `${isLink ? "" : classes.disabled}`;

  if (isLink) {
    return (
      <Link
        to={`/articles${category != null ? "/" + category : ""}`}
        className={definedClassName}
      >
        {displayText}
      </Link>
    );
  }

  return <button className={definedClassName}>{displayText}</button>;
}
