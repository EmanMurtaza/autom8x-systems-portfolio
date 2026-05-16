import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    label: "Neural Interface",
    rotation: -3,
  },
  {
    img: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=600&q=80",
    label: "Data Visualization",
    rotation: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80",
    label: "Automation Flow",
    rotation: -2,
  },
  {
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    label: "Mobile Concept",
    rotation: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    label: "System Architecture",
    rotation: -1,
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    label: "Circuit Logic",
    rotation: 3,
  },
];

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current || !sectionRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      if (col1Ref.current) {
        gsap.fromTo(
          col1Ref.current,
          { y: 0 },
          {
            y: -200,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      if (col2Ref.current) {
        gsap.fromTo(
          col2Ref.current,
          { y: -100 },
          {
            y: 100,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const col1Items = items.slice(0, 3);
  const col2Items = items.slice(3);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg overflow-hidden"
    >
      {/* Pinned center content */}
      <div
        ref={contentRef}
        className="relative z-10 h-screen flex items-center justify-center pointer-events-none"
      >
        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Explorations
            </span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary leading-tight mb-4">
            Visual{" "}
            <em className="font-display not-italic italic">playground</em>
          </h2>
          <p className="text-muted text-sm max-w-xs mx-auto mb-6">
            Experiments and explorations across AI, design, and code.
          </p>
          <a
            href="#"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-muted hover:text-text-primary transition-colors duration-300"
          >
            View Dribbble ↗
          </a>
        </div>
      </div>

      {/* Parallax columns */}
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-[15vh] pointer-events-none">
        <div className="w-full max-w-[1400px] mx-auto px-8 grid grid-cols-2 gap-12 md:gap-40">
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-8 pointer-events-auto">
            {col1Items.map((item) => (
              <div
                key={item.label}
                className="aspect-square max-w-[320px] rounded-3xl overflow-hidden cursor-pointer group relative"
                style={{ transform: `rotate(${item.rotation}deg)` }}
                onClick={() => setLightbox(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm text-text-primary font-medium">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-8 mt-32 pointer-events-auto">
            {col2Items.map((item) => (
              <div
                key={item.label}
                className="aspect-square max-w-[320px] ml-auto rounded-3xl overflow-hidden cursor-pointer group relative"
                style={{ transform: `rotate(${item.rotation}deg)` }}
                onClick={() => setLightbox(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm text-text-primary font-medium">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/90 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Lightbox"
              className="max-w-full max-h-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-muted hover:text-text-primary text-2xl"
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
