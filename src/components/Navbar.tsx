import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "Services", "Work", "Contact"];

const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";

function LogoMark() {
  return (
    <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-4">
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      {/* Alpha/loop left */}
      <path
        d="M9 9 C9 5 6.5 2.5 4 3.5 C1.5 4.5 1.5 8.5 3.5 10 C5.5 11.5 8 10.5 9 9 Z"
        stroke="url(#ng)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* Tail of alpha */}
      <path
        d="M9 9 C9 5.5 11 3.5 13 5"
        stroke="url(#ng)" strokeWidth="1.6" strokeLinecap="round" fill="none"
      />
      {/* X right */}
      <line x1="13" y1="4" x2="21" y2="14" stroke="url(#ng)" strokeWidth="1.7" strokeLinecap="round" />
      <line x1="21" y1="4" x2="13" y2="14" stroke="url(#ng)" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section: string) => {
    setActive(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          className="relative w-9 h-9 rounded-full flex items-center justify-center group"
          style={{ transition: "transform 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: GRAD, padding: "1.5px" }}
          />
          <div className="absolute inset-[1.5px] rounded-full bg-bg flex items-center justify-center">
            <LogoMark />
          </div>
        </button>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 ${
              active === link
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {link}
          </button>
        ))}

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Say hi */}
        <a
          href="mailto:autom8xsystems@gmail.com"
          className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary group overflow-visible"
        >
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: GRAD, zIndex: -1 }}
          />
          <span className="relative z-10 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md flex items-center gap-1">
            Say hi ↗
          </span>
        </a>
      </div>
    </nav>
  );
}
