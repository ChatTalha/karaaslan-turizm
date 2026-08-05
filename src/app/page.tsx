import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { ServiceShowcase } from "@/components/sections/service-showcase";

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
        <ServiceShowcase />
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
              2025 yılında kurulan Karaaslan Turizm; personel, öğrenci ve
              organizasyon taşımacılığında güvenli, planlı ve konforlu çözümler
              sunmak üzere yola çıktı. Genç ve dinamik yapımızla hizmet ağımızı
              kontrollü biçimde büyütüyoruz.
            </p>
            <Link href="/kurumsal" className="button-primary mt-7">Bizi tanıyın</Link>
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
