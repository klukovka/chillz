import { NavLink } from "react-router-dom";
import classes from "./ContactUsSegment.module.css";

export default function ContactUsSegment({ children, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        classes["segment-button"] + " " + (isActive ? classes.active : "")
      }
    >
      {children}
    </NavLink>
  );
}
