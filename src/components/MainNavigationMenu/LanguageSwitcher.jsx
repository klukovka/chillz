import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n/i18n";
import ExpansionArrow from "../ExpansionArrow";
import classes from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({ className }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const allLanguages = Object.entries(supportedLngs);
  const selectedLanguage = allLanguages.find(
    ([code]) => code === i18n.resolvedLanguage
  );
  const availableLanguages = allLanguages.filter(
    ([code]) => code !== i18n.resolvedLanguage
  );

  const buttons = availableLanguages.map(([code, name]) => (
    <button
      key={`language_${code}`}
      className={classes["language-button"]}
      onClick={() => {
        i18n.changeLanguage(code);
        setIsOpen(false);
      }}
    >
      {name}
    </button>
  ));

  return (
    <li
      className={`${className} ${classes.language}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={classes.selected}>
        {selectedLanguage[1]}{" "}
        <ExpansionArrow
          className={`${classes.arrow} ${
            classes[isOpen ? "opened" : "closed"]
          }`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={classes["languages-menu-tablet"]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {buttons}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={classes["languages-menu-mobile"]}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {buttons}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
