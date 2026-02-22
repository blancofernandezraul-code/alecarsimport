import { Instagram, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold tracking-wider mb-3">ALESCARS</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu importador de vehículos premium desde Alemania. Servicio llave en mano.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">Navegación</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Proceso", href: "#proceso" },
                { label: "Casos reales", href: "#casos" },
                { label: "Solicitar búsqueda", href: "#formulario" },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de privacidad</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Aviso legal</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">Contacto</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:Alecarses@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> Alecarses@gmail.com
              </a>
              <a href="tel:+34633833700" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +34 633 833 700
              </a>
              <a href="https://instagram.com/alescars" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" /> @alescars
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Alescars. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
