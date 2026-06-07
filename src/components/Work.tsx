import { motion } from "framer-motion";
import { useT } from "../context/LanguageContext";

const colSpanClass = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export default function Work() {
  const t = useT();
  const { projects } = t.work;

  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">{t.work.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary leading-tight">
              {t.work.heading}{" "}
              <em className="font-display not-italic italic neon-soft">{t.work.headingItalic}</em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              {t.work.sub}
            </p>
          </div>
          <span className="hidden md:inline-flex relative group items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted cursor-default overflow-visible">
            {t.work.viewAll}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`${colSpanClass[i]} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer h-[320px] md:h-[400px]`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-lg" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-muted uppercase tracking-wider">{p.category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/40" />
                  <span className="text-xs text-muted">{p.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-body font-medium text-text-primary mb-2">
                  {p.title.replace(p.italic, "")}
                  <em className="font-display not-italic italic">{p.italic}</em>
                </h3>
                <p className="text-sm text-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                  {p.description}
                </p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-white/20 text-text-primary/80">
                    {t.work.viewProject}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
