import React, { useState } from 'react';
import { skillsData } from '../data';
import { Code2, Layers, Database, Cpu, BookOpen, Star } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  Database: Database,
  Cpu: Cpu
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category filters */}
      <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-neutral-100 text-neutral-900 border-neutral-100 shadow-lg shadow-white/5'
                : 'bg-neutral-900/60 text-neutral-400 border-neutral-800/80 hover:text-neutral-200 hover:border-neutral-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((catData) => {
          const IconComp = iconMap[catData.iconName] || BookOpen;
          return (
            <div 
              key={catData.category}
              className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 p-5 rounded-2xl flex flex-col justify-between transition-all hover:border-neutral-800"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-neutral-950 rounded-xl border border-neutral-800 text-neutral-300">
                    <IconComp className="w-5 h-5 text-neutral-200" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-100 tracking-wide uppercase">
                    {catData.category}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {catData.items.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div 
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group relative cursor-default"
                      >
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="font-semibold text-neutral-300 group-hover:text-neutral-100 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Custom visual progress bar */}
                        <div className="h-1.5 w-full bg-neutral-950 rounded-full overflow-hidden border border-neutral-900">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-neutral-600 to-neutral-200 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Extra context tip for the skills category */}
              <div className="mt-4 pt-3.5 border-t border-neutral-950/60 flex items-center justify-between text-[10px] text-neutral-500">
                <span className="flex items-center gap-1 font-mono">
                  <Star className="w-3 h-3 text-neutral-400 fill-neutral-400" /> Professional Experience
                </span>
                <span className="italic font-sans">Active Sandbox Production Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
