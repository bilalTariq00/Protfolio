
import React from 'react';
import { User, Code, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with expertise in Next.js, TypeScript, MongoDB, and AWS cloud services including Amplify, 
              Cognito, and S3. Strong background in building scalable full-stack web applications and real-time systems using 
              LiveKit and Web3 technologies.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Proficient in Git workflows, RESTful APIs, and deployment via Vercel and AWS. Passionate about writing clean code 
              and delivering quality user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Rawalpindi, Pakistan</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">2+ Years</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50">
              <div className="flex items-center space-x-4 mb-4">
                <Code className="text-blue-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-blue-400 font-medium">Bachelor of Science in Computer Science</h5>
                  <p className="text-gray-300">PMAS Arid Agriculture University, Rawalpindi</p>
                </div>
                <div>
                  <h5 className="text-blue-400 font-medium">F.Sc (Pre-Engineering)</h5>
                  <p className="text-gray-300">Rangers College</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50">
              <div className="flex items-center space-x-4 mb-4">
                <Github className="text-purple-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Portfolio Links</h4>
              </div>
              <div className="space-y-2">
                <a href="https://portfolio-react-two.vercel.app/" target="_blank" rel="noopener noreferrer" 
                   className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Portfolio Website
                </a>
                <a href="https://github.com/bilalTariq00" target="_blank" rel="noopener noreferrer" 
                   className="block text-purple-400 hover:text-purple-300 transition-colors">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
