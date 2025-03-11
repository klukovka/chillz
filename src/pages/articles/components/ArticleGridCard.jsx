import { formattedDateDayShortMonthFullYear } from "../../../util/formatting";
import ArticleCategory from "./ArticleCategory";
import classes from "./ArticleGridCard.module.css";

export default function ArticleGridCard({ article, dark }) {
  return (
    <div className={classes.article + " " + `${dark ? classes.dark : ""}`}>
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
    </div>
  );
}
