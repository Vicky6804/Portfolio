export const personalInfo = {
  name: "Vignesh M",
  title: "Frontend & Fullstack Developer",
  subTitle: "B.Tech in AI & Data Science · UI/UX Craftsman",
  email: "vigneshmuniyandi6@gmail.com",
  phone: "+91 9597508087",
  github: "https://github.com/Vicky6804",
  githubUsername: "Vicky6804",
  location: "Coimbatore, Tamil Nadu",
  summary: "B.Tech (AI & Data Science) graduate with a strong focus on building clean, responsive UIs. I have practical experience with React and Next.js through an internship and self-driven projects using live APIs — including a full clinic management system, Netflix Studio, and a Swiggy-style food ordering app. I care about the details: good component structure, reusable code, readable code, and interfaces that actually make sense to users. Looking for a frontend role where I can build real things and keep growing."
};

export const projectsData = [
  {
    id: "netflix-studio",
    name: "Netflix Studio",
    subtitle: "React.js · Redux Toolkit · Firebase · TMDB API · Gemini AI",
    description: "A comprehensive Netflix clone featuring dynamic API integration, custom movie lists, and an intelligent AI Search feature powered by Gemini.",
    liveLink: "https://netflix-studio.vercel.app/browse",
    githubLink: "https://github.com/Vicky6804/netflix-studio",
    techStack: ["React.js", "Redux Toolkit", "Firebase Auth", "TMDB API", "Gemini API", "Tailwind CSS"],
    bullets: [
      "Built a Netflix clone with Firebase Authentication (Sign In / Sign Up) and protected routing.",
      "Fetched live movie data from TMDB API across multiple categories (Now Playing, Upcoming, Top Rated) and autoplay background trailers.",
      "Built an AI Search feature powered by Gemini API (gemini-2.5-flash) — accepts queries and returns AI-curated movie suggestions fetched and displayed from TMDB.",
      "Managed global app state (user session, AI toggle, movie data) with Redux Toolkit; deployed on Vercel with secure environment variables for all API keys."
    ],
    colorTheme: {
      primary: "from-red-600 to-red-950",
      accent: "text-red-500",
      bg: "bg-red-50/10",
      border: "border-red-900/40",
      badge: "bg-red-950/40 text-red-400 border-red-900/50"
    },
    features: [
      { title: "AI-Powered Search", desc: "Enter any mood or criteria (e.g., 'mind-bending sci-fi with dark visual themes') and get intelligent, AI-curated suggestions powered by Gemini-2.5-Flash." },
      { title: "Dynamic Trailers", desc: "Instantly autoplay high-definition trailers fetched live from TMDB as background video banners on hover." },
      { title: "Secure User Auth", desc: "Implements full Firebase authentication flows with client-side route guards preventing unauthorized access to browse channels." },
      { title: "State Management", desc: "Uses Redux Toolkit to maintain seamless global state for user credentials, movie lists, active trailers, and AI configurations." }
    ],
    mockupStyle: 'netflix'
  },
  {
    id: "clinic-management",
    name: "Clinic Management System",
    subtitle: "Next.js · Tailwind CSS · MySQL · Firebase · Role-Based Panels",
    description: "An enterprise-grade clinic ecosystem designed with multi-role access controls, doctor schedules, patient visit histories, and stock operations.",
    liveLink: "https://clinic-management-system-smoky.vercel.app/",
    githubLink: "https://github.com/Vicky6804/clinic-management-system",
    techStack: ["Next.js", "Tailwind CSS", "MySQL", "Firebase", "Node.js", "REST APIs"],
    bullets: [
      "Built the complete frontend and backend using Next.js, Tailwind CSS, MySQL, and Firebase.",
      "Designed role-based dashboards for Admin, Receptionist, Pharmacist, and Doctor — each with its own layout and access controls.",
      "Implemented authentication via Firebase with role-specific credentials, and connected the frontend to MySQL using Next.js API routes.",
      "Delivered key features: appointment booking, patient visit history, medicine stock management, medical receipt generation, and doctor schedule views."
    ],
    colorTheme: {
      primary: "from-sky-500 to-indigo-950",
      accent: "text-sky-500",
      bg: "bg-sky-50/10",
      border: "border-sky-900/40",
      badge: "bg-sky-950/40 text-sky-400 border-sky-900/50"
    },
    features: [
      { title: "Role-Based Dashboards", desc: "Customized interfaces for Admin, Receptionist, Pharmacist, and Doctor with unique access keys and feature permissions." },
      { title: "Patient Records", desc: "Maintains complete secure medical histories, visit logs, prescriptions, and recurring patient invoices." },
      { title: "Interactive Scheduler", desc: "A robust appointment booker that manages real-time doctor availability and prevents calendar overlaps." },
      { title: "Pharmacy Inventory", desc: "Tracks drug stock, provides low-supply warnings, and automatically compiles downloadable medical receipts." }
    ],
    mockupStyle: 'clinic'
  },
  {
    id: "food-ordering",
    name: "Food Ordering App",
    subtitle: "React.js (Parcel) · Tailwind CSS · Swiggy Live API · Custom Hooks",
    description: "A fast, production-style Swiggy food ordering clone that pulls dynamic restaurant databases and menus with optimized state delivery.",
    liveLink: "https://food-ordering-app-rouge-one.vercel.app/",
    githubLink: "https://github.com/Vicky6804/food-ordering-app",
    techStack: ["React.js", "Parcel", "Tailwind CSS", "Swiggy API", "Custom Hooks", "Lazy Loading"],
    bullets: [
      "Built a production-style food ordering app using Swiggy’s live API to dynamically render restaurant listings and detailed menu pages with real-time restaurant count updates.",
      "Implemented search and Top Rated filter functionality, and accordion-style menu sections on restaurant detail pages with expand/collapse toggle for improved UX.",
      "Used custom hooks and lazy loading for performance optimization; bundled with Parcel for fast development builds."
    ],
    colorTheme: {
      primary: "from-orange-500 to-amber-950",
      accent: "text-orange-500",
      bg: "bg-orange-50/10",
      border: "border-orange-900/40",
      badge: "bg-orange-950/40 text-orange-400 border-orange-900/50"
    },
    features: [
      { title: "Live Swiggy Integration", desc: "Pulls real-time restaurant data, current promotions, and menu items directly from Swiggy's active API endpoints." },
      { title: "Speed Optimization", desc: "Features custom React hooks, image compression, and lazy-loaded components to render lists in less than 500ms." },
      { title: "Advanced Filters", desc: "Instantly sort, find, and toggle top-rated restaurants, delivery timeframes, pure veg, or custom keyword queries." },
      { title: "Nested Menu Accordions", desc: "A highly intuitive menu grouping with custom expand/collapse state to enhance mobile navigation flow." }
    ],
    mockupStyle: 'food'
  }
];

