import PinAnimation from "../../../components/PinAnimation";
import ArticleGridCard from "./ArticleGridCard";
import classes from "./ArticlesGrid.module.css";

export default function ArticlesGrid({ articles, category }) {
  return (
    <div className={classes.grid}>
      {articles.map((article) => (
        <PinAnimation
          key={`${category}_${article.id}`}
          className={classes.card}
        >
          <ArticleGridCard article={article} />
        </PinAnimation>
      ))}
    </div>
  );
}
