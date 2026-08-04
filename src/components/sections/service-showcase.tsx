"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    slug: "personel",
    href: "/personel-tasimaciligi",
    image: "/images/personnel-service.png",
    title: "Personel Taşımacılığı",
    short: "Çalışanlarınız için güvenli, konforlu ve zamanında ulaşım.",
    description:
      "İşletmenizin çalışma saatleri, personel yoğunluğu ve güzergâh ihtiyaçlarına uygun servis planı hazırlıyoruz. Eğitimli sürücüler, düzenli araç kontrolleri ve operasyon takibiyle ulaşım sürecini güvenle yönetiyoruz.",
    features: ["Güzergâh planlama", "Düzenli araç denetimi", "Zaman odaklı operasyon", "Kurumsal raporlama"],
  },
  {
    number: "02",
    slug: "okul",
    href: "/okul-tasimaciligi",
    image: "/images/student-service.png",
    title: "Okul Taşımacılığı",
    short: "Öğrenciler için dikkatli, planlı ve güven veren servis hizmeti.",
    description:
      "Öğrencilerin ev ve okul arasındaki yolculuğunu yaş grubuna uygun iletişim, kontrollü güzergâh ve güvenlik öncelikli hizmet anlayışıyla planlıyoruz.",
    features: ["Güvenli iniş-biniş", "Planlı okul güzergâhları", "Sürücü uygunluk kontrolleri", "Veli iletişimi"],
  },
  {
    number: "03",
    slug: "etkinlik",
    href: "/etkinlik-tasimaciligi",
    image: "/images/event-service.png",
    title: "Etkinlik Hizmeti",
    short: "Toplantı, fuar ve organizasyonlara özel ulaşım planlaması.",
    description:
      "Katılımcı sayısı, etkinlik programı ve buluşma noktalarına göre esnek ulaşım çözümleri oluşturuyoruz. Tek araçtan çoklu araç koordinasyonuna kadar tüm süreci planlıyoruz.",
    features: ["Etkinliğe özel plan", "Tek veya çoklu araç", "Karşılama ve transfer", "Operasyon koordinasyonu"],
  },
];

export function ServiceShowcase() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeService = services.find((service) => service.slug === activeSlug);

  useEffect(() => {
    if (!activeService) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSlug(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeService]);

  return (
    <>
      <div className="service-tabs" role="list" aria-label="Taşımacılık hizmetleri">
        {services.map((service) => (
          <article key={service.slug} className="service-card" role="listitem">
            <div className="service-image">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              <span className="service-badge">{service.number}</span>
            </div>
            <div className="service-content">
              <p className="service-kicker">Karaaslan Turizm</p>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <button type="button" onClick={() => setActiveSlug(service.slug)} aria-haspopup="dialog">
                Hızlı incele <span aria-hidden="true">+</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeService ? (
        <div className="service-modal-layer" role="presentation">
          <button className="service-modal-backdrop" type="button" onClick={() => setActiveSlug(null)} aria-label="Pencereyi kapat" />
          <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
            <button className="service-modal-close" type="button" onClick={() => setActiveSlug(null)} aria-label="Pencereyi kapat">×</button>
            <div className="service-modal-image">
              <Image src={activeService.image} alt="" fill sizes="(max-width: 768px) 100vw, 46vw" />
            </div>
            <div className="service-modal-copy">
              <span>{activeService.number} / Hizmetlerimiz</span>
              <h2 id="service-modal-title">{activeService.title}</h2>
              <p>{activeService.description}</p>
              <ul>
                {activeService.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="service-modal-actions">
                <Link href={activeService.href}>Tüm detayları görün</Link>
                <Link href="/#iletisim" onClick={() => setActiveSlug(null)}>Teklif alın</Link>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
