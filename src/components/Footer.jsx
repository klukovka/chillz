import logo from "../assets/craby_white.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";
import classes from "./Footer.module.css";
import FooterNavigationBarItem from "./FooterNavigationItem";

export default function Footer() {
  return (
    <footer className={classes["main-footer"]}>
      <div>
        <img src={logo} alt="Chillz logo" className={classes["logo-image"]} />
        <div className={classes["social-media"]}>
          <span>FOLLOW FOR MORE</span>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={telegram} alt="Telegram" />
          <img src={youtube} alt="Youtube" />
        </div>
        <p>
          copyright © {new Date().getFullYear()} chiillz. all rights reserved
        </p>
        <div className={classes["privacy-policy"]}>
          <a href="/">privacy policy</a>
          <a href="/">terms and conditions of use</a>
        </div>
      </div>
      <div className={classes["navigation"]}>
        <nav>
          <ul className={classes["footer-nav__items"]}>
            <FooterNavigationBarItem to="">about</FooterNavigationBarItem>
            <FooterNavigationBarItem to="articles">
              articles
            </FooterNavigationBarItem>
            <FooterNavigationBarItem to="services">
              services
            </FooterNavigationBarItem>
            <FooterNavigationBarItem to="faq">FAQ</FooterNavigationBarItem>
            <FooterNavigationBarItem to="portfolio">
              portfolio
            </FooterNavigationBarItem>
            <FooterNavigationBarItem to="contact-us">
              contact us
            </FooterNavigationBarItem>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
