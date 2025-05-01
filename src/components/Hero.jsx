// components/Hero.jsx
import { motion } from 'framer-motion';
import yourPhoto from '../assets/profile.jpeg'; // Make sure to replace with your image

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="md:w-1/2 order-2 md:order-1"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-sm md:text-base font-mono text-blue-400">Hello, my name is</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sahil Singh</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
            <span className="text-white">Computer Science Engineer</span> &<br />
            <span className="text-white">Full-Stack Developer</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
            I build scalable web applications and explore AI/ML solutions to solve real-world problems through code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View My Projects
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                y: -3,
                backgroundColor: "rgba(30, 41, 59, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800/30 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Professional Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, delay: 0.2 }
          }}
          className="md:w-1/2 flex justify-center order-1 md:order-2 mb-12 md:mb-0"
        >
          <div className="relative group w-fit">
            {/* Main image container */}
            <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 overflow-hidden rounded-lg border border-gray-700 shadow-2xl bg-gray-800">
              <img
                src={yourPhoto}
                alt="Sahil Singh"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Subtle background glow */}
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            {/* Professional corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-400" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-400" />
            
            {/* Subtle tech indicator (optional) */}
            <div className="absolute -bottom-3 -right-3 bg-gray-900 rounded-full p-2 border border-gray-700 shadow-lg">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0],
          transition: { 
            delay: 1.5,
            duration: 2,
            repeat: Infinity 
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div 
            animate={{ 
              y: [0, 6, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity
            }}
            className="w-1 h-2 bg-gray-300 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;