import Link from "next/link";

type SiteCtaProps = {
  title?: string;
};

export function SiteCta({ title = "Ulaşım ihtiyacınızı birlikte planlayalım." }: SiteCtaProps) {
  return (
    <section className="detail-cta">
      <div className="section-wrap">
        <p className="eyebrow text-red-400">Karaaslan Turizm</p>
        <h2>{title}</h2>
        <div className="site-cta-actions">
          <Link href="/#hizmetler" className="button-outline-dark">Hizmetlerimizi inceleyin</Link>
          <Link href="/#iletisim" className="button-primary">Konuşalım</Link>
        </div>
      </div>
    </section>
  );
}
