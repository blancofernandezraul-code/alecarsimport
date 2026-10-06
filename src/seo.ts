// Título, descripción y dirección de cada página.
// Al publicar, el script prerender.mjs genera el HTML completo de cada ruta
// con estos datos en el <head>. Para añadir una página nueva:
//   1. créala en src/pages y añádela en src/App.tsx
//   2. añade aquí su ruta con título y descripción
//   3. añade su dirección en public/sitemap.xml

export const SITE_URL = "https://www.alecars.es";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** false = no se indexa (p. ej. la página de error) */
  index?: boolean;
};

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Importar coche de Alemania llave en mano | Alecars",
    description:
      "Buscamos, verificamos y compramos tu coche en Alemania y te lo entregamos listo para circular en España. Respuesta en menos de 24 h. Búsqueda gratis.",
  },
  {
    path: "/importar-coche-alemania",
    title: "Cómo importar un coche de Alemania a España | Alecars",
    description:
      "Búsqueda, verificación, compra, transporte, ITV, impuestos y matriculación. Así importamos tu coche desde Alemania, en un plazo de 2 a 6 semanas.",
  },
  {
    path: "/privacidad",
    title: "Política de privacidad | Alecars",
    description: "Qué datos recoge la web de Alecars, para qué los usamos y cuáles son tus derechos.",
  },
  {
    path: "/aviso-legal",
    title: "Aviso legal | Alecars",
    description: "Información legal sobre el titular y las condiciones de uso de la web de Alecars.",
  },
  {
    path: "/404",
    title: "Página no encontrada | Alecars",
    description: "La página que buscas no existe o se ha movido.",
    index: false,
  },
];

export const metaFor = (path: string) => PAGES.find((p) => p.path === path) ?? PAGES[PAGES.length - 1];
