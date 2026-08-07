import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Site Kullanım Koşulları",
  description: "Karaaslan Turizm internet sitesi kullanım koşulları.",
  alternates: { canonical: "/site-kullanim-kosullari" },
};

const sections = [
  {
    title: "Kapsam",
    paragraphs: ["Bu internet sitesini kullanan ziyaretçiler aşağıdaki koşulları kabul etmiş sayılır. Site, Karaaslan Turizm'in hizmetleri ve iletişim kanalları hakkında genel bilgi sunar."],
  },
  {
    title: "Bilgilerin niteliği",
    paragraphs: ["Sitedeki açıklamalar genel bilgilendirme amaçlıdır ve tek başına bağlayıcı bir teklif veya sözleşme oluşturmaz. Hizmet kapsamı, araç kapasitesi, güzergâh, fiyat ve çalışma şartları taraflar arasında ayrıca teyit edilir."],
  },
  {
    title: "Fikri haklar",
    paragraphs: ["Sitedeki Karaaslan Turizm markası, metinler, tasarımlar ve görseller ilgili hak sahiplerine aittir. Yazılı izin olmadan ticari amaçla çoğaltılamaz, yayımlanamaz veya yanıltıcı biçimde kullanılamaz."],
  },
  {
    title: "Bağlantılar ve sorumluluk",
    paragraphs: ["Sosyal medya ve iletişim hizmetleri gibi üçüncü taraf bağlantıları kendi koşullarına tabidir. Karaaslan Turizm, makul güvenlik ve güncellik önlemlerini almakla birlikte kesintisiz erişim veya üçüncü taraf hizmetlerinin işleyişi konusunda garanti vermez."],
  },
  {
    title: "Değişiklikler",
    paragraphs: ["Site içeriği ve bu koşullar ihtiyaç hâlinde güncellenebilir. Güncel metin yayımlandığı tarihten itibaren geçerli olur."],
  },
];

export default function TermsPage() {
  return <LegalPage eyebrow="Yasal bilgilendirme" title="Site Kullanım Koşulları" intro="Karaaslan Turizm internet sitesini kullanırken geçerli olan temel esaslar." sections={sections} />;
}
