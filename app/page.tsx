export default function Home() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>BigApparels</h1>
        <p style={{ fontSize: "1.25rem", color: "#666" }}>Revolutionizing fashion retail with technology</p>
      </header>

      <main>
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Our Solutions</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              "Inventory Management",
              "Sales Analytics",
              "Customer Insights",
              "Growth Tools",
              "Supply Chain",
              "Financial Solutions",
            ].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: "1.5rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{feature}</h3>
                <p style={{ color: "#666" }}>Advanced solutions for modern fashion retailers.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        style={{
          marginTop: "3rem",
          padding: "1.5rem 0",
          borderTop: "1px solid #eaeaea",
          textAlign: "center",
          color: "#666",
          fontSize: "0.875rem",
        }}
      >
        © {new Date().getFullYear()} BigApparels • Version 1.0.0
      </footer>
    </div>
  )
}
