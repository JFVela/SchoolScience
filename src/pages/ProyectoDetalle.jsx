import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import { Card, CardContent, Badge } from "@mui/material";
import proyectos from "../data/proyectos";

export default function DetalleProyecto() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const proyectoData = proyectos.find((p) => p.id === slug);

  if (!proyectoData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#211951",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{ color: "#15F5BA", fontSize: "2rem", marginBottom: "20px" }}
        >
          ❌ Proyecto no encontrado
        </h2>
        <button
          onClick={() => navigate("/proyectos")}
          style={{
            padding: "12px 24px",
            borderRadius: 10,
            backgroundColor: "#836FFF",
            color: "#F0F3FF",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#211951" }}>
      <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>
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
          {proyectoData.titulo}
        </h1>

        <Card sx={{ mb: 4, backgroundColor: "#836FFF" }}>
          <CardContent>
            <p
              style={{
                color: "#F0F3FF",
                fontSize: "1.1rem",
                textAlign: "center",
              }}
            >
              {proyectoData.descripcion}
            </p>
          </CardContent>
        </Card>

        {proyectoData.imagenes && (
          <ImageCarousel
            images={proyectoData.imagenes}
            alt={proyectoData.titulo}
            autoPlay={true}
            interval={3000}
          />
        )}

        <Card sx={{ mt: 4, backgroundColor: "#2d1f6e" }}>
          <CardContent>
            <h2 style={{ color: "#15F5BA" }}>👥 Integrantes</h2>
            {proyectoData.integrantes?.map((nombre, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Badge sx={{ backgroundColor: "#15F5BA", color: "#211951" }}>
                  {i + 1}
                </Badge>
                <span style={{ color: "#F0F3FF" }}>{nombre}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {proyectoData.materiales && (
          <Card sx={{ mt: 4, backgroundColor: "#2d1f6e" }}>
            <CardContent>
              <h2 style={{ color: "#15F5BA" }}>🧪 Materiales</h2>
              <ul>
                {proyectoData.materiales.map((mat, i) => (
                  <li key={i} style={{ color: "#F0F3FF", marginTop: 8 }}>
                    • {mat.nombre} —{" "}
                    <span style={{ color: "#836FFF" }}>{mat.cantidad}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {proyectoData.costo && (
          <Card sx={{ mt: 4, backgroundColor: "#2d1f6e", textAlign: "center" }}>
            <CardContent>
              <h2 style={{ color: "#15F5BA" }}>💰 Costo Total</h2>
              <p style={{ fontSize: "2.5rem", color: "#15F5BA" }}>
                S/. {proyectoData.costo}
              </p>
            </CardContent>
          </Card>
        )}

        {proyectoData.videoUrl && (
          <Card sx={{ mt: 4, backgroundColor: "#2d1f6e" }}>
            <CardContent>
              <h2 style={{ color: "#15F5BA" }}>🎬 Video del Experimento</h2>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${proyectoData.videoUrl}`}
                  title="Video del experimento"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 12,
                    border: "3px solid #15F5BA",
                  }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        )}

        <Card sx={{ mt: 4, backgroundColor: "#2d1f6e" }}>
          <CardContent>
            <h2 style={{ color: "#15F5BA" }}>📝 Conclusión</h2>
            <p style={{ color: "#F0F3FF" }}>{proyectoData.conclusion}</p>
          </CardContent>
        </Card>

        {proyectoData.pdfs && proyectoData.pdfs.length > 0 && (
          <Card sx={{ mt: 4, backgroundColor: "#2d1f6e" }}>
            <CardContent>
              <h2 style={{ color: "#15F5BA", marginBottom: "15px" }}>
                📄 Descargas y Documentación
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {proyectoData.pdfs.map((pdf, i) => (
                  <a
                    key={i}
                    href={pdf.archivo}
                    download
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#836FFF",
                      color: "#F0F3FF",
                      padding: "15px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      fontWeight: "bold",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6f5acb")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#836FFF")
                    }
                  >
                    <span style={{ fontSize: "1.5rem" }}>📥</span>
                    <div>
                      <div style={{ fontSize: "1rem" }}>DESCARGAR PDF</div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          opacity: 0.8,
                          fontWeight: "normal",
                        }}
                      >
                        {pdf.titulo}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button
            onClick={() => navigate(-1)} 
            style={{
              padding: "12px 24px",
              borderRadius: 10,
              backgroundColor: "#836FFF",
              color: "#F0F3FF",
              textDecoration: "none",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            ← Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
}
