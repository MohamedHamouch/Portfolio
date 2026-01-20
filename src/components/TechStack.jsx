import AnimatedSection from './AnimatedSection';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNuxtdotjs,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiC,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiTrello,
  SiSlack,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscBeaker } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Front-end',
    color: '#00d4ff',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Back-end',
    color: '#a855f7',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Jakarta EE', icon: FaJava, color: '#ED8B00' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    title: 'Databases',
    color: '#10b981',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Testing & Quality',
    color: '#f59e0b',
    skills: [
      { name: 'JUnit', icon: VscBeaker, color: '#25A162' },
      { name: 'Mockito', icon: VscBeaker, color: '#78C257' },
      { name: 'JaCoCo', icon: VscBeaker, color: '#C21325' },
      { name: 'Pest', icon: SiPhp, color: '#FF2D20' },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: '#f43f5e',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    title: 'Project Management',
    color: '#00d4ff',
    skills: [
      { name: 'Scrum', icon: SiJira, color: '#0052CC' },
      { name: 'Kanban', icon: SiTrello, color: '#0079BF' },
      { name: 'Jira', icon: SiJira, color: '#0052CC' },
      { name: 'Trello', icon: SiTrello, color: '#0079BF' },
      { name: 'Slack', icon: SiSlack, color: '#4A154B' },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="skills">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">02.</span>
            Skills & Technologies
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.08}>
              <div 
                className="card h-full"
                style={{ borderColor: `${category.color}25` }}
              >
                <h3 
                  className="font-mono text-base font-semibold mb-6 flex items-center gap-3"
                  style={{ color: category.color }}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all cursor-default group"
                    >
                      <skill.icon
                        size={20}
                        style={{ color: skill.color }}
                        className="transition-transform group-hover:scale-110"
                      />
                      <span className="text-base text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Design & Analysis Section */}
        <AnimatedSection delay={0.5} className="mt-8">
          <div className="card" style={{ borderColor: '#a855f725' }}>
            <h3 className="font-mono text-base font-semibold mb-6 flex items-center gap-3 text-[#a855f7]">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              Analysis & Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {['UML', 'Merise', 'Relational Modeling', 'System Design', 'ERD'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2.5 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] text-base text-[var(--color-text-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;
