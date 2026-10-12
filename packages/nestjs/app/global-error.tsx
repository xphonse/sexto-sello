"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          background: "#FAFAF9",
          color: "#1A1A1A",
          margin: 0,
        }}
      >
        <h1
          style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          500
        </h1>
        <p style={{ marginBottom: "2rem", color: "#5C5C5C" }}>
          Ha ocurrido un error inesperado
        </p>
        <button
          onClick={reset}
          style={{
            padding: "0.75rem 1.5rem",
            background: "#111111",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
          }}
        >
          Intentar de nuevo
        </button>
      </body>
    </html>
  );
}
