import { Card, CardContent } from "@mui/material";

function DescripcionDetalle({ descripcion }) {
  return (
    <Card sx={{ mb: 4, backgroundColor: "#836FFF" }}>
      <CardContent>
        <p
          style={{
            color: "#F0F3FF",
            fontSize: "1.1rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          {descripcion}
        </p>
      </CardContent>
    </Card>
  );
}

export default DescripcionDetalle;
