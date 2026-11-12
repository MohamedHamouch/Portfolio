import AnimatedSection from './AnimatedSection';
import {
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
  SiJunit5,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiNextdotjs,
  SiReactquery,
  SiZod,
  SiLeaflet,
  SiReacthookform,
  SiPython,
  SiFastapi,
  SiAmazoncognito,
  SiAmazons3,
  SiAmazonwebservices,
  SiAmazonec2,
  SiAmazonrds,
  SiTwilio,
  SiVitest,
  SiTestinglibrary,
  SiPytest,
  SiSpringsecurity,
  SiKeycloak,
  SiJsonwebtokens,
  SiSpring,
  SiGithubactions,
  SiFigma,
  SiPostman,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
import { TbApi } from 'react-icons/tb';

// What I'd most want to be hired for — shown larger, above the full breakdown.
// Frameworks only: the language is implied (Spring Boot → Java, Laravel → PHP)
// and listed in its group below.
const coreStack = [
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Angular', icon: SiAngular, color: '#E53B60' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  // Every MySQL logo in react-icons is a thin-line dolphin that vanishes at badge
  // size, so a solid database glyph in MySQL's brand orange stands in for it.
  { name: 'MySQL', icon: FaDatabase, color: '#F29111' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

// `icon` is optional: concepts and tools with no logo in react-icons (UML, Scrum,
// Zustand, Mockito…) render as text only, rather than borrowing another tool's logo.
// Colors are the brand colors, except dark blues/reds/purples (Jira, Angular,
// TypeScript…), which are tinted just enough to reach 4.5:1 against the badge.
const skillCategories = [
  {
    title: 'Front-end',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3D80C9' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#8E6EBF' },
      { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
      { name: 'Zustand' },
      { name: 'React Hook Form', icon: SiReacthookform, color: '#EC5990' },
      { name: 'Zod', icon: SiZod, color: '#5B7EBD' },
      { name: 'Leaflet', icon: SiLeaflet, color: '#199900' },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Jakarta EE' },
      { name: 'Python', icon: SiPython, color: '#4982B3' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: TbApi, color: '#22D3EE' },
      { name: 'Twilio', icon: SiTwilio, color: '#F22F46' },
    ],
  },
  {
    title: 'Data & Cloud',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#5277E4' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'AWS Cognito', icon: SiAmazoncognito, color: '#E0445A' },
      { name: 'S3', icon: SiAmazons3, color: '#569A31' },
      { name: 'Textract', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'EC2', icon: SiAmazonec2, color: '#FF9900' },
      { name: 'RDS', icon: SiAmazonrds, color: '#527FFF' },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'JUnit', icon: SiJunit5, color: '#25A162' },
      { name: 'Mockito' },
      { name: 'Spring Boot Test', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Pest' },
      { name: 'Vitest', icon: SiVitest, color: '#6E9F18' },
      { name: 'React Testing Library', icon: SiTestinglibrary, color: '#E53F3E' },
      { name: 'Pytest', icon: SiPytest, color: '#0A9EDC' },
    ],
  },
  {
    title: 'Security & Architecture',
    skills: [
      { name: 'Spring Security', icon: SiSpringsecurity, color: '#6DB33F' },
      // Brand grey (#4D4D4D) was 2.2:1 against the card, nearly invisible; lightened.
      { name: 'Keycloak', icon: SiKeycloak, color: '#9A9AAE' },
      { name: 'OAuth2', icon: FiLock, color: '#EB5424' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#ffffff' },
      { name: 'Microservices' },
      { name: 'Spring Cloud', icon: SiSpring, color: '#6DB33F' },
      { name: 'UML' },
      { name: 'Merise' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Jira', icon: SiJira, color: '#407DD9' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Scrum' },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="section-band section-band-mirror bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">03.</span>
            Skills & Technologies
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="accent-card p-5 md:p-6 mb-12">
            <h3 className="font-mono text-sm font-semibold mb-4 text-[var(--color-accent)]">
              Core stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreStack.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-badge gap-2 px-4 py-2.5 text-base text-[var(--color-text)] border-[var(--color-border-hover)]"
                >
                  <skill.icon size={18} style={{ color: skill.color }} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
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
                      {skill.icon && <skill.icon size={14} style={{ color: skill.color }} />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
