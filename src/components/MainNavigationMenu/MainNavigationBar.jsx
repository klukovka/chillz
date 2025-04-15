import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/craby_lottie.json";
import AnimatedMenu from "./AnimatedMenu";
import classes from "./MainNavigationBar.module.css";
import MainNavigationBarItems from "./MainNavigationMenuItems";

export default function MainNavigationBar() {
  const matches = useMediaQuery("(min-width:1000px)");
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const lottieRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const closeMenu = () => {
    setShowButtons(false);
    setIsOpen(false);
    setIsPaused(false); // Ensure animation is playing
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsPaused(false); // Ensure animation is playing
    }
  };

  // Control the Lottie animation when direction changes
  useEffect(() => {
    if (lottieRef.current) {
      const lottieInstance = lottieRef.current;

      if (isOpen && !matches) {
        // Play forward
        lottieInstance.anim.setDirection(1);
        lottieInstance.anim.play();
      } else {
        // Play in reverse
        lottieInstance.anim.setDirection(-1);
        lottieInstance.anim.play();
      }
    }
  }, [isOpen, matches]);

  const defaultOptions = {
    loop: false, // Changed from true to false to control the animation manually
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMax meet",
    },
  };

  return (
    <motion.div
      className={classes["wrapper"]}
      animate={{ backgroundColor: isOpen && !matches ? "#7DC8F7" : "#ffffff" }}
      transition={{ duration: 0.05 }}
    >
      <header className={classes["main-header"]}>
        <div className={classes["main-header__brand"]}>
          <Lottie
            options={defaultOptions}
            ref={lottieRef}
            isStopped={false}
            isPaused={isPaused}
            speed={3}
          />
        </div>
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
