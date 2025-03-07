import classes from "./ServiceCard.module.css";

export default function ServiceCard({ service, className }) {
  return (
    <div className={classes["service-card"] + " " + className}>
      <h3 className={classes["service-card-title"]}>{service.title}</h3>
      <p className={classes["service-card-description"]}>
        {service.description}
      </p>
    </div>
  );
}
