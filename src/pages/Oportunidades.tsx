import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo_transparente.png";
import FooterSection from "@/components/FooterSection";
import { OportunidadCard, OportunidadFicha } from "@/components/OportunidadCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { OPORTUNIDADES, MARCAS, claveModelo, type Marca, type Oportunidad } from "@/data/oportunidades";

const TODAS = "Todas";
const TODOS = "";
const etiquetaMarca = (m: Marca) => (m === "Otras" ? "Otras marcas" : m);

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

        {OPORTUNIDADES.length === 0 ? (
          <div className="border border-primary/30 rounded-xl p-8 md:p-12 bg-card max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">Estamos preparando la primera selección</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Muy pronto verás aquí coches reales disponibles en Alemania, elegidos uno a uno por ser una buena
              importación. Mientras tanto, dinos qué coche buscas y te lo encontramos nosotros. Gratis y sin compromiso.
            </p>
            <a
              href="/#formulario"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Solicitar búsqueda gratuita <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
        <>
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
              <OportunidadCard key={o.id} o={o} priority={i === 0} setAbierta={setAbierta} />
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

        </>
        )}

        {/* ── Llamada final ── */}
        {OPORTUNIDADES.length > 0 && (
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
        )}
      </main>

      <FooterSection />

      <OportunidadFicha abierta={abierta} setAbierta={setAbierta} />
    </div>
  );
};

export default Oportunidades;
