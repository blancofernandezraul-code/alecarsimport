// ─────────────────────────────────────────────────────────────────────────────
// OPORTUNIDADES: coches disponibles en Alemania seleccionados por Alecars.
//
// Para añadir un coche:
//   1. Crea la carpeta src/assets/oportunidades/<id>/ con sus fotos (máx. 10),
//      nombradas 01.webp, 02.webp... en el orden en que deben verse.
//   2. Añade un bloque abajo con ese mismo <id>.
// Para quitarlo cuando se venda: borra su bloque y su carpeta.
// ─────────────────────────────────────────────────────────────────────────────


export const MARCAS = ["BMW", "Mercedes-Benz", "Audi", "Otras"] as const;
export type Marca = (typeof MARCAS)[number];

export type Oportunidad = {
  /** Identificador único; también es el nombre de su carpeta de fotos */
  id: string;
  marca: Marca;
  /** Solo para "Otras": la marca real (Porsche, Volkswagen, Volvo…) */
  fabricante?: string;
  /** Modelo, el que aparece en el desplegable: "Serie 3", "Clase C", "A4"… */
  modelo: string;
  /** Versión concreta: "320d Touring M Sport" */
  version: string;
  año: string;
  km: string;
  combustible: string;
  cambio: "Manual" | "Automático";
  potencia?: string;
  /** Lo que tiene de especial (se ve en la tarjeta) */
  destacado: string;
  /** Extras más relevantes, del más al menos importante */
  extras: string[];
  /** Ahorro estimado frente a un coche equivalente en España, p. ej. "3.500 €" */
  ahorro?: string;
  /** Fotos (se rellenan solas desde la carpeta; solo los ejemplos las indican a mano) */
  fotos?: string[];
  /** Solo para la vista previa: se muestra la etiqueta "Ejemplo de prueba" */
  ejemplo?: boolean;
};

// Fotos de cada carpeta src/assets/oportunidades/<id>/
const ficheros = import.meta.glob("/src/assets/oportunidades/*/*.{webp,jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const fotosDe = (id: string) =>
  Object.keys(ficheros)
    .filter((ruta) => ruta.split("/")[4] === id)
    .sort()
    .slice(0, 10)
    .map((ruta) => ficheros[ruta]);

const LISTA: Oportunidad[] = [
  // Plantilla (copia el bloque, quita las barras // y rellena):
  // {
  //   id: "bmw-serie-3-320d-2019",
  //   marca: "BMW",                       // "BMW" | "Mercedes-Benz" | "Audi" | "Otras"
  //   // fabricante: "Porsche",           // solo si marca es "Otras"
  //   modelo: "Serie 3",
  //   version: "320d Touring M Sport",
  //   año: "2019",
  //   km: "85.000 km",
  //   combustible: "Diésel",
  //   cambio: "Automático",
  //   potencia: "190 CV",
  //   destacado: "Qué tiene de especial, en una o dos frases.",
  //   extras: ["Paquete M", "Techo panorámico", "Head-Up Display"],
  //   ahorro: "4.000 €",
  // },
];

export const OPORTUNIDADES: Oportunidad[] = LISTA.map((o) => ({
  ...o,
  fotos: o.fotos && o.fotos.length ? o.fotos : fotosDe(o.id),
}));

/** Nombre que se muestra: "BMW Serie 1 116i Paquete M" */
export const nombreCompleto = (o: Oportunidad) =>
  `${o.marca === "Otras" ? o.fabricante ?? "" : o.marca} ${o.modelo} ${o.version}`.replace(/\s+/g, " ").trim();

/** Clave del desplegable de modelos: en "Otras" incluye el fabricante */
export const claveModelo = (o: Oportunidad) =>
  o.marca === "Otras" ? `${o.fabricante ?? ""} ${o.modelo}`.trim() : o.modelo;
