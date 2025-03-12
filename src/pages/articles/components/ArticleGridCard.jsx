import { NavLink, useLocation } from "react-router-dom";
import { formattedDateDayShortMonthFullYear } from "../../../util/formatting";
import ArticleCategory from "./ArticleCategory";
import classes from "./ArticleGridCard.module.css";

export default function ArticleGridCard({ article, dark }) {
  const location = useLocation();
  const path =
    location.pathname +
    (location.search.length == 0 ? `?` : `${location.search}&`) +
    `id=${article.id}`;
  return (
    <NavLink
      className={classes.article + " " + `${dark ? classes.dark : ""}`}
      to={path}
    >
      <div className={classes.header}>
        {formattedDateDayShortMonthFullYear(article.date)}
        <ArticleCategory category={article.category} dark={dark} />
      </div>
      <img src={article.imageUrl} />
      <h2>{article.title}</h2>
      <p>{article.shortDescription}</p>
      <div className={classes.footer}>
        <p>
          <span>Reading Time: </span>
          {article.readingTime} min.
        </p>
        <p>
          <span>Author: </span>
          {article.author}
        </p>
      </div>
    </NavLink>
  );
}
