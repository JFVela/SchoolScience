import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Card, CardContent } from "@mui/material";

function ContenidoVideo({ titulo, videoUrl }) {
  return (
    <Card
      sx={{
        backgroundColor: "#2d1f6e",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#15F5BA", marginBottom: "15px" }}>
          🎬 Video del Experimento
        </h2>
        <div
          style={{
            borderRadius: "12px",
            border: "3px solid #525554",
            overflow: "hidden", // CRUCIAL: Para que el video no se salga de las esquinas redondeadas
          }}
        >
          <LiteYouTubeEmbed
            id={videoUrl}
            title={titulo}
            poster="maxresdefault"
            webp={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ContenidoVideo;
