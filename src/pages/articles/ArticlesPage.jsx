import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AllArticlesPage from "./pages/AllArticlesPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import CategoryArticlesPage from "./pages/CategoryArticlesPage";

export default function ArticlesPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const id = searchParams.get("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, id]);

  if (id) {
    return <ArticleDetailsPage id={id} />;
  }

  if (page) {
    return <CategoryArticlesPage urlPage={page} />;
  }

  return <AllArticlesPage />;
}
