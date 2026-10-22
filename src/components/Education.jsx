import AnimatedSection from './AnimatedSection';
import { FiBookOpen } from 'react-icons/fi';

const educationData = [
  {
    degree: 'Full Stack Web Development',
    institution: 'YouCode - UM6P',
    location: 'Morocco',
    year: '2024 - 2026',
    description: 'Intensive full-stack development program covering modern web technologies, best practices, and real-world project experience. Completed with an end-of-studies internship at YADAG under a YouCode internship agreement.',
  },
  {
    degree: 'Mathematics & Computer Science',
    institution: 'Faculty of Sciences - Agadir',
    location: 'Agadir, Morocco',
    year: '2021 - 2023',
    description: 'Foundation in mathematics, algorithms, and computer science fundamentals.',
  },
  {
    degree: 'DUT in Computer Engineering',
    institution: 'EST - Agadir',
    location: 'Agadir, Morocco',
    year: '2019 - 2021',
    description: 'Technical diploma covering programming, databases, networking, and software development.',
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">04.</span>
            Education
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent" style={{ left: '0.5625rem', top: '1.25rem', bottom: '1.5rem' }} />

            {educationData.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative" style={{ paddingLeft: '2.5rem', paddingBottom: index === educationData.length - 1 ? '0' : '1.5rem' }}>
                  {/* Timeline dot */}
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center bg-[var(--color-bg)] border-2 border-[var(--color-accent)]"
                    style={{ position: 'absolute', left: '0.3125rem', top: '0.5rem', boxShadow: '0 0 12px rgba(34, 211, 238, 0.2)' }}
                  >
                    <FiBookOpen size={10} className="text-[var(--color-accent)]" />
                  </div>

                  <div style={{ padding: '1rem' }} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3" style={{ marginBottom: '0.75rem' }}>
                      <h3 className="text-base font-bold text-[var(--color-text)]">
                        {edu.degree}
                      </h3>
                      <span className="interest-badge">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[var(--color-accent)]" style={{ marginBottom: '0.5rem' }}>
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
