// components/Achievements.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTrophy, FaMedal, FaUserTie, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
// Sample achievement images (replace with your actual imports)
import CodeCombatCert from '../assets/achievements/code combat.png'
import HackerRankCert from '../assets/achievements/hackerrank.png';
import AmbassadorCert from '../assets/achievements/hackerearth.png';
import SlaygroundCert from '../assets/achievements/slayground.png';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      title: "AIR-282 Code Combat 3.0",
      issuer: "Coding Ninjas",
      year: "May 2023",
      icon: <FaTrophy className="text-amber-400 text-xl" />,
      image: CodeCombatCert
    },
    {
      title: "5-Star Programmer in Python",
      issuer: "HackerRank",
      year: "July 2023",
      icon: <FaMedal className="text-blue-400 text-xl" />,
      image: HackerRankCert
    },
    {
      title: "HackerEarth Campus Ambassador",
      issuer: "HackerEarth",
      year: "Aug 2023",
      icon: <FaUserTie className="text-purple-400 text-xl" />,
      image: AmbassadorCert
    },
    {
      title: "Coding Ninja Slayground (Level 3)",
      issuer: "Coding Ninjas",
      year: "May 2024",
      icon: <FaMedal className="text-green-400 text-xl" />,
      image: SlaygroundCert
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-400 transition-colors"
            >
              {/* Thumbnail Image */}
              <div className="h-48 overflow-hidden bg-gray-800 flex items-center justify-center">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="h-full w-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.issuer} • {achievement.year}</p>
                  </div>
                </div>

                {/* View Button */}
                <motion.button
                  onClick={() => setSelectedAchievement(achievement)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt /> View Full Achievement
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Achievement Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                >
                  <FaTimes className="text-2xl" />
                </button>
                
                <div className="max-h-[80vh] overflow-y-auto">
                  <img 
                    src={selectedAchievement.image} 
                    alt={selectedAchievement.title}
                    className="w-full h-auto object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{selectedAchievement.title}</h3>
                    <p className="text-gray-400">{selectedAchievement.issuer} • {selectedAchievement.year}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;