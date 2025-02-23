import logo from "../assets/craby.svg";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItem from "./MainNavigationBarItem";

export default function MainNavigationBar() {
  return (
    <header className={classes["main-header"]}>
      <img
        src={logo}
        alt="Chillz Logo"
        className={classes["main-header__brand"]}
      />
      <nav>
        <ul className={classes["main-nav__items"]}>
          <MainNavigationBarItem to="" end>
            about
          </MainNavigationBarItem>
          <MainNavigationBarItem to="services">services</MainNavigationBarItem>
          <MainNavigationBarItem to="portfolio">
            portfolio
          </MainNavigationBarItem>
          <MainNavigationBarItem to="articles">articles</MainNavigationBarItem>
          <MainNavigationBarItem to="faq">FAQ</MainNavigationBarItem>
          <MainNavigationBarItem to="contact-us">
            <button>contact us</button>
          </MainNavigationBarItem>
        </ul>
      </nav>
    </header>
  );
}
