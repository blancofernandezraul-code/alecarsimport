import { motion } from "framer-motion";
import { ListChecks, Search, ShieldCheck, Handshake, FileText, Truck } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const steps = [
  { icon: ListChecks, title: "Tú eliges", desc: "Marca, modelo, presupuesto y criterios.", time: "Día 1" },
  { icon: Search, title: "Búsqueda y filtrado", desc: "Localizamos las mejores unidades del mercado alemán.", time: "1–2 semanas" },
  { icon: ShieldCheck, title: "Verificación", desc: "Historial completo y estado técnico verificado.", time: "2–3 días" },
  { icon: Handshake, title: "Negociación y compra", desc: "Negociamos el mejor precio y cerramos la compra.", time: "1–3 días" },
  { icon: FileText, title: "Gestión de trámites", desc: "Documentación, ITV, matriculación e impuestos.", time: "1–2 semanas" },
  { icon: Truck, title: "Entrega llave en mano", desc: "Tu coche entregado y listo para circular en España.", time: "3–5 días" },
];

const ProcessTimeline = () => {
  return (
    <section id="proceso" className="py-24 md:py-36 bg-background grain-overlay relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Paso a paso"
          title="Nuestro proceso"
          subtitle="De principio a fin, gestionamos todo por ti. Sin estrés, sin complicaciones."
          titleClassName="font-serif text-6xl md:text-8xl lg:text-[8rem] font-bold mb-5 leading-tight"
        />

        {/* MOBILE */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                className="flex gap-4 pl-1 will-change-transform"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center z-10 relative">
                    <step.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1 bg-card border border-border/60 rounded-xl p-4 mb-1 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/80 to-primary/10 group-hover:w-full transition-all duration-500 rounded-b-xl" />
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-serif text-base font-semibold">{step.title}</h3>
                    <span className="text-[9px] text-primary bg-primary/8 border border-primary/15 px-2 py-0.5 rounded-full font-medium tracking-wider uppercase shrink-0 ml-2">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  <span className="absolute top-3 right-3 font-serif text-2xl font-bold text-border/40 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block relative max-w-[110rem] mx-auto px-2 lg:px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                  className={`flex items-center gap-4 lg:gap-6 py-12 will-change-transform ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 group relative bg-card border border-border/60 rounded-xl p-16 lg:p-20 min-h-[420px] lg:min-h-[480px] flex flex-col justify-center hover:border-primary/30 transition-all duration-500 hover:shadow-glow overflow-hidden ${isLeft ? "text-right" : "text-left"}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/80 to-primary/10 group-hover:w-full transition-all duration-500 rounded-b-xl" />

                    <div className={`flex items-center gap-7 mb-7 ${isLeft ? "flex-row-reverse justify-start" : ""}`}>
                      <span className="text-border/50 font-serif text-7xl lg:text-8xl font-bold group-hover:text-primary/30 transition-colors duration-500 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-20 h-20 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/12 transition-all duration-500">
                        <step.icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-serif text-4xl lg:text-5xl font-semibold mb-5 group-hover:text-primary transition-colors duration-400">{step.title}</h3>
                    <p className="text-muted-foreground text-2xl mb-8 leading-relaxed">{step.desc}</p>
                    <span className="inline-block text-base text-primary bg-primary/8 border border-primary/15 px-6 py-3 rounded-full font-medium tracking-wider uppercase">
                      {step.time}
                    </span>
                  </div>

                  <div className="flex items-center justify-center w-5 h-5 shrink-0 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shadow-glow" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          className="text-center mt-14 md:mt-20"
        >
          <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-primary/25 bg-primary/5 backdrop-blur-sm">
            <span className="text-muted-foreground text-sm">Tiempo orientativo total:</span>
            <span className="text-primary font-serif font-bold text-lg">2–6 semanas</span>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default ProcessTimeline;