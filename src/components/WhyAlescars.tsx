import { motion } from "framer-motion";
import { Search, ShieldCheck, FileCheck, Car, Eye } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Experiencia en importación", desc: "Años de trayectoria gestionando importaciones desde Alemania con éxito." },
  { icon: Search, title: "Búsqueda personalizada", desc: "Encontramos exactamente el coche que buscas según tus criterios." },
  { icon: Eye, title: "Verificación en concesionario", desc: "Inspección presencial del vehículo antes de la compra." },
  { icon: Car, title: "Servicio llave en mano", desc: "Nos encargamos de todo: compra, transporte, trámites y entrega." },
  { icon: FileCheck, title: "Transparencia total", desc: "Documentación clara en cada paso. Sin sorpresas ni costes ocultos." },
];

const SectionHeader = ({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    className="text-center mb-20"
  >
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
      <p className="text-primary text-[11px] uppercase tracking-[0.35em] font-sans font-medium">{tag}</p>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
    <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 leading-tight">{title}</h2>
    <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg font-light">{subtitle}</p>
  </motion.div>
);

const WhyAlescars = () => {
  return (
    <section id="por-que" className="py-24 md:py-36 bg-background grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Confianza y calidad"
          title="¿Por qué elegir Alescars?"
          subtitle="Tu importador de confianza con un servicio integral diseñado para ti."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="luxury-card bg-card border border-border rounded-lg p-8 md:p-10 group"
            >
              <div className="w-12 h-12 rounded bg-primary/8 border border-primary/10 flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-700">
                <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-500">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export { SectionHeader };
export default WhyAlescars;
