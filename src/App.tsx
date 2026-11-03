import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacidad from "./pages/Privacidad";
import AvisoLegal from "./pages/AvisoLegal";
import ImportarCocheAlemania from "./pages/ImportarCocheAlemania";
import Gracias from "./pages/Gracias";
import Oportunidades from "./pages/Oportunidades";
import CuantoCuestaImportar from "./pages/CuantoCuestaImportar";

// El router (BrowserRouter en el navegador, StaticRouter al publicar)
// se añade en main.tsx y en entry-server.tsx.
const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/importar-coche-alemania" element={<ImportarCocheAlemania />} />
    <Route path="/cuanto-cuesta-importar-coche-alemania" element={<CuantoCuestaImportar />} />
    <Route path="/oportunidades" element={<Oportunidades />} />
    <Route path="/gracias" element={<Gracias />} />
    <Route path="/privacidad" element={<Privacidad />} />
    <Route path="/aviso-legal" element={<AvisoLegal />} />
    {/* Las páginas nuevas van aquí, encima de la línea de NotFound */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
