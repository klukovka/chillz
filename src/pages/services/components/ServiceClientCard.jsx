import { NavLink } from "react-router-dom";
import Arrow from "../../../components/Arrow";
import classes from "./ServiceClientCard.module.css";

export default function ServiceClientCard({ client, className }) {
  return (
    <div className={classes["service-client-card"] + " " + className}>
      <h3 className={classes["service-client-card-title"]}>{client.title}</h3>
      <p className={classes["service-client-card-description"]}>
        {client.description}
      </p>
      <NavLink to={client.to} className={classes["service-client-card-button"]}>
        Dive into
        <Arrow fill="black" />
      </NavLink>
    </div>
  );
}
