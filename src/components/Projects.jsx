import AnimatedSection from './AnimatedSection';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack web application built with React and Spring Boot. Features include user authentication, real-time notifications, and responsive design.',
    image: 'https://via.placeholder.com/600x340/13131a/00d4ff?text=Project+Screenshot',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yourusername/project-one',
    live: 'https://project-one.example.com',
    featured: true,
    color: '#00d4ff',
  },
  {
    title: 'Project Two',
    description:
      'An e-commerce platform with payment integration, inventory management, and admin dashboard. Built using Laravel and Vue.js.',
    image: 'https://via.placeholder.com/600x340/13131a/a855f7?text=Project+Screenshot',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind'],
    github: 'https://github.com/yourusername/project-two',
    live: null,
    featured: true,
    color: '#a855f7',
  },
  {
    title: 'Project Three',
    description:
      'A REST API service for managing resources with comprehensive documentation and test coverage.',
    image: 'https://via.placeholder.com/600x340/13131a/10b981?text=Project+Screenshot',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'JUnit'],
    github: 'https://github.com/yourusername/project-three',
    live: 'https://api.project-three.example.com',
    featured: false,
    color: '#10b981',
  },
  {
    title: 'Project Four',
    description:
      'A modern single-page application with server-side rendering and optimized performance.',
    image: 'https://via.placeholder.com/600x340/13131a/f59e0b?text=Project+Screenshot',
    tech: ['Nuxt.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project-four',
    live: null,
    featured: false,
    color: '#f59e0b',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">04.</span>
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div 
                    className="relative overflow-hidden rounded-xl border-2 transition-all duration-300 group-hover:border-opacity-50"
                    style={{ borderColor: `${project.color}40` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                      style={{ backgroundColor: `${project.color}15` }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <p 
                    className="font-mono text-sm mb-3 font-medium"
                    style={{ color: project.color }}
                  >
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                    {project.title}
                  </h3>
                  <div className="card mb-5">
                    <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-sm px-3 py-1.5 rounded-md"
                        style={{ 
                          backgroundColor: `${project.color}15`,
                          color: project.color 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all hover:scale-110"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={24} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all hover:scale-110"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects Grid */}
        <AnimatedSection delay={0.3} className="mt-20">
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-8 text-center">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="card group cursor-pointer"
                style={{ borderColor: `${project.color}20` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 
                    className="text-lg font-semibold transition-colors"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h4>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <FiGithub size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-base text-[var(--color-text-muted)] mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-sm text-[var(--color-text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
