import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import { Card, CardContent, Badge } from "@mui/material";
import proyectos from "../data/proyectos";
import styled from "styled-components";

const Agrupar = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: stretch;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ColumnaGrande = styled.div`
  flex: 2; /* Esto es el 66% del ancho */
  width: 100%; /* Para asegurar que llene su espacio en movil */
`;

const Grupo = styled.div`
  flex: 1; /* Esto es el 33% del ancho */
  display: flex;
  flex-direction: column;
  background-color: turquoise;
  justify-content: space-between;
`;

const ScrollBox = styled.div`
  max-height: 120px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 25, 81, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #15f5ba;
    border-radius: 4px;
    border: 1px solid #211951;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #836fff;
  }
`;

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

        <Agrupar>
          <ColumnaGrande>
            {proyectoData.imagenes && (
              <ImageCarousel
                images={proyectoData.imagenes}
                alt={proyectoData.titulo}
                autoPlay={true}
                interval={4000}
              />
            )}
          </ColumnaGrande>

          <Grupo>
            <Card sx={{ backgroundColor: "#2d1f6e", mb: 2 }}>
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
                    <Badge
                      sx={{ backgroundColor: "#15F5BA", color: "#211951" }}
                    >
                      {i + 1}
                    </Badge>
                    <span style={{ color: "#F0F3FF" }}>{nombre}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {proyectoData.materiales && (
              <Card sx={{ backgroundColor: "#2d1f6e" }}>
                <CardContent>
                  <h2 style={{ color: "#15F5BA", marginBottom: "10px" }}>
                    🧪 Materiales
                  </h2>

                  <ScrollBox>
                    <ul style={{ paddingLeft: "20px", margin: 0 }}>
                      {proyectoData.materiales.map((mat, i) => (
                        <li
                          key={i}
                          style={{ color: "#F0F3FF", marginBottom: 8 }}
                        >
                          {mat.nombre} —{" "}
                          <span
                            style={{ color: "#836FFF", fontWeight: "bold" }}
                          >
                            {mat.cantidad}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ScrollBox>
                </CardContent>
              </Card>
            )}
          </Grupo>
        </Agrupar>

        {proyectoData.costo && (
          <Card sx={{ mt: 4, backgroundColor: "#2d1f6e", textAlign: "center" }}>
            <CardContent>
              <h2 style={{ color: "#15F5BA" }}>💰 Costo Total</h2>
              <p style={{ fontSize: "2rem", color: "#15F5BA" }}>
                S/. {proyectoData.costo}
              </p>
            </CardContent>
          </Card>
        )}

        <Agrupar>
          <Grupo>
            <Card
              sx={{
                backgroundColor: "#2d1f6e",
              }}
            >
              <CardContent>
                <h2 style={{ color: "#15F5BA" }}>📝 Conclusión</h2>
                <ScrollBox>
                  <p style={{ color: "#F0F3FF", marginTop: "10px" }}>
                    {proyectoData.conclusion}
                  </p>
                </ScrollBox>
              </CardContent>
            </Card>

            {/* CARTA 2: DESCARGAS (Tamaño fijo según contenido) */}
            {proyectoData.pdfs && proyectoData.pdfs.length > 0 && (
              <Card sx={{ backgroundColor: "#2d1f6e" }}>
                <CardContent>
                  <h2 style={{ color: "#15F5BA", marginBottom: "15px" }}>
                    📄 Descargas
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
                          padding: "12px",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontWeight: "bold",
                          transition: "0.3s",
                        }}
                      >
                        <span style={{ fontSize: "1.2rem" }}>📥</span>
                        <div style={{ fontSize: "0.9rem" }}>{pdf.titulo}</div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </Grupo>
          <ColumnaGrande>
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
          </ColumnaGrande>
        </Agrupar>

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
