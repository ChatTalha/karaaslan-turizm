import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "Karaaslan Turizm hakkında, misyon, vizyon ve hizmet politikalarımız.",
};

const corporateLinks = [
  ["Hakkımızda", "#hakkimizda"],
  ["Misyon ve Vizyon", "#misyon-vizyon"],
  ["Çevre Politikası", "#cevre"],
  ["Kalite Politikası", "#kalite"],
  ["İş Sağlığı ve Güvenliği", "#isg"],
  ["Bilgi Güvenliği", "#bilgi-guvenligi"],
];

const environmentalCommitments = [
  "Çevre mevzuatına uymak ve güncel uygulamaları takip etmek",
  "Faaliyetlerin çevresel etkilerini değerlendirerek riskleri azaltmak",
  "Atıkları kaynağında azaltmak ve uygun yöntemlerle bertarafını sağlamak",
  "Çalışanlarda ve hizmet ortaklarında çevre bilincini geliştirmek",
  "Yakıt, enerji ve diğer doğal kaynakların verimli kullanımını teşvik etmek",
  "Çevre performansını düzenli olarak izlemek ve sürekli iyileştirmek",
  "Mal ve hizmet seçimlerinde çevreyle uyumlu alternatifleri gözetmek",
];

const qualityCommitments = [
  "Müşteri taleplerini güvenlik, kalite, zamanlama ve sürdürülebilir maliyet ilkeleriyle yönetmek",
  "Çalışanların mesleki yetkinliğini ve müşteri bilincini eğitimlerle geliştirmek",
  "Faaliyetleri yasal şartlara uygun, etkin ve ölçülebilir süreçlerle yürütmek",
  "Teknolojiyi takip ederek hizmet kalitesini ve operasyon verimliliğini sürekli geliştirmek",
];

const safetyCommitments = [
  "Faaliyetlerde risk değerlendirmesi yaparak tehlikeleri önceden belirlemek",
  "Çalışan ve hizmet ortaklarına düzenli iş sağlığı ve güvenliği eğitimi vermek",
  "Güvenli çalışma yöntemlerini sahada izlemek ve geliştirmek",
  "İş kazalarını ve meslek hastalıklarını önlemeye yönelik proaktif tedbirler almak",
];

