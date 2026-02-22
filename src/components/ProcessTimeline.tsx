import { motion } from "framer-motion";
import { ListChecks, Search, ShieldCheck, Handshake, FileText, Truck } from "lucide-react";

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
    <section id="proceso" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-sans">Paso a paso</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Nuestro proceso</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">De principio a fin, gestionamos todo por ti.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary/30 font-serif text-4xl font-bold group-hover:text-primary/50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{step.desc}</p>
              <span className="inline-block text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-sans font-medium">
                {step.time}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Tiempo orientativo total:{" "}
          <span className="text-primary font-semibold">2–6 semanas</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessTimeline;
