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
      setIsScrolled(window.scrollY > 15);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#050816]/95 border-b border-[#18223d] py-5 sm:py-6"
          : "bg-[#050816]/80 py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          className="flex items-center gap-3 text-white hover:text-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-1"
          aria-label="Rounit Kashyap - Home"
        >
          <span className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">
            Rounit Kashyap
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-9">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-2 py-1 ${
                  isActive
                    ? "text-sky-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Social Icons + Resume */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="flex items-center gap-3.5 border-r border-[#18223d] pr-5">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] hover:border-slate-600 flex items-center justify-center p-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" className="w-6 h-6 object-contain" />
              </a>
            ))}
          </div>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-base font-semibold text-slate-200 bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Resume</span>
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-base font-semibold text-slate-200 bg-[#0b1022] border border-[#18223d] rounded-lg"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-lg bg-[#0b1022] border border-[#18223d] text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#18223d] bg-[#050816] px-5 pt-4 pb-8">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-xl transition-colors ${
                  activeSection === link.id
                    ? "bg-[#0b1022] text-sky-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-5 border-t border-[#18223d] flex items-center justify-between">
            <span className="text-base text-slate-400">Find me on:</span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#0b1022] border border-[#18223d] flex items-center justify-center p-2.5 text-slate-300"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt="" className="w-6 h-6 object-contain" />
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
