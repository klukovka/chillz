import { useState } from "react";
import FAQ from "../../../data/faq.js";
import classes from "./FaqContent.module.css";
import FaqExpandableItem from "./FaqExpandableItem";
import FaqTableOfContent from "./FaqTableOfContent";

export default function FaqContent() {
  const [selectedFAQ, setSelectedFAQ] = useState(FAQ[0]);
  return (
    <div className={classes["content"]}>
      <div className={classes["table-of-content"]}>
        <h3>table of content</h3>
        {FAQ.map((item) => (
          <FaqTableOfContent
            label={item.name}
            key={item.name}
            isActive={item.name === selectedFAQ.name}
            onClick={() => setSelectedFAQ(item)}
          />
        ))}
      </div>
      <div className={classes["faq"]}>
        {selectedFAQ.content.map((item, index) => (
          <FaqExpandableItem
            question={item.question}
            content={item.answer}
            key={`${index}_${item.question}`}
          />
        ))}
      </div>
    </div>
  );
}
