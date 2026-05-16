import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import HeroVideo from "./HeroVideo";

const ROLES = ["Automate", "Innovate", "Elevate", "Build"];
const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const blurRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );
    }
    const blurEls = blurRefs.current.filter(Boolean);
    if (blurEls.length) {
      tl.fromTo(
        blurEls,
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        "-=0.9"
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const addBlurRef = (el: HTMLElement | null, i: number) => {
    blurRefs.current[i] = el;
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroVideo overlayClass="bg-black/30" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        {/* Eyebrow tagline */}
        <span
          ref={(el) => addBlurRef(el, 0)}
          className="text-xs text-muted uppercase tracking-[0.35em] mb-8 opacity-0 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-muted/50" />
          Automate • Innovate • Elevate
          <span className="w-6 h-px bg-muted/50" />
        </span>

        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 opacity-0"
        >
          autom8X Systems
        </h1>

        <p
          ref={(el) => addBlurRef(el, 1)}
          className="text-sm md:text-base text-muted mb-4 opacity-0"
        >
          We{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          your business with smart systems.
        </p>

        <p
          ref={(el) => addBlurRef(el, 2)}
          className="text-sm md:text-base text-muted max-w-md mb-12 opacity-0"
        >
          We build smart systems — AI agents, automations, and web platforms —
          that help businesses save time, close more deals, and scale faster.
        </p>

        <div ref={(el) => addBlurRef(el, 3)} className="inline-flex gap-4 opacity-0">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative group rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg font-medium transition-all duration-300 hover:scale-105 overflow-visible"
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GRAD, zIndex: -1 }}
            />
            <span className="relative z-10 group-hover:bg-bg group-hover:text-text-primary bg-text-primary text-bg rounded-full transition-colors duration-300">
              See Services
            </span>
          </a>

          <a
            href="mailto:autom8xsystems@gmail.com"
            className="relative group rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary font-medium transition-all duration-300 hover:scale-105 hover:border-transparent overflow-visible"
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GRAD, zIndex: -1 }}
            />
            <span className="relative z-10">Let's work together ↗</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
