import PinAnimation from "../../../components/PinAnimation";
import { ARTICLES } from "../../../data/articles";
import TrendingArticle from "./TrendingArticle";
import classes from "./TrendingArticlesSection.module.css";

export default function TrendingArticlesSection({ selectedArticle }) {
  let articles = ARTICLES.filter(
    (article) => article.id != selectedArticle.id && article.trending
  );

  if (articles.length > 4) {
    articles = articles.slice(0, 3);
  }
  return (
    <div className={classes.trending}>
      {articles.map((article) => (
        <PinAnimation key={`trending_${article.id}`}>
          <TrendingArticle article={article} />
        </PinAnimation>
      ))}
    </div>
  );
}
