import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import fondo from "@/assets/fondo.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToForm = () => document.querySelector("#formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={fondo}
          alt="Porsche 911 GT3 RS, vehículo premium importado desde Alemania"
          className="w-full h-full object-cover object-center scale-110"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ filter: "saturate(0.7) contrast(1.05) brightness(1.2)" }}
        />

        {/* Velo dorado sutil para unificar el coche con la paleta de marca */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(38 45% 25% / 0.3), transparent 55%)", mixBlendMode: "overlay" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/35" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.5) 100%)" }} />
      </motion.div>

      {/* Línea dorada lateral izquierda */}
      <div className="absolute left-0 top-1/4 h-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto text-center px-4 pt-24 md:pt-16">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 max-w-5xl mx-auto"
        >
          Tu coche ideal{" "}
          <br />
          <span
            className="italic font-semibold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, hsl(42 85% 76%), hsl(38 70% 58%))",
              filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.85)) drop-shadow(0 0 18px rgba(0,0,0,0.55))",
            }}
          >
            desde Alemania,
          </span>
          <br />
          sin complicaciones.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-white/70 text-base md:text-xl max-w-lg mx-auto mb-10 font-light leading-relaxed"
        >
          Buscamos, verificamos, compramos y te lo entregamos en España.{" "}
          <span className="text-white font-medium">Tú solo eliges el coche.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-5"
        >
          {/* CTA principal: formulario */}
          <button
            onClick={scrollToForm}
            className="group relative bg-primary text-primary-foreground w-full sm:w-auto px-10 py-4 rounded text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-glow hover:shadow-glow-strong hover:scale-105 flex items-center justify-center gap-2"
          >
            Solicitar búsqueda gratuita
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* CTA secundario: WhatsApp */}
          <a
            href="https://wa.me/34633833700?text=Hola%2C%20vengo%20de%20la%20web%20de%20Alecars%20y%20me%20interesa%20importar%20un%20coche%20desde%20Alemania."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-10 py-4 rounded text-sm font-bold tracking-widest uppercase border border-white/30 bg-black/30 backdrop-blur-sm text-white hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Escríbenos por WhatsApp
          </a>
        </motion.div>

        {/* Frase de confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-wrap justify-center items-center gap-x-5 md:gap-x-8 gap-y-2 mb-12 text-white/60 md:text-white/70 text-xs md:text-base font-light"
        >
          {["Sin compromiso", "Respuesta en menos de 24 h", "Asesoramiento gratuito"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" strokeWidth={2.5} />
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/80 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;