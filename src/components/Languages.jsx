import AnimatedSection from './AnimatedSection';

const languages = [
  { name: 'French', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Professional', proficiency: 85 },
  { name: 'Arabic', level: 'Conversational', proficiency: 60 },
];

const Languages = () => {
  return (
    <section id="languages" className="bg-[var(--color-surface)]/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-header">
            <span className="section-number">06.</span>
            Languages
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl">
          <div className="space-y-5">
            {languages.map((lang, index) => (
              <AnimatedSection key={lang.name} delay={index * 0.1}>
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-[var(--color-text)]">
                      {lang.name}
                    </span>
                    <span className="text-sm font-mono px-3 py-1.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-2.5 bg-[var(--color-bg)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[var(--color-tertiary)] to-[var(--color-tertiary)]/70"
                      style={{ width: `${lang.proficiency}%` }}
                    />
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

export default Languages;
