import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./PinAnimation.module.css";

const PinAnimation = ({ children, className, id, onVisibilityChanged }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleIsVisibleChanged = useCallback(
    (value) => {
      setIsVisible(value);
      if (onVisibilityChanged) onVisibilityChanged(value);
    },
    [onVisibilityChanged]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) {
          handleIsVisibleChanged(true);
        } else {
          handleIsVisibleChanged(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleIsVisibleChanged]);

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
