import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";

const services = [
  {
    number: "01",
    image: "/images/personnel-service.png",
    title: "Personel Taşımacılığı",
    description:
      "Çalışanlarınızın işe geliş ve gidişlerini güvenli, konforlu ve zamanında sağlıyoruz.",
  },
  {
    number: "02",
    image: "/images/student-service.png",
    title: "Okul ve Öğrenci Taşımacılığı",
    description:
      "Öğrencilerimizin güvenliği için modern araçlar ve deneyimli kadromuzla hizmetinizdeyiz.",
  },
  {
    number: "03",
    image: "/images/event-service.png",
    title: "Etkinlik ve Organizasyon",
    description:
      "Toplantı, fuar, gezi ve özel etkinlikleriniz için planlı ulaşım çözümleri sunuyoruz.",
  },
];

const strengths = [
  ["Güvenli Ulaşım", "Araçlarımız düzenli bakımdan geçer ve yasal gerekliliklere uygundur."],
  ["Zamanında Hizmet", "Planlanan saatlere bağlı, aksama yaşamadan hizmet sunuyoruz."],
  ["Deneyimli Kadro", "Alanında uzman şoför ve operasyon ekibimizle yanınızdayız."],
  ["Şehir İçi Hizmet", "İstanbul şehir içi taşımacılık ihtiyaçlarına özel çözümler üretiyoruz."],
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="hizmetler" className="section-wrap py-20">
        <div className="section-heading">
          <span>Hizmetlerimiz</span>
          <h2>İhtiyacınıza uygun taşımacılık çözümleri</h2>
          <p>Her yolculuğu güven, konfor ve dakiklik ilkeleriyle planlıyoruz.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="service-card group">
              <div className="service-image">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="service-content">
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="#iletisim">Detaylı bilgi <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section">
        <Image src="/images/safe-driving.png" alt="Karaaslan Turizm ile İstanbul'da güvenli yolculuk" fill sizes="100vw" />
        <div className="journey-overlay" />
        <div className="section-wrap journey-content">
          <p className="eyebrow text-red-400">Her yolculukta güven</p>
          <h2>Deneyimli sürücüler,<br />kontrollü araçlar.</h2>
          <p>İstanbul&apos;un her noktasında planlı, güvenli ve konforlu ulaşım.</p>
        </div>
      </section>

      <section id="kurumsal" className="border-y border-slate-200 bg-white py-20">
        <div className="section-wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Kurumsal</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Karaaslan Turizm hakkında
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Şehir içi taşımacılık alanında personel, öğrenci ve organizasyon
              ulaşımını güvenle planlıyor; her yolculukta müşteri memnuniyetini
              ön planda tutuyoruz.
            </p>
            <Link href="#iletisim" className="button-primary mt-7">Bizimle tanışın</Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2">
            {strengths.map(([title, description], index) => (
              <div key={title} className="bg-slate-50 p-7">
                <span className="text-sm font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="filomuz" className="section-wrap py-20">
        <div className="section-heading">
          <span>Filomuz</span>
          <h2>Modern ve konforlu servis araçları</h2>
          <p>Farklı kapasite ihtiyaçlarına uygun, bakımlı ve konforlu araç seçenekleri.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="fleet-card">
            <div className="fleet-image"><Image src="/images/mercedes-sprinter.png" alt="Mercedes Sprinter servis aracı" fill sizes="(max-width: 768px) 100vw, 50vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">19+1 yolcu</p><h3>Mercedes Sprinter</h3><span>Yüksek konfor ve geniş iç hacim</span></div>
          </article>
          <article className="fleet-card">
            <div className="fleet-image"><Image src="/images/fiat-ducato.png" alt="Fiat Ducato servis aracı" fill sizes="(max-width: 768px) 100vw, 50vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">16+1 yolcu</p><h3>Fiat Ducato</h3><span>Şehir içi ulaşım için ideal çözüm</span></div>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="route-banner">
          <Image src="/images/istanbul-route.png" alt="Karaaslan Turizm aracı İstanbul sahil yolunda" fill sizes="100vw" />
          <div className="route-copy">
            <span>İstanbul&apos;un her noktasına</span>
            <strong>Güvenle yoldayız.</strong>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-slate-950 py-20 text-white">
        <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-red-400">İletişime geçin</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Size en uygun ulaşım çözümünü birlikte planlayalım.
            </h2>
            <p className="mt-5 text-slate-400">Personel, öğrenci veya organizasyon taşımacılığı için teklif alın.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="tel:+905011744166" className="button-primary">+90 501 174 41 66</a>
            <a href="mailto:info@karaaslanturizm.com" className="button-outline-dark">E-posta gönderin</a>
          </div>
        </div>
      </section>
    </main>
  );
}
