import { motion } from "framer-motion";
import { ListChecks, Search, ShieldCheck, Handshake, FileText, Truck } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";

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
    <section id="proceso" className="py-24 md:py-36 bg-background grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Paso a paso"
          title="Nuestro proceso"
          subtitle="De principio a fin, gestionamos todo por ti."
        />

        {/* Desktop: connected timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className={`md:flex md:items-center md:gap-8 md:py-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`luxury-card flex-1 bg-card border border-border rounded-lg p-7 md:p-8 group ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-primary/20 font-serif text-3xl font-bold group-hover:text-primary/40 transition-colors duration-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-9 h-9 rounded bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-700">
                        <step.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{step.desc}</p>
                    <span className="inline-block text-[10px] text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full font-sans font-medium tracking-wider uppercase">
                      {step.time}
                    </span>
                  </div>

                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary/60 ring-4 ring-background" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-muted-foreground text-sm">Tiempo orientativo total:</span>
            <span className="text-primary font-serif font-semibold text-lg">2–6 semanas</span>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default ProcessTimeline;
