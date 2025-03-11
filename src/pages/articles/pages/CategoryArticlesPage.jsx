import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { ARTICLES } from "../../../data/articles";
import ArticlesGrid from "../components/ArticlesGrid";

export default function CategoryArticlesPage({ page }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  const params = useParams();
  const category = params.category;
  let articles = ARTICLES.filter((article) =>
    category != "all" ? article.category === category : article
  );

  return (
    <>
      <BreadCrumbs />
      <ArticlesGrid articles={articles} />
    </>
  );
}
