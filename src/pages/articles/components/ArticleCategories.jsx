import { ARTICLE_CATEGORIES } from "../../../data/articles";
import classes from "./ArticleCategories.module.css";
import ArticleCategory from "./ArticleCategory";

export default function ArticleCategories({ selectedCategory }) {
  return (
    <div className={classes.categories}>
      {ARTICLE_CATEGORIES.map((category) => {
        return (
          <ArticleCategory
            key={category}
            category={category}
            isActive={
              selectedCategory === undefined
                ? category === null
                : selectedCategory === category
            }
            isLink
          />
        );
      })}
    </div>
  );
}
