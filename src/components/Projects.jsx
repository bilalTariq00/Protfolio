
import React from 'react';
import { Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "StreamX",
      description: "Live streaming platform built with Next.js, LiveKit, and Web3 tokens to help users earn money by streaming in real-time.",
      technologies: ["Next.js", "LiveKit", "Web3", "TypeScript", "Real-time"],
      category: "Full Stack"
    },
    {
      title: "StreamXCapital",
      description: "Debt resolution web app integrated with dynamic forms and custom dashboards for user financial recovery.",
      technologies: ["React", "Dynamic Forms", "Custom Dashboards", "Financial APIs"],
      category: "Web Application"
    },
    {
      title: "AmnisX",
      description: "Informational site showcasing StreamX features and documentation using modern frontend stacks.",
      technologies: ["React", "Next.js", "Modern UI", "Documentation"],
      category: "Website"
    },
    {
      title: "Sozorock Health (US & CA)",
      description: "Online medical consultation service for Canada and US. Features include appointment booking, patient medical history, and responsive UI.",
      technologies: ["React", "Medical APIs", "Appointment System", "Responsive Design"],
      category: "Healthcare",
      links: {
        live: "https://sozorockhealth.ca",
        website: "https://sozorockhealth.com"
      }
    },
    {
      title: "Sozorock Provider",
      description: "Healthcare portal for doctors and consultants to manage appointments, update availability, and access patient records with integrated Zoom support.",
      technologies: ["React", "Zoom Integration", "Healthcare Management", "Real-time"],
      category: "Healthcare Platform"
    },
    {
      title: "Sanee",
      description: "Job consultation and gig platform built in Vite. Includes messaging, profile management, and contract handling for recruiters and job seekers.",
      technologies: ["Vite", "Messaging System", "Profile Management", "Contract Handling"],
      category: "Job Platform"
    },
    {
      title: "Soundes",
      description: "E-commerce platform built with Next.js, includes product pages and user authentication.",
      technologies: ["Next.js", "E-commerce", "Authentication", "Product Management"],
      category: "E-commerce",
      links: {
        live: "https://ecommerce-6vsv.vercel.app/"
      }
    },
    {
      title: "Figmoria",
      description: "Figma clone with React.js, Tailwind CSS, and Framer Motion for animations.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Design Tools"],
      category: "Design Tool",
      links: {
        live: "https://figma-clone-kappa-jade.vercel.app/"
      }
    },
    {
      title: "Eatify",
      description: "Restaurant menu application built in React.js with an intuitive UI.",
      technologies: ["React.js", "Restaurant Management", "Intuitive UI", "Menu System"],
      category: "Restaurant App",
      links: {
        live: "https://restaurant-jsx.vercel.app/"
      }
    }
  ];

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Code className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {project.links && (
                    <div className="flex space-x-2">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="flex space-x-4">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                           className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                          View Live →
                        </a>
                      )}
                      {project.links.website && (
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer" 
                           className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                          Website →
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
