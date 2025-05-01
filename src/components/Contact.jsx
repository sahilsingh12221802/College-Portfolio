// components/Contact.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  const handleDownload = () => {
    // For demo purposes - replace with your actual resume path
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1RgmANLy2ymfc8mVqn8yEi6HsxPlRDpun';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sahil_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 shadow-lg flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 flex-1">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1">Email</h4>
                  <a 
                    href="mailto:sahil.singhft2017@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors break-all"
                  >
                    sahil.singhft2017@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <FaPhoneAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1">Phone</h4>
                  <a 
                    href="tel:+918395963089" 
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91 8395963089
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <FaLinkedin className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/sahilsingh858" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    linkedin.com/in/sahilsingh858
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start">
                <div className="bg-gray-500/20 p-3 rounded-lg mr-4">
                  <FaGithub className="text-gray-300 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/sahilsingh12221802" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors break-all"
                  >
                    github.com/sahilsingh12221802
                  </a>
                </div>
              </div>
            </div>

            {/* Download Button - Positioned at bottom */}
            <div className="mt-8 pt-4 border-t border-gray-800">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <FaFileDownload />
                Download Resume (PDF)
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;