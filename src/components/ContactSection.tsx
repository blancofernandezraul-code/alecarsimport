import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-sans">Hablemos</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Estamos aquí para resolver cualquier duda.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto bg-background border border-border rounded-xl p-8 md:p-10"
        >
          <p className="font-serif text-xl font-semibold mb-6 text-center">Raúl Blanco Fernández</p>

          <div className="space-y-5">
            <a href="mailto:Alecarses@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">Alecarses@gmail.com</span>
            </a>

            <a href="tel:+34633833700" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">+34 633 833 700</span>
            </a>

            <a href="https://instagram.com/alescars" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">@alescars</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
