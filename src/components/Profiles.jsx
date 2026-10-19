import { CODING_PROFILES } from "../data/portfolioData";

const Profiles = () => {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] ambient-glow-violet pointer-events-none -z-10 blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full mb-3">
            COMPETITIVE PROGRAMMING & PROFILES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coding <span className="text-gradient-ice-violet">Profiles</span> & Problem Solving
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
            Sharpening analytical thinking through contest problem-solving, algorithmic optimization, and open-source software engineering.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CODING_PROFILES.map((profile) => (
            <div
              key={profile.platform}
              className={`midnight-glass-card rounded-2xl p-6 flex flex-col justify-between border border-[#19224d] ${profile.borderColor} transition-all duration-300 group`}
            >
              <div>
                {/* Platform Icon & Handle */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#090e28] border border-[#19224d] p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <img
                      src={profile.icon}
                      alt={profile.platform}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {profile.platform}
                    </h3>
                    <span className="text-xs font-mono text-sky-400">
                      {profile.handle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {profile.description}
                </p>

                {/* Algorithmic Focus Badges */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Strengths:
                  </span>
                  <div className="space-y-1.5">
                    {profile.strengths.map((strength, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Link Action */}
              <div className="pt-4 border-t border-[#19224d]">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl bg-[#090e28] hover:bg-sky-500/10 border border-[#19224d] hover:border-sky-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span>Open {profile.platform}</span>
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Highlights Banner */}
        <div className="midnight-glass-card rounded-2xl p-6 sm:p-8 border border-[#19224d] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-sky-500/10 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#19224d]">
            <div className="px-4 py-2">
              <span className="text-3xl font-extrabold text-sky-300 font-mono">15+</span>
              <p className="text-sm font-bold text-white mt-1">Open Source Repositories</p>
              <p className="text-xs text-slate-400 mt-1">
                Distributed services, multimodal search engines, web platforms & dev tools.
              </p>
            </div>
            <div className="px-4 py-2">
              <span className="text-3xl font-extrabold text-violet-300 font-mono">2+</span>
              <p className="text-sm font-bold text-white mt-1">Active Contest Platforms</p>
              <p className="text-xs text-slate-400 mt-1">
                Consistent competitive programming participation on Codeforces and CodeChef.
              </p>
            </div>
            <div className="px-4 py-2">
              <span className="text-3xl font-extrabold text-fuchsia-300 font-mono">100%</span>
              <p className="text-sm font-bold text-white mt-1">End-to-End Ownership</p>
              <p className="text-xs text-slate-400 mt-1">
                From low-level data structure design to production-grade web deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;

