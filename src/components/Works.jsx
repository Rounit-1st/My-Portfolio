import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend & Full-Stack" },
  { id: "backend", label: "Backend & Systems" },
  { id: "ai-data", label: "AI & Data" },
];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeMediaTab, setActiveMediaTab] = useState("vid1");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const flagshipProject = PROJECTS.find((p) => p.isFlagship);
  const otherProjects = filteredProjects.filter((p) => !p.isFlagship || activeCategory !== "all");

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] ambient-glow-blue pointer-events-none -z-10 blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ambient-glow-magenta pointer-events-none -z-10 blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full mb-3">
            VERIFIED SOFTWARE SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-ice-violet">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
            Real software systems spanning interactive web applications, distributed backend microservices, and multimodal AI pipelines.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#0b102b] border border-[#19224d] shadow-inner">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 text-white shadow-md shadow-sky-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  aria-pressed={isSelected}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Project Showcase (Ronime) when 'all' or 'frontend' is active */}
        {(activeCategory === "all" || activeCategory === "frontend") && flagshipProject && (
          <div className="mb-20">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#0b102b] via-[#090e28] to-[#050816] border border-[#19224d] overflow-hidden shadow-2xl">
              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs font-mono text-fuchsia-300 mb-4">
                      <span>⭐ Flagship Project</span>
                      <span>•</span>
                      <span>Frontend & Media</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#19224d] bg-black/40 flex-shrink-0">
                        <img
                          src={flagshipProject.media?.logo}
                          alt="Ronime Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-3xl font-extrabold text-white">
                        {flagshipProject.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-sky-300 mb-3">
                      {flagshipProject.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {flagshipProject.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                      {flagshipProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-sky-400 font-bold mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {flagshipProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#101844] text-sky-300 border border-sky-500/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#19224d]">
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <img src="/Hyper_Image/github.png" alt="" className="w-4 h-4 object-contain" />
                      <span>View GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right Interactive Media Viewer */}
                <div className="lg:col-span-6 flex flex-col">
                  {/* Media Switcher Tab Header */}
                  <div className="flex items-center justify-between bg-[#080d24] border border-[#19224d] rounded-t-2xl px-4 py-2 text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Media Showcase
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveMediaTab("vid1")}
                        className={`px-2.5 py-1 rounded-lg transition-colors ${
                          activeMediaTab === "vid1"
                            ? "bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Demo 1
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveMediaTab("vid2")}
                        className={`px-2.5 py-1 rounded-lg transition-colors ${
                          activeMediaTab === "vid2"
                            ? "bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Demo 2
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveMediaTab("img")}
                        className={`px-2.5 py-1 rounded-lg transition-colors ${
                          activeMediaTab === "img"
                            ? "bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Screenshot
                      </button>
                    </div>
                  </div>

                  {/* Media Content Display */}
                  <div className="relative rounded-b-2xl bg-black border-x border-b border-[#19224d] overflow-hidden aspect-video flex items-center justify-center">
                    {activeMediaTab === "vid1" && (
                      <video
                        key="vid1"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={flagshipProject.media?.video1} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {activeMediaTab === "vid2" && (
                      <video
                        key="vid2"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={flagshipProject.media?.video2} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {activeMediaTab === "img" && (
                      <img
                        key="img"
                        src={flagshipProject.media?.image}
                        alt="Ronime Platform Interface"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="midnight-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#19224d] hover:border-sky-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Header: Category Pill & Link */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      project.category === "backend"
                        ? "bg-sky-500/10 text-sky-300 border-sky-500/30"
                        : project.category === "ai-data"
                        ? "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30"
                        : "bg-violet-500/10 text-violet-300 border-violet-500/30"
                    }`}
                  >
                    {project.category === "backend"
                      ? "Backend & Systems"
                      : project.category === "ai-data"
                      ? "AI & Data"
                      : "Frontend"}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#090e28] hover:bg-sky-500/10 border border-[#19224d] hover:border-sky-500/40 flex items-center justify-center p-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <img src="/Hyper_Image/github.png" alt="" className="w-full h-full object-contain" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h4 className="text-xl font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-medium text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags & Action */}
              <div className="pt-4 border-t border-[#19224d]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#090e28] text-slate-400 border border-[#19224d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Repository</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export default Works;
