import AnimatedSection from './AnimatedSection';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Pepperworld',
    location: 'Morocco (Onsite)',
    period: 'June - August 2025',
    description: [
      'Developed a comprehensive web application for agricultural activity management and tracking',
      'Built responsive front-end interfaces using Nuxt.js and Tailwind CSS',
      'Implemented robust backend APIs with Laravel framework',
      'Designed and optimized MySQL database for efficient data management',
    ],
    technologies: ['Laravel', 'Nuxt.js', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: 'Web Developer Intern',
    company: 'TIC Escort',
    location: 'Morocco (Remote)',
    period: 'September 2020',
    description: [
      'Developed a professional company presentation website',
      'Built responsive layouts using HTML, CSS, and Bootstrap',
      'Implemented dynamic features with PHP and JavaScript',
      'Managed database operations with MySQL',
    ],
    technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">03.</span>
            Experience
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-0.5 bg-gradient-to-b from-[var(--color-secondary)] via-[var(--color-secondary)]/50 to-transparent" style={{ left: '0.5625rem', top: '1.25rem', bottom: '1.5rem' }} />

            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative" style={{ paddingLeft: '2.5rem', paddingBottom: index === experiences.length - 1 ? '0' : '1.5rem' }}>
                  {/* Timeline dot */}
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center bg-[var(--color-bg)] border-2 border-[var(--color-secondary)]"
                    style={{ position: 'absolute', left: '0.3125rem', top: '0.5rem', boxShadow: '0 0 12px rgba(212, 165, 116, 0.2)' }}
                  >
                    <FiBriefcase size={10} className="text-[var(--color-secondary)]" />
                  </div>

                  <div style={{ padding: '1rem' }} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3" style={{ marginBottom: '0.75rem' }}>
                      <div>
                        <h3 className="text-base font-bold text-[var(--color-text)]" style={{ marginBottom: '0.25rem' }}>
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium text-[var(--color-secondary)]">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-sm">
                          <FiCalendar size={12} className="text-[var(--color-secondary)]" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)] text-sm">
                          <FiMapPin size={12} className="text-[var(--color-secondary)]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                          <span className="text-[var(--color-secondary)] mt-0.5 text-xs">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 border-t border-[var(--color-border)]" style={{ paddingTop: '0.65rem' }}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="interest-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
