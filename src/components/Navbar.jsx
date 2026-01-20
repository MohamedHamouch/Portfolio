import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';

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
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-mono text-xl font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          &lt;dev /&gt;
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-base"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#cv"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-lg text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)] transition-all font-medium"
          >
            <FiFileText size={18} />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-text)] text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#cv"
              className="flex items-center gap-2 px-4 py-3 border border-[var(--color-border)] rounded-lg text-[var(--color-text)] w-fit text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiFileText size={18} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
