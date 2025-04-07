import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import classes from "./ImageWave.module.css";
export default function ImageWave({ src, alt }) {
  const matches = useMediaQuery("(min-width:850px)");
  const waveText = "smart moves bold ideas & chi_illz";
  const elementsCount = 5;

  useEffect(() => {
    // Create an array of text elements with their own animation
    const animateText = (i) => {
      const path = document.getElementById(`${i}-wave-text`);
      let offset = 100;

      const animate = () => {
        offset -= 0.25; // Adjust the speed here (slower animation)
        path.setAttribute("startOffset", `${offset}%`);

        // Reset offset to 100 when it reaches -100 for endless loop
        if (offset <= -100) offset = 100;

        requestAnimationFrame(animate); // Keep the animation running
      };

      animate();
    };

    // Start animations for each text element with a 4s delay between each
    for (let i = 0; i < elementsCount; i++) {
      setTimeout(() => {
        animateText(i);
      }, i * 2700); // Delay starts for each animation (4s per element)
    }
  }, []); // Empty dependency array ensures this runs only once

  // Render the text elements
  const textElements = [];
  for (let i = 0; i < elementsCount; i++) {
    textElements.push(
      <textPath
        href="#wavePath"
        key={`${i}-wave-text`}
        id={`${i}-wave-text`}
        startOffset="100%"
      >
        <tspan dy="6">{waveText}</tspan>
      </textPath>
    );
  }

  return (
    <div className={classes["wave-container"]}>
      <img src={src} alt={alt} />
      <div className={classes["animated-wave-container"]}>
        <svg
          width="100%"
          viewBox={matches ? "80 0 1200 470" : "300 -30 1000 500"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wavePath"
            d="M38 206.364C84.4094 154.242 210.9 75.5322 345.587 177.661C513.946 305.323 638.18 555.077 827.102 511.38C1016.02 467.684 1001.03 61.5666 1314.61 50"
            fill="transparent"
            stroke="#7DC8F7"
            strokeWidth="100"
          />

          <text fill="white" fontSize="32" fontWeight="bold">
            {textElements}
          </text>
        </svg>
      </div>
    </div>
  );
}
