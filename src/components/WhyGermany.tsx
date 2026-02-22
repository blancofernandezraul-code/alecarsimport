import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Star, Calendar, CarFront } from "lucide-react";

const reasons = [
  { icon: CarFront, title: "Mejor estado general", desc: "Menos propietarios y uso más cuidadoso del vehículo." },
  { icon: Wrench, title: "Cultura de mantenimiento", desc: "Revisiones periódicas y mantenimiento estricto en concesionario oficial." },
  { icon: ClipboardCheck, title: "Inspecciones técnicas estrictas", desc: "La TÜV alemana es una de las más exigentes del mundo." },
  { icon: Star, title: "Más extras de serie", desc: "Techo panorámico, audio premium, paquetes deportivos y llantas superiores." },
  { icon: Calendar, title: "Mercado más joven", desc: "Renovación más frecuente: acceso a vehículos más recientes a mejor precio." },
];

const WhyGermany = () => {
  return (
    <section id="alemania" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-sans">Ventajas claras</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">¿Por qué importar desde Alemania?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">El mercado alemán ofrece los mejores vehículos de Europa.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dato destacado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-background border border-primary/30 rounded-xl p-8 md:p-10 shadow-glow"
        >
          <p className="text-center text-sm uppercase tracking-[0.2em] text-primary mb-8 font-sans font-semibold">Edad media de los vehículos</p>
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary">10,3</p>
              <p className="text-sm text-muted-foreground mt-2">años · Alemania</p>
            </div>
            <div className="w-px h-16 bg-border" />
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-muted-foreground">14,2</p>
              <p className="text-sm text-muted-foreground mt-2">años · España</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-xs mt-6">Fuente: datos del sector automovilístico europeo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGermany;
