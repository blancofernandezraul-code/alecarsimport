import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Gauge, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";
import bmwgris1 from "@/assets/bmwgris1.jpeg";
import bmwgris2 from "@/assets/bmwgris2.jpeg";
import bmwgris3 from "@/assets/bmwgris3.jpeg";
import mercedes1 from "@/assets/mercedes1.jpeg";
import mercedes2 from "@/assets/mercedes2.jpeg";
import mercedes3 from "@/assets/mercedes3.jpeg";
import bmw1 from "@/assets/bmw1.jpeg";
import bmw2 from "@/assets/bmw2.jpeg";
import bmw3 from "@/assets/bmw3.jpeg";
import bmw4 from "@/assets/bmw4.jpeg";
import { useFadeIn } from "@/hooks/UseFadeIn";

type Case = {
  imgs: string[];
  model: string;
  year: string;
  km: string;
  summary: string;
};

const cases: Case[] = [
  {
    imgs: [bmw1, bmw2, bmw3, bmw4],
    model: "BMW 116i",
    year: "2014",
    km: "152.000 km",
    summary: "Importado con Paquete Urban y llantas Paquete M. Revisión completa, historial verificado.",
  },
  {
    imgs: [mercedes1, mercedes2, mercedes3],
    model: "Mercedes C200 T",
    year: "2015",
    km: "149.000 km",
    summary: "Mantenimientos en casa Mercedes, parrilla AMG. Historial completo verificado.",
  },
  {
    imgs: [bmwgris1, bmwgris2, bmwgris3],
    model: "BMW 116i",
    year: "2014",
    km: "150.000 km",
    summary: "Cadena de distribución nueva y más de 2.500€ en mantenimientos recientes. Listo para muchos kilómetros.",
  },
];

const ImageCarousel = ({
  imgs,
  alt,
  className = "",
}: {
  imgs: string[];
  alt: string;
  className?: string;
}) => {
  const [idx, setIdx] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i - 1 + imgs.length) % imgs.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i + 1) % imgs.length); };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={imgs[idx]}
          alt={`${alt} — foto ${idx + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {imgs.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors duration-300 z-10">
            <ChevronLeft size={14} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors duration-300 z-10">
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-primary w-3" : "bg-white/50 w-1.5"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const CasesGallery = () => {
  const [selected, setSelected] = useState<Case | null>(null);
  const gridRef = useFadeIn();
  const btnRef = useFadeIn();

  return (
    <section id="casos" className="py-24 md:py-36 bg-card grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Resultados reales"
          title="Casos reales"
          subtitle="Algunos de los vehículos que hemos importado para nuestros clientes."
        />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <div
              key={c.model}
              data-animate
              data-delay={String(i + 1) as "1" | "2" | "3"}
              className="luxury-card cursor-pointer bg-background border border-border rounded-lg overflow-hidden group"
              onClick={() => setSelected(c)}
            >
              <div className="aspect-[4/3] relative">
                <ImageCarousel imgs={c.imgs} alt={c.model} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none">
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
            </div>
          ))}
        </div>

        <div ref={btnRef} className="text-center mt-12">
          <div data-animate>
            <button className="group relative border border-primary/30 text-primary px-8 py-3.5 rounded text-xs font-semibold tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-glow">
              <span className="relative z-10">Ver más casos</span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox — Framer Motion aquí sí tiene sentido (interacción puntual, no scroll) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "hsl(0 0% 0% / 0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-3xl w-full bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors duration-300"
              >
                <X size={16} />
              </button>
              <div className="aspect-video">
                <ImageCarousel imgs={selected.imgs} alt={selected.model} className="w-full h-full" />
              </div>
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