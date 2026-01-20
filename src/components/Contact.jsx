import AnimatedSection from './AnimatedSection';
import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const contactLinks = [
  {
    name: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
    icon: FiMail,
  },
  {
    name: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
    icon: FiLinkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <p className="font-mono text-lg mb-6 text-[var(--color-accent)]">
              07. What's Next?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[var(--color-text)]">
              Get In Touch
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed text-center max-w-xl">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        {/* Large margin before cards */}
        <AnimatedSection delay={0.15}>
          <div className="max-w-xl mx-auto mt-16">
            <div className="grid" style={{ gap: '20px' }}>
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="card group flex items-center"
                  style={{ gap: '24px' }}
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] group-hover:border-[var(--color-border-hover)] transition-all flex-shrink-0">
                    <link.icon 
                      size={24} 
                      className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--color-text-muted)] mb-1">
                      {link.name}
                    </p>
                    <p className="text-base font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                  <FiArrowRight 
                    size={20} 
                    className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" 
                  />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Very large margin before button, centered */}
        <AnimatedSection delay={0.3}>
          <div className="flex justify-center" style={{ marginTop: '80px' }}>
            <a
              href="mailto:your@email.com"
              className="btn-primary"
            >
              <FiMail size={20} />
              <span>Say Hello</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
