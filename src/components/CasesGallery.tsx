import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Gauge, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const cases = [
  { img: car1, model: "BMW 530d xDrive", year: "2021", km: "87.400 km", summary: "Importado 12/2025 — revisión en BMW oficial, paquete M Sport." },
  { img: car2, model: "Mercedes C200 T", year: "2020", km: "147.100 km", summary: "Importado 01/2026 — revisión en Mercedes, historial completo." },
  { img: car3, model: "Audi A4 Avant 40 TDI", year: "2022", km: "62.300 km", summary: "Importado 02/2026 — un solo propietario, paquete S Line." },
];

const CasesGallery = () => {
  const [selected, setSelected] = useState<typeof cases[0] | null>(null);

  return (
    <section id="casos" className="py-24 md:py-36 bg-card grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Resultados reales"
          title="Casos reales"
          subtitle="Algunos de los vehículos que hemos importado para nuestros clientes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.model}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="luxury-card cursor-pointer bg-background border border-border rounded-lg overflow-hidden group"
              onClick={() => setSelected(c)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={c.img}
                  alt={c.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-500">{c.model}</h3>
                <div className="flex gap-5 text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary/60" />{c.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-primary/60" />{c.km}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="group relative border border-primary/30 text-primary px-8 py-3.5 rounded text-xs font-semibold tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-glow">
            <span className="relative z-10">Ver más casos</span>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "hsl(0 0% 0% / 0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-w-3xl w-full bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors duration-300"
              >
                <X size={16} />
              </button>
              <img src={selected.img} alt={selected.model} className="w-full aspect-video object-cover" />
              <div className="p-7 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">{selected.model}</h3>
                <div className="flex gap-5 text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{selected.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-primary" />{selected.km}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selected.summary}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default CasesGallery;
