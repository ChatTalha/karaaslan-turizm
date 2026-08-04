import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";

export const metadata: Metadata = {
  title: "Okul Taşımacılığı",
  description: "Karaaslan Turizm güvenli ve planlı okul servisi taşımacılığı hizmetleri.",
};

const sections = [
  {
    title: "Öğrenci güvenliği",
    description: "Her yolculukta öğrencilerin yaşına ve ihtiyaçlarına uygun, dikkatli ve sorumlu bir hizmet yaklaşımı benimseriz.",
    items: ["Kontrollü iniş ve biniş", "Emniyet donanımı kontrolleri", "Güvenli sürüş yaklaşımı", "Acil durum farkındalığı"],
  },
  {
    title: "Planlı güzergâh",
    description: "Okul giriş-çıkış saatleri ve öğrenci durakları dikkate alınarak güvenli, anlaşılır ve verimli rotalar oluşturulur.",
    items: ["Durak planlaması", "Zaman çizelgesi", "Trafik koşullarına uyum", "Alternatif güzergâh hazırlığı"],
  },
  {
    title: "Sürücü standartları",
    description: "Sürücülerin gerekli mesleki yeterlilikleri, iletişim yaklaşımı ve güvenli sürüş alışkanlıkları hizmet standardımızın parçasıdır.",
    items: ["Yasal belge kontrolleri", "Öğrenci iletişimi", "Kılık ve davranış standardı", "Periyodik değerlendirme"],
  },
  {
    title: "Veli ve okul iletişimi",
    description: "Servis sürecindeki değişikliklerin ilgili kişilerle zamanında paylaşılmasını ve ulaşılabilir bir iletişim düzeni kurulmasını önemseriz.",
    items: ["Güncel iletişim bilgileri", "Değişiklik bilgilendirmesi", "Hızlı geri dönüş", "Operasyon desteği"],
  },
];

export default function SchoolTransportationPage() {
  return (
    <ServiceDetail
      eyebrow="Okul taşımacılığı"
      title="Öğrenciler için güvenli ve özenli yolculuk"
      intro="Ev ile okul arasındaki her yolculuğu güvenlik, düzen ve iletişim ilkeleriyle planlıyoruz."
      image="/images/student-service.png"
      imageAlt="Karaaslan Turizm okul taşımacılığı"
      statement="Çocukların güvenini, ailelerin iç huzurunu önemsiyoruz."
      sections={sections}
    />
  );
}
