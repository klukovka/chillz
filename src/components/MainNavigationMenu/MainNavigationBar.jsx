import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/craby.svg";
import AnimatedMenu from "./AnimatedMenu";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItems from "./MainNavigationMenuItems";

export default function MainNavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const closeMenu = () => {
    setShowButtons(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <motion.div
      className={classes["wrapper"]}
      animate={{ backgroundColor: isOpen ? "#7DC8F7" : "#ffffff" }}
      transition={{ duration: 0.05 }}
    >
      <header className={classes["main-header"]}>
        <img
          src={logo}
          alt="Chillz Logo"
          className={classes["main-header__brand"]}
        />
        <nav>
          <MainNavigationBarItems id={classes["tablet-navigation"]} />
          <AnimatedMenu
            id={classes["mobile-navigation"]}
            isOpen={isOpen}
            showButtons={showButtons}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
            onAnimationComplete={(definition) => {
              if (definition === "open") {
                setShowButtons(true);
              }
            }}
          />
        </nav>
      </header>
    </motion.div>
  );
}
