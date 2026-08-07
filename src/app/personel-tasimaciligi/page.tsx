import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteCta } from "@/components/sections/site-cta";

export const metadata: Metadata = {
  title: "İstanbul Personel Servisi ve Personel Taşımacılığı",
  description:
    "İstanbul personel servisi ve kurumsal personel taşımacılığı için eğitimli sürücüler, düzenli denetimler ve mevzuata uygun araçlarla güvenli ulaşım.",
  alternates: { canonical: "/personel-tasimaciligi" },
};

const personnelGallery = [
  {
    image: "/images/personnel/personnel-boarding.png",
    label: "Vardiya ulaşımı",
    title: "Personelinizi çalışma saatlerine uygun planla taşıyoruz.",
  },
  {
    image: "/images/personnel/personnel-route.png",
    label: "Planlı güzergâh",
    title: "İstanbul genelinde güvenli ve zamanında servis.",
  },
  {
    image: "/images/personnel/personnel-fleet.png",
    label: "Saha operasyonu",
    title: "Farklı kapasitelere uygun modern araç çözümleri.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "İstanbul Personel Servisi ve Personel Taşımacılığı",
  serviceType: "Kurumsal personel taşımacılığı",
  url: "https://www.karaaslanturizm.com/personel-tasimaciligi",
  areaServed: { "@type": "City", name: "İstanbul" },
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.karaaslanturizm.com/#business",
    name: "Karaaslan Turizm",
    telephone: "+90 501 174 41 66",
  },
};

const auditItems = [
  "Sürücülerin kılık, kıyafet ve kişisel bakım uygunluğu",
  "Araçların iç ve dış temizlik kontrolü",
  "Muayene, trafik sigortası, egzoz emisyonu ve ehliyet kontrolleri",
  "Takoz, kriko, çekme halatı, zincir, reflektör ve stepne kontrolleri",
  "İlk yardım seti ve yangın söndürme cihazı uygunluğu",
  "Lastiklerin diş derinliği ve genel güvenlik kontrolleri",
  "Gerekli durumlarda alkol ölçümleri",
];

const trainingItems = [
  "İletişim ve müşteri ilişkileri",
  "Trafik kuralları ve trafik güvenliği",
  "İş sağlığı ve güvenliği",
  "Çevre güvenliği",
  "İlk yardım ve acil durum farkındalığı",
];

const driverStandards = [
  "Psikoteknik değerlendirmelerini ve gerekli mesleki kontrolleri tamamlar.",
  "Trafik kurallarına uyar; yolculara karşı kibar ve anlayışlı davranır.",
  "Müşteri memnuniyetini ve zamanında hizmeti ön planda tutar.",
  "Taşıdığı insanların güvenliğinden sorumlu olduğunun bilinciyle görev yapar.",
];

const requiredDocuments = [
  "Yol belgesi ve güzergâh bildirim formu",
  "Araç ruhsatı ve geçerli muayene kaydı",
  "Trafik sigortası ve egzoz emisyon kaydı",
  "Yolcu isim listesi ve acil durum planı",
  "Cam çekici ve ilk yardım seti",
  "Trafik seti ve araca uygun yangın söndürme tüpü",
];

