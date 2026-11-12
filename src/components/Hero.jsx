import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    // 88svh rather than a full screen: the full-height version left ~150px of empty space
    // under the social icons, and this way the top of About peeks in as a scroll cue.
    // pt-16 = navbar height, so the content centres in the visible area below it.
    <section className="min-h-[88svh] flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22d3ee]/8 rounded-full blur-3xl motion-safe:animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#a855f7]/6 rounded-full blur-3xl motion-safe:animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#fbbf24]/5 rounded-full blur-3xl motion-safe:animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Availability */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-2xl sm:rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs sm:text-sm text-left text-[var(--color-text-muted)]"
          style={{ marginBottom: '1.75rem' }}
        >
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-tertiary)] opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-tertiary)]" />
          </span>
          {/* Below sm the two halves sit on their own lines instead of wrapping mid-phrase */}
          <span>
            Open to full-time opportunities
            <span className="hidden sm:inline"> · </span>
            <br className="sm:hidden" />
            Remote, hybrid or on-site
          </span>
        </motion.p>

        {/* Greeting with warm gold accent */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-base md:text-lg"
          style={{ marginBottom: '0.75rem', color: '#d4a574' }}
        >
          Hello, I'm
        </motion.p>

        {/* Name - closer to greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          style={{ marginBottom: '1rem' }}
        >
          <span className="gradient-text">MOHAMED HAMOUCH</span>
        </motion.h1>

        {/* Title - moderate spacing from name */}
        {/* A <p>, not a heading: it's a subtitle, and a second <h2> here put it level
            with the real section headings in the page outline. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-[var(--color-text-muted)] font-medium"
          style={{ marginBottom: '2rem' }}
        >
          Full Stack Developer
        </motion.p>

        {/* Description - larger gap before this section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[var(--color-text-muted)]"
          style={{ marginBottom: '2.5rem' }}
        >
          I build full-stack web apps with Spring Boot, React and Laravel.{' '}
          <br className="hidden md:block" />
          Currently building workforce software for farms at YADAG.
        </motion.p>

        {/* Buttons - grouped together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center"
          style={{ gap: '1rem', marginBottom: '2.5rem' }}
        >
          <a href="#contact" className="btn-primary text-base px-7 py-3.5">
            Get in Touch
          </a>
          <a href="#cv" className="btn-secondary text-base px-7 py-3.5">
            View Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center"
          style={{ gap: '1rem' }}
        >
          <a
            href="https://github.com/Mohamedhamouch"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamouch-mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="mailto:med10hamouch@gmail.com"
            className="p-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all hover:scale-110"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
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
