import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProyectoDetalle from "./pages/ProyectoDetalle";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyecto/:slug" element={<ProyectoDetalle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
