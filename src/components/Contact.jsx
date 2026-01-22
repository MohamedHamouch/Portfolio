import AnimatedSection from './AnimatedSection';
import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const contactLinks = [
  {
    name: 'Email',
    value: 'med10hamouch@gmail.com',
    href: 'mailto:med10hamouch@gmail.com',
    icon: FiMail,
  },
  {
    name: 'GitHub',
    value: 'github.com/Mohamedhamouch',
    href: 'https://github.com/Mohamedhamouch',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/hamouch-mohamed',
    href: 'https://www.linkedin.com/in/hamouch-mohamed',
    icon: FiLinkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <AnimatedSection>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p className="font-mono text-[var(--color-secondary)]" style={{ marginBottom: '0.75rem', fontSize: '0.875rem' }}>
              06. What's Next?
            </p>
            <h2 className="font-bold text-[var(--color-text)]" style={{ marginBottom: '1rem', fontSize: '2.25rem' }}>
              Let's Connect
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed" style={{ maxWidth: '600px', fontSize: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>
              I'm always open to discussing new opportunities, creative projects, or partnerships.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Cards Grid */}
        <AnimatedSection delay={0.15}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '1rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {contactLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl group hover:border-[var(--color-accent)] transition-all"
                style={{ 
                  padding: '1.25rem 1.5rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Hover gradient effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: index === 0 ? 'var(--color-accent)' : index === 1 ? 'var(--color-secondary)' : 'var(--color-accent)',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }} className="group-hover:opacity-100" />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    flexShrink: 0
                  }}>
                    <link.icon 
                      size={20} 
                      className="text-[var(--color-accent)] group-hover:text-[var(--color-accent)]"
                    />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="text-xs text-[var(--color-text-muted)]" style={{ marginBottom: '0.25rem' }}>
                      {link.name}
                    </p>
                    <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors\" style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center" style={{ marginTop: '3rem', padding: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <p className="text-[var(--color-text-muted)]" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Have a project in mind? Let's make it happen.
            </p>
            <a
              href="mailto:med10hamouch@gmail.com"
              className="btn-primary inline-flex"
            >
              <FiMail size={18} />
              <span>Send Message</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
