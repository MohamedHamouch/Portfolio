import AnimatedSection from './AnimatedSection';
import { FiBookOpen, FiArrowUpRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';

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
    location: 'Morocco',
    year: '2021 - 2023',
    description: 'Foundation in mathematics, algorithms, and computer science fundamentals.',
  },
  {
    degree: 'DUT in Computer Engineering',
    institution: 'EST - Agadir',
    location: 'Morocco',
    year: '2019 - 2021',
    description: 'Technical diploma covering programming, databases, networking, and software development.',
  },
];

const certifications = [
  { name: 'SQL (Advanced)', url: 'https://www.hackerrank.com/certificates/e1501f71522a' },
  { name: 'JavaScript (Intermediate)', url: 'https://www.hackerrank.com/certificates/3857368aa614' },
  { name: 'Java (Basic)', url: 'https://www.hackerrank.com/certificates/6a113708c159' },
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

        <div className="max-w-4xl">
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
                    {/* Same header layout as the Experience cards: title and school on the
                        left, dates and place on the right, in this section's cyan. */}
                    <div className="flex flex-wrap items-start justify-between gap-3" style={{ marginBottom: '0.75rem' }}>
                      <div>
                        <h3 className="text-base font-bold text-[var(--color-text)]" style={{ marginBottom: '0.25rem' }}>
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-[var(--color-accent)]">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-sm">
                          <FiCalendar size={12} className="text-[var(--color-accent)]" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-sm">
                          <FiMapPin size={12} className="text-[var(--color-accent)]" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* pl-10 lines the row up with the timeline cards, not the timeline dots */}
          <AnimatedSection delay={0.3}>
            <div className="mt-10 pl-10">
              <h3 className="font-mono text-sm font-semibold mb-4 text-[var(--color-accent)]">
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert) => (
                  <a
                    key={cert.url}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cert.name} certificate on HackerRank`}
                    className="group relative flex items-center gap-3 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl transition-all hover:border-[var(--color-accent)]"
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                      <SiHackerrank size={18} style={{ color: '#2EC866' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[var(--color-text-muted)]">HackerRank</p>
                      <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        {cert.name}
                      </p>
                    </div>
                    <FiArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="absolute top-3 right-3 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Education;
