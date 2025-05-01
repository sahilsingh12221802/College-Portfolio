// components/Experience.jsx
import { motion } from 'framer-motion';
import LPULogo from '../assets/Lovely_Professional_University_logo.png'; // Add your logo files
import MASDLogo from '../assets/masd logo.png';
import SaintCodersLogo from '../assets/saintcoders.png';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
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
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">& Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-300">
            <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Professional Experience
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                <img src={SaintCodersLogo} alt="SaintCoders" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="text-xl font-bold">Software Developer Intern</h4>
                  <span className="text-gray-400">May 2023 - August 2023</span>
                </div>
                <div className="text-blue-400 font-medium mt-1">SaintCoders - Remote</div>
                <ul className="mt-4 space-y-3 pl-5">
                  <li className="relative before:absolute before:left-[-20px] before:top-[8px] before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                    Developed scalable software solutions using React and Python
                  </li>
                  <li className="relative before:absolute before:left-[-20px] before:top-[8px] before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                    Optimized workflows reducing development time by 20%
                  </li>
                  <li className="relative before:absolute before:left-[-20px] before:top-[8px] before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                    Implemented industry best practices for code efficiency
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        {/* Education */}
<div className="max-w-4xl mx-auto">
  <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-300">
    <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
    Education
  </h3>

  <div className="space-y-6">
    {/* LPU */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={LPULogo} alt="LPU" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <h4 className="text-xl font-bold">Bachelor of Technology - Computer Science</h4>
            <div className="text-purple-400 font-medium mt-1">Lovely Professional University - Jalandhar, Punjab</div>
            <div className="mt-3 text-gray-300">CGPA: 7.77</div>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4 text-gray-400 whitespace-nowrap">
            Sep 2022 - Present
          </div>
        </div>
      </div>
    </motion.div>

    {/* MASD */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={MASDLogo} alt="MASD" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <h4 className="text-xl font-bold">12th Science (CBSE)</h4>
            <div className="text-purple-400 font-medium mt-1">MASD Public School - Panipat, Haryana</div>
            <div className="mt-3 text-gray-300">Percentage: 80.2%</div>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4 text-gray-400 whitespace-nowrap">
            Apr 2021 - Mar 2022
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Experience;