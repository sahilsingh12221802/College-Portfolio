// components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import iPhoneCloneImg from "../assets/projects/iphone-clone.png";
import SocialNetworkImg from "../assets/projects/social-network.png";
import PortfolioImg from "../assets/projects/portfolio.png";
import WineClassificationImg from "../assets/projects/wine-classification.png";
import UEFADashboardImg from "../assets/projects/uefa-dashboard.png";

const projects = [
  {
    title: "iPhone 15 Pro Clone",
    description:
      "Built a website clone using React, GSAP, and Three.js featuring smooth animations and 3D elements with scroll triggers and video carousels.",
    tags: ["React", "Three.js", "GSAP", "Tailwind"],
    github: "https://github.com/sahilsingh12221802/iPhone15Pro-Clone",
    demo: "https://iphone15pro-pi.vercel.app/",
    image: iPhoneCloneImg,
  },
  {
    title: "Social Network Analysis",
    description:
      "R-based application analyzing social networks using igraph library, improving prediction accuracy by 15% through graph density optimization.",
    tags: ["R", "igraph", "Data Analysis"],
    github:
      "https://github.com/sahilsingh12221802/Social-Network-Analysis-Using-R-Programming",
    demo: null,
    image: SocialNetworkImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "Interactive portfolio with 3D models using React and Three.js, showcasing projects with animated transitions.",
    tags: ["React", "Three.js", "Tailwind"],
    github: "https://github.com/sahilsingh12221802/Portfolio",
    demo: "https://sahil-portfolio-jet.vercel.app/",
    image: PortfolioImg,
  },
  {
    title: "Wine Classification",
    description:
      "Implemented KNN and Decision Tree classifiers to categorize wine types based on chemical properties.",
    tags: ["R", "Machine Learning"],
    github:
      "https://github.com/sahilsingh12221802/Wine-Classification-and-Model-Comparison",
    demo: null,
    image: WineClassificationImg,
  },
  {
    title: "UEFA Dashboard",
    description:
      "Tableau dashboard visualizing football trends with interactive drill-down charts and geospatial analytics.",
    tags: ["Tableau", "Data Visualization"],
    github: "https://github.com/sahilsingh12221802/UEFA-Dashboard-Tableau",
    demo: null,
    image: UEFADashboardImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
            >
              {/* Project Image Placeholder - Replace with actual screenshots */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
