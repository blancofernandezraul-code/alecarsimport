import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Check, MessageCircle, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo_transparente.png";
import { usePageMeta } from "@/hooks/usePageMeta";

// Página a la que llega el cliente tras enviar el formulario.
// Google Ads la usa para contar los contactos conseguidos con los anuncios.
// No se indexa (ver src/seo.ts) y no está en el sitemap.
const Gracias = () => {
  usePageMeta("/gracias");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground grain-overlay flex flex-col">
      <header className="container mx-auto px-4 pt-8">
        <Link to="/" aria-label="Alecars, volver al inicio">
          <img src={logo} alt="Alecars" className="h-20 md:h-24 w-auto object-contain" />
        </Link>
      </header>

      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-primary" strokeWidth={2} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">Solicitud recibida</h1>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10">
            Gracias por contarnos qué coche buscas. Te respondemos en menos de 24 horas. Si tienes prisa, escríbenos por
            WhatsApp y lo vemos ahora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34633833700?text=Hola%2C%20acabo%20de%20enviar%20una%20solicitud%20de%20b%C3%BAsqueda%20en%20la%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Escríbenos por WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-7 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Volver a la web
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gracias;
