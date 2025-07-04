
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Cyberoide",
      location: "Rawalpindi",
      period: "Mar 2025 – Present",
      description: [
        "Leading development on multiple full-stack applications using Next.js, TypeScript, and MongoDB",
        "Integrated AWS Amplify, Cognito, and S3 for secure authentication, file storage, and deployment",
        "Worked on real-time streaming integrations using LiveKit with token-based Web3 earnings",
        "Managed Git workflows and deployed projects via Vercel and AWS"
      ]
    },
    {
      title: "Full Star Developer",
      company: "Softwise Solutions",
      location: "Remote",
      period: "Jul 2024 – Jan 2025",
      description: [
        "Built responsive UIs in React and Next.js with MongoDB backend",
        "Implemented Node.js APIs and practiced Git-based project collaboration"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Codebreaker Technologies",
      location: "Remote",
      period: "May 2024 – Jul 2024",
      description: [
        "Developed components in JavaScript/TypeScript, HTML, and CSS",
        "Learned clean code principles and scalable folder structures"
      ]
    },
    {
      title: "Intern",
      company: "Digital Empowerment Network",
      location: "Remote",
      period: "Mar 2024 – Apr 2024",
      description: [
        "Learned folder structure best practices for React and Next.js projects",
        "Integrated CMS (Sanity) and Stripe payment gateways"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Greens International",
      location: "Remote",
      period: "Oct 2023 – Feb 2024",
      description: [
        "Developed UI in React and Next.js",
        "Gained experience with Git for version control and project coordination"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                      <div className="text-gray-400 text-sm mt-1">
                        <span>{exp.location}</span> • <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
