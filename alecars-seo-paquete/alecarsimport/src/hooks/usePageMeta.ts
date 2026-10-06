import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor, SITE_URL } from "@/seo";

const setAttr = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/**
 * Mantiene el título, la descripción y la URL canónica al navegar entre páginas
 * dentro de la web sin recargar. Al cargar una página, ya vienen bien desde el HTML
 * prerenderizado; esto solo cubre los saltos internos.
 */
export function usePageMeta(path?: string) {
  const { pathname } = useLocation();
  const meta = metaFor(path ?? pathname);

  useEffect(() => {
    const url = SITE_URL + (meta.path === "/" ? "/" : meta.path);
    document.title = meta.title;
    setAttr('meta[name="description"]', "content", meta.description);
    setAttr('meta[property="og:title"]', "content", meta.title);
    setAttr('meta[property="og:description"]', "content", meta.description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('link[rel="canonical"]', "href", url);
  }, [meta]);
}
