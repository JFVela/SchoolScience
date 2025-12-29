function TituloDetalle({ children }) {
  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#15F5BA",
        textShadow: "0 0 20px rgba(21,245,186,0.5)",
        marginBottom: "20px",
      }}
    >
      {children}
    </h1>
  );
}

export default TituloDetalle;
