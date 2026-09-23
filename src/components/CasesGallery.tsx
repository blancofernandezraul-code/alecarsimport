import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Gauge, ArrowUpRight, ChevronLeft, ChevronRight, PiggyBank, Clock, Quote } from "lucide-react";
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
import { useFadeIn } from "@/hooks/useFadeIn";

type Case = {
  imgs: string[];
  /** Punto de recorte por foto (mismo orden que imgs). Si falta, usa "50% 60%". */
  positions?: string[];
  model: string;
  year: string;
  km: string;
  summary: string;
  /** Ahorro frente a comprar el mismo coche en España */
  savings: string;
  /** Tiempo total hasta la entrega */
  time: string;
  review: { text: string; name: string; city?: string };
};

const cases: Case[] = [
  {
    imgs: [bmw1, bmw2, bmw3, bmw4],
    positions: ["50% 55%", "50% 40%", "50% 85%", "50% 55%"],
    model: "BMW 116i",
    year: "2014",
    km: "152.000 km",
    summary: "Importado con Paquete Urban y llantas Paquete M. Revisión completa, historial verificado.",
    savings: "2.000 €",
    time: "3 semanas",
    review: {
      text: "Trato excelente. Todo muy claro, bien explicado y de una forma muy profesional.",
      name: "Javier F.",
      city: "Toledo",
    },
  },
  {
    imgs: [mercedes1, mercedes2, mercedes3],
    model: "Mercedes C200 T",
    year: "2015",
    km: "149.000 km",
    summary: "Mantenimientos en casa Mercedes, parrilla AMG. Historial completo verificado.",
    savings: "3.000 €",
    time: "4 semanas",
    review: {
      text: "Buscaba un coche que en España no encontraba y con Alecars lo conseguí de forma rápida y segura, gracias a su peritaje completo.",
      name: "Martín C.",
      city: "Madrid",
    },
  },
  {
    imgs: [bmwgris1, bmwgris2, bmwgris3],
    model: "BMW 116i",
    year: "2014",
    km: "150.000 km",
    summary: "Cadena de distribución nueva y más de 2.500€ en mantenimientos recientes. Listo para muchos kilómetros.",
    savings: "2.500 €",
    time: "2 semanas",
    review: {
      text: "Un coche muy completo, con unos mantenimientos que rara vez se encuentran en España. Impecable.",
      name: "Miguel Ángel B.",
      city: "Guadalajara",
    },
  },
];

const ImageCarousel = ({
  imgs,
  positions,
  alt,
  className = "",
  priority = false,
}: {
  imgs: string[];
  positions?: string[];
  alt: string;
  className?: string;
  priority?: boolean;
}) => {
  const [idx, setIdx] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i - 1 + imgs.length) % imgs.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i + 1) % imgs.length); };

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={imgs[idx]}
          alt={`${alt} — foto ${idx + 1}`}
          loading={priority && idx === 0 ? "eager" : "lazy"}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-full h-full object-cover"
          style={{ objectPosition: positions?.[idx] ?? "50% 60%" }}
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
              key={i}
              data-animate
              data-delay={String(i + 1) as "1" | "2" | "3"}
              className="luxury-card cursor-pointer bg-background border border-border rounded-lg overflow-hidden group"
              onClick={() => setSelected(c)}
            >
              <div className="aspect-[4/3] relative">
                <ImageCarousel imgs={c.imgs} positions={c.positions} alt={c.model} className="w-full h-full" priority={i === 0} />
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

                {/* Resultado para el cliente */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="rounded border border-primary/20 bg-primary/5 px-3 py-2.5">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 mb-1 flex items-center gap-1.5">
                      <PiggyBank className="w-3 h-3 text-primary" /> Ahorro vs. España
                    </p>
                    <p className="font-sans text-lg font-semibold text-primary leading-none">{c.savings}</p>
                  </div>
                  <div className="rounded border border-border bg-card/50 px-3 py-2.5">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 mb-1 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-primary" /> Entregado en
                    </p>
                    <p className="font-sans text-lg font-semibold leading-none">{c.time}</p>
                  </div>
                </div>

                {/* Opinión del cliente */}
                <figure className="mt-5 pt-5 border-t border-border/60">
                  <Quote className="w-4 h-4 text-primary/50 mb-2" />
                  <blockquote className="font-serif italic text-base leading-snug text-foreground/90">
                    "{c.review.text}"
                  </blockquote>
                  <figcaption className="mt-3 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70">
                    — {c.review.name}{c.review.city ? ` · ${c.review.city}` : ""}
                  </figcaption>
                </figure>
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
                <ImageCarousel imgs={selected.imgs} positions={selected.positions} alt={selected.model} className="w-full h-full" />
              </div>
              <div className="p-7 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">{selected.model}</h3>
                <div className="flex gap-5 text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{selected.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-primary" />{selected.km}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selected.summary}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/5 px-4 py-2 text-sm">
                    <PiggyBank className="w-4 h-4 text-primary" /> Ahorro vs. España: <strong className="text-primary">{selected.savings}</strong>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" /> Entregado en <strong>{selected.time}</strong>
                  </span>
                </div>
                <figure className="mt-6 pt-6 border-t border-border/60">
                  <blockquote className="font-serif italic text-lg md:text-xl leading-snug">"{selected.review.text}"</blockquote>
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.15em] text-muted-foreground/70">
                    — {selected.review.name}{selected.review.city ? ` · ${selected.review.city}` : ""}
                  </figcaption>
                </figure>
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