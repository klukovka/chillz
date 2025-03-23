import LanguageSwitcher from "./LanguageSwitcher";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItem from "./MainNavigationBarItem";

export default function MainNavigationBarItems({ id, onClick }) {
  return (
    <ul className={classes["main-nav__items"]} id={id}>
      <MainNavigationBarItem to="" end onClick={onClick}>
        about
      </MainNavigationBarItem>
      <MainNavigationBarItem to="services" onClick={onClick}>
        services
      </MainNavigationBarItem>
      <MainNavigationBarItem to="portfolio" onClick={onClick}>
        portfolio
      </MainNavigationBarItem>
      <MainNavigationBarItem to="articles" onClick={onClick}>
        articles
      </MainNavigationBarItem>
      <MainNavigationBarItem to="faq" onClick={onClick}>
        FAQ
      </MainNavigationBarItem>
      <MainNavigationBarItem
        to="contact-us/brands"
        id={classes["contact-us-button"]}
      >
        <button>contact us</button>
      </MainNavigationBarItem>
      <MainNavigationBarItem
        onClick={onClick}
        to="contact-us/brands"
        id={classes["contact-us-link"]}
      >
        contact us
      </MainNavigationBarItem>
      <LanguageSwitcher />
    </ul>
  );
}
