function BotonDescarga({ archivo, titulo }) {
  return (
    <a
      href={archivo}
      download
      style={{
        textDecoration: "none",
        backgroundColor: "#836FFF",
        color: "#F0F3FF",
        padding: "12px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontWeight: "bold",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6f5acb")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#836FFF")}
    >
      <span style={{ fontSize: "1.2rem" }}>📥</span>
      <div style={{ fontSize: "0.9rem" }}>{titulo}</div>
    </a>
  );
}

export default BotonDescarga;
