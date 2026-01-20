import AnimatedSection from './AnimatedSection';
import { FiDownload, FiFileText } from 'react-icons/fi';

const CV = () => {
  return (
    <section id="cv" className="bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-[var(--color-bg)] rounded-2xl border-2 border-[var(--color-border)] mb-10">
              <FiFileText size={36} className="text-[var(--color-text-muted)]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-text)]">
              Resume
            </h2>
            
            <p className="text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed max-w-lg">
              Interested in my full background and experience? Download my resume 
              for a comprehensive overview of my skills, projects, and professional journey.
            </p>
            
            <a
              href="/cv.pdf"
              download="YourName_Resume.pdf"
              className="btn-primary"
            >
              <FiDownload size={20} />
              <span>Download Resume</span>
            </a>
            
            <p className="text-sm text-[var(--color-text-muted)] mt-8 font-mono">
              PDF • Last updated: January 2026
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CV;
