import classes from "./WorkflowItem.module.css";

export default function WorkflowItem({ item }) {
  return (
    <div
      className={
        classes["workflow-item"] +
        " " +
        classes[item.primary ? "primary" : "secondary"]
      }
    >
      <h2 style={item.style}>{item.title}</h2>
      <h3>{item.subtitle}</h3>
      <p>{item.description}</p>
    </div>
  );
}
