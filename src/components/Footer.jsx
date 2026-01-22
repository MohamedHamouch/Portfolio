import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]" style={{ padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          Designed & Built with
          <FiHeart className="text-[var(--color-secondary)]" size={14} />
          by
          <span className="text-[var(--color-text)] font-medium">Mohamed Hamouch</span>
        </p>
        <p className="text-[var(--color-text-muted)] font-mono" style={{ fontSize: '0.75rem', marginTop: '0.75rem' }}>
          © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
