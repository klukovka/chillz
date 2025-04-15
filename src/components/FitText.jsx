import { useEffect, useRef, useState } from "react";

const FitText = ({
  text,
  maxFontSize = 4, // in rem
  minFontSize = 0.5, // in rem
  style = {},
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const textEl = textRef.current;
      if (!container || !textEl) return;

      const htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      ); // base px size of 1rem
      let currentSizeRem = maxFontSize;

      // Convert rem to px to test fitting
      const setFontSizePx = (rem) => {
        const px = rem * htmlFontSize;
        textEl.style.fontSize = `${px}px`;
      };

      setFontSizePx(currentSizeRem);

      while (
        textEl.scrollWidth > container.offsetWidth &&
        currentSizeRem > minFontSize
      ) {
        currentSizeRem -= 0.05;
        setFontSizePx(currentSizeRem);
      }

      setFontSize(currentSizeRem);
    };

    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, [text, maxFontSize, minFontSize, style]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          fontSize: `${fontSize}rem`,
          margin: 0,
          padding: 0,
          color: "black",
          ...style,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default FitText;
