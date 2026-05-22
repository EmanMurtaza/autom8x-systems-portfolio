import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroVideo from "./HeroVideo";

const MARQUEE_TEXT = "AUTOMATE • INNOVATE • ELEVATE • ";
const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";
const WA_NUMBER = "923425194397";
const WA_MESSAGE = encodeURIComponent("Hi! I'd like to learn more about autom8X Systems services.");

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socialLinks = [
  {
    label: "autom8X on LinkedIn",
    href: "https://www.linkedin.com/company/autom8x-systems/posts/?feedView=all",
  },
  {
    label: "Eman — LinkedIn",
    href: "https://www.linkedin.com/in/eman-murtaza-1a9800255/",
  },
  {
    label: "Raeed — LinkedIn",
    href: "https://www.linkedin.com/in/raeed-kashif-b30852375/",
  },
  {
    label: "GitHub",
    href: "https://github.com/EmanMurtaza",
  },
];

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <HeroVideo flipped overlayClass="bg-black/60" />

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-20 -mx-4">
          <div ref={marqueeRef} className="flex whitespace-nowrap" style={{ width: "200%" }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/10 mr-6">
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* CTA */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Get in Touch</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display italic mb-4 leading-tight neon-text neon-flicker">
              Let's build together
            </h2>
            <p className="text-muted text-sm md:text-base max-w-md mx-auto mb-10">
              Got a project in mind? Drop us a message — we respond fast and love a good challenge.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Email */}
              <a
                href="mailto:autom8xsystems@gmail.com"
                className="inline-flex relative group items-center gap-2 rounded-full border border-stroke px-7 py-3.5 text-sm text-muted hover:text-text-primary transition-colors duration-300 overflow-visible"
              >
                <span
                  className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: GRAD, zIndex: -1 }}
                />
                <span className="relative z-10 flex items-center gap-2 bg-bg rounded-full px-7 py-3.5 -mx-7 -my-3.5 transition-colors">
                  autom8xsystems@gmail.com ↗
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex relative group items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium text-white overflow-visible transition-all duration-300 hover:scale-105"
                style={{ background: GRAD }}
              >
                <WhatsAppIcon />
                Ask us anything on WhatsApp
              </a>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
            <div className="flex items-center gap-4">
              <span className="text-sm font-display italic text-text-primary">autom8X Systems</span>
              <span className="text-xs text-muted">© {new Date().getFullYear()}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
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
