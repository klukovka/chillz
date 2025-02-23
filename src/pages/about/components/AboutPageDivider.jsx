export default function AboutPageDivider({ children, backgroundColor }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "0 2rem",
        marginTop: "2rem",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: 20,
          letterSpacing: "2%",
          lineHeight: 30 / 20,
        }}
      >
        {children}
      </p>
    </div>
  );
}
