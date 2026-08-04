import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CorporateTabs } from "@/components/sections/corporate-tabs";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: "Karaaslan Turizm hakkında, misyon, vizyon ve hizmet politikalarımız.",
};

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

      <CorporateTabs />

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
