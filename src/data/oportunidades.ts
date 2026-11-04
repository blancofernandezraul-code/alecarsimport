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
  cambio?: "Manual" | "Automático";
  potencia?: string;
  /** Lo que tiene de especial (se ve en la tarjeta) */
  destacado: string;
  /** Extras más relevantes, del más al menos importante */
  extras: string[];
  /** Ahorro estimado frente a un coche equivalente en España, p. ej. "3.500 €" */
  ahorro?: string;
  /** Precio final en España, todo incluido, p. ej. "18.900 €" */
  precio?: string;
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
  {
    id: "mercedes-a45-amg-2021",
    marca: "Mercedes-Benz",
    modelo: "Clase A",
    version: "A 45 AMG 4MATIC+ Paquete Aerodinámico",
    año: "02/2021",
    km: "51.270 km",
    combustible: "Gasolina",
    cambio: "Automático",
    potencia: "387 CV",
    destacado:
      "387 CV, tracción integral 4MATIC+ y paquete aerodinámico AMG. Mantenimiento siempre en concesionario Mercedes-Benz, con historial completo y revisión reciente.",
    extras: [
      "Paquete Aerodinámico AMG",
      "Asientos deportivos AMG",
      "Techo panorámico",
      "Faros LED Multibeam",
      "Paquete Noche AMG",
      "Control de crucero adaptativo Distronic",
      "Cámara de marcha atrás y paquete de aparcamiento",
      "Llantas AMG de 19\"",
      "Suspensión deportiva AMG",
      "Cuadro digital y MBUX con control por voz",
    ],
  },
  {
    id: "vw-golf-gti-2020",
    marca: "Otras",
    fabricante: "Volkswagen",
    modelo: "Golf",
    version: "GTI 2.0 TSI DSG",
    año: "03/2020",
    km: "124.000 km",
    combustible: "Gasolina",
    cambio: "Automático",
    potencia: "245 CV",
    destacado:
      "Un solo propietario. GTI de 245 CV con cambio automático, bloqueo de diferencial delantero y cuadro digital Active Info Display.",
    extras: [
      "Bloqueo de diferencial delantero",
      "Cuadro digital Active Info Display",
      "Navegador Discover Media",
      "Asientos deportivos calefactables",
      "Climatronic bizona",
      "Sensores de aparcamiento delante y detrás",
      "Carga inalámbrica del móvil",
      "Volante deportivo de cuero con levas",
      "Llantas de 18\"",
    ],
  },
  {
    id: "vw-scirocco-2015",
    marca: "Otras",
    fabricante: "Volkswagen",
    modelo: "Scirocco",
    version: "2.0 TSI DSG",
    año: "11/2015",
    km: "140.823 km",
    combustible: "Gasolina",
    cambio: "Automático",
    potencia: "220 CV",
    destacado:
      "220 CV y cambio DSG, con un equipamiento muy completo: techo solar panorámico, sonido Dynaudio con subwoofer y suspensión adaptativa DCC.",
    extras: [
      "Techo solar panorámico eléctrico",
      "Sonido Dynaudio con subwoofer",
      "Suspensión adaptativa DCC",
      "Navegador Discover Media",
      "Llantas de 19\" Lugano",
      "Parachoques R-Line",
      "Climatronic bizona",
      "Sensores de aparcamiento delante y detrás",
      "Control por voz",
    ],
  },
  {
    id: "audi-a1-2017",
    marca: "Audi",
    modelo: "A1",
    version: "1.4 TFSI Paquete deportivo",
    año: "06/2017",
    km: "90.000 km",
    combustible: "Gasolina",
    cambio: "Manual",
    potencia: "125 CV",
    destacado:
      "Muy bien mantenido y con la ITV alemana recién pasada. Versión con paquete deportivo, Audi Drive Select y asientos calefactables.",
    extras: [
      "Paquete deportivo con suspensión deportiva",
      "Asientos deportivos calefactables",
      "Audi Drive Select",
      "Llantas de 17\" diamantadas",
      "Volante deportivo de cuero multifunción",
      "Climatizador automático",
      "Sensores de aparcamiento traseros",
      "Bluetooth y Audi music interface",
    ],
  },
  {
    id: "mercedes-a180-2017",
    marca: "Mercedes-Benz",
    modelo: "Clase A",
    version: "A 180",
    año: "08/2017",
    km: "121.300 km",
    combustible: "Gasolina",
    cambio: "Manual",
    potencia: "122 CV",
    destacado:
      "Se entrega con dos juegos de ruedas, de verano y de invierno, ambos con llantas de aleación. Navegador y asientos deportivos calefactables.",
    extras: [
      "Dos juegos de ruedas (verano e invierno) con llantas",
      "Navegador",
      "Asientos deportivos de cuero parcial calefactables",
      "Sensores de aparcamiento delante y detrás",
      "Volante deportivo de cuero multifunción",
      "Control de crucero",
      "Faros automáticos y sensor de lluvia",
    ],
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
