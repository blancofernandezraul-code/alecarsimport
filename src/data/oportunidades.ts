// ─────────────────────────────────────────────────────────────────────────────
// OPORTUNIDADES: coches disponibles en Alemania seleccionados por Alecars.
//
// Para añadir un coche:
//   1. Crea la carpeta src/assets/oportunidades/<id>/ con sus fotos (máx. 10),
//      nombradas 01.webp, 02.webp... en el orden en que deben verse.
//   2. Añade un bloque abajo con ese mismo <id>.
// Para quitarlo cuando se venda: borra su bloque y su carpeta.
// ─────────────────────────────────────────────────────────────────────────────


// Fotos de los casos reales, usadas solo en los ejemplos de prueba (borrar junto con ellos)
import bmwgris1 from "@/assets/bmwgris1.webp";
import bmwgris2 from "@/assets/bmwgris2.webp";
import bmwgris3 from "@/assets/bmwgris3.webp";
import mercedes1 from "@/assets/mercedes1.webp";
import mercedes2 from "@/assets/mercedes2.webp";
import mercedes3 from "@/assets/mercedes3.webp";
import bmw1 from "@/assets/bmw1.webp";
import bmw2 from "@/assets/bmw2.webp";
import bmw3 from "@/assets/bmw3.webp";
import bmw4 from "@/assets/bmw4.webp";

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
  cambio?: "Manual" | "Automático";
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
  // ── EJEMPLOS DE PRUEBA con los casos reales (borrar cuando lleguen las unidades reales) ──
  {
    id: "ejemplo-bmw-116i-urban",
    marca: "BMW",
    modelo: "Serie 1",
    version: "116i Paquete Urban",
    año: "2014",
    km: "152.000 km",
    combustible: "Gasolina",
    destacado: "Importado con Paquete Urban y llantas Paquete M. Revisión completa e historial verificado.",
    extras: ["Paquete Urban", "Llantas Paquete M"],
    ahorro: "2.000 €",
    fotos: [bmw1, bmw2, bmw3, bmw4],
    ejemplo: true,
  },
  {
    id: "ejemplo-mercedes-c200-t",
    marca: "Mercedes-Benz",
    modelo: "Clase C",
    version: "C 200 T",
    año: "2015",
    km: "149.000 km",
    combustible: "Gasolina",
    destacado: "Mantenimientos en casa Mercedes y parrilla AMG. Historial completo verificado.",
    extras: ["Parrilla AMG", "Mantenimientos en Mercedes"],
    ahorro: "3.000 €",
    fotos: [mercedes1, mercedes2, mercedes3],
    ejemplo: true,
  },
  {
    id: "ejemplo-bmw-116i-gris",
    marca: "BMW",
    modelo: "Serie 1",
    version: "116i",
    año: "2014",
    km: "150.000 km",
    combustible: "Gasolina",
    destacado: "Cadena de distribución nueva y más de 2.500 € en mantenimientos recientes. Listo para muchos kilómetros.",
    extras: ["Cadena de distribución nueva", "Mantenimientos recientes"],
    ahorro: "2.500 €",
    fotos: [bmwgris1, bmwgris2, bmwgris3],
    ejemplo: true,
  },
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
