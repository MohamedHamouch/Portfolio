import AnimatedSection from './AnimatedSection';
import { FiDownload, FiFileText } from 'react-icons/fi';

const CV = () => {
  return (
    <section id="cv" className="bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl" style={{ padding: '1.5rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                {/* Icon */}
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: 'var(--color-bg)', 
                  borderRadius: '12px', 
                  border: '1px solid var(--color-border)'
                }}>
                  <FiFileText size={24} className="text-[var(--color-secondary)]" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-bold text-[var(--color-text)]" style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                    Resume
                  </h3>
                  <p className="text-[var(--color-text-muted)]" style={{ marginBottom: '1rem', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    Download my resume for a complete overview of my skills and experience.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="/english_cv.pdf"
                      download="Mohamed_Hamouch_CV_EN.pdf"
                      className="btn-primary inline-flex items-center gap-2"
                      style={{ fontSize: '0.875rem', padding: '0.75rem 1.25rem' }}
                    >
                      <FiDownload size={16} />
                      <span>English CV (EN)</span>
                    </a>
                    
                    <a
                      href="/french_cv.pdf"
                      download="Mohamed_Hamouch_CV_FR.pdf"
                      className="btn-secondary inline-flex items-center gap-2"
                      style={{ fontSize: '0.875rem', padding: '0.75rem 1.25rem' }}
                    >
                      <FiDownload size={16} />
                      <span>French CV (FR)</span>
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

export default CV;
