import classes from "./MainNavigationBar.module.css";

export default function LanguageSwitcher() {
  return (
    <li className={classes["main-nav__item"] + " " + classes.language}>EN</li>
  );
}
