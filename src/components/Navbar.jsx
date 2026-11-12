import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#cv' },
  { name: 'Contact', href: '#contact' },
];

// Scroll-spy targets in page order. #cv (the resume card) sits inside #contact, after
// the contact cards, so it comes last even though the nav lists Resume first.
const spyIds = ['about', 'experience', 'skills', 'education', 'contact', 'cv'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 50);

      // Active = the last target whose top has passed a line 35% down the viewport.
      // Above About (the hero) nothing is active.
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const id of spyIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // At the very bottom the resume card can't reach the line; count it as reached.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = spyIds[spyIds.length - 1];
      setActiveId(current);
    };
    // One measurement per frame, however many scroll events fire.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isActive = (item) => item.href === `#${activeId}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      {/* Side padding lives on <nav> and mirrors the `section` gutters in index.css,
          so the logo lines up with the content below at every breakpoint. */}
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Mohamed Hamouch, back to top"
          className="group relative text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-[var(--color-text)]"
        >
          {/* Same file as the favicon, so the tab and the navbar show one mark */}
          <span className="relative z-10 flex items-center gap-2.5">
            <img src="/favicon.svg" alt="" width="30" height="30" className="shrink-0" />
            <span>
              Mohamed <span className="font-normal text-[var(--color-text-muted)]">Hamouch</span>
            </span>
          </span>
          <span className="absolute inset-0 bg-[var(--color-accent-glow)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={isActive(item) ? 'location' : undefined}
              className={`relative py-1 text-base font-medium transition-colors duration-300 hover:text-[var(--color-accent)] ${
                isActive(item) ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              {item.name}
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-accent)] origin-left transition-transform duration-300 ${
                  isActive(item) ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
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

          {/* Email, phone and location only from xl: between lg and xl the six nav
              links leave no room, and all three are repeated in the hero and Contact. */}
          <div className="hidden xl:block w-px h-6 bg-[var(--color-border)]"></div>

          {/* Email */}
          <a
            href="mailto:med10hamouch@gmail.com"
            className="hidden xl:flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors duration-300"
            aria-label="Email"
          >
            <FiMail className="text-base" />
          </a>

          {/* Phone */}
          <a
            href="tel:+212667313172"
            className="hidden xl:flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-sm transition-colors duration-300"
            aria-label="Phone"
          >
            <FiPhone className="text-base" />
          </a>

          {/* Location */}
          <div className="hidden xl:flex items-center gap-1.5 text-[var(--color-text-muted)] text-sm">
            <FiMapPin className="text-base" />
            <span>Agadir</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[var(--color-text)] text-2xl hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* `invisible` when closed: a translated-away panel is still focusable, so its
          links stayed in the tab order off-screen. visibility is in the transition so
          the slide-out still plays before the panel is hidden. */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 bg-[var(--color-bg)] z-40 transition-[transform,visibility] duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
        }`}
      >
        <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={isActive(item) ? 'location' : undefined}
                className={`hover:text-[var(--color-accent)] transition-colors ${
                  isActive(item) ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]'
                }`}
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
