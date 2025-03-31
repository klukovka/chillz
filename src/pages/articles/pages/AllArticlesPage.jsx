import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Arrow from "../../../components/Arrow";
import PageBottomLink from "../../../components/PageBottomLink";
import PinAnimation from "../../../components/PinAnimation";
import { ARTICLES } from "../../../data/articles";
import classes from "../ArticlesPage.module.css";
import ArticleCategories from "../components/ArticleCategories";
import ArticlesGrid from "../components/ArticlesGrid";

export default function AllArticlesPage() {
  const { t } = useTranslation();
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
          <span style={{ color: "#7DC8F7" }}>
            {t("articles_page_hightlight_title")}{" "}
          </span>
          {t("articles_page_title")}
        </h1>
      </PinAnimation>
      <PinAnimation>
        <ArticleCategories selectedCategory={category} />
      </PinAnimation>
      <ArticlesGrid articles={articles} category={category} />
      <Link
        to={`/articles${"/" + (category ?? "all")}?page=1`}
        className={classes["dive-into-button"]}
      >
        {t("dive_into")}
        <Arrow fill="white" />
      </Link>
      <PinAnimation>
        {/* TODO: Add navigation */}
        <PageBottomLink purple>
          {t("articles_page_footer_p1")}{" "}
          <span> {t("articles_page_footer_hightlight1")}</span>{" "}
          {t("articles_page_footer_p2")}
          <span> {t("articles_page_footer_hightlight2")}</span>{" "}
          {t("articles_page_footer_p3")}
          <span> </span>
        </PageBottomLink>
      </PinAnimation>
    </div>
  );
}
