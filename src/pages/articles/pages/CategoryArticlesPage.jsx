import { Pagination, PaginationItem } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { ARTICLES } from "../../../data/articles";
import classes from "../ArticlesPage.module.css";
import ArticlesGrid from "../components/ArticlesGrid";

export default function CategoryArticlesPage({ urlPage }) {
  const page = parseInt(urlPage, 10);
  const params = useParams();
  const category = params.category;
  const size = 10;
  let articles = ARTICLES.filter((article) =>
    category != "all" ? article.category === category : article
  );
  const pagesAmount = Math.ceil(articles.length / size);
  articles = articles.slice((page - 1) * size, page * size);
  return (
    <>
      <BreadCrumbs />
      <div className={classes["articles-page"]}>
        <ArticlesGrid articles={articles} />
        <Pagination
          page={page}
          count={pagesAmount}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/articles/${category}${`?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </>
  );
}
