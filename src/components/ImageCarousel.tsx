import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Carrusel de fotos compartido por "Casos reales" y "Oportunidades"
const ImageCarousel = ({
  imgs,
  positions,
  alt,
  className = "",
  priority = false,
}: {
  imgs: string[];
  positions?: string[];
  alt: string;
  className?: string;
  priority?: boolean;
}) => {
  const [idx, setIdx] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i - 1 + imgs.length) % imgs.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i + 1) % imgs.length); };

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={imgs[idx]}
          alt={`${alt} — foto ${idx + 1}`}
          loading={priority && idx === 0 ? "eager" : "lazy"}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-full h-full object-cover"
          style={{ objectPosition: positions?.[idx] ?? "50% 60%" }}
        />
      </AnimatePresence>

      {imgs.length > 1 && (
        <>
          <button onClick={prev} aria-label="Foto anterior" className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors duration-300 z-10">
            <ChevronLeft size={14} />
          </button>
          <button onClick={next} aria-label="Foto siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors duration-300 z-10">
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                aria-label={`Ver foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-primary w-3" : "bg-white/50 w-1.5"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
