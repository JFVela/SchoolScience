import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function FlipScienceCard({
  title,
  description,
  image,
  onFavorite,
  onShare,
  onViewMore,
}) {
  return (
    <Box
      sx={{
        width: 300,
        height: 420,
        margin: 2,
        cursor: "pointer",

        /* Glow por defecto */
        boxShadow: "0 0 18px rgba(21, 245, 186, 0.35)",
        borderRadius: 4,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 0 28px rgba(21, 245, 186, 0.6)",
        },

        "&:hover img": { transform: "scale(1.07)" },
        "&:hover .overlay": { opacity: 0.35 },
      }}
    >
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 4,
          bgcolor: "#0a192f",
          color: "#F0F3FF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* IMAGEN */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{
              transition: "transform 0.4s ease",
            }}
          />

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "#211951",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </Box>

        {/* CONTENIDO */}
        <CardContent>
          <Typography
            variant="h5"
            sx={{ color: "#15F5BA", fontWeight: "bold" }}
            gutterBottom
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: "#F0F3FF" }}>
            {description}
          </Typography>
        </CardContent>

        {/* BOTÓN VER MÁS */}
        <Box sx={{ px: 2 }}>
          <Button
            fullWidth
            onClick={onViewMore}
            sx={{
              mb: 1,
              borderRadius: "2rem",
              fontWeight: "bold",
              color: "#211951",
              background: "linear-gradient(135deg, #15F5BA, #64ffda)",
              transition: "all 0.3s ease",

              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(135deg, #836FFF, #15F5BA)",
                color: "#F0F3FF",
              },
            }}
          >
            Ver más
          </Button>
        </Box>

        {/* ACCIONES */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            p: 2,
          }}
        >
          {/* ❤️ FAVORITO */}
          <IconButton
            onClick={onFavorite}
            sx={{
              color: "#ff6b81",
              transition: "transform 0.3s ease, color 0.3s ease",

              "&:hover": {
                transform: "scale(1.25)",
                color: "#ff4081",
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>

          {/* 🔁 COMPARTIR */}
          <IconButton
            onClick={onShare}
            sx={{
              color: "#15F5BA",
              transition: "transform 0.3s ease, color 0.3s ease",

              "&:hover": {
                transform: "rotate(15deg) scale(1.2)",
                color: "#64ffda",
              },
            }}
          >
            <ShareIcon />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}
