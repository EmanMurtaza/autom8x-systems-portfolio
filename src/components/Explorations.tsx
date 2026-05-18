import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80",
    label: "Neural Interface",
    span: "row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=700&q=80",
    label: "Data Visualization",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
    label: "Mobile Concept",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=700&q=80",
    label: "Automation Flow",
    span: "row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80",
    label: "System Architecture",
    span: "",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
    label: "Circuit Logic",
    span: "",
  },
];

export default function Explorations() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Explorations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary leading-tight">
              Visual{" "}
              <em className="font-display not-italic italic">playground</em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              Experiments and explorations across AI, design, and code.
            </p>
          </div>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-text-primary transition-colors duration-300"
          >
            View Dribbble ↗
          </a>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[260px]">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className={`relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-surface border border-stroke ${item.span}`}
              onClick={() => setLightbox(item.img)}
            >
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Halftone */}
              <div className="absolute inset-0 halftone opacity-10 mix-blend-multiply" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(135deg, rgba(37,99,255,0.15) 0%, rgba(124,58,237,0.15) 100%)" }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs md:text-sm font-medium text-text-primary/90 group-hover:text-text-primary transition-colors">
                  {item.label}
                </span>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-bg/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                <span className="text-[10px] text-text-primary">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              src={lightbox}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-muted hover:text-text-primary transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
