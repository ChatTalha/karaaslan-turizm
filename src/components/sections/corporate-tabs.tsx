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
    title: "Yeni bir firma, uzun soluklu bir yolculuk.",
    paragraphs: [
      "Karaaslan Turizm, İstanbul'da personel, öğrenci ve organizasyon taşımacılığı alanlarında güvenilir çözümler sunmak amacıyla 2025 yılında kuruldu. Trafiğin yoğun olduğu bir şehirde zamanın değerini biliyor; yolcuları işlerine, okullarına ve sevdiklerine güvenle ulaştırmayı temel sorumluluğumuz olarak görüyoruz.",
      "Genç ve dinamik yapımızı, planlı operasyon ve güçlü iletişimle destekliyoruz. Araç filomuzu ve hizmet ağımızı ihtiyaçlara göre kontrollü biçimde büyütürken her yeni yolculukta kalite standardımızı yükseltmeyi hedefliyoruz.",
      "Müşterilerimizin beklentilerini dinleyen, değişen koşullara hızla uyum sağlayan ve uzun vadeli iş ortaklıkları kuran bir ulaşım markası olmak için çalışıyoruz.",
    ],
  },
  {
    id: "misyon-vizyon",
    label: "Misyon ve Vizyon",
    eyebrow: "Rotamız",
    title: "Güvenle büyüyen bir ulaşım markası.",
    paragraphs: [
      "Kendimizi sürekli yenileyerek müşteri memnuniyetini ve yolcu güvenliğini en önemli hedef olarak görmek; ulaşımda kaliteyi, dakikliği ve güveni bir arada sunarken kontrollü büyümek ve istihdama katkı sağlamaktır.",
    ],
    secondary: {
      title: "Vizyonumuz",
      text: "Ulaşım hizmetlerinde örnek gösterilen, teknolojiyi etkin kullanan ve müşteri beklentilerinin üzerinde çözümler üreten bir marka olmak; hizmet ağımızı önce Türkiye'de, ardından uluslararası pazarlarda sürdürülebilir biçimde genişletmektir.",
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
            <div className="corporate-secondary-card">
              <span>02</span>
              <div><h3>{active.secondary.title}</h3><p>{active.secondary.text}</p></div>
            </div>
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
