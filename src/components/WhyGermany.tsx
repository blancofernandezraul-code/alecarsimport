import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Wrench, ClipboardCheck, Star, Calendar, CarFront } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";

const reasons = [
  { icon: CarFront, title: "Mejor estado general", desc: "Menos propietarios y uso más cuidadoso del vehículo." },
  { icon: Wrench, title: "Cultura de mantenimiento", desc: "Revisiones periódicas y mantenimiento estricto en concesionario oficial." },
  { icon: ClipboardCheck, title: "Inspecciones técnicas estrictas", desc: "La TÜV alemana es una de las más exigentes del mundo." },
  { icon: Star, title: "Más extras de serie", desc: "Techo panorámico, audio premium, paquetes deportivos y llantas superiores." },
  { icon: Calendar, title: "Mercado más joven", desc: "Renovación más frecuente: acceso a vehículos más recientes a mejor precio." },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {value.toFixed(1).replace(".", ",")}{suffix}
    </span>
  );
};

const WhyGermany = () => {
  return (
    <section id="alemania" className="py-24 md:py-36 bg-card grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Ventajas claras"
          title="¿Por qué importar desde Alemania?"
          subtitle="El mercado alemán ofrece los mejores vehículos de Europa."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="luxury-card flex gap-5 p-7 rounded-lg bg-background/40 border border-border group"
            >
              <div className="w-10 h-10 rounded bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-700">
                <r.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors duration-500">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dato destacado con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Decorative border */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/30 via-primary/5 to-primary/20" />
          <div className="relative bg-background rounded-xl p-10 md:p-14 shadow-glow">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
              <p className="text-primary text-[11px] uppercase tracking-[0.35em] font-sans font-medium">Edad media de los vehículos</p>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <div className="flex items-center justify-center gap-10 md:gap-20">
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl font-bold text-primary">
                  <AnimatedNumber target={10.3} suffix="" />
                </p>
                <p className="text-xs text-muted-foreground mt-3 uppercase tracking-[0.15em]">años · Alemania</p>
              </div>
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="text-center">
                <p className="font-serif text-5xl md:text-6xl font-bold text-muted-foreground/50">
                  <AnimatedNumber target={14.2} suffix="" />
                </p>
                <p className="text-xs text-muted-foreground mt-3 uppercase tracking-[0.15em]">años · España</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground/50 text-[10px] mt-8 uppercase tracking-[0.2em]">Fuente: datos del sector automovilístico europeo</p>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default WhyGermany;
