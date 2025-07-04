"use client";
import React, { useState } from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React.js", level: 90, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gradient-to-r from-blue-400 to-purple-500" },
        { name: "TypeScript", level: 80, color: "bg-gradient-to-r from-purple-400 to-pink-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-gradient-to-r from-teal-400 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
        { name: "HTML5", level: 95, color: "bg-gradient-to-r from-orange-400 to-red-500" },
        { name: "CSS3", level: 90, color: "bg-gradient-to-r from-pink-400 to-purple-500" }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 80, color: "bg-gradient-to-r from-green-400 to-emerald-500" },
        { name: "Express.js", level: 75, color: "bg-gradient-to-r from-gray-400 to-slate-500" },
        { name: "MongoDB", level: 85, color: "bg-gradient-to-r from-green-500 to-teal-500" },
        { name: "REST APIs", level: 85, color: "bg-gradient-to-r from-blue-500 to-indigo-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-green-400 to-teal-500",
      skills: [
        { name: "AWS Amplify", level: 80, color: "bg-gradient-to-r from-orange-400 to-yellow-500" },
        { name: "AWS Cognito", level: 75, color: "bg-gradient-to-r from-red-400 to-pink-500" },
        { name: "AWS S3", level: 80, color: "bg-gradient-to-r from-indigo-400 to-purple-500" },
        { name: "Vercel", level: 90, color: "bg-gradient-to-r from-gray-700 to-black" },
        { name: "Git", level: 85, color: "bg-gradient-to-r from-red-500 to-orange-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "LiveKit", level: 70, color: "bg-gradient-to-r from-violet-400 to-purple-500" },
        { name: "Web3", level: 65, color: "bg-gradient-to-r from-yellow-500 to-orange-600" },
        { name: "Stripe", level: 75, color: "bg-gradient-to-r from-blue-600 to-purple-600" },
        { name: "Sanity CMS", level: 80, color: "bg-gradient-to-r from-red-500 to-pink-500" },
        { name: "GitHub", level: 85, color: "bg-gradient-to-r from-gray-600 to-gray-800" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            🔥 Technologies I use to craft exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl"></div>
              
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div 
                          className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ 
                            width: hoveredSkill === `${index}-${skillIndex}` ? `${skill.level}%` : '0%'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
