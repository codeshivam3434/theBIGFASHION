export default function NotFound() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          textDecoration: "none",
        }}
      >
        Go Home
      </a>
    </div>
  )
}
