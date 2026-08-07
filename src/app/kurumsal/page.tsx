import type { Metadata } from "next";
import Image from "next/image";
import { CorporateTabs } from "@/components/sections/corporate-tabs";
import { SiteCta } from "@/components/sections/site-cta";

export const metadata: Metadata = {
  title: "Hakkımızda, Misyon ve Vizyon",
  description: "Karaaslan Turizm hakkında bilgi alın; misyon, vizyon, kalite, çevre, iş güvenliği ve bilgi güvenliği yaklaşımımızı inceleyin.",
  alternates: { canonical: "/kurumsal" },
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
          <p>İnsanı, güvenliği ve zamanı merkeze alan kurumsal ulaşım çözümleri sunuyoruz.</p>
        </div>
      </section>

      <CorporateTabs />

      <SiteCta title="Ulaşım ihtiyaçlarınız için yanınızdayız." />
    </main>
  );
}
