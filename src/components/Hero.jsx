import { useState } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";

const Hero = () => {
  const [dragonClicks, setDragonClicks] = useState(0);
  const [dragonFlame, setDragonFlame] = useState(false);

  const handleDragonPoke = () => {
    setDragonClicks((prev) => prev + 1);
    setDragonFlame(true);
    setTimeout(() => setDragonFlame(false), 900);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] ambient-glow-blue pointer-events-none -z-10 blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] ambient-glow-violet pointer-events-none -z-10 blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Engineering Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b102b] border border-[#19224d] text-xs font-mono text-slate-300 shadow-sm mb-6 hover:border-sky-500/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Greeting & Name */}
            <p className="text-base sm:text-lg font-medium text-slate-400 mb-1 flex items-center gap-2">
              <span>Hello world, I am</span>
              <span className="inline-block animate-wave text-xl" role="img" aria-label="Waving hand">
                👋
              </span>
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Ro<span className="text-gradient-ice-violet">unit</span> Kashyap
            </h1>

            {/* Engineering Headline */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">
                {PERSONAL_INFO.headline}
              </h2>
            </div>

            {/* Playful Engineering Tagline */}
            <div className="p-4 rounded-xl bg-[#0b102b]/90 border border-[#19224d] mb-6 max-w-2xl shadow-inner relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-fuchsia-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10 blur-sm" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono">
                <span className="text-sky-400 font-semibold">&gt; </span>
                I architect clean, reliable systems and solve algorithmic challenges — while my{" "}
                <span className="text-fuchsia-400 font-bold">Dragon</span> incinerates the{" "}
                <span className="text-emerald-400 font-bold">bugs 🪲</span>
              </p>
            </div>

            {/* Brief Bio */}
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#0b102b] hover:bg-[#101844] text-slate-200 hover:text-white border border-[#19224d] hover:border-sky-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Get in Touch
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-sky-300 hover:text-sky-200 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Resume PDF</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-1">
                Connect:
              </span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b102b] hover:bg-sky-500/10 border border-[#19224d] hover:border-sky-500/40 text-xs text-slate-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label={`${social.name}: ${social.handle}`}
                >
                  <img src={social.icon} alt="" className="w-4 h-4 object-contain" />
                  <span className="font-mono">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Signature Dragon Sentinel Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-2xl opacity-50 -z-10" />

              {/* High-tech Midnight Frame */}
              <div className="midnight-glass-card rounded-2xl overflow-hidden border border-[#19224d] shadow-2xl relative">
                {/* Terminal Window Header Bar */}
                <div className="bg-[#0b102b] px-4 py-2.5 border-b border-[#19224d] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      dragon_sentinel.bin
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Animated Dragon Container */}
                <div
                  className="relative p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-[#090e28] to-[#050816] min-h-[360px] cursor-pointer group"
                  onClick={handleDragonPoke}
                  title="Click to unleash dragon power!"
                >
                  {/* Interactive Flame Effect Triggered on Click */}
                  {dragonFlame && (
                    <div className="absolute top-4 right-4 bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 text-xs px-3 py-1 rounded-full font-mono animate-bounce z-20">
                      🔥 Dragon Roared!
                    </div>
                  )}

                  {/* Signature Dragon GIF */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                    <img
                      src={PERSONAL_INFO.dragonGif}
                      alt="Rounit's Sentinel Dragon Burning Bugs"
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(129,140,248,0.35)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Bug-Hunter Status Footer */}
                  <div className="w-full mt-4 pt-4 border-t border-[#19224d] flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">Defects Burned:</span>
                      <span className="text-sky-300 font-bold">
                        {9999 + dragonClicks * 42}+
                      </span>
                    </div>
                    <div className="text-[11px] text-fuchsia-400/90 font-medium">
                      Click dragon to poke 🐉
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;