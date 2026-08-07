import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { ServiceShowcase } from "@/components/sections/service-showcase";

const strengths = [
  ["Güvenli Ulaşım", "Araçlarımız düzenli bakımdan geçer ve yasal gerekliliklere uygundur."],
  ["Zamanında Hizmet", "Planlanan saatlere bağlı, aksama yaşanmadan hizmet sunuyoruz."],
  ["Deneyimli Kadro", "Alanında uzman şoför ve operasyon ekibimizle yanınızdayız."],
  ["Şehir İçi Hizmet", "İstanbul şehir içi taşımacılık ihtiyaçlarına özel çözümler üretiyoruz."],
];

const gallery = [
  {
    image: "/images/home/school-fiat.webp",
    label: "Okul taşımacılığı",
    title: "Öğrenciler için kontrollü ulaşım",
  },
  {
    image: "/images/home/event-arrival.webp",
    label: "Etkinlik transferi",
    title: "Organizasyonlara zamanında varış",
  },
  {
    image: "/images/home/event-wedding.webp",
    label: "Özel günler",
    title: "Misafirlerinize konforlu transfer",
  },
  {
    image: "/images/home/city-traffic.webp",
    label: "Şehir içi operasyon",
    title: "İstanbul trafiğinde planlı hizmet",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="kurumsal" className="home-about">
        <div className="section-wrap home-about-grid">
          <div className="home-about-copy">
            <p className="eyebrow">Hakkımızda</p>
            <h2>Kurumların güvenle tercih ettiği ulaşım ortağı.</h2>
            <p>
              Karaaslan Turizm, personel servis taşımacılığı alanında güvenilir,
              planlı ve profesyonel hizmet sunmak amacıyla 2025 yılında faaliyete
              başladı. İstanbul&apos;daki ulaşım süreçlerini güven, disiplin ve
              sorumluluk ilkeleriyle yönetiyoruz.
            </p>
            <p>
              Modern araç filomuz, düzenli bakımları yapılan servis araçlarımız ve
              deneyimli sürücü kadromuzla her iş birliğini uzun vadeli bir ortaklık
              olarak görüyoruz.
            </p>
            <div className="home-about-actions">
              <Link href="/kurumsal" className="button-primary">Bizi tanıyın</Link>
              <span>Güvenilir hizmet<br />Zamanında ulaşım</span>
            </div>
          </div>

          <div className="home-about-media">
            <div className="home-about-photo home-about-photo-main">
              <Image
                src="/images/home/about-team.webp"
                alt="Karaaslan Turizm ekibi ve servis araçları"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>
            <div className="home-about-photo home-about-photo-detail">
              <Image
                src="/images/home/about-driver.webp"
                alt="Karaaslan Turizm sürücüsü İstanbul güzergâhında"
                fill
                sizes="(max-width: 900px) 46vw, 270px"
              />
            </div>
            <div className="home-about-stamp">
              <strong>2025</strong>
              <span>İstanbul&apos;da<br />güvenle yoldayız</span>
            </div>
          </div>
        </div>

        <div className="section-wrap home-strengths">
          {strengths.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hizmetler" className="section-wrap py-20">
        <div className="section-heading">
          <span>Hizmetlerimiz</span>
          <h2>İhtiyacınıza uygun taşımacılık çözümleri</h2>
          <p>Her yolculuğu güven, konfor ve dakiklik ilkeleriyle planlıyoruz.</p>
        </div>
        <ServiceShowcase />
      </section>

      <section className="journey-section">
        <Image
          src="/images/home/journey-coast.webp"
          alt="Karaaslan Turizm servis aracı İstanbul sahil yolunda"
          fill
          sizes="100vw"
        />
        <div className="journey-overlay" />
        <div className="section-wrap journey-content">
          <p className="eyebrow text-red-400">Her yolculukta güven</p>
          <h2>Deneyimli sürücüler,<br />kontrollü araçlar.</h2>
          <p>İstanbul&apos;un her noktasında planlı, güvenli ve konforlu ulaşım.</p>
        </div>
      </section>

      <section id="filomuz" className="section-wrap py-20">
        <div className="section-heading">
          <span>Filomuz</span>
          <h2>Modern ve konforlu servis araçları</h2>
          <p>Farklı kapasite ihtiyaçlarına uygun, bakımlı ve konforlu araç seçenekleri.</p>
        </div>
        <div className="fleet-grid">
          <article className="fleet-card">
            <div className="fleet-image"><Image src="/images/home/fleet-mercedes.webp" alt="Mercedes Sprinter servis aracı" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">19+1 yolcu</p><h3>Mercedes Sprinter</h3><span>Yüksek konfor ve geniş iç hacim</span></div>
          </article>
          <article className="fleet-card">
            <div className="fleet-image"><Image src="/images/home/fleet-fiat.webp" alt="Fiat Ducato servis aracı" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">16+1 yolcu</p><h3>Fiat Ducato</h3><span>Şehir içi ulaşım için ideal çözüm</span></div>
          </article>
          <article className="fleet-card fleet-card-wide">
            <div className="fleet-image"><Image src="/images/home/fleet-duo.webp" alt="Karaaslan Turizm Mercedes ve Fiat araç filosu" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">Esnek kapasite</p><h3>Kurumsal araç filosu</h3><span>İhtiyacınıza uygun araç ve güzergâh planlaması</span></div>
          </article>
        </div>
      </section>

      <section className="operations-section">
        <div className="section-wrap">
          <div className="operations-heading">
            <div>
              <p className="eyebrow">Sahada Karaaslan</p>
              <h2>Her hizmet için özenli planlama.</h2>
            </div>
            <p>Okul servisinden özel organizasyonlara kadar her operasyonu yolcu profiline ve programınıza göre hazırlıyoruz.</p>
          </div>
          <div className="operations-gallery">
            {gallery.map((item, index) => (
              <article key={item.image} className={index === 0 ? "operations-card operations-card-large" : "operations-card"}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 100vw, 50vw" />
                <div><span>{item.label}</span><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap route-section">
        <div className="route-banner">
          <Image src="/images/home/route-bosphorus.webp" alt="Karaaslan Turizm araçları İstanbul Boğazı güzergâhında" fill sizes="100vw" />
          <div className="route-copy">
            <span>İstanbul&apos;un her noktasına</span>
            <strong>Güvenle yoldayız.</strong>
          </div>
        </div>
      </section>

      <section id="iletisim" className="contact-section">
        <div className="section-wrap">
          <div className="contact-heading">
            <div>
              <p className="eyebrow text-red-400">İletişime geçin</p>
              <h2>Yolculuğunuzu birlikte planlayalım.</h2>
            </div>
            <p>Personel, öğrenci ve etkinlik taşımacılığı için hızlıca teklif alın. Ekibimize katılmak istiyorsanız şoför başvuru formunu doldurun.</p>
          </div>
          <div className="contact-grid">
            <a href="tel:+905011744166" className="contact-card">
              <span>01 / Telefon</span><strong>+90 501 174 41 66</strong><small>Hemen arayın →</small>
            </a>
            <a href="mailto:info@karaaslanturizm.com" className="contact-card">
              <span>02 / E-posta</span><strong>info@karaaslanturizm.com</strong><small>E-posta gönderin →</small>
            </a>
            <a href="https://wa.me/905011744166" className="contact-card contact-card-red">
              <span>03 / WhatsApp</span><strong>Hızlı iletişim</strong><small>Mesaj gönderin →</small>
            </a>
          </div>
          <div className="career-banner">
            <div><span>Kariyer fırsatı</span><h3>Şoför ekibimize katılmak ister misiniz?</h3><p>Bilgilerinizi kısa formumuzla iletin; uygun pozisyonlarda sizinle iletişime geçelim.</p></div>
            <Link href="/sofor-basvuru">Başvuru formunu aç <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
