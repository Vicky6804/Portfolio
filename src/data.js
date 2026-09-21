export const personalInfo = {
  name: "Vignesh M",
  title: "Software Engineer | Full Stack & AI Developer",
  subTitle: "B.Tech in AI & Data Science · Full-Stack Systems & Applied AI",
  email: "vignesh.m6804@gmail.com",
  phone: "+91 95975 08087",
  github: "https://github.com/Vicky6804",
  githubUsername: "Vicky6804",
  location: "Coimbatore, Tamil Nadu, India",
  summary: "B.Tech (AI & Data Science) graduate and Software Engineer grounded in Data Structures, Algorithms, and OOP with proficiency in Python, C++, and JavaScript. Experienced in building full-stack web platforms and applied AI/ML systems end-to-end using React, Next.js, Node.js, FastAPI, and MySQL, alongside practical expertise in hybrid RAG retrieval, computer vision (PyTorch, OpenCV, PaddleOCR), and RESTful system design."
};

export const projectsData = [
  {
    id: "smart-id-verification",
    name: "Smart ID Verification System",
    subtitle: "Python · FastAPI · PyTorch · OpenCV · PaddleOCR · Deep Learning",
    description: "An end-to-end computer vision and deep learning verification system with an EfficientNet-B0 document classifier, PaddleOCR structured field extraction, Verhoeff/MRZ checksum validation, and 512-dim facial recognition.",
    liveLink: null,
    githubLink: "https://github.com/Vicky6804/Smart-ID-Verification-System",
    techStack: ["Python", "FastAPI", "PyTorch", "OpenCV", "PaddleOCR", "EfficientNet-B0", "Face Matching", "Verhoeff Checksum"],
    bullets: [
      "Trained an EfficientNet-B0 classifier on 1,855 images across 3 ID types (Aadhaar, PAN, Passport), achieving 100% test accuracy on 279 unseen test samples.",
      "Deployed 2 FastAPI endpoints incorporating 3 image-quality filters (blur, glare, brightness) and 3 parsers extracting 4–8 structured identity fields per document via PaddleOCR.",
      "Implemented data integrity validation using 12-digit Verhoeff checksums for Aadhaar and 4 MRZ checksums for Passports, alongside 512-dimensional face embedding matching via cosine similarity."
    ],
    colorTheme: {
      primary: "from-emerald-500 to-teal-950",
      accent: "text-emerald-400",
      bg: "bg-emerald-50/10",
      border: "border-emerald-900/40",
      badge: "bg-emerald-950/40 text-emerald-400 border-emerald-900/50"
    },
    features: [
      { title: "EfficientNet-B0 Classifier", desc: "Trained on 1,855 images across 3 ID types (Aadhaar, PAN, Passport), achieving 100% test accuracy on 279 unseen test samples." },
      { title: "FastAPI Quality Filters", desc: "Deployed 2 FastAPI endpoints incorporating 3 image-quality filters (blur, glare, brightness) before parsing." },
      { title: "PaddleOCR Parsers", desc: "Specialized OCR parsers extracting 4–8 structured identity fields (Name, DOB, ID number, Address) per document." },
      { title: "Checksums & Face Similarity", desc: "12-digit Verhoeff algorithm for Aadhaar, 4 MRZ checks for Passports, and 512-dim face embedding cosine matching." }
    ]
  },
  {
    id: "research-paper-assistant",
    name: "Research Intelligence Assistant (RAG)",
    subtitle: "Python · FastAPI · Hybrid RAG · FAISS · BM25 · Sentence Transformers · Multi-LLM",
    description: "A modular, production-ready RAG assistant that processes research paper PDFs, executes 2-stage hybrid retrieval with FAISS and BM25, reranks candidates with cross-encoders, and streams grounded answers with source citations.",
    liveLink: null,
    githubLink: "https://github.com/Vicky6804/research-paper-intelligence-assistant",
    techStack: ["Python", "FastAPI", "Hybrid RAG", "FAISS", "BM25", "Sentence Transformers", "Groq / OpenAI", "SSE Streaming"],
    bullets: [
      "Engineered a 2-stage hybrid RAG pipeline combining FAISS semantic search and BM25 keyword search with cross-encoder reranking (selecting top 3 from 6 candidates).",
      "Generated 384-dimensional embeddings locally with 500-character chunking (10% overlap), eliminating external embedding API costs and dependency.",
      "Built 4 FastAPI endpoints supporting 3 LLM providers (Groq, OpenAI, Anthropic), SSE response streaming, and 5-turn / 10-message conversational memory.",
      "Achieved a 100% pass rate on a 19-question evaluation suite across 6 retrieval categories (lookup, numerical, table, multi-hop, tricky, and negative checks)."
    ],
    colorTheme: {
      primary: "from-blue-500 to-indigo-950",
      accent: "text-blue-400",
      bg: "bg-blue-50/10",
      border: "border-blue-900/40",
      badge: "bg-blue-950/40 text-blue-400 border-blue-900/50"
    },
    features: [
      { title: "2-Stage Hybrid Retrieval", desc: "Combines FAISS semantic search and BM25 keyword search with cross-encoder reranking (top 3 from 6 candidates)." },
      { title: "Zero-Cost Local Embeddings", desc: "Generated 384-dimensional embeddings locally with 500-char chunking and 10% overlap, eliminating API costs." },
      { title: "Multi-LLM & SSE Streaming", desc: "4 FastAPI endpoints supporting Groq, OpenAI, and Anthropic with Server-Sent Events token streaming and 5-turn memory." },
      { title: "100% Evaluation Pass Rate", desc: "Verified on a 19-question evaluation suite across 6 retrieval categories including multi-hop and negative checks." }
    ]
  },
  {
    id: "netflix-studio",
    name: "Netflix Studio",
    subtitle: "React.js · Node.js · Tailwind CSS · Redux Toolkit · Firebase · TMDB API · Gemini 2.5 Flash",
    description: "Full-stack AI streaming web application with Gemini 2.5 Flash conversational movie recommendations, live TMDB API media catalog integration, and secure Firebase authentication.",
    liveLink: "https://netflix-studio.vercel.app/browse",
    githubLink: "https://github.com/Vicky6804/netflix-studio",
    techStack: ["React.js", "Node.js", "Tailwind CSS", "Redux Toolkit", "Firebase Auth", "TMDB API", "Gemini 2.5 Flash"],
    bullets: [
      "Integrated Gemini 2.5 Flash to build an AI-powered conversational movie recommendation engine interpreting natural-language genre and plot queries.",
      "Connected TMDB REST APIs for real-time media catalogs (Now Playing, Upcoming, Top Rated) and implemented Firebase Authentication with protected client-side routes.",
      "Optimized frontend performance with Redux Toolkit, search input debouncing, and custom API response caching, reducing redundant network requests by over 40%."
    ],
    colorTheme: {
      primary: "from-red-600 to-red-950",
      accent: "text-red-500",
      bg: "bg-red-50/10",
      border: "border-red-900/40",
      badge: "bg-red-950/40 text-red-400 border-red-900/50"
    },
    features: [
      { title: "Gemini 2.5 Flash AI Engine", desc: "Interprets natural-language genre, mood, and plot queries to generate contextual movie recommendations with live TMDB lookup." },
      { title: "Dynamic Video Trailers", desc: "Real-time TMDB catalogs across Now Playing, Upcoming, and Top Rated with autoplay background video banners." },
      { title: "Protected Routes & Firebase", desc: "Firebase Authentication protecting client-side browsing routes and managing user credentials securely." },
      { title: "40%+ Redundant Call Reduction", desc: "Redux Toolkit state management paired with search debouncing and response caching to cut redundant API requests." }
    ]
  },
  {
    id: "clinic-management",
    name: "Clinic Management System",
    subtitle: "Next.js · Tailwind CSS · MySQL · Firebase Auth · Role-Based Panels",
    description: "Full-stack clinic architecture built across 18 relational database tables with 4 role-based dashboards, patient visit records, appointment scheduling, and a real-time pharmacy assistant.",
    liveLink: "https://clinic-management-system-smoky.vercel.app/",
    githubLink: "https://github.com/Vicky6804/clinic-management-system",
    techStack: ["Next.js", "Tailwind CSS", "MySQL", "Firebase Auth", "Node.js", "REST APIs"],
    bullets: [
      "Built full-stack architecture using Next.js, Tailwind CSS, Firebase Auth, and MySQL modeled across 18 relational database tables.",
      "Designed 4 dedicated role-based dashboards (Admin, Receptionist, Pharmacist, Doctor) with customized layouts, route protection, and granular access controls.",
      "Engineered Next.js API routes to handle appointment booking, patient visit histories, medical receipt generation, and doctor shift schedules.",
      "Developed a real-time pharmacy inventory assistant to query medicine stock levels, detect low-stock thresholds, and track product expiries."
    ],
    colorTheme: {
      primary: "from-sky-500 to-indigo-950",
      accent: "text-sky-400",
      bg: "bg-sky-50/10",
      border: "border-sky-900/40",
      badge: "bg-sky-950/40 text-sky-400 border-sky-900/50"
    },
    features: [
      { title: "18 Relational Tables", desc: "Comprehensive MySQL relational schema for patients, doctors, shifts, appointments, prescriptions, and billing receipts." },
      { title: "4 Role-Based Dashboards", desc: "Dedicated interfaces for Admin, Receptionist, Pharmacist, and Doctor with granular access control and route protection." },
      { title: "Visit & Schedule Engine", desc: "Engineered Next.js API routes managing real-time appointments, visit histories, and doctor shift calendars." },
      { title: "Pharmacy Inventory Assistant", desc: "Real-time stock monitor to query medicine inventory, detect low-stock thresholds, and track expiry dates." }
    ]
  },
  {
    id: "food-ordering",
    name: "Food Ordering App (Swiggy Clone)",
    subtitle: "React.js (Parcel) · Node.js · JavaScript · Tailwind CSS · Swiggy API",
    description: "A production-style food ordering web application using Swiggy's live API to dynamically render restaurant listings and detailed menu pages with real-time restaurant counts, search filtering, and accordion menu categories.",
    liveLink: "https://food-ordering-app-rouge-one.vercel.app/",
    githubLink: "https://github.com/Vicky6804/food-ordering-app",
    techStack: ["React.js", "Parcel", "JavaScript", "Tailwind CSS", "Swiggy API", "Custom Hooks", "Lazy Loading"],
    bullets: [
      "Built a production-style food ordering app using Swiggy’s live API to dynamically render restaurant listings and detailed menu pages with real-time restaurant count updates.",
      "Implemented search and Top Rated filter functionality, and accordion-style menu sections on restaurant detail pages with expand/collapse toggle for improved UX.",
      "Used custom hooks and lazy loading for performance optimization; bundled with Parcel for fast development builds."
    ],
    colorTheme: {
      primary: "from-orange-500 to-amber-950",
      accent: "text-orange-400",
      bg: "bg-orange-50/10",
      border: "border-orange-900/40",
      badge: "bg-orange-950/40 text-orange-400 border-orange-900/50"
    },
    features: [
      { title: "Live Swiggy API Integration", desc: "Dynamically renders real-time restaurant listings, current promotions, and menu items directly from active Swiggy API endpoints." },
      { title: "Search & Top Rated Filters", desc: "Instant filtering with quick search and Top Rated restaurant toggles for streamlined culinary discovery." },
      { title: "Accordion Menu Sections", desc: "Interactive category accordions with expand/collapse toggles for clean restaurant menu browsing." },
      { title: "Custom Hooks & Lazy Loading", desc: "Optimized performance with custom state hooks, lazy loading, and Parcel bundling for lightning-fast delivery." }
    ]
  }
];

