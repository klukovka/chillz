import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import burgerClosed from "../../assets/burger_closed.svg";
import burgerOpened from "../../assets/burger_opened.svg";
import classes from "./AnimatedMenu.module.css";
import MainNavigationBarItems from "./MainNavigationMenuItems";

export default function AnimatedMenu({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const menuVariants = {
    open: { height: "500px", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

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
    <div id={id}>
      <div className={classes.burgerWrapper} onClick={toggleMenu}>
        <img
          src={burgerOpened}
          className={`${classes.burger} ${isOpen ? "" : classes.hidden}`}
        />
        <img
          src={burgerClosed}
          className={`${classes.burger}  ${isOpen ? classes.hidden : ""}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4 }}
            className={classes.menu}
            onAnimationComplete={(definition) => {
              if (definition === "open") {
                setShowButtons(true);
              }
            }}
          >
            {showButtons && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.2 }}
              >
                <MainNavigationBarItems onClick={closeMenu} />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
