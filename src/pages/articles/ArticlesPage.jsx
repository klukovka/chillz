import { useSearchParams } from "react-router-dom";
import AllArticlesPage from "./pages/AllArticlesPage";
import CategoryArticlesPage from "./pages/CategoryArticlesPage";

export default function ArticlesPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  if (page) {
    return <CategoryArticlesPage page={page} />;
  }

  return <AllArticlesPage />;
}
