import classes from "./ImageWave.module.css";

export default function ImageWave({ src, alt }) {
  const waveText = "smart moves bold ideas & chi_illz";

  const animatedElements = [];

  for (let i = 0; i < 5; i++) {
    animatedElements.push(
      <textPath href="#wavePath" startOffset="0%" key={`${i} wave text`}>
        <tspan dy="6">{waveText}</tspan>
        <animate
          attributeName="startOffset"
          from="100%"
          to="-100%"
          dur="20s"
          begin={`${i * 4}s`}
          repeatCount="indefinite"
        />
      </textPath>
    );
  }

  return (
    <div className={classes["wave-container"]}>
      <img src={src} alt={alt} />
      <div className={classes["animated-wave-container"]}>
        <svg
          width="100%"
          viewBox="80 0 1200 470"
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
            {animatedElements}
          </text>
        </svg>
      </div>
    </div>
  );
}
