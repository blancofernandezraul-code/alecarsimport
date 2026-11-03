import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Gauge, Fuel, Cog, PiggyBank, X, MessageCircle, ArrowRight, Check } from "lucide-react";
import logo from "@/assets/logo_transparente.png";
import FooterSection from "@/components/FooterSection";
import ImageCarousel from "@/components/ImageCarousel";
import { usePageMeta } from "@/hooks/usePageMeta";
import { OPORTUNIDADES, MARCAS, nombreCompleto, claveModelo, type Marca, type Oportunidad } from "@/data/oportunidades";

const TODAS = "Todas";
const TODOS = "";
const etiquetaMarca = (m: Marca) => (m === "Otras" ? "Otras marcas" : m);

const whatsapp = (o: Oportunidad) =>
  "https://wa.me/34633833700?text=" +
  encodeURIComponent(`Hola, me interesa el ${nombreCompleto(o)} (${o.año}, ${o.km}) que he visto en Oportunidades de la web.`);

const Datos = ({ o, size = "sm" }: { o: Oportunidad; size?: "sm" | "md" }) => (
  <div
    className={`grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground ${
      size === "sm" ? "text-xs" : "text-sm"
    } uppercase tracking-wider`}
  >
    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary/70" />{o.año}</span>
    <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-primary/70" />{o.km}</span>
    <span className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5 text-primary/70" />{o.combustible}</span>
    <span className="flex items-center gap-1.5"><Cog className="w-3.5 h-3.5 text-primary/70" />{o.cambio}</span>
  </div>
);

const Oportunidades = () => {
  usePageMeta("/oportunidades");
  const [marca, setMarca] = useState<Marca | typeof TODAS>(TODAS);
  const [modelo, setModelo] = useState<string>(TODOS);
  const [abierta, setAbierta] = useState<Oportunidad | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cerrar la ficha con la tecla Escape
  useEffect(() => {
    if (!abierta) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierta(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta]);

  const porMarca = useMemo(
    () => (marca === TODAS ? OPORTUNIDADES : OPORTUNIDADES.filter((o) => o.marca === marca)),
    [marca]
  );
  const modelos = useMemo(() => [...new Set(porMarca.map(claveModelo))].sort((a, b) => a.localeCompare(b, "es")), [porMarca]);
  const lista = useMemo(
    () => (modelo === TODOS ? porMarca : porMarca.filter((o) => claveModelo(o) === modelo)),
    [porMarca, modelo]
  );
  const cuenta = (m: Marca | typeof TODAS) =>
    m === TODAS ? OPORTUNIDADES.length : OPORTUNIDADES.filter((o) => o.marca === m).length;

  const elegirMarca = (m: Marca | typeof TODAS) => {
    setMarca(m);
    setModelo(TODOS);
  };

  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <header className="container mx-auto px-4 pt-8 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Alecars, volver al inicio">
          <img src={logo} alt="Alecars" className="h-20 md:h-24 w-auto object-contain" />
        </Link>
        <a
          href="/#formulario"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
        >
          Solicitar búsqueda
        </a>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted-foreground/70 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Oportunidades</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.08]">
            Oportunidades: coches seleccionados en Alemania
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
            Unidades reales disponibles en Alemania que hemos seleccionado porque son una buena importación. Elige marca y
            modelo, mira las fotos y, si alguno te encaja, te lo traemos con el mismo servicio llave en mano.
          </p>
        </div>

        {/* ── Buscador ── */}
        <div className="border border-border/60 rounded-xl bg-card/60 p-5 md:p-6 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end gap-5">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-3">Marca</p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por marca">
                {[TODAS, ...MARCAS].map((m) => {
                  const activa = marca === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => elegirMarca(m as Marca | typeof TODAS)}
                      aria-pressed={activa}
                      className={`px-4 py-2.5 rounded border text-sm transition-colors ${
                        activa
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-border text-foreground/80 hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {m === TODAS ? "Todas" : etiquetaMarca(m as Marca)}
                      <span className={`ml-2 text-xs ${activa ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {cuenta(m as Marca | typeof TODAS)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-72">
              <label htmlFor="modelo" className="text-sm text-muted-foreground mb-3 block">Modelo</label>
              <select
                id="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                disabled={modelos.length === 0}
                className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:border-primary/60 focus:ring-1 focus:ring-primary/30 outline-none disabled:opacity-50"
              >
                <option value={TODOS}>Todos los modelos</option>
                {modelos.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-5" aria-live="polite">
            {lista.length === 1 ? "1 coche disponible" : `${lista.length} coches disponibles`}
          </p>
        </div>

        {/* ── Resultados ── */}
        {lista.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {lista.map((o, i) => (
              <article
                key={o.id}
                className="luxury-card bg-card border border-border rounded-lg overflow-hidden group flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                  <ImageCarousel imgs={o.fotos ?? []} alt={nombreCompleto(o)} className="w-full h-full" priority={i === 0} />
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
                    <ul className="flex flex-wrap gap-1.5 mt-4">
                      {o.extras.slice(0, 3).map((e) => (
                        <li key={e} className="text-[11px] border border-border rounded px-2 py-1 text-foreground/80">{e}</li>
                      ))}
                      {o.extras.length > 3 && (
                        <li className="text-[11px] px-2 py-1 text-muted-foreground">+{o.extras.length - 3} extras</li>
                      )}
                    </ul>
                  )}
                  <div className="mt-auto pt-5 flex items-end justify-between gap-3">
                    {o.ahorro ? (
                      <div className="rounded border border-primary/20 bg-primary/5 px-3 py-2.5">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1 flex items-center gap-1.5">
                          <PiggyBank className="w-3 h-3 text-primary" /> Ahorro vs. España
                        </p>
                        <p className="text-lg font-semibold text-primary leading-none">{o.ahorro}</p>
                      </div>
                    ) : (
                      <span />
                    )}
                    <button
                      type="button"
                      onClick={() => setAbierta(o)}
                      className="text-[11px] font-bold tracking-widest uppercase text-primary border border-primary/40 rounded px-4 py-2.5 hover:bg-primary/10 transition-colors"
                    >
                      Ver ficha
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-border/60 rounded-xl p-10 text-center max-w-xl mx-auto">
            <p className="font-serif text-2xl font-semibold mb-3">Ahora mismo no hay unidades de esta selección</p>
            <p className="text-muted-foreground mb-6">
              Renovamos las oportunidades a menudo. Si buscas un modelo concreto, te lo buscamos nosotros en Alemania.
            </p>
            <a
              href="/#formulario"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Solicitar búsqueda gratuita <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* ── Llamada final ── */}
        <div className="mt-16 border border-primary/30 rounded-xl p-8 md:p-10 bg-card max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">¿No ves el coche que buscas?</h2>
          <p className="text-muted-foreground leading-relaxed mb-7">
            Esto es solo una selección. Dinos marca, modelo, presupuesto y extras, y lo buscamos para ti entre todo el
            mercado alemán. Gratis y sin compromiso.
          </p>
          <a
            href="/#formulario"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Solicitar búsqueda gratuita <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>

      <FooterSection />

      {/* ── Ficha completa ── */}
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
    </div>
  );
};

export default Oportunidades;
