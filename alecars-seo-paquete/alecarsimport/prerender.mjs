// Se ejecuta al publicar (npm run build), después de las dos compilaciones de Vite.
// Genera un HTML completo por página dentro de dist/, con su texto y su <head> propio.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

const { render, PAGES, SITE_URL } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceOnce(html, regex, replacement, label) {
  const found = typeof regex === "string" ? html.includes(regex) : regex.test(html);
  if (!found) throw new Error(`prerender: no encuentro ${label} en index.html`);
  return html.replace(regex, () => replacement);
}

for (const page of PAGES) {
  const url = SITE_URL + (page.path === "/" ? "/" : page.path);
  const appHtml = render(page.path);
  let html = template;

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`, "<title>");
  html = replaceOnce(html, /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(page.description)}" />`, "meta description");
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(page.title)}" />`, "og:title");
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(page.description)}" />`, "og:description");
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`, "og:url");

  if (page.index === false) {
    html = replaceOnce(html, /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<meta name="robots" content="noindex" />`, "canonical");
  } else {
    html = replaceOnce(html, /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${url}" />`, "canonical");
  }

  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${appHtml}</div>`, '<div id="root">');

  // "/" -> index.html, "/privacidad" -> privacidad.html, "/404" -> 404.html
  const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerender: ${page.path} -> dist/${file} (${appHtml.length} caracteres de contenido)`);
}

fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
