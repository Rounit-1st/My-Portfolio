import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03050e] border-t border-[#18223d] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#18223d]/60">
          <div className="text-center md:text-left">
            <span className="font-heading font-bold text-white text-2xl block">
              Rounit Kashyap
            </span>
            <span className="text-base text-slate-400 mt-1 block">
              Software Engineer & Competitive Programmer
            </span>
          </div>

          {/* Navigation Shortcuts */}
          <nav className="flex flex-wrap items-center justify-center gap-7 text-base sm:text-lg text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#profiles" className="hover:text-white transition-colors">
              Profiles
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              Resume ↗
            </a>
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] flex items-center justify-center p-2.5 text-slate-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" className="w-5 h-5 object-contain" />
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="w-11 h-11 rounded-lg bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] text-slate-400 hover:text-white flex items-center justify-center transition-colors ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rounit Kashyap.
          </div>
          <div>
            Bugs burned on sight by the companion dragon 🐉
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
