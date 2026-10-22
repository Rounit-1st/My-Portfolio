import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-36 pb-20 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xl font-medium text-sky-400 mb-3">
              Hi, I&apos;m
            </span>

            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Rounit <span className="text-sky-400">Kashyap</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-200 mb-7">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Natural Bio */}
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>

            {/* Dragon Joke as clean, natural personal copy */}
            <p className="text-xl text-slate-400 italic mb-10 flex items-center gap-3">
              <span>&ldquo;{PERSONAL_INFO.dragonJoke}&rdquo;</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 mb-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-lg text-xl font-semibold bg-sky-500 hover:bg-sky-400 text-[#050816] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg text-xl font-semibold bg-[#0b1022] hover:bg-[#121936] text-slate-200 border border-[#18223d] hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Get in Touch
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-lg text-xl font-semibold text-slate-300 hover:text-white bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Resume</span>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <span className="text-base text-slate-500 font-medium">Links:</span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 rounded-md bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] hover:border-slate-600 text-base text-slate-300 hover:text-white transition-colors"
                >
                  <img src={social.icon} alt="" className="w-5 h-5 object-contain" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Signature Dragon GIF presented naturally */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-96 h-96 sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              <img
                src={PERSONAL_INFO.dragonGif}
                alt="Rounit's Companion Dragon"
                className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
              />
            </div>
            <p className="text-lg text-slate-500 mt-4 text-center">
              Dragon bug exterminator at work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;