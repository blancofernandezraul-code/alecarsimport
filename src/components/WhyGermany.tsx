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

const AnimatedNumber = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setValue(target); clearInterval(timer); }
      else setValue(current);
    }, 1500 / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{value.toFixed(1).replace(".", ",")}</span>;
};

const WhyGermany = () => {
  return (
    <section id="alemania" className="py-24 md:py-36 bg-card grain-overlay relative overflow-hidden">

      {/* Glow decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Ventajas claras"
          title="¿Por qué importar desde Alemania?"
          subtitle="El mercado alemán ofrece los mejores vehículos de Europa, mejor conservados y a mejor precio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-24">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="group relative bg-background/50 border border-border/60 rounded-xl p-7 hover:border-primary/30 transition-all duration-500 hover:shadow-glow overflow-hidden flex gap-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/80 to-primary/20 group-hover:w-full transition-all duration-500 rounded-b-xl" />

              <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/40 group-hover:bg-primary/12 transition-all duration-500">
                <r.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors duration-400">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparativa de edad media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent" />
            <div className="relative bg-background rounded-2xl p-10 md:p-14">

              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary/60" />
                <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-semibold">Edad media de los vehículos</p>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary/60" />
              </div>

              <div className="flex items-center justify-center gap-8 md:gap-20">
                {/* Alemania */}
                <div className="text-center">
                  <p className="font-serif text-5xl md:text-6xl font-bold text-primary leading-none">
                    <AnimatedNumber target={10.3} />
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-[0.2em]">años</p>
                  <p className="text-sm font-semibold text-foreground mt-1 tracking-wide">Alemania</p>
                </div>

                {/* Divisor */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                  <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">vs</span>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                </div>

                {/* España */}
                <div className="text-center">
                  <p className="font-serif text-5xl md:text-6xl font-bold text-muted-foreground/40 leading-none">
                    <AnimatedNumber target={14.2} />
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-[0.2em]">años</p>
                  <p className="text-sm font-semibold text-muted-foreground/60 mt-1 tracking-wide">España</p>
                </div>
              </div>

              <p className="text-center text-muted-foreground/40 text-[10px] mt-10 uppercase tracking-[0.2em]">
                Fuente: datos del sector automovilístico europeo
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default WhyGermany;