// src/components/ProjectsSection.jsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../Data/ProjectsData';

const ProjectsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            {/* Image at the top */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-t-lg mb-6" 
            />
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-sm text-teal-400 py-1 px-2 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center"
              >
                Live Demo <FaExternalLinkAlt className="ml-2" />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center"
              >
                GitHub <FaGithub className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
