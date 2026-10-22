export const PERSONAL_INFO = {
  name: "Rounit Kashyap",
  shortName: "Rounit",
  headline: "Software Engineer & Competitive Programmer",
  dragonJoke: "I write the code and my Dragon burns the bugs 🪲",
  bio: "I'm a software engineer focused on building reliable backend systems, clean and practical web applications, and working through algorithmic challenges. Currently exploring distributed systems and multimodal AI.",
  email: "rounitpeppa@gmail.com",
  location: "India",
  resumeUrl: "https://drive.google.com/file/d/1IW5P_CC2-FeWOGv_NgBsup7_3AphHVJM/view?usp=sharing",
  dragonGif: "/giphy.gif",
  pikachuTrainGif: "/About_cards/train.gif",
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Rounit-1st",
    handle: "Rounit-1st",
    icon: "/Hyper_Image/github.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rounit-kashyap/",
    handle: "rounit-kashyap",
    icon: "/img/icons8-linkedin.svg",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/forcerounit",
    handle: "forcerounit",
    icon: "/img/icons8-codeforces-96.png",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/chefrounit",
    handle: "chefrounit",
    icon: "/img/icons8-codechef.svg",
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
  { name: "React", icon: "/About_cards/reactjs.png" },
  { name: "Node.js", icon: "/About_cards/nodejs.png" },
  { name: "Python", icon: "/img/icons8-python.svg" },
  { name: "PostgreSQL", icon: "/img/icons8-postgres.svg" },
  { name: "TypeScript", icon: "/About_cards/javascript.png" },
  { name: "Tailwind", icon: "/About_cards/tailwind.png" },
  { name: "Express", icon: "/img/icons8-express-js.svg" },
  { name: "Django", icon: "/img/icons8-django.svg" },
  { name: "Pandas", icon: "/img/icons8-pandas.svg" },
  { name: "NumPy", icon: "/img/icons8-numpy.svg" },
  { name: "Git", icon: "/About_cards/git.png" },
  { name: "HTML & CSS", icon: "/About_cards/html.png" },
];

export const PROJECTS = [
  {
    id: "ronime",
    title: "Ronime",
    subtitle: "Anime Discovery & Trailer Streaming Platform",
    category: "frontend",
    isFeatured: true,
    description:
      "A web application for discovering anime titles, browsing detailed metadata (synopsis, ratings, recommendations), and watching HD trailers in smooth playback. Features a smart search by title, genre, and release year alongside personalized watchlists.",
    features: [
      "Search anime by title, genre, or release season",
      "Embedded HD trailer player with minimal buffering",
      "Dedicated detail pages with recommendations and synopsis",
      "Custom watchlists and bookmarking",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "HTML5 Video"],
    githubUrl: "https://github.com/Rounit-1st/Ronime",
    media: {
      image: "/Projects/projectOneImg.png",
      video1: "/Projects/projectOneVid.mp4",
      video2: "/Projects/projectOneVid2.mp4",
      logo: "/Projects/projectLogo.png",
    },
  },
  {
    id: "payment-system",
    title: "Payment Processing System",
    subtitle: "Microservices Architecture",
    category: "backend",
    isFeatured: false,
    description:
      "A modular payment processing backend structured into five independent microservices for scalability and maintainability. Implements idempotency keys to prevent duplicate transactions, event webhook dispatching, and transaction ledger auditing.",
    tags: ["TypeScript", "Node.js", "Express", "Microservices", "PostgreSQL"],
    githubUrl: "https://github.com/Rounit-1st/Payment-system",
  },
  {
    id: "vectorcart",
    title: "VectorCart",
    subtitle: "Multimodal Product Search",
    category: "ai-data",
    isFeatured: false,
    description:
      "A multimodal search service using Fashion-CLIP and Sentence Transformers to connect natural language queries with image embeddings. Integrates Model Context Protocol (MCP) to support agent-driven product discovery.",
    tags: ["Python", "PyTorch", "Fashion-CLIP", "Sentence Transformers", "MCP"],
    githubUrl: "https://github.com/Rounit-1st/VectorCart",
  },
  {
    id: "clockfire-v2",
    title: "Clockfire Job Scheduler",
    subtitle: "Distributed Task Processing",
    category: "backend",
    isFeatured: false,
    description:
      "A distributed job scheduling system designed to manage and execute background jobs. Features decoupled service managers and consumer workers, queue management, and retry handling for failed tasks.",
    tags: ["TypeScript", "Node.js", "Distributed Systems", "Worker Queues"],
    githubUrl: "https://github.com/Rounit-1st/Clockfire-v2",
  },
  {
    id: "rasangat",
    title: "Rasangat",
    subtitle: "Food Ordering Platform",
    category: "frontend",
    isFeatured: false,
    description:
      "Full-stack food ordering platform with authentication, interactive menu catalog, live cart management, and payment checkout integration with Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    githubUrl: "https://github.com/Rounit-1st/Rasangat",
  },
  {
    id: "muscix",
    title: "Muscix",
    subtitle: "Audio Feature Extraction",
    category: "ai-data",
    isFeatured: false,
    description:
      "Python-based audio processing tool using NumPy and Pandas to extract spectral features, acoustic characteristics, and compute similarity scoring between music tracks.",
    tags: ["Python", "NumPy", "Pandas", "Audio DSP"],
    githubUrl: "https://github.com/Rounit-1st/muscix",
  },
];

export const CODING_PROFILES = [
  {
    platform: "Codeforces",
    handle: "forcerounit",
    url: "https://codeforces.com/profile/forcerounit",
    icon: "/img/icons8-codeforces-96.png",
    note: "Regular participant in algorithmic contests, practicing graph algorithms, dynamic programming, and binary search.",
  },
  {
    platform: "CodeChef",
    handle: "chefrounit",
    url: "https://www.codechef.com/users/chefrounit",
    icon: "/img/icons8-codechef.svg",
    note: "Participates in rated rounds solving mathematical, combinatorics, and greedy problem sets.",
  },
  {
    platform: "GitHub",
    handle: "Rounit-1st",
    url: "https://github.com/Rounit-1st",
    icon: "/Hyper_Image/github.png",
    note: "Open-source projects across backend microservices, multimodal search, web applications, and utility tools.",
  },
  {
    platform: "LinkedIn",
    handle: "rounit-kashyap",
    url: "https://www.linkedin.com/in/rounit-kashyap/",
    icon: "/img/icons8-linkedin.svg",
    note: "Professional profile for software engineering roles, work history, and engineering discussions.",
  },
];
