import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./WhyAlescars";

const contactLinks = [
  { icon: Mail, label: "Alecarses@gmail.com", href: "mailto:Alecarses@gmail.com" },
  { icon: Phone, label: "+34 633 833 700", href: "tel:+34633833700" },
  { icon: Instagram, label: "@alescars", href: "https://instagram.com/alescars", external: true },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-36 bg-card grain-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          tag="Hablemos"
          title="Contacto"
          subtitle="Estamos aquí para resolver cualquier duda."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-md mx-auto relative"
        >
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-border/50 via-transparent to-border/50" />
          <div className="relative bg-background rounded-xl p-10 md:p-12">
            <p className="font-serif text-xl font-semibold mb-2 text-center">Raúl Blanco Fernández</p>
            <p className="text-muted-foreground/50 text-xs text-center uppercase tracking-[0.2em] mb-10">Fundador · Alescars</p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-500 group p-3 -mx-3 rounded-lg hover:bg-surface-elevated"
                >
                  <div className="w-10 h-10 rounded bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-700">
                    <link.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm flex-1">{link.label}</span>
                  {link.external && <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors duration-500" />}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
