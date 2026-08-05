import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personel Taşımacılığı",
  description:
    "Karaaslan Turizm personel taşımacılığı; eğitimli sürücüler, düzenli denetimler ve mevzuata uygun araçlarla güvenli ulaşım.",
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

        <article className="detail-card detail-card-image">
          <Image src="/images/safe-driving.png" alt="Güvenli sürüş standardı" fill sizes="(max-width: 768px) 100vw, 50vw" />
          <div><span>04</span><h2>Kontrollü yolculuk</h2></div>
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

      <section className="detail-cta">
        <div className="section-wrap">
          <p className="eyebrow text-red-400">Karaaslan Turizm</p>
          <h2>Personel ulaşımınızı birlikte planlayalım.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="tel:+905011744166" className="button-primary">+90 501 174 41 66</a>
            <a href="mailto:info@karaaslanturizm.com" className="button-outline-dark">info@karaaslanturizm.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
