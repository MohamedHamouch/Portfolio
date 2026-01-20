import AnimatedSection from './AnimatedSection';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Month 2024 - Month 2024',
    duration: '6 months',
    description: [
      'Developed and maintained web applications using React and Spring Boot',
      'Collaborated with the team to implement new features and fix bugs',
      'Participated in code reviews and agile development processes',
      'Worked on database design and optimization with PostgreSQL',
    ],
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    title: 'Web Developer Intern',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Month 2023 - Month 2023',
    duration: '3 months',
    description: [
      'Built responsive user interfaces with HTML, CSS, and JavaScript',
      'Implemented backend functionality using PHP and Laravel',
      'Managed database operations with MySQL',
      'Learned agile methodologies and team collaboration',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
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

        <div className="max-w-4xl">
          <div className="relative">
            {/* Timeline line - amber gradient */}
            <div className="absolute left-5 md:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[var(--color-amber)] via-[var(--color-amber)]/50 to-transparent" />

            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative pl-14 md:pl-16 pb-14 last:pb-0">
                  {/* Timeline dot - amber */}
                  <div 
                    className="absolute left-2 md:left-3 top-2 w-7 h-7 rounded-full flex items-center justify-center bg-[var(--color-bg)] border-2 border-[var(--color-amber)]"
                    style={{ boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)' }}
                  >
                    <FiBriefcase size={12} className="text-[var(--color-amber)]" />
                  </div>

                  <div className="card">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-[var(--color-amber)]">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-base">
                          <FiCalendar size={16} className="text-[var(--color-amber)]" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-base">
                          <FiMapPin size={16} className="text-[var(--color-amber)]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-base text-[var(--color-text-muted)]">
                          <span className="text-[var(--color-amber)] mt-1">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-mono rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
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