export default function PersonnelTransportationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="detail-hero">
        <Image
          src="/images/personnel-service.png"
          alt="Karaaslan Turizm personel taşımacılığı"
          fill
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="section-wrap detail-hero-content">
          <p className="eyebrow text-red-400">Hizmetlerimiz</p>
          <h1>Personel taşımacılığında güvenli ve planlı hizmet</h1>
          <p>
            Çalışanlarınızın işe geliş ve dönüşlerini güvenlik, konfor ve
            zamanlama ilkeleriyle planlıyoruz.
          </p>
          <Link href="/#iletisim" className="button-primary mt-8">Teklif alın</Link>
        </div>
      </section>

      <section className="section-wrap detail-intro">
        <p className="eyebrow">Hizmet yaklaşımımız</p>
        <h2>Kaliteyi eğitim, denetim ve sürekli gelişimle destekliyoruz.</h2>
        <p>
          Personel taşımacılığının yalnızca bir ulaşım hizmeti olmadığını biliyoruz.
          Sürücüden araca, planlamadan saha kontrolüne kadar her aşamada güvenli ve
          sürdürülebilir bir hizmet standardı oluşturmayı hedefliyoruz.
        </p>
      </section>

      <section className="section-wrap personnel-field-section" aria-labelledby="personnel-field-title">
        <div className="personnel-field-heading">
          <p className="eyebrow">Sahada personel taşımacılığı</p>
          <h2 id="personnel-field-title">İşletmenizin temposuna uyum sağlayan servis planı.</h2>
          <p>Güzergâhları, vardiya saatlerini ve araç kapasitesini birlikte değerlendirerek kesintisiz bir ulaşım operasyonu kuruyoruz.</p>
        </div>
        <div className="personnel-field-gallery">
          {personnelGallery.map((item, index) => (
            <figure key={item.image} className={index === 0 ? "personnel-field-card personnel-field-main" : "personnel-field-card"}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 100vw, 60vw" />
              <figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-wrap detail-grid">
        <article className="detail-card detail-card-wide">
          <span>01</span>
          <h2>Eğitim</h2>
          <p>
            Hizmet kalitesini geliştirmenin en etkili yollarından biri sürücülere
            düzenli eğitim vermektir. Planlı eğitimlerle sürüş güvenliği, yolcu
            iletişimi ve acil durum farkındalığı güncel tutulur.
          </p>
          <h3>Eğitim başlıklarımız</h3>
          <ul className="detail-list compact-list">
            {trainingItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="detail-card detail-card-dark">
          <span>02</span>
          <h2>Denetimler</h2>
          <p>
            Hizmetin sahadaki işleyişini düzenli kontrollerle izler, tespit edilen
            uygunsuzlukları kayıt altına alır ve giderilene kadar takip ederiz.
          </p>
          <ul className="detail-list">
            {auditItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="detail-card">
          <span>03</span>
          <h2>Şoför standartlarımız</h2>
          <p>
            Sürücülerimizin kurumsal görünümü, kişisel bakımı, iletişimi ve güvenli
            sürüş yaklaşımı hizmet kalitemizin temel parçalarıdır.
          </p>
          <ul className="detail-list check-list">
            {driverStandards.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="detail-card detail-card-image detail-card-wide">
          <Image src="/images/safe-driving.png" alt="Güvenli sürüş standardı" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <div>
            <span>04</span>
            <h2>Kontrollü yolculuk</h2>
            <p>Her seferi dikkatli sürüş, düzenli araç takibi ve yolcu güvenliğini önceleyen bir operasyon anlayışıyla yönetiyoruz.</p>
          </div>
        </article>

        <article className="detail-card detail-card-wide">
          <span>05</span>
          <h2>Araç standartlarımız</h2>
          <p>
            Araçların bakım, temizlik, güvenlik donanımı ve yasal evrakları düzenli
            olarak kontrol edilir. Operasyon planlamasında teknolojinin sağladığı
            iletişim imkânlarından yararlanılarak olası aksaklıklara hızlı şekilde
            müdahale edilmesi amaçlanır.
          </p>
        </article>

        <article className="detail-card detail-card-wide">
          <span>06</span>
          <h2>Kanun ve yönetmeliklere uygunluk</h2>
          <p>
            Personel taşımacılığındaki yasal yükümlülükler ve güncel mevzuat takip
            edilir; hizmette kullanılan araç ve sürücülerin gerekli şartları
            karşılaması gözetilir.
          </p>
          <h3>Araçlarda bulunması gereken temel evrak ve ekipmanlar</h3>
          <ul className="document-grid">
            {requiredDocuments.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <SiteCta title="Personel ulaşımınızı birlikte planlayalım." />
    </main>
  );
}
