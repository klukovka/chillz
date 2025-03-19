import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./Carousel.module.css"; // CSS Modules

const Carousel = ({ children, slidesToShow = 5 }) => {
  const array = React.Children.toArray(children);
  const sliderRef = useRef(null);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow); // Default for large screens

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: currentSlidesToShow,
    slidesToScroll: currentSlidesToShow,
    arrows: false,
    draggable: true,
    dotsClass: `slick-dots ${styles["dots-list"]}`,
    beforeChange: (oldIndex, newIndex) => {
      setActivePageIndex(Math.ceil(newIndex / currentSlidesToShow));
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
      console.log(length);
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
      <Slider ref={sliderRef} {...settings}>
        {array.map((child, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.slideContent}>{child}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
