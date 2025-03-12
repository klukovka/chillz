import BreadCrumbs from "../../../components/BreadCrumbs";
import { ARTICLES } from "../../../data/articles";
import { formattedDateDayShortMonthFullYear } from "../../../util/formatting";
import ArticleCategory from "../components/ArticleCategory";
import classes from "./ArticleDetailsPage.module.css";

function scrollToElement(id) {
  const element = document.getElementById(id);
  const offset = 120; // Adjust the offset as needed

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export default function ArticleDetailsPage({ id }) {
  const article = ARTICLES.find((article) => article.id == id);

  const articleRefs = article.content.map((content, index) => {
    const id = `${content.title}${index}`;
    const number = (index + 1).toString().padStart(2, "0");
    return { ...content, number, id };
  });

  return (
    <>
      <BreadCrumbs />
      <ArticleCategory category={article.category} />
      <h1 className={classes.header}>{article.title}</h1>
      <div className={classes["additional-elements"]}>
        <p>
          <span>Reading time </span>
          {article.readingTime} min.
        </p>
        <p>
          <span>Author </span>
          {article.author}
        </p>
        <p>
          <span>Last updated </span>
          {formattedDateDayShortMonthFullYear(article.date)}
        </p>
      </div>
      <img src={article.imageUrl} className={classes.article} />
      <div className={classes["content-container"]}>
        <div className={classes["article-content"]}>
          <h2>Table of contents</h2>
          <div className={classes["table-of-contents"]}>
            {articleRefs.map((content) => {
              return (
                <div
                  className={classes["table-of-contents-item"]}
                  key={content.id}
                >
                  <p>{content.number}</p>
                  <a onClick={() => scrollToElement(content.id)}>
                    {content.title}
                  </a>
                </div>
              );
            })}
          </div>
          <div className={classes["article-text"]}>
            <p>{article.shortDescription}</p>
            {articleRefs.map((content) => {
              return (
                <>
                  <h1 id={content.id}>{content.title}</h1>
                  {content.description.map((text, index) => (
                    <p key={content.id + index}>{text}</p>
                  ))}
                </>
              );
            })}
          </div>
        </div>
        <div className={classes["trending"]}>
          <h2>Trending</h2>
        </div>
      </div>
    </>
  );
}
