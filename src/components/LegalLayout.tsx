import { Link } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo_transparente.png";
import { LEGAL } from "@/lib/legal";

type Props = { title: string; docTitle: string; children: ReactNode };

/** Plantilla común para las páginas legales (privacidad, aviso legal) */
const LegalLayout = ({ title, docTitle, children }: Props) => {
  useEffect(() => {
    document.title = `${docTitle} — Alecars`;
    window.scrollTo(0, 0);
  }, [docTitle]);

  return (
    <main className="min-h-screen bg-background grain-overlay flex flex-col">
      <header className="container mx-auto px-4 pt-8 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Volver al inicio">
          <img src={logo} alt="Alecars" className="h-20 md:h-24 w-auto object-contain" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a la web
        </Link>
      </header>

      <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl flex-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-semibold">Información legal</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-sm text-muted-foreground/60 mb-12">Última actualización: {LEGAL.actualizado}</p>

        <div className="legal-content space-y-10 text-muted-foreground font-light leading-relaxed text-[15px] md:text-base">
          {children}
        </div>
      </article>

      <div className="section-divider" />
      <footer className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50">
        <span>© {new Date().getFullYear()} Alecars · Importación de vehículos premium desde Alemania</span>
        <div className="flex gap-6">
          <Link to="/privacidad" className="hover:text-primary transition-colors">Política de privacidad</Link>
          <Link to="/aviso-legal" className="hover:text-primary transition-colors">Aviso legal</Link>
        </div>
      </footer>
    </main>
  );
};

/** Sección con título dorado */
export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section>
    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export default LegalLayout;
