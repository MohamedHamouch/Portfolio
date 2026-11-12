import AnimatedSection from './AnimatedSection';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'YADAG',
    location: 'Toronto, Canada (Remote)',
    period: 'September 2026 - Present',
    current: true,
    description: [
      'Building a platform that Canadian farms use to hire, onboard and house seasonal foreign workers',
      'Bulk worker creation from a single PDF of passports, read with AWS Textract in a Python FastAPI service',
      'Worker transfers between farms, with eligibility rules, audit logging and scheduled activation',
      'Flight management for worker arrivals, and a prospects pipeline for recruiting from the talent pool',
      'WhatsApp onboarding reminders through Twilio; features covered by Pest, Vitest and Pytest tests',
    ],
    technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'Zod', 'Laravel', 'MySQL', 'Python', 'FastAPI', 'AWS', 'Twilio'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Pepperworld',
    location: 'Morocco (Onsite)',
    period: 'June - August 2025',
    description: [
      'Replaced Google Sheets with a web app for tracking crop viruses, diseases, pests and irrigation issues',
      'Interactive map and timeline (Leaflet) of field reports logged with GPS location, photos and severity',
      'Analysis module with charts and reports, exportable to Excel and PDF',
      'QR codes on farms, sectors and greenhouses so field agents open the right record by scanning',
      'Role-based user management; contributed to production planning and irrigation scheduling',
    ],
    technologies: ['Laravel', 'Nuxt.js', 'Tailwind CSS', 'MySQL', 'Leaflet'],
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
    <section id="experience">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">02.</span>
            Experience
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl">
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
                        <h3 className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-bold text-[var(--color-text)]" style={{ marginBottom: '0.25rem' }}>
                          {exp.title}
                          {/* Same green dot as the hero's availability pill */}
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-tertiary)]/30 bg-[var(--color-tertiary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-tertiary)]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-tertiary)]" aria-hidden="true" />
                              Current
                            </span>
                          )}
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
