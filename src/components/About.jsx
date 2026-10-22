import { useState } from "react";
import {
  SKILL_CATEGORIES,
  PIKACHU_TRAIN_SKILLS,
  PERSONAL_INFO,
} from "../data/portfolioData";

const About = () => {
  const [isTrainPaused, setIsTrainPaused] = useState(false);

  // Duplicate for seamless continuous track animation
  const trainCarriages = [...PIKACHU_TRAIN_SKILLS, ...PIKACHU_TRAIN_SKILLS];

  return (
    <section id="about" className="py-24 bg-[#050816] border-t border-[#18223d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            About & Skills
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            A quick overview of my background, technical stack, and the tools I use to build software.
          </p>
        </div>

        {/* Background & Mindset Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="dev-card p-7 sm:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
              How I Work
            </h3>
            <p className="text-base text-slate-300 leading-relaxed mb-4">
              I focus on clear software architecture, predictable state flow, and writing code that is easy to understand and maintain. Whether building distributed services or user-facing applications, I prioritize practical problem-solving over unnecessary complexity.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              When I&apos;m not building web projects, I spend time practicing competitive programming on Codeforces and CodeChef, which helps me stay sharp with algorithms and complexity analysis.
            </p>
          </div>

          <div className="dev-card p-7 sm:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
              Technical Focus
            </h3>
            <p className="text-base text-slate-300 leading-relaxed mb-4">
              My engineering experience centers around architecting scalable backend systems, responsive web interfaces, and solving algorithmic problems.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Specializing in Node.js microservices, React full-stack applications, Python data workflows, and competitive programming with C++.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESTORED TECHNICAL SKILL MATRIX (Four-Column Desktop Layout)               */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Technical Skill Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="dev-card p-5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 flex-shrink-0"></span>
                    <span>{cat.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#070b18] border border-[#18223d]/60 hover:border-sky-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={skill.icon}
                            alt=""
                            className="w-4 h-4 object-contain flex-shrink-0"
                          />
                          <span className="text-xs font-medium text-slate-200 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0b1022] text-slate-400 border border-[#18223d] flex-shrink-0 ml-2">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SIGNATURE PIKACHU TRAIN (Left-to-Right Animation)                        */}
        {/* ========================================================================= */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl" role="img" aria-label="Train">
                🚂
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-200">
                Pikachu Tech Express
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setIsTrainPaused(!isTrainPaused)}
              className="text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1 rounded border border-[#18223d] bg-[#0b1022] transition-colors"
              aria-label={isTrainPaused ? "Resume Pikachu train animation" : "Pause Pikachu train animation"}
            >
              {isTrainPaused ? "▶ Resume" : "⏸ Pause"}
            </button>
          </div>

          {/* Railway Container */}
          <div className="rounded-lg bg-[#070b18] border border-[#18223d] p-5 overflow-hidden">
            {/* Railway Track Line */}
            <div className="railway-track w-full mb-6"></div>

            {/* Left-to-Right Marquee Container */}
            <div className="overflow-hidden w-full pb-3">
              <div
                className={`train-track-container flex items-center gap-5 ${
                  isTrainPaused ? "is-paused" : ""
                }`}
                tabIndex={0}
                aria-label="Pikachu Tech Train moving skills from left to right"
              >
                {/* Train Cars (Left-to-Right layout, Pikachu leading at the front) */}
                {trainCarriages.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="flex-shrink-0 relative w-40 h-20 bg-[#0b1022] border border-[#18223d] rounded-lg p-2.5 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-[#070b18] border border-[#18223d] p-1 flex items-center justify-center flex-shrink-0">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-slate-200 truncate">
                        {item.name}
                      </span>
                    </div>

                    {/* Classic Train Wheels with red hub */}
                    <div className="absolute -bottom-2 left-3 w-5 h-5 rounded-full bg-slate-800 border border-slate-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    </div>
                    <div className="absolute -bottom-2 right-3 w-5 h-5 rounded-full bg-slate-800 border border-slate-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    </div>
                  </div>
                ))}

                {/* Pikachu Engine at the front leading the train */}
                <div className="flex-shrink-0 flex items-center justify-center px-3 py-1">
                  <img
                    src={PERSONAL_INFO.pikachuTrainGif}
                    alt="Pikachu Leading the Train"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;