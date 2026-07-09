import React, { useState } from "react";
import { personalInfo, projectsData } from "./data";
import ProjectCard from "./components/ProjectCard";
import SkillsSection from "./components/SkillsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/ContactForm";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Download,
  Laptop,
  Code2,
  Database,
  Shield,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [copiedType, setCopiedType] = useState(null);
  const [activeNav, setActiveNav] = useState("projects");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 1800);
  };

  const handleScrollTo = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white font-sans  pb-12">
      {/* 1. PREMIUM GLASS navbar                                                                                                                    overflow-x-hidden */}
      <header className="sticky top-0 z-50 w-full bg-neutral-950/75 backdrop-blur-md border-b border-neutral-900/80 px-4 md:px-8 py-3.5 flex justify-between items-center">
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-bold font-mono text-sm tracking-tighter hover:border-neutral-700 transition-colors">
            VM
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xs tracking-tight text-neutral-100 leading-none">
              {personalInfo.name}
            </span>
            <span className="text-[9px] text-neutral-500 font-medium tracking-wider font-mono mt-0.5">
              FRONTEND DEV
            </span>
          </div>
        </div>

        {/* Quick scroll links */}
        <nav className="hidden md:flex gap-1 bg-neutral-900/40 border border-neutral-900/60 p-0.5 rounded-xl">
          {[
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Technical Skills" },
            { id: "experience", label: "Experience" }
            // { id: "connect", label: "Contact" },
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => handleScrollTo(nav.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeNav === nav.id
                  ? "bg-neutral-800 text-white shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {nav.label}
            </button>
          ))}
        </nav>

        {/* Actions Button */}
        <div className="flex gap-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-colors cursor-pointer"
            title="GitHub Portfolio"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => handleScrollTo("connect")}
            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold px-3 py-1.5 rounded-lg text-xs tracking-wide cursor-pointer transition-colors"
          >
            Hire Me
          </button>
        </div>
      </header>

      {/* 2. DYNAMIC BACKGOUND BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden -z-10 select-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950" />
      </div>

      {/* 3. HERO & SUMMARY CONTAINER */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Hero Header */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-[10px] text-neutral-400 font-mono tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300 animate-pulse" />{" "}
              OPEN TO NEW ROLES
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Creating High-Performance <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
                React & Next.js
              </span>{" "}
              Platforms
            </h1>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
              {personalInfo.summary}
            </p>

            {/* Quick Contact Ribbons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {/* Email */}
              <div
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 px-3 py-2 rounded-xl flex items-center gap-2.5 cursor-pointer group transition-all text-xs"
              >
                <Mail className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                <span className="text-neutral-300 truncate max-w-[180px]">
                  {personalInfo.email}
                </span>
                {copiedType === "email" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </div>

              {/* Phone */}
              <div
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className="bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 px-3 py-2 rounded-xl flex items-center gap-2.5 cursor-pointer group transition-all text-xs"
              >
                <Phone className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                <span className="text-neutral-300 font-mono">
                  {personalInfo.phone}
                </span>
                {copiedType === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </div>

              {/* Location */}
              <div className="bg-neutral-900/30 border border-neutral-900 px-3 py-2 rounded-xl flex items-center gap-2.5 text-neutral-400 text-xs">
                <MapPin className="w-4 h-4 text-neutral-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Cards: Resume Overview Profile Card */}
          <div className="lg:col-span-4 bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 rounded-2xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 font-mono text-lg font-bold shadow-inner">
                VM
              </div>
              <div>
                <h3 className="font-bold text-sm text-neutral-100">
                  {personalInfo.name}
                </h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-bold">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-950/80 pt-3 space-y-2.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">
                  B.Tech Graduation
                </span>
                <span className="font-semibold text-neutral-200">2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">
                  Total Web Apps built
                </span>
                <span className="font-semibold text-neutral-200">
                  3 Live Apps
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">
                  Work internship
                </span>
                <span className="font-semibold text-neutral-200">
                  1 Fullstack Intern
                </span>
              </div>
            </div>

            {/* Simulated Resume Link */}
            <a
              href="#connect"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("connect");
              }}
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700/80 font-semibold py-2 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              {/* <Download className="w-3.5 h-3.5" />
              <span>Contact for full PDF resume</span> */}
            </a>
          </div>
        </div>

        {/* 4. PERFORMANCE STATUS BAR */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 bg-neutral-900/30 border border-neutral-900/60 p-4 rounded-2xl">
          <div className="text-center p-2.5">
            <Laptop className="w-5 h-5 text-neutral-500 mx-auto mb-1.5" />
            <p className="text-lg font-extrabold text-neutral-100">3</p>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">
              Live Websites
            </p>
          </div>
          <div className="text-center p-2.5">
            <Code2 className="w-5 h-5 text-neutral-500 mx-auto mb-1.5" />
            <p className="text-lg font-extrabold text-neutral-100">15+</p>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">
              Core Modules
            </p>
          </div>
          <div className="text-center p-2.5">
            <Database className="w-5 h-5 text-neutral-500 mx-auto mb-1.5" />
            <p className="text-lg font-extrabold text-neutral-100">
              MySQL & Firebase
            </p>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">
              Dual DB Synced
            </p>
          </div>
          <div className="text-center p-2.5">
            <Shield className="w-5 h-5 text-neutral-500 mx-auto mb-1.5" />
            <p className="text-lg font-extrabold text-neutral-100">
              100% Secure
            </p>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">
              Server Guarded API Keys
            </p>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-4 md:px-8 py-12 border-t border-neutral-900"
      >
        <div className="mb-8 text-center md:text-left">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center justify-center md:justify-start gap-1">
            <Laptop className="w-3.5 h-3.5" /> PRODUCTION WORK
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            Featured Applications Showcase
          </h2>
          <p className="text-neutral-400 text-xs mt-1.5 max-w-lg leading-relaxed">
            Highly engineered responsive web applications built with clean code
            practices, featuring direct external site redirections.
          </p>
        </div>

        <div className="space-y-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 6. SKILLS SECTION */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-4 md:px-8 py-12 border-t border-neutral-900"
      >
        <div className="mb-8 text-center md:text-left">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center justify-center md:justify-start gap-1">
            <Code2 className="w-3.5 h-3.5" /> STACK SPECIFICATIONS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            Technical Stack
          </h2>
          <p className="text-neutral-400 text-xs mt-1.5 max-w-lg leading-relaxed">
            Primary language frameworks, deployment environments, databases, and
            version controlling modules utilized in daily builds.
          </p>
        </div>

        <SkillsSection />
      </section>

      {/* 7. TIMELINE SECTION */}
      <section
        id="experience"
        className="max-w-5xl mx-auto px-4 md:px-8 py-12 border-t border-neutral-900"
      >
        <div className="mb-8 text-center md:text-left">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center justify-center md:justify-start gap-1">
            <BookOpen className="w-3.5 h-3.5" /> TIMELINE MILESTONES
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            Experience & Education Journey
          </h2>
          <p className="text-neutral-400 text-xs mt-1.5 max-w-lg leading-relaxed">
            Timeline mapping both professional development internships and
            standard engineering studies chronologically.
          </p>
        </div>

        <ExperienceTimeline />
      </section>

      {/* 8. CONTACT SECTION */}
      {/* <section
        id="connect"
        className="max-w-5xl mx-auto px-4 md:px-8 py-12 border-t border-neutral-900"
      >
        <div className="mb-8 text-center md:text-left">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center justify-center md:justify-start gap-1">
            <Mail className="w-3.5 h-3.5" /> SECURE INTEGRATION
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
            Dispatch A Connection Request
          </h2>
          <p className="text-neutral-400 text-xs mt-1.5 max-w-lg leading-relaxed">
            Submit a query to test live client-side telemetry logs. Your
            messages are stored in safety zones within your local browser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          <div className="lg:col-span-4 bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 rounded-2xl p-5 space-y-4 shadow-xl">
            <h3 className="font-bold text-sm text-neutral-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neutral-400" /> Hiring Details
            </h3>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Vignesh M is currently actively seeking Full-time Frontend
              Developer or Fullstack Intern opportunities. Ready to start
              instantly with full technical readiness.
            </p>

            <div className="border-t border-neutral-950/80 pt-4 space-y-3">
              <div className="flex gap-2.5 items-center text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                <span>
                  Notice Period:{" "}
                  <strong className="text-neutral-100">
                    Immediate (0 days)
                  </strong>
                </span>
              </div>
              <div className="flex gap-2.5 items-center text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                <span>
                  Willing to Relocate:{" "}
                  <strong className="text-neutral-100">Yes</strong>
                </span>
              </div>
              <div className="flex gap-2.5 items-center text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                <span>
                  Sponsorship Required:{" "}
                  <strong className="text-neutral-100">No</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 9. SECURE FOOTER */}
      <footer className="max-w-5xl mx-auto px-4 md:px-8 pt-8 mt-12 border-t border-neutral-900/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-mono">
        <div>© 2026 {personalInfo.name}.</div>
        <div>Coimbatore · Sri Ramakrishna Engineering College</div>
      </footer>
    </div>
  );
}
