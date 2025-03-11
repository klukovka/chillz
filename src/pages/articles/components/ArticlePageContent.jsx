import { useState } from "react";
import { ARTICLES } from "../../../data/articles";
import ArticleCategories from "./ArticleCategories";
import ArticlesGrid from "./ArticlesGrid";

export default function ArticlePageContent() {
  const [category, setCaterory] = useState(null);
  let articles = ARTICLES.filter((article) =>
    category !== null ? article.category === category : article
  );

  if (articles.length > 5) {
    articles = articles.slice(0, 4);
  }

  return (
    <>
      <ArticleCategories selectedCategory={category} onSelect={setCaterory} />
      <ArticlesGrid articles={articles} />
    </>
  );
}
