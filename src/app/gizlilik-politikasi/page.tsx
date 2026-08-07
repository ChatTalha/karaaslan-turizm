import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Karaaslan Turizm internet sitesi gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

const sections = [
  {
    title: "Gizliliğe yaklaşımımız",
    paragraphs: ["Karaaslan Turizm, ziyaretçilerin ve bizimle iletişime geçen kişilerin özel hayatına ve kişisel verilerinin korunmasına önem verir. Bu politika, internet sitemizi kullanırken hangi bilgilerin hangi amaçlarla ele alınabileceğini açıklar."],
  },
  {
    title: "Toplanabilecek bilgiler",
    items: ["İletişim amacıyla paylaşılan ad, telefon ve e-posta bilgileri", "Şoför başvuru formunda aday tarafından yazılan kimlik, iletişim, eğitim ve mesleki deneyim bilgileri", "Site güvenliği için sunucu tarafından teknik olarak oluşturulabilecek bağlantı ve hata kayıtları"],
  },
  {
    title: "Bilgileri neden kullanıyoruz?",
    items: ["Teklif ve hizmet taleplerine yanıt vermek", "Şoför adaylarının başvurularını değerlendirmek", "İletişim ve operasyon süreçlerini yürütmek", "Yasal yükümlülükleri yerine getirmek ve site güvenliğini sağlamak"],
  },
  {
    title: "Saklama ve güvenlik",
    paragraphs: ["Bilgiler yalnızca ilgili iletişim veya başvuru sürecinin gerektirdiği süre ve yürürlükteki mevzuatta öngörülen süreler boyunca tutulur. Yetkisiz erişim, kayıp veya kötüye kullanıma karşı uygun idari ve teknik tedbirlerin uygulanması hedeflenir."],
  },
  {
    title: "İletişim",
    paragraphs: ["Gizlilik uygulamalarımızla ilgili sorularınızı info@karaaslanturizm.com adresine iletebilirsiniz."],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Yasal bilgilendirme" title="Gizlilik Politikası" intro="Bilgilerinize saygı duyuyor, kullanım biçimimizi açık ve anlaşılır şekilde anlatıyoruz." sections={sections} />;
}
