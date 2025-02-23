import { NavLink } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";

export default function MainNavigationBarItem({ children, end, to }) {
  return (
    <li className={classes["main-nav__item"]}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end={end}
      >
        {children}
      </NavLink>
    </li>
  );
}
