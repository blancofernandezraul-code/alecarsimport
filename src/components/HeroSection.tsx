import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.querySelector("#formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Vehículo premium importado desde Alemania"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Importación premium desde Alemania
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          Importamos tu coche desde Alemania —{" "}
          <span className="text-gradient-primary">servicio llave en mano</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Búsqueda, verificación, compra y entrega en España. Tú eliges, nosotros lo hacemos realidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-glow hover:shadow-[0_0_30px_hsl(152_82%_23%/0.3)]"
          >
            Solicitar búsqueda
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
