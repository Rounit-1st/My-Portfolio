import { CODING_PROFILES } from "../data/portfolioData";

const Profiles = () => {
  return (
    <section id="profiles" className="py-24 bg-[#050816] border-t border-[#18223d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Profiles & Online Presence
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
            Where I practice competitive programming, publish code repositories, and connect with other engineers.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CODING_PROFILES.map((profile) => (
            <div
              key={profile.platform}
              className="dev-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#070b18] border border-[#18223d] p-2.5 flex items-center justify-center flex-shrink-0">
                    <img
                      src={profile.icon}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
                      {profile.platform}
                    </h3>
                    <span className="text-sm text-sky-400 font-mono">
                      @{profile.handle}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {profile.note}
                </p>
              </div>

              <div className="pt-4 border-t border-[#18223d]">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>Visit Profile</span>
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
