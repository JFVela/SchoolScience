import { useParams, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import { Card, CardContent, Badge } from "@mui/material";
import proyectos from "../data/proyectos";
import styled from "styled-components";
import TarjetasContenido from "../components/TarjetasContenido";
import Foco from "@mui/icons-material/TipsAndUpdates";
import BotonFlotante from "../components/BotonFlotante";
import TituloDetalle from "../components/TituloDetalle";
import DescripcionDetalle from "../components/DescripcionDetalle";
import BotonDescarga from "../components/BotonDescarga";
import ContenidoVideo from "../components/ContenidoVideo";

const Agrupar = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
  }
`;

const ColumnaGrande = styled.div`
  flex: 2; /* Ocupa el 66% aprox */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Grupo = styled.div`
  flex: 1; /* Ocupa el 33% aprox */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#211951",
        paddingBottom: "40px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>
        <TituloDetalle children={proyectoData.titulo} />
        <DescripcionDetalle descripcion={proyectoData.descripcion} />
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
            <TarjetasContenido
              titulo="Integrantes"
              contenido={proyectoData.integrantes?.map((nombre, i) => (
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
            />

            {proyectoData.materiales && (
              <TarjetasContenido
                titulo="🧪 Materiales"
                contenido={
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {proyectoData.materiales.map((mat, i) => (
                      <li key={i} style={{ color: "#F0F3FF", marginBottom: 8 }}>
                        {mat.nombre} —{" "}
                        <span style={{ color: "#836FFF", fontWeight: "bold" }}>
                          {mat.cantidad}
                        </span>
                      </li>
                    ))}
                  </ul>
                }
              />
            )}
          </Grupo>
        </Agrupar>

        {proyectoData.costo && (
          <Card
            sx={{
              mt: 4,
              backgroundColor: "#2d1f6e",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
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
            <TarjetasContenido
              titulo={
                <>
                  <Foco style={{ color: "yellow", marginRight: "10px" }} />
                  Conclusiones
                </>
              }
              contenido={
                <p style={{ color: "#F0F3FF", marginTop: "10px" }}>
                  {proyectoData.conclusion}
                </p>
              }
            />

            {proyectoData.pdfs && proyectoData.pdfs.length > 0 && (
              <TarjetasContenido
                titulo="📄 Descargas"
                contenido={
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "10px",
                        gap: "10px",
                      }}
                    >
                      {proyectoData.pdfs.map((pdf, i) => (
                        <BotonDescarga
                          key={i}
                          archivo={pdf.archivo}
                          titulo={pdf.titulo}
                        />
                      ))}
                    </div>
                  </>
                }
              />
            )}
          </Grupo>
          <ColumnaGrande>
            {proyectoData.videoUrl && (
              <ContenidoVideo
                titulo="Video del Experimento"
                videoUrl={proyectoData.videoUrl}
              />
            )}
          </ColumnaGrande>
        </Agrupar>
        <BotonFlotante />
      </div>
    </div>
  );
}
