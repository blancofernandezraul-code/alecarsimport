import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";
import { OportunidadCard, OportunidadFicha } from "./OportunidadCard";
import { OPORTUNIDADES, type Oportunidad } from "@/data/oportunidades";

// Sección de la portada: las últimas oportunidades a la vista, sin tener que entrar en la página
const MAX = 3;

const OportunidadesSection = () => {
  const [abierta, setAbierta] = useState<Oportunidad | null>(null);
  if (OPORTUNIDADES.length === 0) return null;
  const visibles = OPORTUNIDADES.slice(0, MAX);

  return (
    <section id="oportunidades" className="py-24 md:py-36 bg-background grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Disponibles en Alemania"
          title="Oportunidades"
          subtitle="Coches reales que hemos seleccionado en Alemania por ser una buena importación."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visibles.map((o) => (
            <OportunidadCard key={o.id} o={o} setAbierta={setAbierta} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/oportunidades"
            className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3.5 rounded text-xs font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
          >
            {OPORTUNIDADES.length > MAX
              ? `Ver las ${OPORTUNIDADES.length} oportunidades y buscar por marca`
              : "Ver todas las oportunidades"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <OportunidadFicha abierta={abierta} setAbierta={setAbierta} />
      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default OportunidadesSection;
