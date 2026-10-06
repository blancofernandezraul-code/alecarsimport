// Solo se usa al publicar: genera el HTML de cada página en el servidor
// para que Google y los asistentes de IA reciban el texto completo.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export { PAGES, SITE_URL } from "./seo";
