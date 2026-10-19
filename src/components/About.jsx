import { useState } from "react";
import {
  SKILL_CATEGORIES,
  PIKACHU_TRAIN_SKILLS,
  PERSONAL_INFO,
} from "../data/portfolioData";

const About = () => {
  const [isTrainPaused, setIsTrainPaused] = useState(false);

  // Duplicate skills to create an infinite seamless loop
  const trainCarriages = [...PIKACHU_TRAIN_SKILLS, ...PIKACHU_TRAIN_SKILLS];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 ambient-glow-violet pointer-events-none -z-10 blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ambient-glow-blue pointer-events-none -z-10 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full mb-3">
            ENGINEERING FOUNDATION & TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-ice-violet">Me</span> & Skills
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
            I build scalable distributed systems, responsive full-stack applications, and performant algorithmic solutions with modern tools.
          </p>
        </div>

        {/* Narrative & Engineering Mindset Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          <div className="midnight-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Systems & Architecture</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Experience engineering decoupled microservices, idempotent transaction pipelines, and distributed job queues in TypeScript and Node.js with resilient error recovery.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#19224d] flex items-center gap-2 text-xs font-mono text-sky-400">
              <span>TypeScript • Node • PostgreSQL • Queues</span>
            </div>
          </div>

          <div className="midnight-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern User Interfaces</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Crafting clean, accessible, and responsive user experiences using React, Tailwind CSS, and state management. Passionate about fluid motion, high fidelity, and zero visual clutter.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#19224d] flex items-center gap-2 text-xs font-mono text-violet-400">
              <span>React • Tailwind • Motion • Accessible UI</span>
            </div>
          </div>

          <div className="midnight-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Algorithms & Multimodal AI</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Active competitive programmer on Codeforces and CodeChef. Building multimodal product retrieval pipelines using Fashion-CLIP, Sentence Transformers, and Model Context Protocol (MCP).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#19224d] flex items-center gap-2 text-xs font-mono text-fuchsia-400">
              <span>Codeforces • Python • CLIP • Vector Search</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SIGNATURE PIKACHU TECH EXPRESS TRAIN                                     */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="Train">
                🚂
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span>Pikachu Tech Express</span>
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    Live Convoy
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Continuous skill locomotive carrying Rounit&apos;s core engineering stack. Hover to pause.
                </p>
              </div>
            </div>

            {/* Accessibility Pause / Play Button */}
            <button
              type="button"
              onClick={() => setIsTrainPaused(!isTrainPaused)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b102b] hover:bg-[#101844] border border-[#19224d] text-xs font-mono text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={isTrainPaused ? "Resume Pikachu train animation" : "Pause Pikachu train animation"}
            >
              <span>{isTrainPaused ? "▶ Resume Train" : "⏸ Pause Train"}</span>
            </button>
          </div>

          {/* Train Marquee Track Container */}
          <div className="relative rounded-2xl bg-[#090e28] border border-[#19224d] p-6 overflow-hidden shadow-2xl">
            {/* Ambient track lighting */}
            <div className="absolute inset-x-0 bottom-8 h-2 bg-gradient-to-r from-sky-500/20 via-violet-500/30 to-amber-500/20 blur-md pointer-events-none" />

            {/* Track Rails Visual */}
            <div className="relative mb-6">
              <div className="train-track w-full"></div>
              {/* Rail Ties */}
              <div className="flex justify-between px-2 pt-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-3 bg-[#19224d] rounded-sm inline-block"></span>
                ))}
              </div>
            </div>

            {/* Overflow viewport for the train cars */}
            <div className="overflow-hidden w-full py-4">
              <div
                className={`train-marquee-container flex items-center gap-6 ${
                  isTrainPaused ? "is-paused" : ""
                }`}
                tabIndex={0}
                aria-label="Pikachu Tech Train holding core engineering skills. Use left and right arrow keys to scroll when paused."
              >
                {/* Engine: Pikachu Train GIF */}
                <div className="flex-shrink-0 flex items-center justify-center p-2 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-500/30 shadow-lg shadow-amber-500/10">
                  <div className="flex flex-col items-center">
                    <img
                      src={PERSONAL_INFO.pikachuTrainGif}
                      alt="Pikachu Leading the Tech Train"
                      className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(251,191,36,0.4)]"
                    />
                    <span className="mt-1 text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                      Engineer Pikachu
                    </span>
                  </div>
                </div>

                {/* Train Carriages */}
                {trainCarriages.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex-shrink-0 relative w-48 sm:w-52 h-28 bg-[#0b102b] hover:bg-[#101844] border-2 border-[#19224d] hover:border-sky-400/50 rounded-2xl p-3 flex flex-col justify-between shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    {/* Top Carriage Content */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/50 p-1.5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-white truncate group-hover:text-sky-300 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Carriage Hitch & Status */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#19224d]/80 text-[10px] font-mono text-slate-500">
                      <span className="text-sky-400/80">Carriage #{((index % PIKACHU_TRAIN_SKILLS.length) + 1).toString().padStart(2, "0")}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                    </div>

                    {/* Left & Right Mechanical Wheels with Red Hubs (Preserving signature personality) */}
                    <div className="absolute -bottom-3 left-4 w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-300 flex items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-rose-600"></div>
                    </div>
                    <div className="absolute -bottom-3 right-4 w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-300 flex items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-rose-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE TECHNICAL SKILLS MATRIX                                     */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Technical Skill Matrix</h3>
            <span className="text-xs font-mono text-slate-400">Categorized by Domain</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="midnight-glass-card rounded-2xl p-6 flex flex-col justify-between border border-[#19224d] hover:border-sky-500/40 transition-all duration-300"
              >
                <div>
                  <h4 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-col gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-xl bg-[#090e28] border border-[#19224d]/60 hover:border-sky-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={skill.icon}
                            alt=""
                            className="w-5 h-5 object-contain flex-shrink-0"
                          />
                          <span className="text-xs font-medium text-slate-200 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#050816] text-slate-400 border border-[#19224d]">
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
      </div>
    </section>
  );
};

export default About;