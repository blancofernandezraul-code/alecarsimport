import { Link } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import logo from "@/assets/logo_transparente.png";
import FooterSection from "@/components/FooterSection";
import { steps } from "@/components/ProcessTimeline";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP =
  "https://wa.me/34633833700?text=Hola%2C%20he%20le%C3%ADdo%20c%C3%B3mo%20importar%20un%20coche%20de%20Alemania%20y%20me%20gustar%C3%ADa%20empezar.";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-16 mb-5 leading-tight">{children}</h2>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-5">{children}</p>
);

const ImportarCocheAlemania = () => {
  usePageMeta("/importar-coche-alemania");
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
        <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <nav aria-label="Ruta de navegación" className="text-sm text-muted-foreground/60 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span>Importar un coche de Alemania</span>
          </nav>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-[1.08]">
            Cómo importar un coche de Alemania a España
          </h1>

          <p className="text-foreground text-lg md:text-xl font-light leading-relaxed mb-5">
            Importar un coche de Alemania consiste en encontrarlo, comprobar que está bien, comprarlo, traerlo a España y
            matricularlo aquí. Con Alecars lo hacemos todo nosotros, de forma orientativa en 2 a 6 semanas, y tú solo eliges
            el coche.
          </p>
          <P>
            Esta página explica cada paso, qué se paga y qué tienes que hacer tú. Si prefieres que te lo contemos directamente,
            escríbenos por WhatsApp.
          </P>

          <H2>El proceso, paso a paso</H2>
          <ol className="space-y-6 mb-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 border-t border-border/60 pt-6">
                <span className="font-serif text-3xl font-bold text-primary leading-none w-8 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-1.5">
                    {s.title} <span className="text-sm font-sans font-normal text-muted-foreground">· {s.time}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <P>
            En total, entre 2 y 6 semanas. Depende sobre todo de cuánto cueste encontrar la unidad adecuada y de los plazos de
            la ITV y de Tráfico.
          </P>

          <H2>Qué comprobamos antes de comprar</H2>
          <P>
            En Alemania hay mucha oferta de coches usados, pero no todos los anuncios cuentan la historia completa. Antes de
            dar el visto bueno revisamos el historial completo del coche y su estado técnico, con inspección presencial del
            vehículo. Si algo no cuadra, no se compra y buscamos otra unidad.
          </P>

          <H2>Qué se paga al importar un coche</H2>
          <P>
            Además del precio del coche en Alemania, una importación tiene estos costes: el transporte hasta España, la ITV y
            la documentación técnica, los impuestos y la matriculación.
          </P>
          <P>
            El impuesto que más sorprende es el de matriculación. En un coche usado importado no se calcula sobre lo que pagaste
            por él, sino sobre el valor fiscal que fija Hacienda en sus tablas según el modelo y la antigüedad, y el porcentaje
            depende de las emisiones de CO2 del coche.
          </P>
          <P>
            Antes de comprar nada te enviamos un presupuesto por escrito con el desglose de cada coste, para que sepas el precio
            final del coche matriculado en España.
          </P>

          <H2>Qué tienes que hacer tú</H2>
          <P>
            Decirnos qué coche buscas: marca, modelo, presupuesto y los extras que te importan, como techo panorámico, paquete
            deportivo o audio premium. A partir de ahí te enseñamos las mejores unidades que encontremos y decides tú.
          </P>

          <H2>¿Puedo importarlo yo por mi cuenta?</H2>
          <P>
            Sí, cualquier particular puede hacerlo. Supone buscar entre anuncios en alemán, tratar con el vendedor, ir a ver el
            coche o encargar una revisión, organizar el transporte y hacer los trámites de ITV, Hacienda y Tráfico en España.
            Lo que aportamos es hacer todo eso por ti, en alemán y con el proceso ya rodado.
          </P>

          <div className="mt-16 border border-primary/30 rounded-xl p-8 md:p-10 bg-card">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">¿Empezamos con tu coche?</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              La búsqueda es gratuita y sin compromiso. Respondemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#formulario"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Solicitar búsqueda gratuita <ArrowRight className="w-4 h-4" />
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

export default ImportarCocheAlemania;