const informationCommitments = [
  "Bilginin gizliliğini, bütünlüğünü ve ihtiyaç anında erişilebilirliğini korumak",
  "Kişisel ve kurumsal verileri yalnızca yetkili kişiler ve tanımlı süreçlerle işlemek",
  "Bilgi varlıklarına yönelik riskleri değerlendirmek ve uygun kontroller uygulamak",
  "Olası ihlallerin hızla bildirilmesi ve müdahale edilmesi için gerekli yapıyı oluşturmak",
  "Yasal ve sözleşmesel bilgi güvenliği yükümlülüklerini takip etmek",
  "Çalışanların ve hizmet ortaklarının bilgi güvenliği farkındalığını geliştirmek",
];

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="policy-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function CorporatePage() {
  return (
    <main>
      <section className="corporate-hero">
        <Image src="/images/istanbul-route.png" alt="Karaaslan Turizm İstanbul'da hizmet veriyor" fill priority sizes="100vw" />
        <div className="corporate-hero-overlay" />
        <div className="section-wrap corporate-hero-content">
          <p className="eyebrow text-red-400">Kurumsal</p>
          <h1>Güvenli ulaşım için yeni nesil hizmet anlayışı.</h1>
          <p>2025&apos;ten bu yana insanı, güvenliği ve zamanı merkeze alıyoruz.</p>
        </div>
      </section>

      <nav className="corporate-nav" aria-label="Kurumsal sayfa bölümleri">
        <div className="section-wrap">
          {corporateLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </nav>

      <section id="hakkimizda" className="section-wrap corporate-about">
        <div>
          <p className="eyebrow">Hakkımızda</p>
          <h2>Yeni bir firma, uzun soluklu bir yolculuk.</h2>
        </div>
        <div className="corporate-copy">
          <p>
            Karaaslan Turizm, İstanbul&apos;da personel, öğrenci ve organizasyon
            taşımacılığı alanlarında güvenilir çözümler sunmak amacıyla 2025
            yılında kuruldu. Trafiğin yoğun olduğu bir şehirde zamanın değerini
            biliyor; yolcuları işlerine, okullarına ve sevdiklerine güvenle
            ulaştırmayı temel sorumluluğumuz olarak görüyoruz.
          </p>
          <p>
            Genç ve dinamik yapımızı, planlı operasyon ve güçlü iletişimle
            destekliyoruz. Araç filomuzu ve hizmet ağımızı ihtiyaçlara göre
            kontrollü biçimde büyütürken her yeni yolculukta kalite standardımızı
            yükseltmeyi hedefliyoruz.
          </p>
          <p>
            Müşterilerimizin beklentilerini dinleyen, değişen koşullara hızla uyum
            sağlayan ve uzun vadeli iş ortaklıkları kuran bir ulaşım markası olmak
            için çalışıyoruz.
          </p>
        </div>
      </section>

      <section id="misyon-vizyon" className="section-wrap mission-grid">
        <article>
          <span>01</span>
          <h2>Misyonumuz</h2>
          <p>
            Kendimizi sürekli yenileyerek müşteri memnuniyetini ve yolcu
            güvenliğini en önemli hedef olarak görmek; ulaşımda kaliteyi,
            dakikliği ve güveni bir arada sunarken kontrollü büyümek ve istihdama
            katkı sağlamaktır.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Vizyonumuz</h2>
          <p>
            Ulaşım hizmetlerinde örnek gösterilen, teknolojiyi etkin kullanan ve
            müşteri beklentilerinin üzerinde çözümler üreten bir marka olmak;
            hizmet ağımızı önce Türkiye&apos;de, ardından uluslararası pazarlarda
            sürdürülebilir biçimde genişletmektir.
          </p>
        </article>
      </section>

      <section id="cevre" className="policy-section policy-section-soft">
        <div className="section-wrap policy-layout">
          <div><p className="eyebrow">Çevre</p><h2>Çevre politikamız</h2></div>
          <div>
            <p>Faaliyetlerimizin çevresel etkilerini azaltmayı ve kaynakları verimli kullanmayı hizmet anlayışımızın bir parçası kabul ediyoruz.</p>
            <PolicyList items={environmentalCommitments} />
          </div>
        </div>
      </section>

      <section id="kalite" className="policy-section">
        <div className="section-wrap policy-layout">
          <div><p className="eyebrow">Hizmet standardı</p><h2>Kalite politikamız</h2></div>
          <div>
            <p>Müşteri ihtiyaçlarını doğru anlayan, zamanında ve güvenilir hizmet üreten bir kalite yaklaşımını benimsiyoruz.</p>
            <PolicyList items={qualityCommitments} />
          </div>
        </div>
      </section>

      <section id="isg" className="policy-section policy-section-dark">
        <div className="section-wrap policy-layout">
          <div><p className="eyebrow text-red-400">Önce güvenlik</p><h2>İş sağlığı ve güvenliği</h2></div>
          <div>
            <p>Sağlıklı ve güvenli bir çalışma ortamı oluşturmayı tüm faaliyetlerimizin vazgeçilmez şartı olarak görüyoruz.</p>
            <PolicyList items={safetyCommitments} />
          </div>
        </div>
      </section>

      <section id="bilgi-guvenligi" className="policy-section">
        <div className="section-wrap policy-layout">
          <div><p className="eyebrow">Dijital sorumluluk</p><h2>Bilgi güvenliği politikamız</h2></div>
          <div>
            <p>Müşteri, çalışan ve operasyon bilgilerinin güvenliğini korumak için erişim, saklama ve paylaşım süreçlerinde gerekli idari ve teknik tedbirleri gözetiyoruz.</p>
            <PolicyList items={informationCommitments} />
            <p className="policy-note">Bu politika bir ISO 27001 sertifikası beyanı değildir; Karaaslan Turizm&apos;in bilgi güvenliğine ilişkin kurumsal yaklaşımını açıklar.</p>
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="section-wrap">
          <p className="eyebrow text-red-400">Birlikte büyüyelim</p>
          <h2>Ulaşım ihtiyaçlarınız için yanınızdayız.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="tel:+905011744166" className="button-primary">+90 501 174 41 66</a>
            <Link href="/personel-tasimaciligi" className="button-outline-dark">Hizmetimizi inceleyin</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
