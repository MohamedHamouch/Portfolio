import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">01.</span>
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            <div className="space-y-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                I'm a passionate <span className="text-[var(--color-text)] font-medium">Full Stack Developer</span> with 
                expertise in building web applications from concept to deployment. I enjoy working 
                with modern frameworks and technologies to create efficient, scalable solutions.
              </p>
              <p>
                My journey in software development started with a curiosity for how things work 
                on the web. Today, I specialize in both front-end and back-end development, 
                with a strong focus on clean code, best practices, and user experience.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or continuously learning to stay updated with the 
                ever-evolving tech landscape.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="card">
              <h3 className="font-mono text-base text-[var(--color-amber)] mb-6 font-semibold">
                Quick Facts
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] text-lg mt-0.5">▹</span>
                  <div>
                    <span className="text-[var(--color-text)] font-medium block">Location</span>
                    <span className="text-[var(--color-text-muted)]">Your City, Country</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] text-lg mt-0.5">▹</span>
                  <div>
                    <span className="text-[var(--color-text)] font-medium block">Experience</span>
                    <span className="text-[var(--color-text-muted)]">X+ years in development</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] text-lg mt-0.5">▹</span>
                  <div>
                    <span className="text-[var(--color-text)] font-medium block">Focus</span>
                    <span className="text-[var(--color-text-muted)]">Full Stack Development</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[var(--color-accent)] text-lg mt-0.5">▹</span>
                  <div>
                    <span className="text-[var(--color-text)] font-medium block">Languages</span>
                    <span className="text-[var(--color-text-muted)]">French, English</span>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
