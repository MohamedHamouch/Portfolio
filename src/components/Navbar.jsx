import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="group relative font-mono text-2xl font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-all duration-300"
        >
          <span className="relative z-10">
            <span className="text-[var(--color-accent)]">&lt;</span>
            Medham
            <span className="text-[var(--color-accent)]">/&gt;</span>
          </span>
          <span className="absolute inset-0 bg-[var(--color-accent-glow)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-base font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Contact Info & Social Links */}
        <div className="hidden lg:flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Mohamedhamouch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-xl transition-colors duration-300"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hamouch-mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-xl transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <div className="w-px h-6 bg-[var(--color-border)]"></div>

          {/* Email */}
          <a
            href="mailto:med10hamouch@gmail.com"
            className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors duration-300"
            aria-label="Email"
          >
            <FiMail className="text-base" />
          </a>

          {/* Phone */}
          <a
            href="tel:+212667313172"
            className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors duration-300"
            aria-label="Phone"
          >
            <FiPhone className="text-base" />
          </a>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-sm">
            <FiMapPin className="text-base" />
            <span>Agadir</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[var(--color-text)] text-2xl hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-[var(--color-bg)] z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                style={{ fontSize: '1.25rem', fontWeight: '500', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="mailto:med10hamouch@gmail.com"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}
            >
              <FiMail size={18} />
              <span>med10hamouch@gmail.com</span>
            </a>

            <a
              href="tel:+212667313172"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}
            >
              <FiPhone size={18} />
              <span>+212 667-313172</span>
            </a>

            <div className="text-[var(--color-text-muted)]" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
              <FiMapPin size={18} />
              <span>Agadir, Morocco</span>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/Mohamedhamouch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '12px' }}
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/hamouch-mohamed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              style={{ padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '12px' }}
            >
              <FiLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
