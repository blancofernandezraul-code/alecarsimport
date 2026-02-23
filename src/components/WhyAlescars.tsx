import { useFadeIn } from "@/hooks/useFadeIn";
import { Search, ShieldCheck, FileCheck, Car, Eye } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Experiencia en importación", desc: "Años de trayectoria gestionando importaciones desde Alemania con éxito." },
  { icon: Search, title: "Búsqueda personalizada", desc: "Encontramos exactamente el coche que buscas según tus criterios." },
  { icon: Eye, title: "Verificación en concesionario", desc: "Inspección presencial del vehículo antes de la compra." },
  { icon: Car, title: "Servicio llave en mano", desc: "Nos encargamos de todo: compra, transporte, trámites y entrega." },
  { icon: FileCheck, title: "Transparencia total", desc: "Documentación clara en cada paso. Sin sorpresas ni costes ocultos." },
];

export const SectionHeader = ({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="text-center mb-16 md:mb-24">
      <div data-animate className="flex items-center justify-center gap-3 mb-5">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
        <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-semibold">{tag}</span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
      </div>
      <h2 data-animate data-delay="1" className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 leading-tight">{title}</h2>
      <p data-animate data-delay="2" className="text-muted-foreground max-w-md mx-auto text-base md:text-lg font-light leading-relaxed">{subtitle}</p>
    </div>
  );
};

const WhyAlescars = () => {
  const gridRef = useFadeIn();

  return (
    <section id="por-que" className="py-24 md:py-36 bg-background grain-overlay relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Confianza y calidad"
          title="¿Por qué elegir Alecars?"
          subtitle="Tu importador de confianza. Un servicio integral pensado para que no tengas que preocuparte de nada."
        />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-animate
              data-delay={String(i + 1) as "1" | "2" | "3" | "4" | "5"}
              className="group relative bg-card border border-border/60 rounded-xl p-7 md:p-9 hover:border-primary/30 transition-colors duration-500 hover:shadow-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
              <div className="w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:bg-primary/12 group-hover:shadow-glow transition-all duration-500">
                <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold mb-2.5 group-hover:text-primary transition-colors duration-400">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-500 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default WhyAlescars;