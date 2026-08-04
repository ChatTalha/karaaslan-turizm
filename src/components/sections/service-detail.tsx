import Image from "next/image";
import Link from "next/link";

type DetailSection = {
  title: string;
  description: string;
  items?: string[];
};

type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  statement: string;
  sections: DetailSection[];
};

export function ServiceDetail({ eyebrow, title, intro, image, imageAlt, statement, sections }: ServiceDetailProps) {
  return (
    <main>
      <section className="detail-hero">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        <div className="detail-hero-overlay" />
        <div className="section-wrap detail-hero-content">
          <p className="eyebrow text-red-400">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <Link href="/#iletisim" className="button-primary mt-8">Teklif alın</Link>
        </div>
      </section>

      <section className="section-wrap detail-intro">
        <p className="eyebrow">Hizmet yaklaşımımız</p>
        <h2>{statement}</h2>
      </section>

      <section className="section-wrap service-detail-grid">
        {sections.map((section, index) => (
          <article key={section.title} className={index === 0 ? "service-detail-panel service-detail-panel-featured" : "service-detail-panel"}>
            <span>0{index + 1}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {section.items ? (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section className="detail-cta">
        <div className="section-wrap">
          <p className="eyebrow text-red-400">Karaaslan Turizm</p>
          <h2>Ulaşım planınızı birlikte oluşturalım.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="tel:+905011744166" className="button-primary">+90 501 174 41 66</a>
            <a href="mailto:info@karaaslan.com" className="button-outline-dark">info@karaaslan.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
