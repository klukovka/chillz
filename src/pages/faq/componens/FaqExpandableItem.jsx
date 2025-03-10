import { useState } from "react";
import styles from "./FaqExpandableItem.module.css";

const FaqExpandableItem = ({ question, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={() => setIsExpanded(!isExpanded)}>
        <span
          className={`${styles.icon} ${isExpanded ? styles.minus : ""}`}
        ></span>
        <span className={styles.question}>{question}</span>
      </div>

      <div
        className={`${styles.contentWrapper} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <div className={styles.content}>{content}</div>
      </div>

      <div className={styles.divider}></div>
    </div>
  );
};

export default FaqExpandableItem;
