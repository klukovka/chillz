import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PinAnimation from "../../../components/PinAnimation";
import styles from "./Carousel.module.css"; // CSS Modules

const Carousel = ({ children, slidesToShow = 5 }) => {
  const array = React.Children.toArray(children);
  const sliderRef = useRef(null);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Update slidesToShow dynamically based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 480 && slidesToShow > 1) {
        setCurrentSlidesToShow(1);
      } else if (window.innerWidth < 768 && slidesToShow > 2) {
        setCurrentSlidesToShow(2);
      } else if (window.innerWidth < 1024 && slidesToShow > 3) {
        setCurrentSlidesToShow(3);
      } else {
        setCurrentSlidesToShow(slidesToShow);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [slidesToShow]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: currentSlidesToShow,
    slidesToScroll: currentSlidesToShow,
    arrows: false,
    draggable: true,
    fade: false,
    swipe: true,
    dotsClass: `slick-dots ${styles["dots-list"]}`,

    beforeChange: (_, newIndex) => {
      setActivePageIndex(Math.ceil(newIndex / currentSlidesToShow));
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    },
    afterChange: () => {
      setIsScrolling(false);
    },

    appendDots: (dots) => {
      const length = dots.length;
      let children = dots;

      if (length > 5) {
        if (activePageIndex === 0 || activePageIndex === 1) {
          children = children.slice(0, 5);
        } else if (
          activePageIndex === length - 1 ||
          activePageIndex === length - 2
        ) {
          children = children.slice(length - 5, length);
        } else {
          children = children.slice(activePageIndex - 2, activePageIndex + 3);
        }
      }

      return <ul className={styles["dots-list"]}>{children}</ul>;
    },
    customPaging: (i) => {
      const length = Math.ceil(array.length / currentSlidesToShow);
      let className = styles.customDot;

      if (length > 5) {
        if (activePageIndex === 0 || activePageIndex === 1) {
          if (i <= 2) {
            className += " " + styles["full-size"];
          } else if (i === 3) {
            className += " " + styles["middle-size"];
          } else {
            className += " " + styles["small-size"];
          }
        } else if (
          activePageIndex === length - 1 ||
          activePageIndex === length - 2
        ) {
          if (i > length - 4) {
            className += " " + styles["full-size"];
          } else if (i === length - 4) {
            className += " " + styles["middle-size"];
          } else {
            className += " " + styles["small-size"];
          }
        } else {
          if (i === activePageIndex) {
            className += " " + styles["full-size"];
          } else if (i === activePageIndex + 1 || i === activePageIndex - 1) {
            className += " " + styles["middle-size"];
          } else {
            className += " " + styles["small-size"];
          }
        }
      } else {
        className += " " + styles["full-size"];
      }

      let type = "";

      switch (i % 3) {
        case 0:
          type = styles.pink;
          break;
        case 1:
          type = styles.blue;
          break;
        case 2:
          type = styles.purple;
          break;
      }

      className += " " + type;

      if (i === activePageIndex) {
        className += " " + styles.activeDot;
      }

      return <div className={className}></div>;
    },
  };

  return (
    <div className={styles.sliderContainer}>
      <PinAnimation>
        <Slider ref={sliderRef} {...settings}>
          {array.map((child, index) => {
            const maxHeight = 330;

            const heights = Array.from(
              { length: Math.ceil(currentSlidesToShow / 2) },
              (_, index) => Math.max(maxHeight - 30 * index, 100)
            ).reverse();

            let height = maxHeight;

            if (currentSlidesToShow % 2 === 0) {
              const shift = Math.floor(currentSlidesToShow / 2);
              let rightMiddle =
                Math.ceil(activePageIndex * currentSlidesToShow) + shift;
              if (rightMiddle + shift >= array.length) {
                rightMiddle = array.length - shift;
              }

              const leftMiddle = rightMiddle - 1;

              for (let i = 0; i < heights.length; i++) {
                if (index === rightMiddle + i || index === leftMiddle - i) {
                  height = heights[i];
                }
              }
            } else {
              const shift = Math.floor(currentSlidesToShow / 2);
              let middle =
                Math.ceil(activePageIndex * currentSlidesToShow) + shift;

              if (middle + shift >= array.length) {
                middle = array.length - shift - 1;
              }

              for (let i = 0; i < heights.length; i++) {
                if (index === middle + i || index === middle - i) {
                  height = heights[i];
                }
              }
            }

            return (
              <div key={index} className={styles.slide}>
                <div
                  className={styles.slideContent}
                  style={{
                    height: isScrolling ? `${maxHeight}px` : `${height}px`,
                  }}
                >
                  {child}
                </div>
              </div>
            );
          })}
        </Slider>
      </PinAnimation>
    </div>
  );
};

export default Carousel;
