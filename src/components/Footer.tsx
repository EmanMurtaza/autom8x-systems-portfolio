import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroVideo from "./HeroVideo";

const MARQUEE_TEXT = "AUTOMATE • INNOVATE • ELEVATE • ";
const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden"
    >
      <HeroVideo flipped overlayClass="bg-black/60" />

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-20 -mx-4">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            style={{ width: "200%" }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/10 mr-6"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Get in Touch
              </span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-8 leading-tight">
              Let's build together
            </h2>
            <a
              href="mailto:autom8xsystems@gmail.com"
              className="inline-flex relative group items-center gap-2 rounded-full border border-stroke px-8 py-4 text-base text-muted hover:text-text-primary transition-colors duration-300 overflow-visible"
            >
              <span
                className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: GRAD, zIndex: -1 }}
              />
              <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-8 py-4 -mx-8 -my-4 transition-colors">
                autom8xsystems@gmail.com ↗
              </span>
            </a>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
            <div className="flex items-center gap-4">
              <span className="text-sm font-display italic text-text-primary">
                autom8X Systems
              </span>
              <span className="text-xs text-muted">© {new Date().getFullYear()}</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/eman-murtaza-1a9800255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-wider"
              >
                LinkedIn — Eman
              </a>
              <a
                href="https://www.linkedin.com/in/raeed-kashif-b30852375/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-wider"
              >
                LinkedIn — Raeed
              </a>
              <a
                href="https://github.com/EmanMurtaza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-wider"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-muted">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
