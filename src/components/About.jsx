// components/About.jsx
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey, philosophy, and approach to technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-800 shadow-lg">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Sahil, a Computer Science student at Lovely Professional University currently pursuing in 3rd Year with a passion for creating impactful technology solutions. My journey in tech began with curiosity about how things work, which evolved into building full-fledged applications that solve real problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What drives me is the intersection of <span className="text-blue-400">logic</span> and <span className="text-purple-400">creativity</span> - whether it's crafting elegant code or designing intuitive user experiences. I believe technology should empower people, and I strive to build solutions that bridge the gap between complex systems and human needs.
            </p>
          </div>
        </motion.div>

        {/* Core Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Approach to Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <FaCode className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">My Development Approach</h3>
            </div>
            <p className="text-gray-400">
              I focus on clean, maintainable code with thoughtful architecture. My process emphasizes testing, documentation, and performance optimization from the start.
            </p>
          </motion.div>

          {/* Problem Solving */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <FaLightbulb className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Problem Solving Mindset</h3>
            </div>
            <p className="text-gray-400">
              I break complex problems into manageable components, applying both analytical thinking and creative solutions. My internship experience honed this systematic approach.
            </p>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-500/20 p-3 rounded-lg">
                <FaHandsHelping className="text-amber-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Collaborative Spirit</h3>
            </div>
            <p className="text-gray-400">
              As a HackerEarth Campus Ambassador, I learned the value of teamwork and knowledge sharing. I thrive in environments where ideas are exchanged and refined.
            </p>
          </motion.div>
        </div>

        {/* Personal Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          When I'm not coding, I enjoy staying updated with tech trends through articles and tutorials. 
  I'm always open to discussing tech and learning from others' experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;