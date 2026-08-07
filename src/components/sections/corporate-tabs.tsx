"use client";

import { useEffect, useState } from "react";

type CorporateTab = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  secondary?: { title: string; text: string };
  note?: string;
};

const tabs: CorporateTab[] = [
  {
    id: "hakkimizda",
    label: "Hakkımızda",
    eyebrow: "Karaaslan Turizm",
    title: "Güvenilir hizmet, zamanında ulaşım.",
    paragraphs: [
      "Karaaslan Turizm, personel servis taşımacılığı alanında güvenilir, planlı ve profesyonel hizmet sunmak amacıyla faaliyet gösteren kurumsal bir ulaşım firmasıdır. Ankara'da yaşadığımız dönemin ardından İstanbul'a taşınarak taşımacılık sektöründe faaliyet göstermeye başladık ve hizmet anlayışımızı güven, disiplin ve sorumluluk ilkeleri üzerine inşa ettik.",
      "Kurumsal firmaların personel ulaşım süreçlerini en verimli şekilde yönetmek için modern araç filomuz, düzenli bakımları yapılan servis araçlarımız ve deneyimli sürücü kadromuz ile hizmet vermekteyiz. Zamanında ulaşım, yolcu güvenliği ve operasyonel süreklilik, çalışmalarımızın temelini oluşturmaktadır.",
      "Müşterilerimizle kurduğumuz her iş birliğini uzun vadeli bir ortaklık olarak görüyor; şeffaf, çözüm odaklı ve sürdürülebilir hizmet anlayışımızla değer üretmeyi hedefliyoruz. Karaaslan Turizm olarak amacımız, yalnızca personel taşımacılığı yapan bir firma olmak değil, işletmelerin güvenle tercih ettiği kurumsal bir çözüm ortağı haline gelmektir.",
    ],
  },
  {
    id: "misyon-vizyon",
    label: "Misyon ve Vizyon",
    eyebrow: "Misyonumuz",
    title: "Kurumsal ulaşım süreçlerine değer katıyoruz.",
    paragraphs: [
      "Karaaslan Turizm olarak misyonumuz; personel servis taşımacılığı alanında güvenli, zamanında ve yüksek standartlarda ulaşım hizmeti sunarak kurumsal müşterilerimizin operasyonel süreçlerine değer katmaktır. Yolcu güvenliğini, hizmet kalitesini ve müşteri memnuniyetini her zaman ön planda tutuyor; disiplinli çalışma anlayışımız, deneyimli kadromuz ve düzenli bakımları yapılan araç filomuz ile sürdürülebilir ve güvenilir taşımacılık çözümleri sunuyoruz.",
    ],
    secondary: {
      title: "Vizyonumuz",
      text: "Vizyonumuz; İstanbul başta olmak üzere Türkiye genelinde kurumsal taşımacılık sektöründe güvenilirliği, hizmet kalitesi ve profesyonel yaklaşımıyla örnek gösterilen öncü firmalardan biri olmaktır. Sürekli gelişen hizmet anlayışımız, güçlü operasyon yapımız ve uzun vadeli iş ortaklıklarımızla sektöre değer katan, saygın ve kalıcı bir marka olmayı hedefliyoruz.",
    },
  },
  {
    id: "cevre",
    label: "Çevre Politikası",
    eyebrow: "Çevre",
    title: "Kaynakları geleceği düşünerek kullanıyoruz.",
    paragraphs: ["Faaliyetlerimizin çevresel etkilerini azaltmayı ve kaynakları verimli kullanmayı hizmet anlayışımızın bir parçası kabul ediyoruz."],
    items: [
      "Çevre mevzuatına uymak ve güncel uygulamaları takip etmek",
      "Faaliyetlerin çevresel etkilerini değerlendirerek riskleri azaltmak",
      "Atıkları kaynağında azaltmak ve uygun yöntemlerle bertarafını sağlamak",
      "Yakıt, enerji ve diğer doğal kaynakların verimli kullanımını teşvik etmek",
      "Çevre performansını düzenli olarak izlemek ve sürekli iyileştirmek",
    ],
  },
  {
    id: "kalite",
    label: "Kalite Politikası",
    eyebrow: "Hizmet standardı",
    title: "Her yolculukta ölçülebilir kalite.",
    paragraphs: ["Müşteri ihtiyaçlarını doğru anlayan, zamanında ve güvenilir hizmet üreten bir kalite yaklaşımını benimsiyoruz."],
    items: [
      "Talepleri güvenlik, kalite, zamanlama ve sürdürülebilir maliyet ilkeleriyle yönetmek",
      "Çalışanların mesleki yetkinliğini ve müşteri bilincini eğitimlerle geliştirmek",
      "Faaliyetleri yasal şartlara uygun, etkin ve ölçülebilir süreçlerle yürütmek",
      "Teknolojiyi takip ederek hizmet ve operasyon verimliliğini sürekli geliştirmek",
    ],
  },
  {
    id: "isg",
    label: "İş Sağlığı ve Güvenliği",
    eyebrow: "Önce güvenlik",
    title: "Güvenli çalışma, güvenli ulaşım.",
    paragraphs: ["Sağlıklı ve güvenli bir çalışma ortamı oluşturmayı tüm faaliyetlerimizin vazgeçilmez şartı olarak görüyoruz."],
    items: [
      "Faaliyetlerde risk değerlendirmesi yaparak tehlikeleri önceden belirlemek",
      "Çalışan ve hizmet ortaklarına düzenli iş sağlığı ve güvenliği eğitimi vermek",
      "Güvenli çalışma yöntemlerini sahada izlemek ve geliştirmek",
      "İş kazalarını ve meslek hastalıklarını önlemeye yönelik proaktif tedbirler almak",
    ],
  },
  {
    id: "bilgi-guvenligi",
    label: "Bilgi Güvenliği",
    eyebrow: "Dijital sorumluluk",
    title: "Bilgiyi dikkatle koruyoruz.",
    paragraphs: ["Müşteri, çalışan ve operasyon bilgilerinin güvenliğini korumak için erişim, saklama ve paylaşım süreçlerinde gerekli idari ve teknik tedbirleri gözetiyoruz."],
    items: [
      "Bilginin gizliliğini, bütünlüğünü ve ihtiyaç anında erişilebilirliğini korumak",
      "Kişisel ve kurumsal verileri yalnızca yetkili kişiler ve tanımlı süreçlerle işlemek",
      "Bilgi varlıklarına yönelik riskleri değerlendirmek ve uygun kontroller uygulamak",
      "Olası ihlallerin hızla bildirilmesi ve müdahale edilmesi için gerekli yapıyı oluşturmak",
      "Çalışanların ve hizmet ortaklarının bilgi güvenliği farkındalığını geliştirmek",
    ],
    note: "Bu metin bir ISO 27001 sertifikası beyanı değildir; Karaaslan Turizm'in bilgi güvenliğine ilişkin kurumsal yaklaşımını açıklar.",
  },
];

export function CorporateTabs() {
  const [activeId, setActiveId] = useState("hakkimizda");

  useEffect(() => {
    const selectFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (tabs.some((tab) => tab.id === hash)) setActiveId(hash);
    };

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  const selectTab = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <section className="corporate-tabs-section" aria-label="Kurumsal bilgiler">
      <div className="section-wrap corporate-tabs-shell">
        <div className="corporate-tab-list" role="tablist" aria-label="Kurumsal başlıklar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active.id === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={active.id === tab.id ? "is-active" : ""}
              onClick={() => selectTab(tab.id)}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <article
          key={active.id}
          id={`panel-${active.id}`}
          className="corporate-tab-card"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
        >
          <p className="eyebrow">{active.eyebrow}</p>
          <h2>{active.title}</h2>
          <div className="corporate-tab-copy">
            {active.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {active.secondary && (
            <section className="corporate-followup-section">
              <h3>{active.secondary.title}</h3>
              <p>{active.secondary.text}</p>
            </section>
          )}
          {active.items && (
            <ul className="corporate-check-list">
              {active.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {active.note && <p className="corporate-tab-note">{active.note}</p>}
        </article>
      </div>
    </section>
  );
}
