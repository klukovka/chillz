import ArticleGridCard from "./ArticleGridCard";
import classes from "./ArticlesGrid.module.css";

export default function ArticlesGrid({ articles }) {
  return (
    <div className={classes.grid}>
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={classes.card + " " + `${index == 1 ? classes.dark : ""}`}
        >
          <ArticleGridCard article={article} dark={index == 1} />
        </div>
      ))}
    </div>
  );
}
