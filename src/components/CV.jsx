import AnimatedSection from './AnimatedSection';
import { FiDownload, FiFileText } from 'react-icons/fi';

const CV = () => {
  return (
    <section id="cv" className="bg-[var(--color-surface)]/50">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <AnimatedSection>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl" style={{ padding: '2rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.5rem', alignItems: 'center' }}>
                {/* Left: Icon */}
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: 'var(--color-bg)', 
                  borderRadius: '12px', 
                  border: '1px solid var(--color-border)'
                }}>
                  <FiFileText size={28} className="text-[var(--color-secondary)]" />
                </div>
                
                {/* Right: Content */}
                <div>
                  <h3 className="font-bold text-[var(--color-text)]" style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                    Resume
                  </h3>
                  <p className="text-[var(--color-text-muted)]" style={{ marginBottom: '1rem', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    Download my resume for a complete overview of my skills and experience.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <a
                      href="/Hamouch_Mohamed_Resume.pdf"
                      download="Hamouch_Mohamed_Resume.pdf"
                      className="btn-primary inline-flex"
                    >
                      <FiDownload size={18} />
                      <span>Download PDF</span>
                    </a>
                    <span className="text-[var(--color-text-muted)] font-mono" style={{ fontSize: '0.75rem' }}>
                      Last updated: January 2026
                    </span>
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

export default CV;
