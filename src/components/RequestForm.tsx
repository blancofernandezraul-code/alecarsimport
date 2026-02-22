import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle } from "lucide-react";

const extras = ["Techo panorámico", "Paquete deportivo", "Audio premium", "Otros"];

const RequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const toggleExtra = (extra: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="formulario" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card border border-primary/30 rounded-xl p-12 shadow-glow"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-4">¡Solicitud enviada!</h3>
            <p className="text-muted-foreground mb-6">Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-primary underline underline-offset-4 text-sm hover:text-primary/80 transition-colors"
            >
              Enviar otra solicitud
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-sans">Empieza ahora</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Solicita tu búsqueda</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Cuéntanos qué buscas y nos pondremos manos a la obra.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Nombre completo *</label>
              <input required type="text" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tu nombre" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Email *</label>
              <input required type="email" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="tu@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Teléfono *</label>
              <input required type="tel" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+34 600 000 000" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Marca deseada *</label>
              <input required type="text" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ej: BMW, Mercedes, Audi..." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Modelo / Variante</label>
              <input type="text" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ej: Serie 3, Clase C..." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Presupuesto (€) *</label>
              <input required type="text" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ej: 25.000 – 35.000" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Año mínimo</label>
              <input type="number" min="2000" max="2026" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ej: 2019" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground font-sans">Ciudad de entrega</label>
              <input type="text" className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ej: Madrid, Barcelona..." />
            </div>
          </div>

          {/* Extras */}
          <div className="mt-6">
            <label className="text-sm text-muted-foreground font-sans block mb-3">Extras deseados</label>
            <div className="flex flex-wrap gap-3">
              {extras.map((extra) => (
                <button
                  key={extra}
                  type="button"
                  onClick={() => toggleExtra(extra)}
                  className={`px-4 py-2 rounded-md text-sm border transition-all duration-300 ${
                    selectedExtras.includes(extra)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {extra}
                </button>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="mt-6 flex flex-col gap-2">
            <label className="text-sm text-muted-foreground font-sans">Comentarios adicionales</label>
            <textarea rows={3} className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Cualquier detalle adicional..." />
          </div>

          {/* Privacy */}
          <div className="mt-6 flex items-start gap-3">
            <button
              type="button"
              onClick={() => setPrivacyAccepted(!privacyAccepted)}
              className={`w-5 h-5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                privacyAccepted ? "bg-primary border-primary" : "border-border"
              }`}
            >
              {privacyAccepted && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
            </button>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Acepto la <a href="#" className="text-primary underline underline-offset-2">política de privacidad</a> y consiento el tratamiento de mis datos personales.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={!privacyAccepted}
              className="flex-1 bg-primary text-primary-foreground py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-glow disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              Enviar solicitud
            </button>
            <a
              href="https://wa.me/34633833700"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-border text-foreground py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RequestForm;
