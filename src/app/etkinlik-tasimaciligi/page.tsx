import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";

export const metadata: Metadata = {
  title: "Etkinlik ve Organizasyon Taşımacılığı",
  description: "Toplantı, fuar, gezi ve organizasyonlara özel Karaaslan Turizm ulaşım çözümleri.",
  alternates: { canonical: "/etkinlik-tasimaciligi" },
};

const sections = [
  {
    title: "Etkinliğe özel planlama",
    description: "Program saati, katılımcı sayısı, lokasyon ve buluşma noktaları değerlendirilerek etkinliğe özel bir ulaşım akışı hazırlanır.",
    items: ["Katılımcı kapasitesi", "Buluşma noktaları", "Varış saatleri", "Dönüş planı"],
  },
  {
    title: "Esnek araç seçenekleri",
    description: "Küçük ekiplerden kalabalık organizasyonlara kadar ihtiyaca uygun araç ve kapasite planlaması yapılır.",
    items: ["Tek araç çözümü", "Çoklu araç koordinasyonu", "VIP ve özel transfer", "Farklı kapasite seçenekleri"],
  },
  {
    title: "Karşılama ve transfer",
    description: "Havalimanı, otel, toplantı noktası veya etkinlik alanı arasındaki transferler program bütünlüğü gözetilerek yönetilir.",
    items: ["Havalimanı karşılama", "Otel transferi", "Fuar ve kongre ulaşımı", "Özel gezi programı"],
  },
  {
    title: "Operasyon koordinasyonu",
    description: "Etkinlik sırasında oluşabilecek program değişikliklerine hızlı yanıt verebilmek için iletişim ve araç koordinasyonu sürdürülür.",
    items: ["Anlık iletişim", "Program değişikliğine uyum", "Araç yönlendirme", "Saha koordinasyonu"],
  },
];

export default function EventTransportationPage() {
  return (
    <ServiceDetail
      eyebrow="Etkinlik hizmeti"
      title="Organizasyonunuza uyum sağlayan ulaşım"
      intro="Toplantı, fuar, kurumsal etkinlik ve özel programlarınız için planlı transfer çözümleri sunuyoruz."
      image="/images/event-service.png"
      imageAlt="Karaaslan Turizm etkinlik taşımacılığı"
      statement="Programın ritmini bozmayan, esnek ve koordineli ulaşım."
      sections={sections}
    />
  );
}
