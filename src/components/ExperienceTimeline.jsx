import React, { useState } from 'react';
import { experienceData, educationData, certificationsData } from '../data';
import { Briefcase, GraduationCap, MapPin, Calendar, ExternalLink, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="space-y-6">
      {/* Tab controls */}
      <div className="flex gap-2 justify-center md:justify-start">
        {['all', 'work', 'education'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === tab
                ? 'bg-neutral-100 text-neutral-900 shadow-md shadow-white/5 font-bold'
                : 'bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-neutral-200'
            }`}
          >
            {tab === 'all' && 'All Timelines'}
            {tab === 'work' && '💼 Experience'}
            {tab === 'education' && '🎓 Education & Certifications'}
          </button>
        ))}
      </div>

      <div className="relative border-l border-neutral-800/80 ml-3.5 pl-6 space-y-8">
        {/* EXPERIENCE BLOCKS */}
        {(activeTab === 'all' || activeTab === 'work') && (
          experienceData.map((exp, expIdx) => (
            <div key={expIdx} className="relative">
              {/* Bullet node */}
              <span className="absolute -left-[35px] top-1.5 p-1 bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-3.5 h-3.5" />
              </span>

              <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 rounded-2xl p-5 hover:border-neutral-800 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-500" /> {exp.location} · {exp.company}
                      </span>
                      <h3 className="text-base font-bold text-neutral-100 mt-0.5">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-neutral-300 mt-0.5">
                        {exp.project}
                      </p>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800/80 text-[10px] font-mono px-2.5 py-1 rounded-xl text-neutral-400 font-semibold w-fit flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-500" /> {exp.duration}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-2.5 text-xs text-neutral-400 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action / Tech Stack */}
                <div className="mt-5 border-t border-neutral-950/60 pt-4 flex flex-wrap justify-between items-center gap-2">
                  <span className="text-[10px] text-neutral-500 font-mono">
                    Stack: {exp.techStack}
                  </span>
                  {exp.liveLink && (
                    <a 
                      href={exp.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold px-3.5 py-1.5 rounded-lg text-[10px] flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                    >
                      Explore Clinic App <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {exp.githubLink && (
                    <a 
                      href={exp.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-semibold px-3.5 py-1.5 rounded-lg text-[10px] flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      GitHub Repo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}

        {/* EDUCATION BLOCKS */}
        {(activeTab === 'all' || activeTab === 'education') && (
          educationData.map((edu, eduIdx) => (
            <div key={eduIdx} className="relative">
              {/* Bullet node */}
              <span className="absolute -left-[35px] top-1.5 p-1 bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-3.5 h-3.5" />
              </span>

              <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 rounded-2xl p-5 hover:border-neutral-800 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-500" /> {edu.location}
                    </span>
                    <h3 className="text-base font-bold text-neutral-100 mt-0.5">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-300 mt-0.5">
                      {edu.school}
                    </p>
                  </div>
                  <div className="bg-neutral-950 border border-neutral-800/80 text-[10px] font-mono px-2.5 py-1 rounded-xl text-neutral-400 font-semibold w-fit flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-neutral-500" /> {edu.duration}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mt-4">
                  {edu.details}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-950/60 flex justify-between items-center">
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {edu.school}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    Verified Credentials <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))
        )}

        {/* CERTIFICATIONS BLOCK */}
        {(activeTab === 'all' || activeTab === 'education') && certificationsData && (
          <div className="relative">
            <span className="absolute -left-[35px] top-1.5 p-1 bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-3.5 h-3.5" />
            </span>

            <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 rounded-2xl p-5 hover:border-neutral-800 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-bold text-neutral-100 tracking-wide uppercase">
                  Industry Certifications
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {certificationsData.map((cert, cIdx) => (
                  <div key={cIdx} className="bg-neutral-950/50 border border-neutral-800/60 p-3 rounded-xl">
                    <p className="text-xs font-bold text-neutral-200">{cert.title}</p>
                    <p className="text-[10px] text-neutral-400 font-mono mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
