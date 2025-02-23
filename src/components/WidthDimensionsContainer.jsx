export default function WidthDimensionsContainer({ children }) {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "calc(1064px + 1rem)",
        padding: "0 1rem",
      }}
    >
      {children}
    </div>
  );
}
