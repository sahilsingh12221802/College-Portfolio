// components/Certifications.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

// Sample images (replace with your actual imports)
import GoogleCloudCert from '../assets/certs/google cloud.png';
import GFGCert from '../assets/certs/gfg.png';
import MicrosoftCert from '../assets/certs/microsoft.png';
import LinkedInCert from '../assets/certs/linkedin.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Google Cloud Ready Program",
      issuer: "Google Cloud",
      year: "July 2023",
      image: GoogleCloudCert
    },
    {
      title: "Complete Interview Preparation (C++)",
      issuer: "GeeksForGeeks",
      year: "August 2024",
      image: GFGCert
    },
    {
      title: "Microsoft AI Odyssey Challenge",
      issuer: "Microsoft",
      year: "January 2024",
      image: MicrosoftCert
    },
    {
      title: "Become a Data Scientist",
      issuer: "LinkedIn Learning",
      year: "February 2023",
      image: LinkedInCert
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
            >
              {/* Thumbnail Image */}
              <div className="h-48 overflow-hidden bg-gray-800 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="h-full w-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <FaCertificate className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>

                {/* View Button */}
                <motion.button
                  onClick={() => setSelectedCert(cert)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt /> View Full Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white z-10"
                >
                  <FaTimes className="text-xl" />
                </button>
                
                <div className="max-h-[80vh] overflow-y-auto">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                    <p className="text-gray-400">{selectedCert.issuer} • {selectedCert.year}</p>
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

export default Certifications;