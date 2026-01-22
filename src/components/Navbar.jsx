import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
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
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-lg transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)]"></div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:med10hamouch@gmail.com"
                className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors"
              >
                <FiMail className="text-lg" />
                <span>med10hamouch@gmail.com</span>
              </a>

              <a
                href="tel:+212667313172"
                className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors"
              >
                <FiPhone className="text-lg" />
                <span>+212 667-313172</span>
              </a>

              <div className="flex items-center gap-3 text-[var(--color-text-muted)] text-sm">
                <FiMapPin className="text-lg" />
                <span>Agadir, Maroc</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Mohamedhamouch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors"
              >
                <FiGithub className="text-xl" />
                <span>@Mohamedhamouch</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hamouch-mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors"
              >
                <FiLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
