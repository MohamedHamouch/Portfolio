import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-4 sm:px-6 md:px-8 lg:px-12" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Phrases are nowrap flex items, so a narrow screen wraps between them, never inside one */}
      <p
        className="text-[var(--color-text-muted)] flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '0.875rem' }}
      >
        <span className="whitespace-nowrap">
          © {currentYear} <span className="text-[var(--color-text)] font-medium">Mohamed Hamouch</span>
        </span>{' '}
        <span aria-hidden="true">·</span>{' '}
        <span className="whitespace-nowrap inline-flex items-center gap-1.5">
          Built with
          <FiHeart className="text-[var(--color-secondary)]" size={14} aria-hidden="true" />
          <span className="sr-only"> love</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
