import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyecto/:slug" element={<ProyectoDetalle />} />
    </Routes>
  );
}

export default App;
