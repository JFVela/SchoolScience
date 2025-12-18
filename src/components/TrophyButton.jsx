import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function TrophyButton() {
  const [showMessage, setShowMessage] = useState(false);
  const [explode, setExplode] = useState(false);

  const handleClick = () => {
    setExplode(true);
    setShowMessage(true);

    setTimeout(() => setExplode(false), 400);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <IconButton
        onClick={handleClick}
        sx={{
          bgcolor: "#ffd700",
          color: "#5c4b00",
          width: 60,
          height: 60,
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",

          "&:hover": {
            bgcolor: "#ffea70",
            transform: "scale(1.15)",
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.9)",
          },

          ...(explode && {
            animation: "explode 0.4s ease",
          }),
        }}
      >
        <EmojiEventsIcon sx={{ fontSize: 32 }} />
      </IconButton>

      {showMessage && (
        <Typography
          sx={{
            mt: 1,
            fontSize: 14,
            color: "#ffd700",
            animation: "fadeUp 0.6s ease",
          }}
        >
          ¡Gracias! 🏆
        </Typography>
      )}

      {/* Animaciones */}
      <style>
        {`
          @keyframes explode {
            0% { transform: scale(1); }
            50% { transform: scale(1.35); }
            100% { transform: scale(1); }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}
