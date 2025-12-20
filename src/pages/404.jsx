import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material"; // Usamos MUI para mantener consistencia con tus cards

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#211951", // Tu fondo oscuro
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Título gigante con efecto NEÓN */}
      <h1
        style={{
          fontSize: "8rem",
          margin: 0,
          color: "#15F5BA", // Tu verde neón
          textShadow: "0 0 30px rgba(21, 245, 186, 0.5)",
          fontWeight: "bold",
        }}
      >
        404
      </h1>

      <h2
        style={{
          color: "#F0F3FF",
          fontSize: "2rem",
          marginTop: "-10px",
          marginBottom: "30px",
        }}
      >
        ¡Te has perdido en el ciberespacio! 🛸
      </h2>

      <Card sx={{ backgroundColor: "#2d1f6e", maxWidth: 500, mb: 4 }}>
        <CardContent>
          <p style={{ color: "#F0F3FF", fontSize: "1.1rem" }}>
            La ruta que buscas no existe o fue movida a otra dimensión.
            <br />
            No te preocupes, puedes regresar al laboratorio.
          </p>
        </CardContent>
      </Card>

      {/* Botón con tus estilos */}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "15px 30px",
          borderRadius: "50px", // Más redondeado para variar
          backgroundColor: "#836FFF", // Tu morado
          color: "#F0F3FF",
          border: "2px solid #15F5BA", // Borde neón
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.2rem",
          boxShadow: "0 0 15px rgba(21, 245, 186, 0.4)",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        🏠 Volver al Inicio
      </button>
    </div>
  );
}
