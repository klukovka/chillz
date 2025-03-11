import { CATEGORIES } from "../../../data/articles";
import classes from "./ArticleCategories.module.css";
import ArticleCategory from "./ArticleCategory";

export default function ArticleCategories({ selectedCategory, onSelect }) {
  return (
    <div className={classes.categories}>
      {CATEGORIES.map((category) => (
        <ArticleCategory
          key={category}
          category={category}
          isActive={selectedCategory === category}
          onClick={() => onSelect(category)}
        />
      ))}
    </div>
  );
}
