import logo from "../../assets/craby.svg";
import AnimatedMenu from "./AnimatedMenu";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItems from "./MainNavigationMenuItems";

export default function MainNavigationBar() {
  return (
    <div className={classes["wrapper"]}>
      <header className={classes["main-header"]}>
        <img
          src={logo}
          alt="Chillz Logo"
          className={classes["main-header__brand"]}
        />
        <nav>
          <MainNavigationBarItems id={classes["tablet-navigation"]} />
          <AnimatedMenu id={classes["mobile-navigation"]} />
        </nav>
      </header>
    </div>
  );
}
