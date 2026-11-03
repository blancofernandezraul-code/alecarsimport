import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Gauge, Fuel, Cog, PiggyBank, X, MessageCircle, Check } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import { nombreCompleto, type Oportunidad } from "@/data/oportunidades";

// Tarjeta y ficha de un coche de Oportunidades (se usan en la portada y en /oportunidades)

export const whatsapp = (o: Oportunidad) =>
  "https://wa.me/34633833700?text=" +
  encodeURIComponent(`Hola, me interesa el ${nombreCompleto(o)} (${o.año}, ${o.km}) que he visto en la web.`);

const Datos = ({ o, size = "sm" }: { o: Oportunidad; size?: "sm" | "md" }) => (
  <div
    className={`grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground ${
      size === "sm" ? "text-xs" : "text-sm"
    } uppercase tracking-wider`}
  >
    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary/70" />{o.año}</span>
    <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-primary/70" />{o.km}</span>
    <span className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5 text-primary/70" />{o.combustible}</span>
    {o.cambio && <span className="flex items-center gap-1.5"><Cog className="w-3.5 h-3.5 text-primary/70" />{o.cambio}</span>}
  </div>
);


export const OportunidadCard = ({
  o,
  priority = false,
  setAbierta,
}: {
  o: Oportunidad;
  priority?: boolean;
  setAbierta: (o: Oportunidad) => void;
}) => (
  <article
      className="luxury-card bg-card border border-border rounded-lg overflow-hidden group flex flex-col"
  >
    <div className="aspect-[4/3] relative overflow-hidden shrink-0">
      <ImageCarousel imgs={o.fotos ?? []} alt={nombreCompleto(o)} className="w-full h-full" priority={priority} />
      <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.15em] bg-background/75 backdrop-blur-sm px-2.5 py-1 rounded">
        {o.marca === "Otras" ? o.fabricante : o.marca}
      </span>
      {o.ejemplo && (
        <span className="absolute top-3 right-3 z-10 text-[10px] uppercase tracking-[0.15em] bg-primary text-primary-foreground px-2.5 py-1 rounded font-semibold">
          Ejemplo de prueba
        </span>
      )}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h2 className="font-serif text-xl font-semibold mb-1 leading-snug">
        {o.marca === "Otras" ? o.fabricante : o.marca} {o.modelo}
      </h2>
      <p className="text-sm text-foreground/80 mb-4">
        {o.version}
        {o.potencia ? ` · ${o.potencia}` : ""}
      </p>
      <Datos o={o} />
      <p className="text-muted-foreground text-sm leading-relaxed mt-4">{o.destacado}</p>
      {o.extras.length > 0 && (
        <>
          <p className="font-serif text-lg font-semibold mt-5 mb-2">Extras destacados</p>
          <ul className="space-y-1.5">
            {o.extras.slice(0, 4).map((e) => (
              <li key={e} className="flex gap-2 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} /> {e}
              </li>
            ))}
          </ul>
          {o.extras.length > 4 && (
            <button
              type="button"
              onClick={() => setAbierta(o)}
              className="text-sm text-primary underline underline-offset-4 mt-2 text-left"
            >
              Ver los {o.extras.length} extras y todas las fotos
            </button>
          )}
        </>
      )}
      <div className="mt-auto pt-6">
        {o.ahorro && (
          <p className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/5 px-3 py-2 text-sm mb-4">
            <PiggyBank className="w-4 h-4 text-primary" /> Ahorro vs. España:{" "}
            <strong className="text-primary">{o.ahorro}</strong>
          </p>
        )}
        <div className="flex flex-col gap-2.5">
          <a
            href={whatsapp(o)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Me interesa este coche
          </a>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setAbierta(o)}
              className="inline-flex items-center justify-center whitespace-nowrap border border-border px-2 py-3 rounded text-[11px] font-bold tracking-wide uppercase hover:border-primary/50 transition-colors"
            >
              Ver ficha
            </button>
            <a
              href="/#formulario"
              className="inline-flex items-center justify-center text-center whitespace-nowrap border border-primary/40 text-primary px-2 py-3 rounded text-[11px] font-bold tracking-wide uppercase hover:bg-primary/10 transition-colors"
            >
              Buscar uno parecido
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export const OportunidadFicha = ({
  abierta,
  setAbierta,
}: {
  abierta: Oportunidad | null;
  setAbierta: (o: Oportunidad | null) => void;
}) => (
  <AnimatePresence>
    {abierta && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 overflow-y-auto"
        style={{ background: "hsl(0 0% 0% / 0.92)", backdropFilter: "blur(12px)" }}
        onClick={() => setAbierta(null)}
        role="dialog"
        aria-modal="true"
        aria-label={nombreCompleto(abierta)}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-3xl w-full bg-card border border-border rounded-xl overflow-hidden shadow-2xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setAbierta(null)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="aspect-video">
            <ImageCarousel imgs={abierta.fotos ?? []} alt={nombreCompleto(abierta)} className="w-full h-full" priority />
          </div>
          <div className="p-7 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-1">{nombreCompleto(abierta)}</h3>
            {abierta.potencia && <p className="text-foreground/80 mb-5">{abierta.potencia}</p>}
            <Datos o={abierta} size="md" />
            <p className="text-muted-foreground leading-relaxed mt-6">{abierta.destacado}</p>

            {abierta.extras.length > 0 && (
              <>
                <p className="font-serif text-xl font-semibold mt-7 mb-3">Extras destacados</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {abierta.extras.map((e) => (
                    <li key={e} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} /> {e}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {abierta.ahorro && (
              <p className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm mt-7">
                <PiggyBank className="w-4 h-4 text-primary" /> Ahorro estimado frente a España:{" "}
                <strong className="text-primary">{abierta.ahorro}</strong>
              </p>
            )}

            <p className="text-sm text-muted-foreground mt-6">
              Antes de comprarlo, un perito colaborador lo revisa en persona en Alemania. Te enviamos un presupuesto
              cerrado con todo incluido.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={whatsapp(abierta)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Me interesa este coche
              </a>
              <a
                href="/#formulario"
                className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary px-6 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
              >
                Buscar uno parecido
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
