import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "../assets/craby_white.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";
import classes from "./Footer.module.css";
import FooterNavigationBarItem from "./FooterNavigationItem";

export default function Footer() {
  const { t } = useTranslation();
  const matches = useMediaQuery("(min-width:750px)");

  const socialMedia = (
    <div className={classes["social-media"]}>
      <span>{t("follow_for_more").toUpperCase()}</span>
      <div>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={telegram} alt="Telegram" />
        <img src={youtube} alt="Youtube" />
      </div>
    </div>
  );

  const privacyPolicy = (
    <>
      <p>
        {t("copyright").toLowerCase()} © {new Date().getFullYear()}
        {` chiillz. `} {t("all_rights_reserved").toLowerCase()}
      </p>
      <div className={classes["privacy-policy"]}>
        <a href="/">{t("privacy_policy").toLowerCase()}</a>
        <a href="/">{t("terms_and_conditions")}</a>
      </div>
    </>
  );

  const navigation = (
    <div className={classes["navigation"]}>
      <nav>
        <ul className={classes["footer-nav__items"]}>
          <FooterNavigationBarItem to="">
            {t("about").toLowerCase()}
          </FooterNavigationBarItem>
          <FooterNavigationBarItem to="articles">
            {t("articles").toLowerCase()}
          </FooterNavigationBarItem>
          <FooterNavigationBarItem to="services">
            {t("services").toLowerCase()}
          </FooterNavigationBarItem>
          <FooterNavigationBarItem to="faq">FAQ</FooterNavigationBarItem>
          <FooterNavigationBarItem to="portfolio">
            {t("portfolio").toLowerCase()}
          </FooterNavigationBarItem>
          <FooterNavigationBarItem to="contact-us">
            {t("contact_us").toLowerCase()}
          </FooterNavigationBarItem>
        </ul>
      </nav>
    </div>
  );

  if (matches) {
    return (
      <div className={classes["wrapper"]}>
        <footer className={classes["main-footer"]}>
          <div>
            <img
              src={logo}
              alt="Chillz logo"
              className={classes["logo-image"]}
            />
            {socialMedia}
            {privacyPolicy}
          </div>
          {navigation}
        </footer>
      </div>
    );
  }

  return (
    <div className={classes["wrapper"]}>
      <footer className={classes["main-footer"]}>
        <div>
          <img src={logo} alt="Chillz logo" className={classes["logo-image"]} />
          {navigation}
          {socialMedia}
          {privacyPolicy}
        </div>
      </footer>
    </div>
  );
}
