import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiFileText, FiExternalLink, FiDownload, FiCopy, FiCheck } from 'react-icons/fi';

const EMAIL = 'med10hamouch@gmail.com';

const contactLinks = [
  {
    name: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
  },
  {
    name: 'GitHub',
    value: 'Mohamedhamouch',
    href: 'https://github.com/Mohamedhamouch',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    value: 'hamouch-mohamed',
    href: 'https://www.linkedin.com/in/hamouch-mohamed',
    icon: FiLinkedin,
  },
];

const resumes = [
  { code: 'EN', language: 'English', href: '/english_cv.pdf', fileName: 'Mohamed_Hamouch_CV_EN.pdf' },
  { code: 'FR', language: 'Français', href: '/french_cv.pdf', fileName: 'Mohamed_Hamouch_CV_FR.pdf' },
];

const Contact = () => {
  const [resumeCode, setResumeCode] = useState('EN');
  const resume = resumes.find((r) => r.code === resumeCode);
  // 'idle' | 'copied' | 'failed'
  const [copyState, setCopyState] = useState('idle');

  // mailto: does nothing for visitors on webmail or without a mail app, so offer
  // the address itself. Clipboard can be refused (permissions, non-HTTPS); then
  // show the address so it can still be copied by hand.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
    setTimeout(() => setCopyState('idle'), 2500);
  };

  return (
    <section id="contact" className="section-band bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p className="font-mono text-[var(--color-secondary)]" style={{ marginBottom: '0.75rem', fontSize: '0.875rem' }}>
              05. What's Next?
            </p>
            <h2 className="font-bold text-[var(--color-text)]" style={{ marginBottom: '1rem', fontSize: '2.25rem' }}>
              Let's Connect
            </h2>
            {/* text-balance: evens out the two lines instead of leaving "partnerships." alone */}
            <p className="text-[var(--color-text-muted)] leading-relaxed text-balance" style={{ maxWidth: '600px', fontSize: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>
              I'm always open to discussing new opportunities, creative projects, or partnerships.
            </p>
            {/* Phones: stacked at one shared width, rather than two centred buttons of
                different widths. sm+: side by side at their natural widths. */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3" style={{ marginTop: '2rem' }}>
              <a href={`mailto:${EMAIL}`} className="btn-primary inline-flex w-full max-w-xs sm:w-auto justify-center">
                <FiMail size={18} />
                <span>Send Message</span>
              </a>
              <button type="button" onClick={copyEmail} className="btn-secondary inline-flex w-full max-w-xs sm:w-auto justify-center">
                {copyState === 'copied' ? <FiCheck size={18} className="text-[var(--color-tertiary)]" /> : <FiCopy size={18} />}
                <span>{copyState === 'copied' ? 'Copied!' : copyState === 'failed' ? EMAIL : 'Copy Email'}</span>
              </button>
            </div>
            {/* Announces the result; the button text alone changes silently for screen readers */}
            <p className="sr-only" aria-live="polite">
              {copyState === 'copied' ? 'Email address copied to clipboard' : copyState === 'failed' ? `Could not copy. The address is ${EMAIL}` : ''}
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Cards Grid */}
        <AnimatedSection delay={0.15}>
          {/* 1 column on phones, 3 on desktop. In between, 2 columns with Email (the
              longest value) spanning the first row, so LinkedIn isn't left alone on a
              half-empty second row. */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto" style={{ maxWidth: '1000px' }}>
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl group hover:border-[var(--color-accent)] transition-all ${
                  link.name === 'Email' ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative'
                }}
              >
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
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p className="text-xs text-[var(--color-text-muted)]" style={{ marginBottom: '0.25rem' }}>
                      {link.name}
                    </p>
                    <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontSize: '0.9rem', overflowWrap: 'anywhere' }}>
                      {/* <wbr> so a too-narrow card breaks an address at the @, not mid-word */}
                      {link.value.split('@').map((part, i) => (
                        <span key={i}>{i > 0 && <><wbr />@</>}{part}</span>
                      ))}
                    </p>
                  </div>
                </div>
                {/* In the corner rather than in the row, so it takes no width from the value */}
                <FiArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="absolute top-3 right-3 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Resume — part of this closing section rather than its own, so the page
            ends on one centred block. Keeps id="cv" for the navbar and hero links. */}
        <AnimatedSection delay={0.3}>
          {/* Capped at the same 1000px as the contact cards above, so the divider line
              spans exactly the content instead of overhanging it on both sides.
              Equal space above and below the line, so it sits midway between the blocks. */}
          <div id="cv" className="scroll-mt-24 text-center" style={{ maxWidth: '1000px', margin: '2.5rem auto 0', paddingTop: '2.5rem', borderTop: '1px solid var(--color-border)' }}>
            <div className="accent-card">
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 text-left">
                {/* Two stacked pages: one per language */}
                <div className="relative w-16 h-20 shrink-0 mx-auto md:mx-0" aria-hidden="true">
                  <div className="absolute inset-0 rounded-lg border border-[var(--color-border-hover)] bg-[var(--color-surface-hover)] rotate-[-8deg] translate-x-[-6px]" />
                  <div className="absolute inset-0 rounded-lg border border-[var(--color-border-hover)] bg-[var(--color-bg)] flex items-center justify-center">
                    <FiFileText size={28} className="text-[var(--color-secondary)]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0 text-center md:text-left">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">Resume</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2 text-balance">
                    Full Stack Developer · Laravel, Next.js, Spring Boot, AWS
                  </p>
                  <p className="text-xs font-mono text-[var(--color-secondary)]">PDF · English &amp; French</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                  <div
                    className="inline-flex p-1 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]"
                    role="group"
                    aria-label="Resume language"
                  >
                    {resumes.map((r) => (
                      <button
                        key={r.code}
                        type="button"
                        onClick={() => setResumeCode(r.code)}
                        aria-pressed={r.code === resumeCode}
                        title={r.language}
                        className={`px-3 py-1 rounded-md font-mono text-xs font-semibold transition-colors cursor-pointer ${
                          r.code === resumeCode
                            ? 'bg-[var(--color-surface-hover)] text-[var(--color-accent)]'
                            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                        }`}
                      >
                        {r.code}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={resume.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-4 py-2.5 text-sm"
                      aria-label={`View ${resume.language} resume`}
                    >
                      <FiExternalLink size={16} />
                      <span>View</span>
                    </a>
                    <a
                      href={resume.href}
                      download={resume.fileName}
                      className="btn-primary px-4 py-2.5 text-sm"
                      aria-label={`Download ${resume.language} resume`}
                    >
                      <FiDownload size={16} />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
