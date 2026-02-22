import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToForm = () => {
    document.querySelector("#formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    document.querySelector("#por-que")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroCar}
          alt="Vehículo premium importado desde Alemania"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Decorative corner lines */}
      <div className="absolute top-28 left-8 md:left-16 w-16 h-16 border-l border-t border-primary/20" />
      <div className="absolute bottom-28 right-8 md:right-16 w-16 h-16 border-r border-b border-primary/20" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto text-center px-4 pt-20">
        {/* Ornamental line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="w-12 h-px bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-primary font-sans text-[11px] md:text-xs uppercase tracking-[0.4em] mb-8"
        >
          Importación premium desde Alemania
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto"
        >
          Importamos tu coche{" "}
          <br className="hidden md:block" />
          desde Alemania —{" "}
          <span className="italic font-normal text-gradient-primary">servicio llave en mano</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          Búsqueda, verificación, compra y entrega en España.
          <br className="hidden sm:block" />
          Tú eliges, nosotros lo hacemos realidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToForm}
            className="group relative bg-primary text-primary-foreground px-10 py-4 rounded text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all duration-500 shadow-glow hover:shadow-glow-strong"
          >
            <span className="relative z-10">Solicitar búsqueda</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-500 flex items-center gap-2 py-4"
          >
            Descubrir más
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
