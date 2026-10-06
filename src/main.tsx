import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Si la página ya viene prerenderizada (publicada en Vercel), React la "activa"
// sin volver a dibujarla. En desarrollo (npm run dev) llega vacía y se dibuja.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