export const skillsData = [
  {
    category: "Languages",
    iconName: "Code2",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "C++", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    iconName: "Layers",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "FastAPI", level: 90 },
      { name: "Node.js & Express", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux Toolkit", level: 90 }
    ]
  },
  {
    category: "AI / ML & Computer Vision",
    iconName: "Cpu",
    items: [
      { name: "Hybrid RAG (FAISS & BM25)", level: 92 },
      { name: "Sentence Transformers & Embeddings", level: 90 },
      { name: "PyTorch & CNNs (EfficientNet)", level: 88 },
      { name: "OpenCV & Face Recognition", level: 90 },
      { name: "PaddleOCR Document Parsers", level: 88 },
      { name: "Scikit-learn", level: 85 }
    ]
  },
  {
    category: "Backend, Database & Tools",
    iconName: "Database",
    items: [
      { name: "MySQL & Relational Modeling", level: 88 },
      { name: "Firebase (Auth & Firestore)", level: 90 },
      { name: "RESTful API Design & SSE", level: 92 },
      { name: "Git & GitHub", level: 92 },
      { name: "Postman & API Testing", level: 90 },
      { name: "Vercel & VS Code", level: 95 }
    ]
  }
];

export const experienceData = [
  {
    role: "Full Stack Intern",
    company: "Qwat Innovation",
    project: "Clinic Management System",
    location: "Coimbatore, India",
    duration: "2 Months | 2024",
    liveLink: "https://clinic-management-system-smoky.vercel.app/",
    techStack: "Next.js · Tailwind CSS · MySQL · Firebase Auth · REST APIs",
    bullets: [
      "Built full-stack architecture using Next.js, Tailwind CSS, Firebase Auth, and MySQL modeled across 18 relational database tables.",
      "Designed 4 dedicated role-based dashboards (Admin, Receptionist, Pharmacist, Doctor) with customized layouts, route protection, and granular access controls.",
      "Engineered Next.js API routes to handle appointment booking, patient visit histories, medical receipt generation, and doctor shift schedules.",
      "Developed a real-time pharmacy inventory assistant to query medicine stock levels, detect low-stock thresholds, and track product expiries."
    ]
  },
  {
    role: "AI Engineer Intern",
    company: "Nxt Logic",
    project: "Research Intelligence Assistant (RAG)",
    location: "Coimbatore, India",
    duration: "2 Months | 2024",
    githubLink: "https://github.com/Vicky6804/research-paper-intelligence-assistant",
    techStack: "Python · FastAPI · FAISS · BM25 · Sentence Transformers · Groq",
    bullets: [
      "Engineered a 2-stage hybrid RAG pipeline combining FAISS semantic search and BM25 keyword search with cross-encoder reranking (selecting top 3 from 6 candidates).",
      "Generated 384-dimensional embeddings locally with 500-character chunking (10% overlap), eliminating external embedding API costs and dependency.",
      "Built 4 FastAPI endpoints supporting 3 LLM providers (Groq, OpenAI, Anthropic), SSE response streaming, and 5-turn / 10-message conversational memory.",
      "Achieved a 100% pass rate on a 19-question evaluation suite across 6 retrieval categories (lookup, numerical, table, multi-hop, tricky, and negative checks)."
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    school: "Sri Ramakrishna Engineering College",
    location: "Coimbatore, Tamil Nadu",
    duration: "Oct 2022 — 2026",
    details: "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Deep Learning, Operating Systems, Computer Networks, and Software Engineering."
  },
  {
    degree: "Higher Secondary Certificate (HSC) & SSLC",
    school: "RJ Matric Hr. Sec. School",
    location: "Coimbatore, Tamil Nadu",
    duration: "Grad. May 2022 (HSC) · Grad. Mar 2020 (SSLC)",
    details: "Strong academic foundation in Mathematics, Physics, Chemistry, and Computer Science."
  }
];

export const certificationsData = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy"
  },
  {
    title: "AWS Cloud Foundation",
    issuer: "AWS Academy"
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy"
  }
];

