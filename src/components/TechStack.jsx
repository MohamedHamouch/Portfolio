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
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Testing & Quality',
    skills: [
      { name: 'JUnit', icon: VscBeaker, color: '#25A162' },
      { name: 'Mockito', icon: VscBeaker, color: '#78C257' },
      { name: 'JaCoCo', icon: VscBeaker, color: '#C21325' },
      { name: 'Pest', icon: SiPhp, color: '#FF2D20' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    title: 'Project Management',
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

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.08}>
              <div>
                <h3 className="font-mono text-sm font-semibold mb-4 text-[var(--color-accent)]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-badge">
                      <skill.icon size={14} style={{ color: skill.color }} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Analysis & Design */}
          <AnimatedSection delay={0.5}>
            <div>
              <h3 className="font-mono text-sm font-semibold mb-4 text-[var(--color-accent)]">
                Analysis & Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {['UML', 'Merise', 'Relational Modeling', 'ERD'].map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.6}>
            <div>
              <h3 className="font-mono text-sm font-semibold mb-4 text-[var(--color-accent)]">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HackerRank SQL Advanced', 'JavaScript Intermediate', 'Java Basic'].map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
