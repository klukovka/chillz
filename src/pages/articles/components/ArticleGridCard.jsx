import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { formattedDateDayShortMonthFullYear } from "../../../util/formatting";
import ArticleCategory from "./ArticleCategory";
import classes from "./ArticleGridCard.module.css";

export default function ArticleGridCard({ article }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const path =
    location.pathname +
    (location.search.length == 0 ? `?` : `${location.search}&`) +
    `id=${article.id}`;
  return (
    <NavLink className={classes.article + " "} to={path}>
      <div className={classes.header}>
        {formattedDateDayShortMonthFullYear(
          article.date,
          i18n.resolvedLanguage
        )}
        <ArticleCategory
          category={article.category}
          className={classes["article-category"]}
        />
      </div>
      <img src={article.imageUrl} />
      <h2>{article.title}</h2>
      <p>{article.shortDescription}</p>
      <div className={classes.footer}>
        <p>
          <span>{t("reading_time")}: </span>
          {article.readingTime} {t("min")}.
        </p>
        <p>
          <span>{t("author")}: </span>
          {article.author}
        </p>
      </div>
    </NavLink>
  );
}
