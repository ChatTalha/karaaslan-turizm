"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuGroups = [
  {
    label: "Kurumsal",
    eyebrow: "Karaaslan'ı tanıyın",
    links: [
      ["Hakkımızda", "/kurumsal#hakkimizda"],
      ["Misyon ve Vizyon", "/kurumsal#misyon-vizyon"],
      ["Çevre Politikası", "/kurumsal#cevre"],
      ["Kalite Politikası", "/kurumsal#kalite"],
      ["İş Sağlığı ve Güvenliği", "/kurumsal#isg"],
      ["Bilgi Güvenliği", "/kurumsal#bilgi-guvenligi"],
    ],
  },
  {
    label: "Hizmetler",
    eyebrow: "Ulaşım çözümleri",
    links: [
      ["Personel Taşımacılığı", "/personel-tasimaciligi"],
      ["Okul Taşımacılığı", "/okul-tasimaciligi"],
      ["Etkinlik Hizmeti", "/etkinlik-tasimaciligi"],
    ],
  },
  {
    label: "Filomuz",
    eyebrow: "Modern araçlar",
    links: [
      ["Mercedes Sprinter 19+1", "/#filomuz"],
      ["Fiat Ducato 16+1", "/#filomuz"],
      ["Tüm araçları inceleyin", "/#filomuz"],
    ],
  },
  {
    label: "İletişim",
    eyebrow: "Bize ulaşın",
    links: [
      ["Teklif ve iletişim", "/#iletisim"],
      ["Şoför başvurusu", "/sofor-basvuru"],
      ["WhatsApp", "https://wa.me/905011744166"],
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="section-wrap header-inner">
        <Link href="/" aria-label="Karaaslan Turizm ana sayfa" className="logo-window" onClick={closeMobile}>
          <Image src="/karaaslan-logo.jpeg" alt="Karaaslan Turizm" width={1536} height={1024} priority />
        </Link>

        <nav aria-label="Ana menü" className="desktop-nav">
          <Link href="/" className="desktop-home">Ana Sayfa</Link>
          {menuGroups.map((group) => (
            <details key={group.label} className="mega-item">
              <summary>{group.label}<span aria-hidden="true">⌄</span></summary>
              <div className="mega-panel">
                <div className="mega-intro">
                  <span>{group.eyebrow}</span>
                  <strong>{group.label}</strong>
                </div>
                <div className="mega-links">
                  {group.links.map(([label, href], index) => (
                    <Link key={`${label}-${href}`} href={href} onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
                      <span>0{index + 1}</span>{label}<b aria-hidden="true">→</b>
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </nav>

        <a href="tel:+905011744166" className="header-call">
          <span>Bizi arayın</span>
          <strong>+90 501 174 41 66</strong>
        </a>
        <button
          type="button"
          className={`menu-toggle ${mobileOpen ? "is-open" : ""}`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span /><span /><span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-navigation ${mobileOpen ? "is-open" : ""}`}>
        <div className="section-wrap mobile-navigation-inner">
          <Link href="/" onClick={closeMobile} className="mobile-home">Ana Sayfa</Link>
          {menuGroups.map((group) => (
            <details key={group.label} className="mobile-group">
              <summary>{group.label}<span aria-hidden="true">+</span></summary>
              <div>
                {group.links.map(([label, href]) => (
                  <Link key={`${label}-${href}`} href={href} onClick={closeMobile}>{label}<span aria-hidden="true">→</span></Link>
                ))}
              </div>
            </details>
          ))}
          <div className="mobile-quick-actions">
            <a href="tel:+905011744166">Hemen arayın</a>
            <Link href="/sofor-basvuru" onClick={closeMobile}>Şoför başvurusu</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
