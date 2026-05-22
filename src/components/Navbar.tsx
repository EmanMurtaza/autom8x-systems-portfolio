import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "Services", "Work", "Contact"];

const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";

function LogoMark() {
  return (
    <svg viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-4">
      <defs>
        <linearGradient id="ngLogo" x1="0" y1="0" x2="30" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      {/* Outer ring — left */}
      <circle cx="10" cy="11" r="8.5" stroke="url(#ngLogo)" strokeWidth="2.2" />
      {/* Inner ring accent */}
      <circle cx="10" cy="11" r="3.5" stroke="url(#ngLogo)" strokeWidth="1.4" />
      {/* X mark — right */}
      <line x1="20" y1="4" x2="29.5" y2="18" stroke="url(#ngLogo)" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="29.5" y1="4" x2="20" y2="18" stroke="url(#ngLogo)" strokeWidth="2.6" strokeLinecap="round" />
      {/* Pixel accent dots */}
      <rect x="0.5" y="0.5" width="2" height="2" fill="url(#ngLogo)" rx="0.3" opacity="0.55" />
      <rect x="3.5" y="0.5" width="2" height="2" fill="url(#ngLogo)" rx="0.3" opacity="0.35" />
      <rect x="0.5" y="3.5" width="2" height="2" fill="url(#ngLogo)" rx="0.3" opacity="0.25" />
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
    const id = section.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // We're probably on a blog post — clear the hash to render home, then scroll
    if (window.location.hash) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    // Wait for home to render, then scroll
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
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
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("Contact");
          }}
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
