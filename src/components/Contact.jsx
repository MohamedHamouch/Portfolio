import AnimatedSection from './AnimatedSection';
import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const contactLinks = [
  {
    name: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
    icon: FiMail,
    color: '#00d4ff',
  },
  {
    name: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    icon: FiGithub,
    color: '#a855f7',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
    icon: FiLinkedin,
    color: '#10b981',
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <p className="font-mono text-lg mb-4 text-[#00d4ff]">
              07. What's Next?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-text)]">
              Get In Touch
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed text-center max-w-xl">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-xl mx-auto">
            <div className="grid gap-5">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="card group flex items-center gap-6"
                  style={{ borderColor: `${link.color}25` }}
                >
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-xl transition-all group-hover:scale-105"
                    style={{ 
                      backgroundColor: `${link.color}15`,
                      border: `1px solid ${link.color}30`,
                      boxShadow: `0 0 20px ${link.color}20`
                    }}
                  >
                    <link.icon 
                      size={28} 
                      style={{ color: link.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--color-text-muted)] mb-1">
                      {link.name}
                    </p>
                    <p 
                      className="text-lg font-medium transition-colors"
                      style={{ color: link.color }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <FiArrowRight 
                    size={22} 
                    className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                    style={{ color: link.color }}
                  />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-14 flex justify-center">
            <a
              href="mailto:your@email.com"
              className="btn-secondary"
            >
              <FiMail size={22} />
              Say Hello
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
