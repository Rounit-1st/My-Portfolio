import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03050e] border-t border-[#19224d] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#19224d]/60">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="flex items-center gap-2 mb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500 p-[1px]">
                <div className="w-full h-full bg-[#050816] rounded-[7px] flex items-center justify-center font-bold text-sky-400 text-sm font-mono">
                  R
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Rounit Kashyap
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Full-Stack Software Engineer & Competitive Programmer. Engineered with React, Tailwind CSS & Dragon Fire.
            </p>
          </div>

          {/* Quick Jump Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#home" className="hover:text-sky-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-sky-300 transition-colors">
              About & Skills
            </a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">
              Featured Projects
            </a>
            <a href="#profiles" className="hover:text-sky-300 transition-colors">
              Coding Profiles
            </a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">
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
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#090e28] hover:bg-sky-500/10 border border-[#19224d] hover:border-sky-500/40 flex items-center justify-center p-2 text-slate-300 hover:text-white transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" className="w-full h-full object-contain filter group-hover:brightness-110" />
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-[#101844] hover:bg-[#152055] border border-[#19224d] hover:border-sky-400 text-sky-400 hover:text-sky-300 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Back to top"
              title="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Playful & Authentic Disclaimer Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rounit Kashyap. Crafted with precision & playful dragon fire.
          </div>
          <div className="text-[11px] text-slate-400 max-w-md">
            All rights reserved. Bugs burned on sight by the Sentinel Dragon 🐉
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;