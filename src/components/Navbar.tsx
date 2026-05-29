import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "Services", "Work", "Blogs"];

const GRAD = "linear-gradient(135deg, #2563FF 0%, #7C3AED 100%)";

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
          <div className="absolute inset-[1.5px] rounded-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src="/logo-badge.png"
              alt="autom8X Systems"
              className="w-full h-full object-cover"
            />
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
          <span className="relative z-10 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md flex items-center">
            Contact us
          </span>
        </a>
      </div>
    </nav>
  );
}
