import { ClipboardCheck, ShieldCheck, Check } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";
import { useFadeIn } from "@/hooks/useFadeIn";

const blocks = [
  {
    icon: ClipboardCheck,
    title: "Peritaje profesional en Alemania",
    text:
      "Antes de ir a por ningún coche, un perito mecánico colaborador de Alecars lo revisa en persona. Contamos con peritos en tres zonas distintas de Alemania.",
    points: [
      "Revisión presencial del motor, la mecánica y la carrocería",
      "Informe completo con fotos",
      "Una decisión profesional: si la unidad no es correcta para importar, no se compra",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Garantía mecánica opcional",
    text:
      "Además del peritaje, puedes contratar una garantía mecánica para tu coche. Así no solo sabes que está bien cuando lo compras: también estás cubierto si aparece una avería después.",
    points: [
      "Cubre averías mecánicas y eléctricas según la cobertura elegida",
      "Te explicamos las opciones en la llamada, adaptadas a tu coche",
      "Es opcional: tú decides si la quieres",
    ],
  },
];

const PeritajeGarantia = () => {
  const gridRef = useFadeIn();

  return (
    <section id="garantias" className="py-24 md:py-36 bg-card grain-overlay relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Tranquilidad"
          title="Peritaje antes de comprar, garantía después"
          subtitle="Dos capas de protección para que tu coche llegue bien y siga bien."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              data-animate
              data-delay={String(i + 1) as "1" | "2"}
              className="bg-background/50 border border-border/60 rounded-xl p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center mb-6">
                <b.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{b.text}</p>
              <ul className="space-y-3">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default PeritajeGarantia;
