import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-[var(--color-border)]">
      <div className="container text-center">
        <p className="text-base text-[var(--color-text-muted)] flex items-center justify-center gap-2">
          Designed & Built with
          <FiHeart className="text-[var(--color-accent)]" size={16} />
          by
          <span className="text-[var(--color-accent)] font-medium">HAMOUCH MOHAMED</span>
        </p>
        <p className="text-sm text-[var(--color-text-muted)] mt-3 font-mono">
          © {currentYear} • Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
