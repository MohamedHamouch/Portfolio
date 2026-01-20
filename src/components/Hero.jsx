import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22d3ee]/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#a855f7]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#fbbf24]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-lg text-[var(--color-text-muted)]"
          style={{ marginBottom: '2rem' }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold"
          style={{ marginBottom: '2rem' }}
        >
          <span className="gradient-text">Your Name</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl text-[var(--color-text-muted)] font-medium"
          style={{ marginBottom: '2.5rem' }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[var(--color-text-muted)]"
          style={{ marginBottom: '3.5rem' }}
        >
          I build robust, scalable web applications with modern technologies.
          <br className="hidden md:block" />
          Passionate about clean code, elegant solutions, and continuous learning.
        </motion.p>

        {/* Buttons with proper spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center"
          style={{ gap: '1.5rem', marginBottom: '3.5rem' }}
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
        </motion.div>

        {/* Social icons with proper spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center"
          style={{ gap: '1.5rem' }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all hover:scale-110"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
