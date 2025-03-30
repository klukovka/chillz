import { useState } from "react";
import classes from "./WorkflowItem.module.css";

export default function WorkflowItem({ item }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`${classes["workflow-item"]} ${
        active ? classes["active"] : ""
      } ${classes[item.className]}`}
    >
      <h2>{item.title}</h2>
      <h3>{item.subtitle}</h3>
      <p>{item.description}</p>
    </div>
  );
}
