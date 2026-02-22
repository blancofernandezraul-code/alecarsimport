import { motion } from "framer-motion";
import { Search, ShieldCheck, FileCheck, Car, Eye } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Experiencia en importación", desc: "Años de trayectoria gestionando importaciones desde Alemania con éxito." },
  { icon: Search, title: "Búsqueda personalizada", desc: "Encontramos exactamente el coche que buscas según tus criterios." },
  { icon: Eye, title: "Verificación en concesionario", desc: "Inspección presencial del vehículo antes de la compra." },
  { icon: Car, title: "Servicio llave en mano", desc: "Nos encargamos de todo: compra, transporte, trámites y entrega." },
  { icon: FileCheck, title: "Transparencia total", desc: "Documentación clara en cada paso. Sin sorpresas ni costes ocultos." },
];

const WhyAlescars = () => {
  return (
    <section id="por-que" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-sans">Confianza y calidad</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">¿Por qué elegir Alescars?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Tu importador de confianza con un servicio integral diseñado para ti.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAlescars;
