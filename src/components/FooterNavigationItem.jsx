import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

export default function FooterNavigationBarItem({ children, to }) {
  return (
    <li className={classes["footer-nav__item"]}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
