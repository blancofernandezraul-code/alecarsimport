import { Link } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import logo from "@/assets/logo_transparente.png";
import FooterSection from "@/components/FooterSection";
import { usePageMeta } from "@/hooks/usePageMeta";

const PATH = "/cuanto-cuesta-importar-coche-alemania";
const WHATSAPP =
  "https://wa.me/34633833700?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20cu%C3%A1nto%20me%20costar%C3%ADa%20importar%20un%20coche%20de%20Alemania.";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-16 mb-5 leading-tight">{children}</h2>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-5">{children}</p>
);

const costes = [
  {
    t: "El precio del coche en Alemania",
    d: "Si se compra a un profesional, la factura alemana ya incluye el IVA. Si se compra a un particular, puede corresponder pagar en España el Impuesto de Transmisiones Patrimoniales.",
  },
  {
    t: "El transporte hasta España",
    d: "Normalmente en camión portavehículos, o conduciendo el coche con matrícula provisional.",
  },
  {
    t: "La ITV de importación y la documentación técnica",
    d: "Para matricular un coche extranjero hay que pasar una ITV específica y contar con su ficha técnica. Si el coche tiene el certificado de conformidad europeo (COC), el trámite es más sencillo.",
  },
  {
    t: "El impuesto de matriculación",
    d: "Es el coste que más varía de un coche a otro. Te lo explicamos justo debajo.",
  },
  {
    t: "La matriculación en Tráfico",
    d: "La tasa de la DGT para dar de alta el coche en España y las placas de matrícula.",
  },
  {
    t: "El impuesto de circulación",
    d: "Lo cobra cada ayuntamiento cada año, igual que con cualquier otro coche.",
  },
];

const tramos = [
  ["Hasta 120 g/km", "0 % (exento)"],
  ["De 121 a 159 g/km", "4,75 %"],
  ["De 160 a 199 g/km", "9,75 %"],
  ["200 g/km o más", "14,75 %"],
];

const CuantoCuestaImportar = () => {
  usePageMeta(PATH);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <header className="container mx-auto px-4 pt-8 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Alecars, volver al inicio">
          <img src={logo} alt="Alecars" className="h-20 md:h-24 w-auto object-contain" />
        </Link>
        <a
          href="/#formulario"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
        >
          Solicitar búsqueda
        </a>
      </header>

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.alecars.es/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Cuánto cuesta importar un coche de Alemania",
                  item: "https://www.alecars.es" + PATH,
                },
              ],
            }),
          }}
        />
        <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <nav aria-label="Ruta de navegación" className="text-sm text-muted-foreground/70 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span>Cuánto cuesta importar un coche de Alemania</span>
          </nav>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-[1.08]">
            ¿Cuánto cuesta importar un coche de Alemania?
          </h1>

          <p className="text-foreground text-lg md:text-xl font-light leading-relaxed mb-5">
            Importar un coche de Alemania cuesta el precio del coche más el transporte hasta España, la ITV y la
            documentación, y los impuestos de matriculación y circulación. El total depende sobre todo del modelo, su
            antigüedad y sus emisiones. Con Alecars recibes una sola cifra cerrada, con todo incluido, antes de comprar.
          </p>

          <H2>Qué se paga al importar un coche</H2>
          <ol className="space-y-6 mb-6">
            {costes.map((c, i) => (
              <li key={c.t} className="flex gap-5 border-t border-border/60 pt-6">
                <span className="font-serif text-3xl font-bold text-primary leading-none w-8 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-1.5">{c.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <H2>El impuesto de matriculación, explicado</H2>
          <P>
            En un coche usado importado, el impuesto de matriculación no se calcula sobre lo que pagaste por él, sino sobre el
            valor fiscal que fija Hacienda en sus tablas oficiales según el modelo y la antigüedad del coche. Sobre ese valor
            se aplica un porcentaje que depende de las emisiones de CO2:
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-medium text-muted-foreground text-sm">Emisiones de CO2</th>
                  <th className="py-3 font-medium text-muted-foreground text-sm">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {tramos.map(([e, p]) => (
                  <tr key={e} className="border-b border-border/60">
                    <td className="py-3 pr-4">{e}</td>
                    <td className="py-3 text-primary font-semibold">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground/80 text-sm mb-5">
            Tramos generales vigentes en 2026 (fuente: RACE). Algunas comunidades autónomas aplican porcentajes algo más
            altos.
          </p>
          <P>
            Por eso dos coches con el mismo precio en Alemania pueden pagar impuestos muy distintos en España. Antes de
            comprar, calculamos este impuesto para tu coche concreto.
          </P>

          <H2>¿Sale a cuenta importar?</H2>
          <P>
            Depende del coche. Suele compensar más en coches de gama media y alta, en modelos que escasean en España o en
            unidades con más equipamiento del habitual. En coches de poco valor, los costes fijos de la importación pesan más.
          </P>
          <P>
            Lo mejor es comparar con números reales: dinos qué coche buscas, te preparamos el precio final y lo comparas tú
            con lo que encuentres en España.
          </P>

          <H2>Cómo es nuestro presupuesto</H2>
          <P>
            Te enviamos por escrito una única cifra con absolutamente todo incluido: el coche, el transporte, los impuestos,
            la ITV, la matriculación y nuestro servicio. Sin costes ocultos y sin sorpresas al final.
          </P>
          <P>
            Si quieres ver el proceso completo paso a paso, lo tienes en{" "}
            <Link to="/importar-coche-alemania" className="text-primary underline underline-offset-4">
              cómo importar un coche de Alemania
            </Link>
            .
          </P>

          <div className="mt-16 border border-primary/30 rounded-xl p-8 md:p-10 bg-card">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">¿Cuánto costaría tu coche?</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Cuéntanos qué buscas y te preparamos el precio final, con todo incluido. Gratis y sin compromiso. Respondemos
              en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#formulario"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Pedir mi presupuesto <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
};

export default CuantoCuestaImportar;
