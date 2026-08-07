import type { Metadata } from "next";
import Image from "next/image";
import { SiteCta } from "@/components/sections/site-cta";

export const metadata: Metadata = {
  title: "Araç Filomuz",
  description: "Karaaslan Turizm Mercedes Sprinter ve Fiat Ducato servis araçlarını, kapasite ve konfor özelliklerini inceleyin.",
  alternates: { canonical: "/filomuz" },
};

const vehicles = [
  {
    id: "mercedes-sprinter",
    eyebrow: "19+1 yolcu",
    title: "Mercedes Sprinter",
    image: "/images/home/fleet-mercedes.webp",
    text: "Geniş iç hacmi, ferah yolcu alanı ve uzun güzergâhlarda sunduğu konforla personel ve kurumsal transfer operasyonlarında güçlü bir seçenektir.",
    items: ["Düzenli bakım ve güvenlik kontrolü", "Konforlu koltuk düzeni", "Geniş bagaj ve yolcu alanı", "Şehir içi ve uzun güzergâh kullanımı"],
  },
  {
    id: "fiat-ducato",
    eyebrow: "16+1 yolcu",
    title: "Fiat Ducato",
    image: "/images/home/fleet-fiat.webp",
    text: "Şehir içi personel ve öğrenci taşımacılığında çevik kullanım, uygun kapasite ve rahat bir yolculuk deneyimi sunar.",
    items: ["Planlı periyodik bakım", "Temiz ve düzenli kabin", "Şehir içi güzergâhlara uygun yapı", "Personel, okul ve etkinlik kullanımı"],
  },
];

export default function FleetPage() {
  return (
    <main>
      <section className="fleet-page-hero">
        <Image src="/images/home/fleet-duo.webp" alt="Karaaslan Turizm araç filosu" fill priority sizes="100vw" />
        <div className="fleet-page-overlay" />
        <div className="section-wrap fleet-page-hero-copy">
          <p className="eyebrow text-red-400">Filomuz</p>
          <h1>Her güzergâha uygun, bakımlı ve konforlu araçlar.</h1>
          <p>Operasyon ihtiyacına göre doğru kapasiteyi seçiyor; araçlarımızı temizlik, bakım ve güvenlik kontrolleriyle hizmete hazırlıyoruz.</p>
        </div>
      </section>

      <section className="section-wrap fleet-vehicle-list">
        {vehicles.map((vehicle, index) => (
          <article id={vehicle.id} className="fleet-vehicle" key={vehicle.id}>
            <div className="fleet-vehicle-image">
              <Image src={vehicle.image} alt={`${vehicle.title} servis aracı`} fill sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
            <div className="fleet-vehicle-copy">
              <span>0{index + 1} / {vehicle.eyebrow}</span>
              <h2>{vehicle.title}</h2>
              <p>{vehicle.text}</p>
              <ul>{vehicle.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>

      <section className="fleet-interior-section">
        <div className="section-wrap">
          <div className="section-heading fleet-interior-heading">
            <span>İç mekân</span>
            <h2>Temiz, ferah ve yolculuğa hazır.</h2>
            <p>Araç içlerini düzenli olarak kontrol ediyor; koltuk, zemin ve sürücü alanının temizliğini hizmet standardımızın parçası kabul ediyoruz.</p>
          </div>
          <div className="fleet-interior-gallery">
            <figure className="fleet-interior-main">
              <Image src="/images/fleet-interior-clean.png" alt="Temiz ve düzenli servis aracı yolcu kabini" fill sizes="(max-width: 900px) 100vw, 66vw" />
              <figcaption>Yolcu kabini</figcaption>
            </figure>
            <figure>
              <Image src="/images/home/about-driver.webp" alt="Servis aracı sürücü kabini" fill sizes="(max-width: 900px) 100vw, 34vw" />
              <figcaption>Sürücü alanı</figcaption>
            </figure>
            <figure>
              <Image src="/images/safe-driving.png" alt="Kontrollü ve güvenli sürüş" fill sizes="(max-width: 900px) 100vw, 34vw" />
              <figcaption>Güvenli sürüş</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <SiteCta title="İhtiyacınıza uygun aracı birlikte seçelim." />
    </main>
  );
}
