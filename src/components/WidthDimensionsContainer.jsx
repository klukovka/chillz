export default function WidthDimensionsContainer({
  children,
  maxWidth = 1064,
}) {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: `calc(${maxWidth}px + 1rem)`,
        padding: "0 1rem",
      }}
    >
      {children}
    </div>
  );
}
