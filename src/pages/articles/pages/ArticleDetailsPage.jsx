import BreadCrumbs from "../../../components/BreadCrumbs";
import PinAnimation from "../../../components/PinAnimation";
import { ARTICLES } from "../../../data/articles";
import { formattedDateDayShortMonthFullYear } from "../../../util/formatting";
import ArticleCategory from "../components/ArticleCategory";
import SubscribeSection from "../components/SubscribeSection";
import TrendingArticlesSection from "../components/TrendingArticlesSection";
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
      <PinAnimation>
        <ArticleCategory category={article.category} />
      </PinAnimation>
      <PinAnimation>
        <h1 className={classes.header}>{article.title}</h1>
      </PinAnimation>
      <PinAnimation>
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
      </PinAnimation>
      <PinAnimation>
        <img src={article.imageUrl} className={classes.article} />
      </PinAnimation>

      <div className={classes["content-container"]}>
        <div className={classes["article-content"]}>
          <PinAnimation>
            <h2>Table of contents</h2>
          </PinAnimation>
          <PinAnimation>
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
          </PinAnimation>
          <div className={classes["article-text"]}>
            <PinAnimation>
              <p>{article.shortDescription}</p>
            </PinAnimation>
            {articleRefs.map((content) => {
              return (
                <>
                  <PinAnimation id={content.id} key={`text_${content.id}`}>
                    <h1>{content.title}</h1>
                  </PinAnimation>
                  {content.description.map((text, index) => (
                    <PinAnimation key={content.id + index}>
                      <p>{text}</p>
                    </PinAnimation>
                  ))}
                </>
              );
            })}
          </div>
        </div>
        <div className={classes["trending"]}>
          <PinAnimation>
            <h2>Trending</h2>
          </PinAnimation>
          <TrendingArticlesSection selectedArticle={article} />
          <PinAnimation>
            <SubscribeSection />
          </PinAnimation>
        </div>
      </div>
    </>
  );
}
