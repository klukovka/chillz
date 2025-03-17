import LanguageSwitcher from "./LanguageSwitcher";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItem from "./MainNavigationBarItem";

export default function MainNavigationBarItems({ id }) {
  return (
    <ul className={classes["main-nav__items"]} id={id}>
      <MainNavigationBarItem to="" end>
        about
      </MainNavigationBarItem>
      <MainNavigationBarItem to="services">services</MainNavigationBarItem>
      <MainNavigationBarItem to="portfolio">portfolio</MainNavigationBarItem>
      <MainNavigationBarItem to="articles">articles</MainNavigationBarItem>
      <MainNavigationBarItem to="faq">FAQ</MainNavigationBarItem>
      <MainNavigationBarItem
        to="contact-us/brands"
        id={classes["contact-us-button"]}
      >
        <button>contact us</button>
      </MainNavigationBarItem>
      <MainNavigationBarItem
        to="contact-us/brands"
        id={classes["contact-us-link"]}
      >
        contact us
      </MainNavigationBarItem>
      <LanguageSwitcher />
    </ul>
  );
}
