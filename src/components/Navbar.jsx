// components/Navbar.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with glowing effect */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SS
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
          </motion.a>

          {/* Desktop Nav with enhanced hover effects */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const lowerItem = item.toLowerCase();
              return (
                <li key={item}>
                  <motion.a
                    href={`#${lowerItem}`}
                    className={`relative py-2 px-1 text-sm font-medium ${activeLink === lowerItem ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {activeLink === lowerItem ? (
                      <motion.span 
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    ) : (
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
                      />
                    )}
                    <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle Button with glow effect */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 focus:outline-none relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Mobile Menu with enhanced effects */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 mt-4 overflow-hidden rounded-lg border border-gray-800 shadow-xl"
          >
            {navItems.map((item) => {
              const lowerItem = item.toLowerCase();
              return (
                <li key={item} className="border-b border-gray-800 last:border-0">
                  <motion.a
                    href={`#${lowerItem}`}
                    className={`block py-4 px-6 ${activeLink === lowerItem ? 'text-white bg-gray-800/50' : 'text-gray-300 hover:text-white hover:bg-gray-800/30'} transition-colors relative overflow-hidden`}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item}
                    {activeLink === lowerItem && (
                      <motion.span 
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;