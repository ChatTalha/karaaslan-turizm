import type { Metadata } from "next";
import Image from "next/image";
import { DriverApplicationForm } from "@/components/forms/driver-application-form";

export const metadata: Metadata = {
  title: "Şoför Başvurusu",
  description: "Karaaslan Turizm şoför iş başvuru formu.",
  alternates: { canonical: "/sofor-basvuru" },
};

export default function DriverApplicationPage() {
  return (
    <main>
      <section className="application-hero">
        <Image src="/images/safe-driving.png" alt="Karaaslan Turizm şoför başvurusu" fill priority sizes="100vw" />
        <div className="application-hero-overlay" />
        <div className="section-wrap application-hero-content">
          <p className="eyebrow text-red-400">Kariyer</p>
          <h1>Güvenli yolculukların ekibine katılın.</h1>
          <p>Deneyiminizi ve iletişim bilgilerinizi paylaşın, uygun pozisyonlarda sizinle iletişime geçelim.</p>
        </div>
      </section>

      <section className="application-section">
        <div className="section-wrap application-layout">
          <aside>
            <p className="eyebrow">Şoför başvurusu</p>
            <h2>Başvuru bilgileri</h2>
            <p>Yıldız (*) ile işaretli alanların doldurulması zorunludur. Form gönderildiğinde WhatsApp açılır ve başvurunu son kez kontrol edebilirsin.</p>
            <div className="application-aside-note">
              <strong>Aranan yaklaşım</strong>
              <span>Güvenli sürüş, güçlü iletişim, düzenli çalışma ve yolcu memnuniyeti.</span>
            </div>
          </aside>
          <DriverApplicationForm />
        </div>
      </section>
    </main>
  );
}
