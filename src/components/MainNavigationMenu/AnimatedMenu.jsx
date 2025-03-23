import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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

  //TODO: Fix button
  return (
    <div id={id}>
      <button
        onClick={toggleMenu}
        style={{
          padding: "8px",
          borderRadius: "50%",
          border: "1px solid #ff4d79",
          color: "#ff4d79",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        {isOpen ? "✖" : "☰"}
      </button>

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
