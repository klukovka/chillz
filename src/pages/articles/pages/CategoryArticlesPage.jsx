import { useParams } from "react-router-dom";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import { ARTICLE_ALL, ARTICLES } from "../../../data/articles";
import ArticlesGrid from "../components/ArticlesGrid";

export default function CategoryArticlesPage() {
  const params = useParams();
  const category = params.category;
  let articles = ARTICLES.filter((article) =>
    category !== ARTICLE_ALL ? article.category === category : article
  );

  return (
    <WidthDimensionsContainer>
      <ArticlesGrid articles={articles} />
    </WidthDimensionsContainer>
  );
}
