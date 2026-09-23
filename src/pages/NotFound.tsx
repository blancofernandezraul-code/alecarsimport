import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Phone } from "lucide-react";
import logo from "@/assets/logo_transparente.png";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Página no encontrada — Alecars";
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen bg-background grain-overlay overflow-hidden flex flex-col">
      {/* Brillo dorado de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Logo */}
      <header className="relative z-10 container mx-auto px-4 pt-8">
        <Link to="/" aria-label="Volver al inicio">
          <img src={logo} alt="Alecars" className="h-24 md:h-32 w-auto object-contain" />
        </Link>
      </header>

      {/* Contenido */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          {/* Etiqueta */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-semibold">Error 404</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          {/* 404 grande */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-serif font-bold leading-none text-gradient-gold text-[7rem] md:text-[11rem] lg:text-[13rem] select-none"
          >
            404
          </motion.h1>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-serif text-3xl md:text-5xl font-semibold mt-6 mb-5"
          >
            Este coche no está en nuestra ruta
          </motion.h2>

          {/* Texto */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-md mx-auto mb-10"
          >
            La página que buscas no existe o se ha movido. Pero el coche que buscas sí podemos
            encontrarlo en Alemania.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-strong"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Volver al inicio
            </Link>
            <a
              href="/#formulario"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-7 py-3.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Search className="w-4 h-4" strokeWidth={2} />
              Solicitar búsqueda
            </a>
          </motion.div>

          {/* Contacto */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            href="https://wa.me/34633833700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            ¿Necesitas ayuda? Escríbenos al +34 633 833 700
          </motion.a>
        </div>
      </section>

      {/* Divisor inferior */}
      <div className="section-divider relative z-10" />
      <footer className="relative z-10 text-center py-6 text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40">
        Alecars · Importación de vehículos premium desde Alemania
      </footer>
    </main>
  );
};

export default NotFound;
