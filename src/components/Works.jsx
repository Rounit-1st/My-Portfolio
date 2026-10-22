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

  const featuredProject = PROJECTS.find((p) => p.isFeatured);
  const regularProjects = filteredProjects.filter((p) => !p.isFeatured || activeCategory !== "all");

  return (
    <section id="projects" className="py-24 bg-[#050816] border-t border-[#18223d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
              A selection of web applications, backend services, and machine learning projects I&apos;ve built.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0b1022] border border-[#18223d] rounded-xl self-start sm:self-auto">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isSelected
                      ? "bg-sky-500 text-[#050816] font-bold shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-pressed={isSelected}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED FLAGSHIP PROJECT (1st Generation Font & Text Styling)             */}
        {/* ========================================================================= */}
        {(activeCategory === "all" || activeCategory === "frontend") && featuredProject && (
          <div className="mb-16 relative rounded-3xl bg-gradient-to-b from-[#0b102b] via-[#090e28] to-[#050816] border border-[#19224d] overflow-hidden shadow-2xl">
            {/* Top Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-xs sm:text-sm font-mono text-fuchsia-300 mb-4">
                    <span>⭐ Flagship Project</span>
                    <span>•</span>
                    <span>Frontend & Media</span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#19224d] bg-black/40 flex-shrink-0">
                      <img
                        src={featuredProject.media?.logo}
                        alt="Ronime Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg font-medium text-sky-300 mb-3">
                    {featuredProject.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Features checklist (1st generation styling with checkmark) */}
                  <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                    {featuredProject.features?.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-sky-400 font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges (1st generation styling) */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#101844] text-sky-300 border border-sky-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Button (1st generation styling) */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#19224d]">
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <img src="/Hyper_Image/github.png" alt="" className="w-5 h-5 object-contain" />
                    <span>View GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Interactive Media Viewer (1st generation styling) */}
              <div className="lg:col-span-6 flex flex-col">
                {/* Media Switcher Tab Header */}
                <div className="flex items-center justify-between bg-[#080d24] border border-[#19224d] rounded-t-2xl px-4 py-2.5 text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Media Showcase
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveMediaTab("vid1")}
                      className={`px-3 py-1 rounded-lg transition-colors ${
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
                      className={`px-3 py-1 rounded-lg transition-colors ${
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
                      className={`px-3 py-1 rounded-lg transition-colors ${
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
                      <source src={featuredProject.media?.video1} type="video/mp4" />
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
                      <source src={featuredProject.media?.video2} type="video/mp4" />
                    </video>
                  )}

                  {activeMediaTab === "img" && (
                    <img
                      key="img"
                      src={featuredProject.media?.image}
                      alt="Ronime Interface"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* COMPACT & VARIED PROJECT CARDS                                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="dev-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-slate-400 font-medium">
                      {project.subtitle}
                    </span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#070b18] border border-[#18223d] text-slate-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <img src="/Hyper_Image/github.png" alt="" className="w-5 h-5 object-contain" />
                  </a>
                </div>

                <p className="text-base text-slate-300 leading-relaxed mt-3 mb-5">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#18223d] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-slate-400 bg-[#070b18] border border-[#18223d] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5"
                >
                  <span>Repository</span>
                  <span>→</span>
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
