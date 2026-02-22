import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo_transparente.png";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Por qué Alescars", href: "#por-que" },
  { label: "Alemania", href: "#alemania" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos reales", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="shrink-0 hover:opacity-75 transition-opacity duration-300"
        >
          <img src={logo} alt="Alescars" className="h-24 md:h-28 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              onClick={() => scrollTo(link.href)}
              className="relative text-[11px] font-sans text-white/60 hover:text-white transition-colors duration-300 tracking-[0.18em] uppercase group"
            >
              {link.label}
              {/* underline animado */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => scrollTo("#formulario")}
            className="ml-2 bg-primary text-primary-foreground px-6 py-2.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-strong"
          >
            Solicitar
          </motion.button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white/80 hover:text-white transition-colors p-2"
          aria-label="Menú"
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* Línea inferior sutil cuando hay scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden"
            style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }}
          >
            {/* Línea superior verde */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="container mx-auto py-6 px-5 flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/50 hover:text-white transition-colors py-3.5 text-sm uppercase tracking-[0.2em] border-b border-white/5 flex items-center justify-between group"
                >
                  {link.label}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg leading-none">→</span>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.28 }}
                onClick={() => scrollTo("#formulario")}
                className="bg-primary text-primary-foreground py-4 rounded text-sm font-bold text-center mt-6 shadow-glow tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Solicitar búsqueda gratuita
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;