import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
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
          style={{ filter: "saturate(0.55) contrast(1.08) brightness(0.9)" }}
        />

        {/* Velo dorado sutil para unificar el coche con la paleta de marca */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(38 45% 20% / 0.35), transparent 55%)", mixBlendMode: "overlay" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />
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
          <span className="italic font-normal text-gradient-primary">desde Alemania,</span>
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
          className="flex justify-center items-center mb-12"
        >
          <button
            onClick={scrollToForm}
            className="group relative bg-primary text-primary-foreground w-full sm:w-auto px-10 py-4 rounded text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-glow hover:shadow-glow-strong hover:scale-105 flex items-center justify-center gap-2"
          >
            Solicitar búsqueda gratuita
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
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