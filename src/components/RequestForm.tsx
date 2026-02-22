import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Check, Sparkles } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";

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
      <section id="formulario" className="py-24 md:py-36 bg-background grain-overlay relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-lg mx-auto text-center relative"
          >
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/30 via-primary/5 to-primary/20" />
            <div className="relative bg-card rounded-xl p-14 shadow-glow">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Sparkles className="w-14 h-14 text-primary mx-auto mb-6" strokeWidth={1.2} />
              </motion.div>
              <h3 className="font-serif text-3xl font-bold mb-4">¡Solicitud enviada!</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary text-xs uppercase tracking-[0.2em] hover:text-primary/80 transition-colors duration-300"
              >
                Enviar otra solicitud
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClasses = "w-full bg-background/50 border border-border rounded px-4 py-3.5 text-foreground placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-500 text-sm";

  return (
    <section id="formulario" className="py-24 md:py-36 bg-background grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Empieza ahora"
          title="Solicita tu búsqueda"
          subtitle="Cuéntanos qué buscas y nos pondremos manos a la obra."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto relative"
        >
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-border/50 via-transparent to-border/50" />
          <div className="relative bg-card rounded-xl p-7 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Nombre completo *</label>
                <input required type="text" className={inputClasses} placeholder="Tu nombre" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Email *</label>
                <input required type="email" className={inputClasses} placeholder="tu@email.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Teléfono *</label>
                <input required type="tel" className={inputClasses} placeholder="+34 600 000 000" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Marca deseada *</label>
                <input required type="text" className={inputClasses} placeholder="BMW, Mercedes, Audi..." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Modelo / Variante</label>
                <input type="text" className={inputClasses} placeholder="Serie 3, Clase C..." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Presupuesto (€) *</label>
                <input required type="text" className={inputClasses} placeholder="25.000 – 35.000" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Año mínimo</label>
                <input type="number" min="2000" max="2026" className={inputClasses} placeholder="2019" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Ciudad de entrega</label>
                <input type="text" className={inputClasses} placeholder="Madrid, Barcelona..." />
              </div>
            </div>

            {/* Extras */}
            <div className="mt-7">
              <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em] block mb-3">Extras deseados</label>
              <div className="flex flex-wrap gap-2.5">
                {extras.map((extra) => (
                  <button
                    key={extra}
                    type="button"
                    onClick={() => toggleExtra(extra)}
                    className={`px-4 py-2.5 rounded text-xs tracking-wider border transition-all duration-500 ${
                      selectedExtras.includes(extra)
                        ? "border-primary/50 bg-primary/10 text-primary shadow-glow"
                        : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {extra}
                  </button>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="mt-7 flex flex-col gap-2">
              <label className="text-[11px] text-muted-foreground font-sans uppercase tracking-[0.15em]">Comentarios adicionales</label>
              <textarea rows={3} className={`${inputClasses} resize-none`} placeholder="Cualquier detalle adicional..." />
            </div>

            {/* Privacy */}
            <div className="mt-7 flex items-start gap-3">
              <button
                type="button"
                onClick={() => setPrivacyAccepted(!privacyAccepted)}
                className={`w-5 h-5 rounded shrink-0 mt-0.5 flex items-center justify-center transition-all duration-500 ${
                  privacyAccepted
                    ? "bg-primary border border-primary shadow-glow"
                    : "border border-border hover:border-primary/30"
                }`}
              >
                {privacyAccepted && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
              </button>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Acepto la <a href="#" className="text-primary/80 hover:text-primary transition-colors">política de privacidad</a> y consiento el tratamiento de mis datos personales.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={!privacyAccepted}
                className="group relative flex-1 bg-primary text-primary-foreground py-4 rounded font-semibold flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-500 shadow-glow hover:shadow-glow-strong disabled:opacity-30 disabled:cursor-not-allowed text-sm tracking-wider uppercase"
              >
                <Send className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Enviar solicitud</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <a
                href="https://wa.me/34633833700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-border text-foreground py-4 rounded font-semibold flex items-center justify-center gap-2.5 hover:border-primary/30 hover:text-primary transition-all duration-500 text-sm tracking-wider uppercase"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.form>
      </div>

      <div className="section-divider absolute bottom-0 left-0" />
    </section>
  );
};

export default RequestForm;
