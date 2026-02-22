import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Gauge } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const cases = [
  {
    img: car1,
    model: "BMW 530d xDrive",
    year: "2021",
    km: "87.400 km",
    summary: "Importado 12/2025 — revisión en BMW oficial, paquete M Sport.",
  },
  {
    img: car2,
    model: "Mercedes C200 T",
    year: "2020",
    km: "147.100 km",
    summary: "Importado 01/2026 — revisión en Mercedes, historial completo.",
  },
  {
    img: car3,
    model: "Audi A4 Avant 40 TDI",
    year: "2022",
    km: "62.300 km",
    summary: "Importado 02/2026 — un solo propietario, paquete S Line.",
  },
];

const CasesGallery = () => {
  const [selected, setSelected] = useState<typeof cases[0] | null>(null);

  return (
    <section id="casos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-sans">Resultados reales</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Casos reales</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Algunos de los vehículos que hemos importado para nuestros clientes.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.model}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer bg-background border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-glow"
              onClick={() => setSelected(c)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">{c.model}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{c.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-primary" />{c.km}</span>
                </div>
                <p className="text-muted-foreground text-sm">{c.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border border-primary/40 text-primary px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary/10 transition-all duration-300">
            Ver más casos
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-card border border-border rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 rounded-full p-2 text-foreground hover:bg-primary/20 transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selected.img} alt={selected.model} className="w-full aspect-video object-cover" />
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold mb-2">{selected.model}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{selected.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-primary" />{selected.km}</span>
                </div>
                <p className="text-muted-foreground">{selected.summary}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CasesGallery;
