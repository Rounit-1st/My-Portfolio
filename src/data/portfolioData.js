export const PERSONAL_INFO = {
  name: "Rounit Kashyap",
  shortName: "Rounit",
  headline: "Full-Stack Software Engineer & Competitive Programmer",
  tagline: "I write clean, resilient code and my Dragon burns the bugs.",
  bio: "Software engineer passionate about architecting scalable backend systems, craft-focused responsive user interfaces, and solving algorithmic challenges. Dedicated to building reliable, high-performance web applications and exploring multimodal AI.",
  email: "rounitpeppa@gmail.com",
  location: "India",
  status: "Available for Software Engineering Roles & Impactful Projects",
  resumeUrl: "https://drive.google.com/file/d/1IW5P_CC2-FeWOGv_NgBsup7_3AphHVJM/view?usp=sharing",
  dragonGif: "/giphy.gif",
  pikachuTrainGif: "/About_cards/train.gif",
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Rounit-1st",
    handle: "@Rounit-1st",
    icon: "/Hyper_Image/github.png",
    color: "from-sky-400 to-indigo-500",
    badge: "15+ Repositories",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rounit-kashyap/",
    handle: "in/rounit-kashyap",
    icon: "/img/icons8-linkedin.svg",
    color: "from-blue-500 to-cyan-400",
    badge: "Professional Network",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/forcerounit",
    handle: "@forcerounit",
    icon: "/img/icons8-codeforces-96.png",
    color: "from-violet-500 to-purple-400",
    badge: "Competitive Programmer",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/chefrounit",
    handle: "@chefrounit",
    icon: "/img/icons8-codechef.svg",
    color: "from-amber-500 to-rose-400",
    badge: "Contest Rating",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend & Web",
    description: "Building responsive, accessible, and high-performance client applications.",
    skills: [
      { name: "React.js", icon: "/About_cards/reactjs.png", level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: "/About_cards/javascript.png", level: "Advanced" },
      { name: "TypeScript", icon: "/About_cards/javascript.png", level: "Proficient" },
      { name: "Tailwind CSS", icon: "/About_cards/tailwind.png", level: "Advanced" },
      { name: "HTML5 & CSS3", icon: "/About_cards/html.png", level: "Advanced" },
      { name: "Vite", icon: "/About_cards/css.png", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Designing reliable RESTful APIs, microservices, and persistent databases.",
    skills: [
      { name: "Node.js", icon: "/About_cards/nodejs.png", level: "Advanced" },
      { name: "Express.js", icon: "/img/icons8-express-js.svg", level: "Advanced" },
      { name: "Django", icon: "/img/icons8-django.svg", level: "Proficient" },
      { name: "PostgreSQL", icon: "/img/icons8-postgres.svg", level: "Proficient" },
      { name: "REST APIs", icon: "/About_cards/git.png", level: "Advanced" },
      { name: "Microservices", icon: "/About_cards/nodejs.png", level: "Proficient" },
    ],
  },
  {
    title: "AI, Data & Core Engineering",
    description: "Data processing, vector embeddings, algorithms, and systems programming.",
    skills: [
      { name: "Python", icon: "/img/icons8-python.svg", level: "Advanced" },
      { name: "Pandas", icon: "/img/icons8-pandas.svg", level: "Proficient" },
      { name: "NumPy", icon: "/img/icons8-numpy.svg", level: "Proficient" },
      { name: "Data Structures & Algorithms", icon: "/img/icons8-codeforces-96.png", level: "Advanced" },
      { name: "C / C++", icon: "/img/icons8-python.svg", level: "Proficient" },
      { name: "Vector Search & CLIP", icon: "/img/icons8-pandas.svg", level: "Specialized" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Modern workflow tooling, version control, and interface design.",
    skills: [
      { name: "Git", icon: "/About_cards/git.png", level: "Advanced" },
      { name: "GitHub", icon: "/Hyper_Image/github.png", level: "Advanced" },
      { name: "Figma", icon: "/About_cards/figma.png", level: "Intermediate" },
      { name: "Linux / Shell", icon: "/About_cards/git.png", level: "Proficient" },
    ],
  },
];

export const PIKACHU_TRAIN_SKILLS = [
  { name: "React", icon: "/About_cards/reactjs.png", tag: "Frontend" },
  { name: "Node.js", icon: "/About_cards/nodejs.png", tag: "Backend" },
  { name: "Python", icon: "/img/icons8-python.svg", tag: "Language" },
  { name: "PostgreSQL", icon: "/img/icons8-postgres.svg", tag: "Database" },
  { name: "TypeScript", icon: "/About_cards/javascript.png", tag: "Language" },
  { name: "Tailwind CSS", icon: "/About_cards/tailwind.png", tag: "Styling" },
  { name: "Express.js", icon: "/img/icons8-express-js.svg", tag: "Backend" },
  { name: "Django", icon: "/img/icons8-django.svg", tag: "Framework" },
  { name: "Pandas", icon: "/img/icons8-pandas.svg", tag: "Data / AI" },
  { name: "NumPy", icon: "/img/icons8-numpy.svg", tag: "Data / AI" },
  { name: "Git", icon: "/About_cards/git.png", tag: "DevOps" },
  { name: "HTML5", icon: "/About_cards/html.png", tag: "Markup" },
  { name: "CSS3", icon: "/About_cards/css.png", tag: "Styling" },
  { name: "Figma", icon: "/About_cards/figma.png", tag: "Design" },
];

export const PROJECTS = [
  {
    id: "ronime",
    title: "Ronime",
    subtitle: "Anime Discovery & HD Trailer Streaming Platform",
    category: "frontend",
    isFlagship: true,
    description:
      "A feature-rich anime discovery hub enabling anime enthusiasts to search, explore metadata, stream high-definition trailers with zero buffering, and maintain personalized watchlists within a responsive interface.",
    features: [
      "Smart multi-criteria search filtering by title, release season, and genre",
      "Seamless HD video trailer playback with optimized streaming",
      "Comprehensive anime metadata pages with synopsis, community ratings & recommendations",
      "Personalized watchlist curation and bookmarking management",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "Video Streaming"],
    githubUrl: "https://github.com/Rounit-1st/Ronime",
    media: {
      type: "interactive",
      image: "/Projects/projectOneImg.png",
      video1: "/Projects/projectOneVid.mp4",
      video2: "/Projects/projectOneVid2.mp4",
      logo: "/Projects/projectLogo.png",
    },
  },
  {
    id: "payment-system",
    title: "Microservices Payment System",
    subtitle: "Distributed, Fault-Tolerant Payment Architecture",
    category: "backend",
    isFlagship: false,
    description:
      "A scalable microservices-based payment processing infrastructure engineered with five decoupled services. Features idempotency protection, automated retry loops, webhook listeners, and audit ledger reconciliation.",
    features: [
      "5 Decoupled microservices architecture with isolated failure domains",
      "Idempotent transaction pipelines preventing duplicate billing",
      "Webhook event distribution with exponential backoff retries",
      "Audit ledger reconciliation for end-to-end transaction integrity",
    ],
    tags: ["TypeScript", "Node.js", "Express", "Microservices", "PostgreSQL", "Event-Driven"],
    githubUrl: "https://github.com/Rounit-1st/Payment-system",
  },
  {
    id: "vectorcart",
    title: "VectorCart",
    subtitle: "Multimodal AI Product Search via Fashion-CLIP",
    category: "ai-data",
    isFlagship: false,
    description:
      "An AI-powered multimodal search engine bridging text and image queries using Fashion-CLIP and Sentence Transformers. Integrates Model Context Protocol (MCP) to provide contextual product retrieval for AI agents.",
    features: [
      "Cross-modal semantic vector retrieval using Fashion-CLIP embeddings",
      "Sentence Transformers for natural language query understanding",
      "Model Context Protocol (MCP) server integration for AI agent ecosystems",
      "Sub-second vector cosine similarity search over product catalogs",
    ],
    tags: ["Python", "PyTorch", "Fashion-CLIP", "Sentence Transformers", "Vector Search", "MCP"],
    githubUrl: "https://github.com/Rounit-1st/VectorCart",
  },
  {
    id: "clockfire-v2",
    title: "Clockfire Distributed Scheduler",
    subtitle: "High-Throughput Task Scheduling & Worker Cluster",
    category: "backend",
    isFlagship: false,
    description:
      "A distributed job scheduling system designed for scalable background task processing. Features isolated job service managers, consumer workers, prioritized queue dispatching, and crash recovery.",
    features: [
      "Distributed task dispatcher supporting cron and delayed one-shot jobs",
      "Worker pool consumer service with automatic heartbeat checks",
      "Dead letter queue management and automatic failover handling",
      "Telemetry endpoints for monitoring throughput and consumer health",
    ],
    tags: ["TypeScript", "Node.js", "Distributed Systems", "Worker Pools", "Concurrency"],
    githubUrl: "https://github.com/Rounit-1st/Clockfire-v2",
  },
  {
    id: "rasangat",
    title: "Rasangat",
    subtitle: "Full-Stack Food Ordering Platform",
    category: "frontend",
    isFlagship: false,
    description:
      "An end-to-end food ordering platform featuring JWT-based authentication, real-time cart state synchronization, interactive food menus, and secure Stripe payment checkout.",
    features: [
      "Full authentication flow with secure session persistence",
      "Live order cart synchronization with dietary customizations",
      "Integrated Stripe payment gateway for seamless card transactions",
      "Responsive layout designed for mobile and desktop order tracking",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    githubUrl: "https://github.com/Rounit-1st/Rasangat",
  },
  {
    id: "muscix",
    title: "Muscix Audio Engine",
    subtitle: "Python Audio Intelligence & Feature Extraction",
    category: "ai-data",
    isFlagship: false,
    description:
      "An acoustic processing and music intelligence tool utilizing NumPy and Pandas to compute spectral audio features, acoustic fingerprints, and algorithmic similarity scoring.",
    features: [
      "Matrix-accelerated computation of spectral centroid, tempo, and timbre",
      "Pandas-driven dataset processing for music categorization",
      "Automated acoustic similarity metrics for audio clustering",
    ],
    tags: ["Python", "NumPy", "Pandas", "Audio DSP", "Feature Extraction"],
    githubUrl: "https://github.com/Rounit-1st/muscix",
  },
];

export const CODING_PROFILES = [
  {
    platform: "Codeforces",
    handle: "forcerounit",
    url: "https://codeforces.com/profile/forcerounit",
    icon: "/img/icons8-codeforces-96.png",
    accentColor: "from-blue-500/20 via-indigo-500/20 to-transparent",
    borderColor: "hover:border-blue-500/50",
    description: "Active competitive programming participant focusing on mathematical reasoning, graph theory, and algorithmic problem-solving.",
    strengths: ["Graph Algorithms (BFS/DFS, Dijkstra, MST)", "Dynamic Programming & Memoization", "Binary Search & Two Pointers", "Time/Space Complexity Optimization"],
  },
  {
    platform: "CodeChef",
    handle: "chefrounit",
    url: "https://www.codechef.com/users/chefrounit",
    icon: "/img/icons8-codechef.svg",
    accentColor: "from-amber-500/20 via-orange-500/20 to-transparent",
    borderColor: "hover:border-amber-500/50",
    description: "Contest solver tackling algorithmic problems, division rounds, and speed programming challenges.",
    strengths: ["Greedy Algorithms", "Combinatorics & Number Theory", "Divide and Conquer", "Bit Manipulation"],
  },
  {
    platform: "GitHub",
    handle: "Rounit-1st",
    url: "https://github.com/Rounit-1st",
    icon: "/Hyper_Image/github.png",
    accentColor: "from-sky-500/20 via-cyan-500/20 to-transparent",
    borderColor: "hover:border-sky-500/50",
    description: "Open source builder with repositories across distributed systems, payment gateways, multimodal search engines, and full-stack web applications.",
    strengths: ["Clean Code & Modular Architecture", "Microservices & Distributed Queues", "TypeScript & Modern React", "Version Control & Team Workflow"],
  },
  {
    platform: "LinkedIn",
    handle: "rounit-kashyap",
    url: "https://www.linkedin.com/in/rounit-kashyap/",
    icon: "/img/icons8-linkedin.svg",
    accentColor: "from-indigo-500/20 via-blue-500/20 to-transparent",
    borderColor: "hover:border-indigo-500/50",
    description: "Connect with me for software engineering roles, full-stack collaborations, and discussions on distributed systems & AI.",
    strengths: ["Technical Collaboration", "Engineering Leadership", "Continuous Learning", "Problem-Solving Mindset"],
  },
];

