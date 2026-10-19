import { useState, useEffect } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "profiles", label: "Profiles" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-[#19224d] shadow-lg shadow-black/40 py-3"
          : "bg-[#050816]/40 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          aria-label="Rounit Kashyap Portfolio - Return to top"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-bold text-sky-400 text-base font-mono">
              R
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              Rounit<span className="text-sky-400">.dev</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-1 hidden sm:block">
              software engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0b102b]/80 border border-[#19224d] rounded-full px-4 py-1.5 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? "text-sky-300 bg-sky-500/15 shadow-sm shadow-sky-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Area */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Social Icons */}
          <div className="flex items-center gap-1.5 border-r border-[#19224d] pr-3">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0b102b] hover:bg-sky-500/10 border border-[#19224d] hover:border-sky-500/40 flex items-center justify-center p-1.5 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={`Visit Rounit's ${social.name} profile`}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400 shadow-sm shadow-sky-500/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Resume</span>
            <svg
              className="w-3.5 h-3.5 text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/30 rounded-full"
            aria-label="View Resume"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0b102b] border border-[#19224d] text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#19224d] bg-[#050816]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-sky-500/15 text-sky-300 font-semibold border border-sky-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#19224d] flex items-center justify-between">
            <span className="text-xs text-slate-400">Profiles:</span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0b102b] border border-[#19224d] flex items-center justify-center p-1.5 text-slate-300 hover:text-white"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;