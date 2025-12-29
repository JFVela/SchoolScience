import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BotonFlotante() {
  const navigate = useNavigate();
  return (
    <Fab
      aria-label="volver"
      onClick={() => navigate(-1)}
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 1000,

        backgroundColor: "#15F5BA",
        color: "#211951",
        width: "60px",
        height: "60px",
        boxShadow: "0 0 15px rgba(21, 245, 186, 0.6)",
        border: "2px solid #211951",

        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#836FFF",
          color: "#F0F3FF",
          transform: "scale(1.1) rotate(-10deg)",
          boxShadow: "0 0 25px rgba(131, 111, 255, 0.8)",
        },
      }}
    >
      <ArrowBackIcon sx={{ fontSize: "2rem" }} />
    </Fab>
  );
}

export default BotonFlotante;
