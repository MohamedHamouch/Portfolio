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
            <div className="space-y-5 text-base text-[var(--color-text-muted)] leading-relaxed">
              <p>
                I'm a passionate <span className="text-[var(--color-text)] font-medium">Full Stack Developer</span> based in Agadir, Morocco, 
                currently pursuing my studies at <span className="text-[var(--color-accent)]">YouCode - UM6P</span>. I specialize in building 
                web applications from concept to deployment using modern technologies.
              </p>
              <p>
                My journey includes hands-on experience developing real-world applications, from agricultural 
                management systems to corporate websites. I'm passionate about clean code, elegant solutions, 
                and continuously expanding my technical skills.
              </p>
              <p>
                Beyond coding, I enjoy exploring philosophy, playing chess, and practicing MMA. These interests 
                help me develop strategic thinking and discipline that I bring to my development work.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="flex flex-col gap-3">
              {/* Quick Info */}
              <div style={{ padding: '0.65rem', borderLeftWidth: '3px', borderLeftColor: 'var(--color-secondary)' }} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-mono text-sm text-[var(--color-accent)] mb-4 font-semibold">
                  Quick Info
                </h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Location</span>
                    <span className="text-[var(--color-text)]">Agadir, Morocco</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Focus</span>
                    <span className="text-[var(--color-text)]">Full Stack Development</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Education</span>
                    <span className="text-[var(--color-text)]">YouCode - UM6P</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div style={{ padding: '0.65rem', borderLeftWidth: '3px', borderLeftColor: 'var(--color-secondary)' }} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-mono text-sm text-[var(--color-accent)] mb-4 font-semibold">
                  Languages
                </h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Arabic</span>
                    <span className="text-[var(--color-text)]">Native</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">Tamazight</span>
                    <span className="text-[var(--color-text)]">Native</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">French</span>
                    <span className="text-[var(--color-text)]">Intermediate (B2)</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[var(--color-text-muted)]">English</span>
                    <span className="text-[var(--color-text)]">Intermediate (B2)</span>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div style={{ padding: '0.65rem', borderLeftWidth: '3px', borderLeftColor: 'var(--color-secondary)' }} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
                <h3 className="font-mono text-sm text-[var(--color-accent)] mb-4 font-semibold">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Computer Science', 'Philosophy', 'Poetry', 'Chess', 'Football', 'MMA'].map((interest) => (
                    <span key={interest} className="interest-badge">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
