import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import ArticleCategory from "./ArticleCategory";
import classes from "./TrendingArticle.module.css";

export default function TrendingArticle({ article }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const path =
    location.pathname + (page ? `?page=${page}&` : `?`) + `id=${article.id}`;
  return (
    <NavLink className={classes.article} to={path}>
      <p>{article.title}</p>
      <img src={article.imageUrl} />
      <div className={classes["additional-info"]}>
        <p>
          {t("reading_time")}{" "}
          <span>
            {article.readingTime} {t("min")}.
          </span>
        </p>
        <ArticleCategory category={article.category} />
      </div>
    </NavLink>
  );
}
