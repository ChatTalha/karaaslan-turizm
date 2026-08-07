import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Karaaslan Turizm internet sitesi çerez politikası.",
  alternates: { canonical: "/cerez-politikasi" },
};

const sections = [
  {
    title: "Çerez nedir?",
    paragraphs: ["Çerezler, bir internet sitesi ziyaret edildiğinde tarayıcı aracılığıyla cihazda saklanabilen küçük veri dosyalarıdır. Site işlevlerinin çalışması, tercihlerin hatırlanması veya ölçüm yapılması gibi amaçlarla kullanılabilir."],
  },
  {
    title: "Bu sitedeki kullanım",
    paragraphs: ["Karaaslan Turizm internet sitesinde şu anda reklam veya pazarlama amaçlı çerez kullanılmamaktadır. Sitenin güvenli ve teknik olarak düzgün çalışması için barındırma altyapısının kesinlikle gerekli teknik kayıtları oluşabilir."],
  },
  {
    title: "Tercihlerinizi yönetme",
    paragraphs: ["Tarayıcınızın ayarlarından çerezleri görüntüleyebilir, silebilir veya engelleyebilirsiniz. Kesinlikle gerekli teknik verilerin engellenmesi bazı site işlevlerini etkileyebilir. İleride analiz veya pazarlama çerezleri eklenirse, bu politika ve tercih seçenekleri buna göre güncellenecektir."],
  },
];

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Site tercihleri" title="Çerez Politikası" intro="Sitede kullanılan teknik veriler ve ziyaretçi tercihleri hakkında bilgi." sections={sections} />;
}
