import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Karaaslan Turizm kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
};

const sections = [
  {
    title: "Veri sorumlusu",
    paragraphs: ["6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verileriniz, veri sorumlusu sıfatıyla Karaaslan Turizm tarafından aşağıda açıklanan çerçevede işlenebilir."],
  },
  {
    title: "İşlenen veri kategorileri",
    items: ["Kimlik ve iletişim bilgileri", "Teklif veya hizmet talebine ilişkin bilgiler", "Şoför adayları için eğitim, ehliyet, mesleki yeterlilik ve iş deneyimi bilgileri", "Adayın kendi isteğiyle paylaştığı ek açıklamalar", "Site ve bilgi güvenliğine ilişkin teknik kayıtlar"],
  },
  {
    title: "İşleme amaçları ve hukuki sebepler",
    paragraphs: ["Kişisel veriler; iletişim taleplerini sonuçlandırmak, taşımacılık hizmetlerini planlamak, iş başvurularını değerlendirmek, bir hakkın tesisi veya korunması, sözleşme süreçlerinin yürütülmesi ve hukuki yükümlülüklerin yerine getirilmesi amaçlarıyla; KVKK'nın 5 ve gerektiğinde 6'ncı maddelerinde belirtilen işleme şartlarına dayanılarak işlenebilir."],
  },
  {
    title: "Toplama yöntemi ve aktarım",
    paragraphs: ["Veriler; telefon, e-posta, WhatsApp ve internet sitesindeki yönlendirmeler aracılığıyla elektronik ortamda elde edilebilir. Hizmetin veya başvurunun yürütülmesi için gerekli olması hâlinde, yalnızca amaçla sınırlı olarak yetkili kamu kurumlarına, hukuki ve mali danışmanlara ve kullanılan e-posta/iletişim hizmeti sağlayıcılarına aktarılabilir."],
  },
  {
    title: "KVKK kapsamındaki haklarınız",
    items: ["Kişisel verinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme", "İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme", "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme", "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme", "Kanundaki şartlar çerçevesinde silme veya yok etme talep etme", "Münhasıran otomatik sistemler sonucu aleyhinize bir sonuç doğmasına itiraz etme", "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde giderim talep etme"],
  },
  {
    title: "Başvuru yöntemi",
    paragraphs: ["Taleplerinizi kimliğinizi ve talebinizi açıklayan bir mesajla info@karaaslanturizm.com adresine iletebilirsiniz. Başvurular, niteliğine göre yasal süreler içinde değerlendirilir."],
  },
];

export default function KvkkPage() {
  return <LegalPage eyebrow="Kişisel verilerin korunması" title="KVKK Aydınlatma Metni" intro="Kişisel verilerin hangi amaçlarla ve hangi çerçevede işlenebileceğini açıklıyoruz." sections={sections} />;
}
