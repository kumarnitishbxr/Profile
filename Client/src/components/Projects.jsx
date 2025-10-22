


import projects from "../data/projects";
import { ExternalLink } from "lucide-react";

 const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="text-center mt-16">
                <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Interested in collaborating?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Let's create something amazing together
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Start a Project
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
    </section>
  );
};


export default Projects
