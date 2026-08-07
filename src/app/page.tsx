import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServiceShowcase } from "@/components/sections/service-showcase";
import { ContactCards } from "@/components/sections/contact-cards";

export const metadata: Metadata = {
  title: "İstanbul Personel ve Öğrenci Taşımacılığı",
  description:
    "Karaaslan Turizm; İstanbul'da personel servisi, okul taşımacılığı ve etkinlik transferi için güvenli, planlı ve zamanında ulaşım hizmeti sunar.",
  alternates: { canonical: "/" },
};

const strengths = [
  {
    title: "Güvenli Ulaşım",
    description: "Araçlarımız düzenli bakımdan geçer ve yasal gerekliliklere uygundur.",
    icon: "/images/tokens/safe-service.png",
  },
  {
    title: "Zamanında Hizmet",
    description: "Planlanan saatlere bağlı, aksama yaşanmadan hizmet sunuyoruz.",
    icon: "/images/tokens/on-time-service.png",
  },
  {
    title: "Deneyimli Kadro",
    description: "Alanında uzman şoför ve operasyon ekibimizle yanınızdayız.",
    icon: "/images/tokens/experienced-team.png",
  },
  {
    title: "Şehir İçi Hizmet",
    description: "İstanbul şehir içi taşımacılık ihtiyaçlarına özel çözümler üretiyoruz.",
    icon: "/images/tokens/city-service.png",
  },
];

const gallery = [
  {
    image: "/images/personnel/personnel-boarding.png",
    label: "Personel taşımacılığı",
    title: "Vardiya ve mesai saatlerine planlı ulaşım",
  },
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
        <div className="section-wrap home-about-panel">
          <div className="home-about-visual">
            <Image
              src="/images/home/about-company-team.png"
              alt="Karaaslan Turizm ekibi, servis araçları ve şirket binası"
              fill
              sizes="(max-width: 720px) calc(100vw - 28px), 1180px"
            />
          </div>
          <div className="home-about-shade" />
          <div className="home-about-copy">
            <p className="eyebrow">Hakkımızda</p>
            <h2>Kurumların güvenle tercih ettiği ulaşım ortağı.</h2>
            <p>
              Karaaslan Turizm, personel servis taşımacılığı alanında güvenilir,
              planlı ve profesyonel hizmet sunmak amacıyla faaliyet gösteren
              kurumsal bir ulaşım firmasıdır. Ankara&apos;da yaşadığımız dönemin
              ardından İstanbul&apos;a taşınarak taşımacılık sektöründe faaliyet
              göstermeye başladık ve hizmet anlayışımızı güven, disiplin ve
              sorumluluk ilkeleri üzerine inşa ettik.
            </p>
            <p>
              Kurumsal firmaların personel ulaşım süreçlerini en verimli şekilde
              yönetmek için modern araç filomuz, düzenli bakımları yapılan servis
              araçlarımız ve deneyimli sürücü kadromuz ile hizmet vermekteyiz.
              Zamanında ulaşım, yolcu güvenliği ve operasyonel süreklilik,
              çalışmalarımızın temelini oluşturmaktadır.
            </p>
            <p>
              Müşterilerimizle kurduğumuz her iş birliğini uzun vadeli bir ortaklık
              olarak görüyor; şeffaf, çözüm odaklı ve sürdürülebilir hizmet
              anlayışımızla değer üretmeyi hedefliyoruz. Karaaslan Turizm olarak
              amacımız, yalnızca personel taşımacılığı yapan bir firma olmak değil,
              işletmelerin güvenle tercih ettiği kurumsal bir çözüm ortağı haline
              gelmektir.
            </p>
            <div className="home-about-actions">
              <Link href="/kurumsal" className="button-primary">Bizi tanıyın</Link>
              <span>Güvenilir hizmet<br />Zamanında ulaşım</span>
            </div>
          </div>
        </div>

        <div className="section-wrap home-strengths">
          {strengths.map(({ title, description, icon }) => (
            <article key={title}>
              <span className="strength-token" aria-hidden="true">
                <Image src={icon} alt="" fill sizes="196px" />
              </span>
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
          <Link href="/filomuz#mercedes-sprinter" className="fleet-card">
            <div className="fleet-image"><Image src="/images/home/fleet-mercedes.webp" alt="Mercedes Sprinter servis aracı" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">19+1 yolcu</p><h3>Mercedes Sprinter</h3><span>Yüksek konfor ve geniş iç hacim</span></div>
          </Link>
          <Link href="/filomuz#fiat-ducato" className="fleet-card">
            <div className="fleet-image"><Image src="/images/home/fleet-fiat.webp" alt="Fiat Ducato servis aracı" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">16+1 yolcu</p><h3>Fiat Ducato</h3><span>Şehir içi ulaşım için ideal çözüm</span></div>
          </Link>
          <Link href="/filomuz" className="fleet-card fleet-card-wide">
            <div className="fleet-image"><Image src="/images/home/fleet-duo.webp" alt="Karaaslan Turizm Mercedes ve Fiat araç filosu" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
            <div className="fleet-copy"><p className="eyebrow">Esnek kapasite</p><h3>Kurumsal araç filosu</h3><span>İhtiyacınıza uygun araç ve güzergâh planlaması</span></div>
          </Link>
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
          <ContactCards />
          <div className="career-banner">
            <div><span>Kariyer fırsatı</span><h3>Şoför ekibimize katılmak ister misiniz?</h3><p>Bilgilerinizi kısa formumuzla iletin; uygun pozisyonlarda sizinle iletişime geçelim.</p></div>
            <Link href="/sofor-basvuru">Başvuru formunu aç <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
