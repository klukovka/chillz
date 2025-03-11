import classes from "./ArticlesGrid.module.css";

export default function ArticlesGrid({ articles }) {
  return (
    <div className={classes.grid}>
      {articles.map((article) => (
        <div key={article.id} className={classes.card}>
          {article.title}
        </div>
      ))}
    </div>
  );
}