export const skillsData = [
  {
    category: "Languages",
    iconName: "Code2",
    items: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    iconName: "Layers",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux Toolkit", level: 85 }
    ]
  },
  {
    category: "Backend & Database",
    iconName: "Database",
    items: [
      { name: "Firebase (Auth / Firestore)", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "Node.js & Express", level: 75 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "Tools & Platforms",
    iconName: "Cpu",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel / Netlify", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "npm / Parcel / Vite", level: 88 }
    ]
  }
];

export const experienceData = [
  {
    role: "Fullstack Developer Intern",
    company: "Clinic Management Project",
    location: "Remote",
    duration: "2 Month | 2024",
    liveLink: "https://clinic-management-system-smoky.vercel.app/",
    bullets: [
      "Built the complete frontend and backend using Next.js, Tailwind CSS, MySQL, and Firebase.",
      "Designed role-based dashboards for Admin, Receptionist, Pharmacist, and Doctor — each with its own layout and access controls.",
      "Implemented authentication via Firebase with role-specific credentials, and connected the frontend to MySQL using Next.js API routes.",
      "Delivered key features: appointment booking, patient visit history, medicine stock management, medical receipt generation, and doctor schedule views."
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    school: "Sri Ramakrishna Engineering College",
    location: "Coimbatore, Tamil Nadu",
    duration: "2022 — 2026"
  }
];
