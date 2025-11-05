
import React, { useState } from "react";
import { ExternalLink, Filter } from "lucide-react";
import projects from "../data/projects";
import Header from "../components/Header";

const Projectspage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  // ✅ FIX: Replaced flatMap with safe reduce (works in all browsers)
  const categories = [
    "all",
    ...new Set(
      projects.reduce((acc, p) => {
        if (Array.isArray(p.category)) {
          acc.push(...p.category);
        } else if (typeof p.category === "string") {
          acc.push(p.category);
        }
        return acc;
      }, [])
    ),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeFilter)
            : p.category === activeFilter
        );

  return (
    <>
      <Header />
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Headings */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-red-900 text-lg max-w-2xl mx-auto">
              Explore my latest work showcasing cutting-edge technologies and
              innovative solutions
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize flex items-center gap-2 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 scale-105"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-white"
                }`}
              >
                <Filter className="w-4 h-4" />
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <ProjectCard
                  project={project}
                  isHovered={hoveredId === project.id}
                />
              </div>
            ))}
          </div>

          {/* No projects found */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Filter className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}

          {/* Collaboration section */}
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
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Projectspage;

// Dummy placeholder (replace with your real component)
const ProjectCard = ({ project, isHovered }) => (
  <div
    className={`rounded-xl overflow-hidden transition-transform duration-500 ${
      isHovered ? "scale-105 shadow-lg shadow-cyan-500/40" : "scale-100"
    }`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 bg-white/10 backdrop-blur-lg">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="text-gray-400 text-sm">{project.description}</p>
    </div>
  </div>
);
