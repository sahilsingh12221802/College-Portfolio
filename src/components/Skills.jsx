import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaGitAlt, FaGithub, FaAws, FaWordpress 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTailwindcss, SiExpress, SiGooglecloud, SiTableau, 
  SiRstudioide, SiThreedotjs, SiGreensock, SiLinux, SiOpencv 
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { RiToolsLine } from 'react-icons/ri';
import { BiCodeAlt } from 'react-icons/bi';
import { TbBrandCpp } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';
import { GrHadoop } from "react-icons/gr";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <BiCodeAlt className="text-2xl text-blue-400" />,
      items: [
        { name: "Python", icon: <FaPython className="text-xl text-blue-400" /> },
        { name: "Java", icon: <FaJava className="text-xl text-red-400" /> },
        { name: "C", icon: <TbBrandCpp className="text-xl text-gray-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-xl text-blue-500" /> },
        { name: "R", icon: <span className="text-xl font-bold text-blue-300">R</span> },
        { name: "SQL", icon: <BsFiletypeSql className="text-xl text-orange-400" /> }
      ]
    },
    {
      title: "Web Development",
      icon: <FaReact className="text-2xl text-blue-400" />,
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-xl text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-xl text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-xl text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-xl text-blue-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-xl text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-xl text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-xl text-gray-300" /> },
        { name: "Three.js", icon: <SiThreedotjs className="text-xl text-white" /> },
        { name: "WordPress", icon: <FaWordpress className="text-xl text-blue-700" /> }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <span className="text-2xl text-blue-400">📊</span>,
      items: [
        { name: "Tableau", icon: <SiTableau className="text-xl text-blue-600" /> },
        { name: "Hadoop", icon: <GrHadoop className="text-xl text-yellow-500" /> },
        { name: "OpenCV", icon: <SiOpencv className="text-xl text-white" /> },
        { name: "RStudio", icon: <SiRstudioide className="text-xl text-blue-700" /> }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <RiToolsLine className="text-2xl text-blue-400" />,
      items: [
        { name: "VS Code", icon: <span className="text-xl text-blue-400">🖥️</span> },
        { name: "Git", icon: <FaGitAlt className="text-xl text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-xl text-white" /> },
        { name: "AWS", icon: <FaAws className="text-xl text-orange-500" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="text-xl text-blue-500" /> },
        { name: "Linux", icon: <SiLinux className="text-xl text-yellow-500" /> },
        { name: "IntelliJ", icon: <span className="text-xl text-purple-400">💡</span> },
        { name: "PyCharm", icon: <span className="text-xl text-green-400">🐍</span> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <span className="text-2xl text-blue-400">🧠</span>,
      items: [
        { name: "Time Management" },
        { name: "Active Listening" },
        { name: "Systematic Approach" },
        { name: "Analytical Thinking" },
        { name: "Problem-Solving" },
        { name: "Data-Driven Decision Making" },
        { name: "Cognitive Flexibility" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center mb-4 gap-3">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-300">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    {skill.icon || <span className="text-blue-400">•</span>}
                    <span className="text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;