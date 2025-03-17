import { NavLink } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";

export default function MainNavigationBarItem({ children, end, to, id }) {
  return (
    <li className={classes["main-nav__item"]} id={id}>
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
