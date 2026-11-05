import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section-band bg-[var(--color-surface)]/50">
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
              {/* Phones: small photo floated so the intro wraps around it. sm+: photo beside
                  the intro. flow-root contains the float on phones. */}
              <div className="flow-root sm:flex sm:flex-row sm:items-center sm:gap-6">
                {/* 480px source shown at 144px max: sharp on 2x+ screens. Explicit size avoids layout shift. */}
                <div className="relative float-left w-22 h-22 mr-4 mt-1 mb-1.5 sm:float-none sm:m-0 shrink-0 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-[var(--color-border)]">
                  <img
                    src="/avatar.webp"
                    alt="Portrait of Mohamed Hamouch"
                    width="144"
                    height="144"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  {/* Vignette: darkens the light studio background toward the edges so the
                      photo sits in the dark page, while the face in the centre stays clear */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(circle at 50% 42%, transparent 40%, rgba(10, 10, 15, 0.6) 100%)' }}
                  />
                </div>
                <p>
                  I'm a <span className="text-[var(--color-text)] font-medium">Full Stack Developer</span> based in Agadir, Morocco.
                  I trained at <span className="text-[var(--color-accent)]">YouCode - UM6P</span> and I'm completing my end-of-studies
                  internship remotely at <span className="text-[var(--color-accent)]">YADAG</span>, a Toronto company building
                  workforce software for farms.
                </p>
              </div>
              <p>
                Most of my work so far is in agriculture: at YADAG I build features across a Laravel API and a Next.js
                front end, and at Pepperworld I built an activity-tracking app with Laravel and Nuxt. On the Java side,
                I work with Spring Boot, Spring Security and microservice architectures.
              </p>
              <p>
                Away from the keyboard I read philosophy, train MMA and play chess (1100 in rapid).
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="flex flex-col gap-3">
              {/* Quick Info */}
              <div style={{ padding: '0.65rem' }} className="accent-card">
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
              <div style={{ padding: '0.65rem' }} className="accent-card">
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
              <div style={{ padding: '0.65rem' }} className="accent-card">
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
