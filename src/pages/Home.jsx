import { Container } from "@mui/material";
import "./App.css";
import FlipScienceCard from "../components/FlipScienceCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import proyectos from "../data/proyectos";

const GrupoCartas = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Presentacion = styled.div`
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const BotonInicio = styled.button`
  margin-top: 20px;
  padding: 12px 28px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 2rem;
  border: none;
  color: #0a192f;
  background: linear-gradient(135deg, #15f5ba, #64ffda);
  box-shadow: 0 6px 15px rgba(21, 245, 186, 0.35), 0 0 0 rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: all 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
  &:hover {
    background: linear-gradient(135deg, #836fff, #a48bff);
    color: white;
    transform: scale(1.07);
    box-shadow: 0 10px 25px rgba(131, 111, 255, 0.5),
      0 0 25px rgba(131, 111, 255, 0.4);
    opacity: 0.95;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 0 6px 15px rgba(131, 111, 255, 0.4);
  }
`;

const ContenidoGanador = styled.div`
  padding: 40px 20px;
  border-radius: 12px;
  margin-bottom: 40px;

  background: radial-gradient(
    circle at center,
    #836fff 55%,
    rgba(131, 111, 255, 0.85) 65%,
    rgba(131, 111, 255, 0.55) 78%,
    rgba(131, 111, 255, 0.25) 90%,
    rgba(131, 111, 255, 0) 100%
  );

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
`;

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Container fixed>
        <Presentacion>
          <h1>Exposición de Ciencias 2025</h1>
          <h2>
            Descubra la investigación y la innovación estudiantil pioneras que
            están dando forma a nuestro futuro.
          </h2>
          <BotonInicio>Explorar los Proyectos</BotonInicio>
        </Presentacion>
        <ContenidoGanador>
          <GrupoCartas>
            {proyectos.map((p) => (
              <FlipScienceCard
                key={p.id}
                title={p.titulo}
                description={p.descripcion}
                image={p.imagenes[0]}
                onViewMore={() => navigate(`/proyecto/${p.id}`)}
              />
            ))}
          </GrupoCartas>
        </ContenidoGanador>
      </Container>
    </>
  );
}

export default App;
