import classes from "./MainNavigationBar.module.css";

//TODO: Implement localization and animation
export default function LanguageSwitcher() {
  return (
    <li className={classes["main-nav__item"] + " " + classes.language}>EN</li>
  );
}
