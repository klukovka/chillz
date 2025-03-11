import { Link, useParams } from "react-router-dom";
import Arrow from "../../../components/Arrow";
import PinAnimation from "../../../components/PinAnimation";
import RoundedArrow from "../../../components/RoundedArrow";
import { ARTICLES } from "../../../data/articles";
import classes from "../ArticlesPage.module.css";
import ArticleCategories from "../components/ArticleCategories";
import ArticlesGrid from "../components/ArticlesGrid";

export default function AllArticlesPage() {
  const { category } = useParams();
  let articles = ARTICLES.filter((article) =>
    category != null ? article.category === category : article
  );

  if (articles.length > 5) {
    articles = articles.slice(0, 4);
  }

  return (
    <div className={classes["articles-page"]}>
      <PinAnimation>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: "#7DC8F7" }}>stay ahead </span>of the social
          tide
        </h1>
      </PinAnimation>
      <PinAnimation>
        <ArticleCategories selectedCategory={category} />
      </PinAnimation>
      <ArticlesGrid articles={articles} />
      <Link
        to={`/articles${"/" + (category ?? "all")}?page=1`}
        className={classes["dive-into-button"]}
      >
        Dive into
        <Arrow fill="white" />
      </Link>
      <PinAnimation>
        <h3 className={classes["footer"]}>
          🌊Want the <span>freshest</span> marketing tips?
          <span>Subscribe</span> and stay ahead of the tide!<span> </span>
          <RoundedArrow className={classes["arrow"]} />
        </h3>
      </PinAnimation>
    </div>
  );
}
