import styled from "styled-components";
import { Card, CardContent } from "@mui/material";

const ScrollBox = styled.div`
  max-height: 150px;
  overflow-y: auto;
  padding-right: 10px;
  flex-grow: 1;
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

function TarjetasContenido({ titulo, contenido }) {
  return (
    <Card
      sx={{
        backgroundColor: "#2d1f6e",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h2 style={{ color: "#15F5BA" }}>{titulo}</h2>
        <ScrollBox>{contenido}</ScrollBox>
      </CardContent>
    </Card>
  );
}

export default TarjetasContenido;
