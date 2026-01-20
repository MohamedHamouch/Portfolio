import AnimatedSection from './AnimatedSection';

const languages = [
  { name: 'French', level: 'Native', proficiency: 100, color: '#00d4ff' },
  { name: 'English', level: 'Professional', proficiency: 85, color: '#a855f7' },
  { name: 'Arabic', level: 'Conversational', proficiency: 60, color: '#10b981' },
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
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <AnimatedSection key={lang.name} delay={index * 0.1}>
                <div className="card" style={{ borderColor: `${lang.color}25` }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <span 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color, boxShadow: `0 0 12px ${lang.color}60` }}
                      />
                      <span className="text-lg font-semibold text-[var(--color-text)]">
                        {lang.name}
                      </span>
                    </div>
                    <span 
                      className="text-sm font-mono px-4 py-1.5 rounded-lg"
                      style={{ 
                        backgroundColor: `${lang.color}15`,
                        color: lang.color 
                      }}
                    >
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-3 bg-[var(--color-bg)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${lang.proficiency}%`,
                        background: `linear-gradient(90deg, ${lang.color}, ${lang.color}aa)`,
                        boxShadow: `0 0 20px ${lang.color}40`
                      }}
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
