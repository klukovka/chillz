import { useEffect, useRef, useState } from "react";
import styles from "./PinAnimation.module.css";

const PinAnimation = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`${styles.box} ${
        isVisible ? styles.visible : styles.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default PinAnimation;
