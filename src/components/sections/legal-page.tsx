type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="section-wrap">
          <p className="eyebrow text-red-400">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>Son güncelleme: 7 Ağustos 2026</span>
        </div>
      </header>
      <div className="section-wrap legal-layout">
        <aside>
          <strong>Karaaslan Turizm</strong>
          <a href="mailto:info@karaaslanturizm.com">info@karaaslanturizm.com</a>
          <a href="tel:+905011744166">+90 501 174 41 66</a>
        </aside>
        <article className="legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
