import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const [showSplash, setShowSplash] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Physics and Computer Science Student & Aspiring Software Engineer';

  // Typing animation effect
  useEffect(() => {
    if (showSplash) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [showSplash]);

  const projects = [
    {
      title: "Lawconnect Web App",
      description: "A full-stack web application for managing clients,booking appointments with lawyers and managing clients",
      tech: ["HTML", "Node.js", "Firebase", "CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool to visualize sorting and pathfinding algorithms with step-by-step execution and performance metrics.",
      tech: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and historical data analysis.",
      tech: ["React", "TypeScript", "Weather API", "Tailwind"],
      github: "#",
      live: "#"
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "Java", "C++", "SQL"],
    "Frontend": ["React", "HTML/CSS", "Tailwind", "TypeScript"],
    "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    "Tools": ["Git", "VS Code", "Docker", "Postman"]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // 3D Tilt Card Component
  const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      {/* Animated Background Gradient - Always present */}
      {!showSplash && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              background: darkMode 
                ? [
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                  ]
                : [
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                  ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {showSplash ? (
          // Splash Screen - Separate Page
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          >
            <div className="text-center px-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 100
                }}
                className="mb-8"
              >
                <img 
                  src="/Techy hippy.png" 
                  alt="Kingsley Alexander Sohah" 
                  className="w-56 h-56 rounded-full object-cover mx-auto border-4 border-blue-500 shadow-2xl shadow-blue-500/50"
                />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-white mb-4"
              >
                Kingsley Alexander Sohah
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-xl md:text-2xl text-blue-300 mb-8"
              >
                Physics & Computer Science Student
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Welcome to my portfolio. Let me show you what I've been building.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSplash(false)}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all flex items-center gap-3 mx-auto"
              >
                Enter Portfolio
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          // Main Portfolio - Separate Page
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            {/* Animated Background Gradient */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            background: darkMode 
              ? [
                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                ]
              : [
                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        />
      </div>

      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed w-full z-50 transition-colors ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Kingsley Alexander Sohah
            </motion.span>
            <div className="flex items-center gap-6">
              <motion.a whileHover={{ scale: 1.1 }} href="#about" className="hover:text-blue-500 transition-colors">About</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#projects" className="hover:text-blue-500 transition-colors">Projects</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#skills" className="hover:text-blue-500 transition-colors">Skills</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#contact" className="hover:text-blue-500 transition-colors">Contact</motion.a>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold"
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Kingsley Alexander Sohah</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-2xl md:text-3xl text-gray-400 h-20 md:h-12"
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-blue-500 ml-1"
                />
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-500 max-w-2xl"
              >
                Passionate about building innovative solutions and learning new technologies. Currently exploring full-stack development and algorithms.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex gap-4 pt-4"
              >
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get In Touch
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" 
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 px-6 relative`}>
          <div className={`absolute inset-0 -z-10 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}></div>
          <div className="max-w-6xl mx-auto relative">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8"
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-400">
                  I'm a Computer Science student at the University Of Ghana, expected to graduate in 2027. 
                  I'm deeply interested in software development, algorithms, and building projects that solve real-world problems.
                </p>
                <p className="text-lg text-gray-400">
                  When I'm not coding, you can find me reading books, learning new skills, learning new frameworks, 
                  or exploring the latest tech trends. I'm always eager to collaborate and learn from others.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/80' : 'bg-gray-50/80'} backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>🎓 Major: Physics and Computer Science</li>
                  <li>📍 Location: Legon, Accra</li>
                  <li>💼 Looking for: Internship/Job opportunities</li>
                  <li>🎯 Focus: Full-stack development</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section with 3D Cards */}
        <section id="projects" className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12"
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ perspective: 1000 }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 }
                  }}
                >
                  <TiltCard className={`rounded-xl p-6 h-full ${darkMode ? 'bg-gray-800/80 hover:bg-gray-750/80' : 'bg-white/80 hover:shadow-xl'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all`}>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Code2 className="text-blue-500" size={32} />
                      </motion.div>
                      <div className="flex gap-2">
                        <motion.a 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github} 
                          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live} 
                          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span 
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 relative">
          <div className={`absolute inset-0 -z-10 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}></div>
          <div className="max-w-6xl mx-auto relative">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12"
            >
              Skills & Technologies
            </motion.h2>
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div 
                  key={category}
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/80' : 'bg-gray-50/80'} backdrop-blur-sm`}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-gray-400"
                      >
                        • {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8"
            >
              Hit me up!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, opportunities, or just having a chat about tech.
            </motion.p>
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex justify-center gap-6 flex-wrap"
            >
              {[
                { icon: Mail, text: "Email", href: "mailto:your.email@example.com" },
                { icon: Github, text: "GitHub", href: "https://github.com/yourusername" },
                { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/yourusername" }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${darkMode ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-gray-200/80 hover:bg-gray-300/80'} backdrop-blur-sm`}
                >
                  <item.icon size={20} />
                  {item.text}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} relative backdrop-blur-sm`}
        >
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            <p>© 2025 Kingsley Alexander Sohah. Built with React & Tailwind CSS.</p>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  )}
</AnimatePresence>
</>
);
}