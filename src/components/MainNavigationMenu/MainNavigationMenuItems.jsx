import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItem from "./MainNavigationBarItem";

export default function MainNavigationBarItems({ id, onClick }) {
  const { t } = useTranslation();
  return (
    <ul className={classes["main-nav__items"]} id={id}>
      <MainNavigationBarItem to="" end onClick={onClick}>
        {t("about").toLowerCase()}
      </MainNavigationBarItem>
      <MainNavigationBarItem to="services" onClick={onClick}>
        {t("services").toLowerCase()}
      </MainNavigationBarItem>
      <MainNavigationBarItem to="portfolio" onClick={onClick}>
        {t("portfolio").toLowerCase()}
      </MainNavigationBarItem>
      <MainNavigationBarItem to="articles" onClick={onClick}>
        {t("articles").toLowerCase()}
      </MainNavigationBarItem>
      <MainNavigationBarItem to="faq" onClick={onClick}>
        {t("faq")}
      </MainNavigationBarItem>
      <MainNavigationBarItem
        to="contact-us/brands"
        id={classes["contact-us-button"]}
      >
        <button>{t("contact_us").toLowerCase()}</button>
      </MainNavigationBarItem>
      <MainNavigationBarItem
        onClick={onClick}
        to="contact-us/brands"
        id={classes["contact-us-link"]}
      >
        {t("contact_us").toLowerCase()}
      </MainNavigationBarItem>
      <LanguageSwitcher />
    </ul>
  );
}
