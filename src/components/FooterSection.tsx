import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-background">
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Alescars"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground/60 text-sm leading-relaxed max-w-xs">
              Tu importador de vehículos premium desde Alemania. Servicio llave en mano con transparencia total.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] mb-5 text-muted-foreground/40">Navegación</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Proceso", href: "#proceso" },
                { label: "Casos reales", href: "#casos" },
                { label: "Solicitar búsqueda", href: "#formulario" },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="nav-link text-left text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-500 w-fit pb-0.5"
                >
                  {l.label}
                </button>
              ))}
              <a href="#" className="nav-link text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-500 w-fit pb-0.5">Política de privacidad</a>
              <a href="#" className="nav-link text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-500 w-fit pb-0.5">Aviso legal</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] mb-5 text-muted-foreground/40">Contacto</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:Alecarses@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-500">
                <Mail className="w-3.5 h-3.5 text-primary/50" /> Alecarses@gmail.com
              </a>
              <a href="tel:+34633833700" className="flex items-center gap-3 text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-500">
                <Phone className="w-3.5 h-3.5 text-primary/50" /> +34 633 833 700
              </a>
              <a href="https://instagram.com/alecarses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-500">
                <Instagram className="w-3.5 h-3.5 text-primary/50" /> @alecarses
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Alescars. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-muted-foreground/20 uppercase tracking-[0.2em]">
            Importación premium desde Alemania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;