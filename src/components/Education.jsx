import AnimatedSection from './AnimatedSection';
import { FiBookOpen } from 'react-icons/fi';

const educationData = [
  {
    degree: 'Master in Computer Science',
    institution: 'Your University Name',
    location: 'City, Country',
    year: '2022 - 2024',
    description: 'Specialized in Software Engineering and Distributed Systems. Coursework included advanced algorithms, cloud computing, and machine learning.',
  },
  {
    degree: 'Bachelor in Computer Science',
    institution: 'Your University Name',
    location: 'City, Country',
    year: '2019 - 2022',
    description: 'Foundation in programming, data structures, databases, and software development methodologies.',
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">05.</span>
            Education
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[var(--color-secondary)] to-transparent" />

            {educationData.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative pl-14 md:pl-16 pb-12 last:pb-0">
                  {/* Timeline dot - purple */}
                  <div 
                    className="absolute left-2 md:left-3 top-2 w-7 h-7 rounded-full flex items-center justify-center bg-[var(--color-bg)] border-2 border-[var(--color-secondary)]"
                  >
                    <FiBookOpen size={12} className="text-[var(--color-secondary)]" />
                  </div>

                  <div className="card">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-[var(--color-text)]">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-sm px-3 py-1.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-base font-medium mb-4 text-[var(--color-secondary)]">
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
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
