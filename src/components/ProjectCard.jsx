import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectCard({ project }) {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div 
      id={project.id}
      className={`bg-neutral-900/60 backdrop-blur-md rounded-2xl border ${project.colorTheme.border} overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/40`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
        {/* Left Column: Project Identity & Description */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${project.colorTheme.badge}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 tracking-tight flex items-center gap-2">
              {project.name}
              {project.id === 'netflix-studio' && (
                <span className="flex items-center gap-0.5 bg-red-950/80 border border-red-500/30 text-red-400 text-[8px] font-bold px-1.5 py-0.5 rounded font-mono uppercase animate-pulse">
                  <Sparkles className="w-2 h-2 text-red-400" /> AI Enabled
                </span>
              )}
            </h3>
            
            <p className="text-neutral-400 text-xs mt-1.5 font-medium leading-relaxed">
              {project.subtitle}
            </p>

            <p className="text-neutral-300 text-sm mt-4 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800/80">
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs cursor-pointer shadow-md shadow-black/10 transition-colors"
              >
                <span>Visit Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a 
              href={project.githubLink || `https://github.com/Vicky6804`}
              target="_blank" 
              rel="noopener noreferrer"
              className={`${project.liveLink ? 'flex-1 min-w-[130px]' : 'w-full'} bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs cursor-pointer transition-colors`}
              title="View Source on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Right Column: Highlights & Resume Bullet points */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <div className="bg-neutral-950/40 p-1.5 rounded-xl border border-neutral-800/50 flex gap-2 mb-4 w-full">
            <button
              onClick={() => setActiveTab('features')}
              className={`flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'features'
                  ? 'bg-neutral-800 text-neutral-100 shadow-sm border border-neutral-700/50'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Project Highlights
            </button>
            <button
              onClick={() => setActiveTab('resume')}
              className={`flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'resume'
                  ? 'bg-neutral-800 text-neutral-100 shadow-sm border border-neutral-700/50'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Resume Bullet Points ({project.bullets.length})
            </button>
          </div>

          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === 'features' ? (
                <motion.div 
                  key="features"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="bg-neutral-950/50 p-3.5 rounded-xl border border-neutral-800/60 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-200 flex items-center gap-1.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${project.colorTheme.accent}`} />
                          {feat.title}
                        </h4>
                        <p className="text-neutral-400 text-[11px] leading-relaxed mt-1.5">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="resume"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-2"
                >
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 text-xs text-neutral-300 bg-neutral-950/40 p-3 rounded-lg border border-neutral-800/30">
                      <span className="text-neutral-500 font-mono select-none font-medium">0{idx+1}.</span>
                      <p className="leading-relaxed font-light">{bullet}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}


