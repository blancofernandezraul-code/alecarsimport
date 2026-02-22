import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-surface py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] text-foreground hover:text-primary transition-colors duration-500"
        >
          ALESCARS
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              onClick={() => scrollTo(link.href)}
              className="nav-link text-xs font-sans text-muted-foreground hover:text-foreground transition-colors duration-500 tracking-[0.15em] uppercase pb-1"
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => scrollTo("#formulario")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded text-xs font-semibold tracking-widest uppercase hover:bg-primary/90 transition-all duration-500 shadow-glow hover:shadow-glow-strong"
          >
            Solicitar
          </motion.button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menú"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ background: "hsl(0 0% 2% / 0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="container mx-auto py-8 px-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-3 text-sm uppercase tracking-[0.15em] border-b border-border/30"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                onClick={() => scrollTo("#formulario")}
                className="bg-primary text-primary-foreground py-4 rounded text-sm font-semibold text-center mt-6 shadow-glow tracking-widest uppercase"
              >
                Solicitar búsqueda
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
